console.clear();

function createCollection(name) {
  const collection = figma.variables.createVariableCollection(name);
  const modeId = collection.modes[0].modeId;
  return { collection, modeId };
}

function createToken(collection, modeId, type, name, value) {
  const token = figma.variables.createVariable(name, collection.id, type);
  token.setValueForMode(modeId, value);
  return token;
}

function createVariable(collection, modeId, key, valueKey, tokens) {
  const token = tokens[valueKey];
  return createToken(collection, modeId, token.resolvedType, key, {
    type: "VARIABLE_ALIAS",
    id: `${token.id}`,
  });
}

function importJSONFile({ fileName, body }) {
  const json = JSON.parse(body);
  const { collection, modeId } = createCollection(fileName);
  const aliases = {};
  const tokens = {};
  Object.entries(json).forEach(([key, object]) => {
    traverseToken({
      collection,
      modeId,
      type: json.$type,
      key,
      object,
      tokens,
      aliases,
    });
  });
  processAliases({ collection, modeId, aliases, tokens });
}

function processAliases({ collection, modeId, aliases, tokens }) {
  aliases = Object.values(aliases);
  let generations = aliases.length;
  while (aliases.length && generations > 0) {
    for (let i = 0; i < aliases.length; i++) {
      const { key, type, valueKey } = aliases[i];
      const token = tokens[valueKey];
      if (token) {
        aliases.splice(i, 1);
        tokens[key] = createVariable(collection, modeId, key, valueKey, tokens);
      }
    }
    generations--;
  }
}

function isAlias(value) {
  return value.toString().trim().charAt(0) === "{";
}

function traverseToken({
  collection,
  modeId,
  type,
  key,
  object,
  tokens,
  aliases,
}) {
  type = type || object.$type;
  // if key is a meta field, move on
  if (key.charAt(0) === "$") {
    return;
  }
  if (object.$value !== undefined) {
    if (isAlias(object.$value)) {
      const valueKey = object.$value
        .trim()
        .replace(/\./g, "/")
        .replace(/[\{\}]/g, "");
      if (tokens[valueKey]) {
        tokens[key] = createVariable(collection, modeId, key, valueKey, tokens);
      } else {
        aliases[key] = {
          key,
          type,
          valueKey,
        };
      }
    } else if (type === "color") {
      tokens[key] = createToken(
        collection,
        modeId,
        "COLOR",
        key,
        parseColor(object.$value)
      );
    } else if (type === "number") {
      tokens[key] = createToken(
        collection,
        modeId,
        "FLOAT",
        key,
        object.$value
      );
    } else {
      console.log("unsupported type", type, object);
    }
  } else {
    Object.entries(object).forEach(([key2, object2]) => {
      if (key2.charAt(0) !== "$") {
        traverseToken({
          collection,
          modeId,
          type,
          key: `${key}/${key2}`,
          object: object2,
          tokens,
          aliases,
        });
      }
    });
  }
}

function processCollection({ name, modes, variableIds }) {
  const files = [];
  modes.forEach((mode) => {
    const file = { fileName: `${name}.${mode.name}.tokens.json`, body: {} };
    variableIds.forEach((variableId) => {
      const { name, resolvedType, valuesByMode } =
        figma.variables.getVariableById(variableId);
      const value = valuesByMode[mode.modeId];
      if (value !== undefined && ["COLOR", "FLOAT"].includes(resolvedType)) {
        let obj = file.body;
        name.split("/").forEach((groupName) => {
          obj[groupName] = obj[groupName] || {};
          obj = obj[groupName];
        });
        obj.$type = resolvedType === "COLOR" ? "color" : "number";
        if (value.type === "VARIABLE_ALIAS") {
          obj.$value = `{${figma.variables
            .getVariableById(value.id)
            .name.replace(/\//g, ".")}}`;
        } else {
          obj.$value = resolvedType === "COLOR" ? rgbToHex(value) : value;
        }
      }
    });
    files.push(file);
  });
  return files;
}

figma.ui.onmessage = (e) => {
  console.log("code received message", e);
  if (e.type === "IMPORT") {
    const { fileName, body } = e;
    importJSONFile({ fileName, body });
  }
  
  if (e.type === "APPLYVARIABLE") {
    const node = figma.currentPage.selection[0];

    if (node && node.mainComponent) {

      const collectionAId = "ID da Collection A";
      const collectionBId = figma.variables.getLocalVariableCollections().find(Collection => Collection.name === "Ligero");
      console.log(collectionBId)
    }
  }
};

figma.showUI(__html__, {
  width: 260,
  height: 300,
  themeColors: true,
});

const localCollections = figma.variables.getLocalVariableCollections();
if(localCollections.length > 0) {
  localCollections.forEach(element => {
    if(element.name === "Ligero") {
      figma.ui.postMessage({ type: 'HASLIGERO', value: true });
    } else {
      figma.ui.postMessage({ type: 'HASLIGERO', value: false });
    }
  });
} else {
  figma.ui.postMessage({ type: 'HASLIGERO', value: false });
}







// *********** Utility *********** //
function rgbToHex({ r, g, b, a }) {
  if (a !== 1) {
    return `rgba(${[r, g, b]
      .map((n) => Math.round(n * 255))
      .join(", ")}, ${a.toFixed(4)})`;
  }
  const toHex = (value) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hex = [toHex(r), toHex(g), toHex(b)].join("");
  return `#${hex}`;
}

function parseColor(color) {
  color = color.trim();
  const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
  const rgbaRegex =
    /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([\d.]+)\s*\)$/;
  const hslRegex = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
  const hslaRegex =
    /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([\d.]+)\s*\)$/;
  const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
  const floatRgbRegex =
    /^\{\s*r:\s*[\d\.]+,\s*g:\s*[\d\.]+,\s*b:\s*[\d\.]+(,\s*opacity:\s*[\d\.]+)?\s*\}$/;

  if (rgbRegex.test(color)) {
    const [, r, g, b] = color.match(rgbRegex);
    return { r: parseInt(r) / 255, g: parseInt(g) / 255, b: parseInt(b) / 255 };
  } else if (rgbaRegex.test(color)) {
    const [, r, g, b, a] = color.match(rgbaRegex);
    return {
      r: parseInt(r) / 255,
      g: parseInt(g) / 255,
      b: parseInt(b) / 255,
      a: parseFloat(a),
    };
  } else if (hslRegex.test(color)) {
    const [, h, s, l] = color.match(hslRegex);
    return hslToRgbFloat(parseInt(h), parseInt(s) / 100, parseInt(l) / 100);
  } else if (hslaRegex.test(color)) {
    const [, h, s, l, a] = color.match(hslaRegex);
    return Object.assign(
      hslToRgbFloat(parseInt(h), parseInt(s) / 100, parseInt(l) / 100),
      { a: parseFloat(a) }
    );
  } else if (hexRegex.test(color)) {
    const hexValue = color.substring(1);
    const expandedHex =
      hexValue.length === 3
        ? hexValue
            .split("")
            .map((char) => char + char)
            .join("")
        : hexValue;
    return {
      r: parseInt(expandedHex.slice(0, 2), 16) / 255,
      g: parseInt(expandedHex.slice(2, 4), 16) / 255,
      b: parseInt(expandedHex.slice(4, 6), 16) / 255,
    };
  } else if (floatRgbRegex.test(color)) {
    return JSON.parse(color);
  } else {
    throw new Error("Invalid color format");
  }
}

function hslToRgbFloat(h, s, l) {
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  if (s === 0) {
    return { r: l, g: l, b: l };
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, (h + 1 / 3) % 1);
  const g = hue2rgb(p, q, h % 1);
  const b = hue2rgb(p, q, (h - 1 / 3) % 1);

  return { r, g, b };
}
// *********** Utility *********** //







// *********** PaintStyle *********** //
const paintStylesArray = [
  {
      "name": "Brand-Colors/brand-primary",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.8705882430076599,
                  "g": 0.20392157137393951,
                  "b": 0.2862745225429535
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:6"
                  }
              }
          }
      ]
  },
  {
      "name": "Brand-Colors/brand-primary-dark",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.5686274766921997,
                  "g": 0,
                  "b": 0.07058823853731155
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:7"
                  }
              }
          }
      ]
  },
  {
      "name": "Brand-Colors/brand-primary-light",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.9800000190734863,
                  "g": 0.2842000126838684,
                  "b": 0.2842000126838684
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:8"
                  }
              }
          }
      ]
  },
  {
      "name": "Brand-Colors/brand-secondary",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.3333333432674408,
                  "g": 0.729411780834198,
                  "b": 0.7372549176216125
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:10"
                  }
              }
          }
      ]
  },
  {
      "name": "Brand-Colors/brand-secondary-dark",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0,
                  "g": 0.4902913570404053,
                  "b": 0.5
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:11"
                  }
              }
          }
      ]
  },
  {
      "name": "Brand-Colors/brand-secondary-light",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.41999998688697815,
                  "g": 0.831844687461853,
                  "b": 0.8399999737739563
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:12"
                  }
              }
          }
      ]
  },
  {
      "name": "Feedback/success-color",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.09803921729326248,
                  "g": 0.501960813999176,
                  "b": 0.2705882489681244
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:13"
                  }
              }
          }
      ]
  },
  {
      "name": "Feedback/error-color",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.8460404872894287,
                  "g": 0.09614098817110062,
                  "b": 0.08460408449172974
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:14"
                  }
              }
          }
      ]
  },
  {
      "name": "Feedback/warning-color",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.9686274528503418,
                  "g": 0.7303529381752014,
                  "b": 0.11764705181121826
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:15"
                  }
              }
          }
      ]
  },
  {
      "name": "Neutrals/neutral-low-medium",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.4000000059604645,
                  "g": 0.4000000059604645,
                  "b": 0.4000000059604645
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:24"
                  }
              }
          }
      ]
  },
  {
      "name": "Neutrals/neutral-low-light",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.5960784554481506,
                  "g": 0.5960784554481506,
                  "b": 0.5960784554481506
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:18"
                  }
              }
          }
      ]
  },
  {
      "name": "Neutrals/neutral-high-dark",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.7803921699523926,
                  "g": 0.7803921699523926,
                  "b": 0.7803921699523926
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:25"
                  }
              }
          }
      ]
  },
  {
      "name": "Neutrals/neutral-high-medium",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.8980392217636108,
                  "g": 0.8980392217636108,
                  "b": 0.8980392217636108
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:23"
                  }
              }
          }
      ]
  },
  {
      "name": "Neutrals/neutral-high-light",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.95686274766922,
                  "g": 0.95686274766922,
                  "b": 0.95686274766922
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:19"
                  }
              }
          }
      ]
  },
  {
      "name": "Neutrals/neutral-high-pure",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:9"
                  }
              }
          }
      ]
  },
  {
      "name": "Neutrals/neutral-low-pure",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0,
                  "g": 0,
                  "b": 0
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:16"
                  }
              }
          }
      ]
  },
  {
      "name": "Neutrals/neutral-low-dark",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.20000000298023224,
                  "g": 0.20000000298023224,
                  "b": 0.20000000298023224
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:26"
                  }
              }
          }
      ]
  },
  {
      "name": "Tranparents/Alphas/High-Pure-Intense",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 0.6399999856948853,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:17"
                  }
              }
          }
      ]
  },
  {
      "name": "Tranparents/Alphas/High-Pure-Semi-Opaque",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 0.7200000286102295,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:29"
                  }
              }
          }
      ]
  },
  {
      "name": "Tranparents/Alphas/High-Pure-Medium",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 0.3199999928474426,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:30"
                  }
              }
          }
      ]
  },
  {
      "name": "Tranparents/Alphas/High-Pure-Light",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 0.1599999964237213,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:31"
                  }
              }
          }
      ]
  },
  {
      "name": "Tranparents/Alphas/High-Pure-Semi-Transparent",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 0.07999999821186066,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:32"
                  }
              }
          }
      ]
  },
  {
      "name": "Tranparents/Alphas/Low-Medium-Intense",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 0.6399999856948853,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.4000000059604645,
                  "g": 0.4000000059604645,
                  "b": 0.4000000059604645
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:41"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Backgrounds Colors/Background Color",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:3"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Backgrounds Colors/Background Color Primary",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.8705882430076599,
                  "g": 0.20392157137393951,
                  "b": 0.2862745225429535
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:55"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Error Components/Area Color",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:4"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Error Components/Border Color",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.8470588326454163,
                  "g": 0.09803921729326248,
                  "b": 0.08627451211214066
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:5"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Error Components/Help Text Color",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.8470588326454163,
                  "g": 0.09803921729326248,
                  "b": 0.08627451211214066
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:27"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Success Components/Area Color",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:20"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Success Components/Border Color",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.09803921729326248,
                  "g": 0.501960813999176,
                  "b": 0.2705882489681244
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:28"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Disable Components/Area Color",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.8980392217636108,
                  "g": 0.8980392217636108,
                  "b": 0.8980392217636108
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:21"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Disable Components/Border Color",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.5960784554481506,
                  "g": 0.5960784554481506,
                  "b": 0.5960784554481506
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:22"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Texts Components/Placeholder Enable",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.5960784554481506,
                  "g": 0.5960784554481506,
                  "b": 0.5960784554481506
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:33"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Texts Components/Placeholder Disable",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.7803921699523926,
                  "g": 0.7803921699523926,
                  "b": 0.7803921699523926
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:34"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Texts Components/Label and Text Enable",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0,
                  "g": 0,
                  "b": 0
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:35"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Texts Components/Text Disable",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.5960784554481506,
                  "g": 0.5960784554481506,
                  "b": 0.5960784554481506
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:36"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Texts Components/Label Disable",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.4000000059604645,
                  "g": 0.4000000059604645,
                  "b": 0.4000000059604645
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:37"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Texts Components/Help Text",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.4000000059604645,
                  "g": 0.4000000059604645,
                  "b": 0.4000000059604645
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:38"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Texts Components/Hover",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0,
                  "g": 0.4901960790157318,
                  "b": 0.501960813999176
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:56"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Texts Components/Pressed",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.41960784792900085,
                  "g": 0.8313725590705872,
                  "b": 0.8392156958580017
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:57"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Check Toggle and Switch/Background On",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.3333333432674408,
                  "g": 0.729411780834198,
                  "b": 0.7372549176216125
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:39"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Check Toggle and Switch/Ball On",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:40"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Check Toggle and Switch/Stroke On",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.3333333432674408,
                  "g": 0.729411780834198,
                  "b": 0.7372549176216125
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:42"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Check Toggle and Switch/Error",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.8470588326454163,
                  "g": 0.09803921729326248,
                  "b": 0.08627451211214066
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:43"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Check Toggle and Switch/Check Inverse Error",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:44"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Check Toggle and Switch/Check Inverse Disable",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:45"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Check Toggle and Switch/Check Inverse",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:46"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Check Toggle and Switch/Hover",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.5686274766921997,
                  "g": 0,
                  "b": 0.07058823853731155
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:53"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Check Toggle and Switch/Pressed",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.9803921580314636,
                  "g": 0.2823529541492462,
                  "b": 0.2823529541492462
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:54"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Alert/Background",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:47"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Alert/Text-Title-Error",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0,
                  "g": 0,
                  "b": 0
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:48"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Alert/Text",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0,
                  "g": 0,
                  "b": 0
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:49"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Alert/Text-Title-Warning",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0,
                  "g": 0,
                  "b": 0
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:50"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Alert/Text-Title-Success",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0,
                  "g": 0,
                  "b": 0
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:51"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Alert/Icon",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.4000000059604645,
                  "g": 0.4000000059604645,
                  "b": 0.4000000059604645
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:52"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Badge Tag and Label/Text Enable",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.20000000298023224,
                  "g": 0.20000000298023224,
                  "b": 0.20000000298023224
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:58"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Badge Tag and Label/Background Enable",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.8980392217636108,
                  "g": 0.8980392217636108,
                  "b": 0.8980392217636108
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:59"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Badge Tag and Label/Text Disable",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.5960784554481506,
                  "g": 0.5960784554481506,
                  "b": 0.5960784554481506
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:65"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Badge Tag and Label/Background Disable",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.95686274766922,
                  "g": 0.95686274766922,
                  "b": 0.95686274766922
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:66"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Badge Tag and Label/Success Background",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.09803921729326248,
                  "g": 0.501960813999176,
                  "b": 0.2705882489681244
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:67"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Badge Tag and Label/Success Text",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:68"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Badge Tag and Label/Error Background",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.8470588326454163,
                  "g": 0.09803921729326248,
                  "b": 0.08627451211214066
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:69"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Badge Tag and Label/Error Text",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:70"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Avatar/Enable Icon",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.8980392217636108,
                  "g": 0.8980392217636108,
                  "b": 0.8980392217636108
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:60"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Avatar/Enable Background",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.4000000059604645,
                  "g": 0.4000000059604645,
                  "b": 0.4000000059604645
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:61"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Avatar/Disable Background",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.8980392217636108,
                  "g": 0.8980392217636108,
                  "b": 0.8980392217636108
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:62"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Avatar/Disable Icon",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.5960784554481506,
                  "g": 0.5960784554481506,
                  "b": 0.5960784554481506
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:63"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Avatar/Selected",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 0.95686274766922,
                  "g": 0.95686274766922,
                  "b": 0.95686274766922
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:64"
                  }
              }
          }
      ]
  },
  {
      "name": "Components Tokens/Card/Background",
      "paints": [
          {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1
              },
              "boundVariables": {
                  "color": {
                      "type": "VARIABLE_ALIAS",
                      "id": "VariableID:6:71"
                  }
              }
          }
      ]
  }
];

function createPaintStyle(style) {
  const paintStyle = figma.createPaintStyle();
  paintStyle.name = style.name;
  paintStyle.paints = style.paints;
}

paintStylesArray.forEach(style => {
  createPaintStyle(style);
});
// *********** PaintStyle *********** //







// *********** TextStyle *********** //
async function carregarFonte() {
  await figma.loadFontAsync({ family: "Arial", style: "Regular" });
}

const textStylesArray = [
  {
    "name": "Ligero/Body (Default)",
    "fontSize": 14,
    "fontName": {
      "family": "Arial",
      "style": "Regular"
    }
  }
];

async function createTextStyle(style) {

  await carregarFonte()

  const textStyle = figma.createTextStyle();
  textStyle.name = style.name;
  textStyle.fontName = style.fontName;  
  textStyle.fontSize = style.fontSize;
}

textStylesArray.forEach(style => {
  createTextStyle(style);
});
// *********** TextStyle *********** //