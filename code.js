console.clear();

const timeoutCloseAction = 5000;

// *********** Load Font *********** //
async function loadFont() {
  await figma.loadFontAsync({ family: "Poppins", style: "Bold" });
  await figma.loadFontAsync({ family: "Poppins", style: "Regular" });
}
// *********** Load Font *********** //

// *********** CREATE *********** //
if (figma.command === 'create') {

  // Clear
  // clearTypographic();
  // clearVariables();

  try {
    // createTypographic();
    // createCollectionVariable();
    replaceColors();

    // Success
    figma.notify("🚀 Variáveis e tipografias do Ligero foram criadas!", { timeout: timeoutCloseAction });
  } catch (e) {
    // Fail
    console.log(e);
    figma.notify("❌ Falha ao criar a Variable do Ligero!", { timeout: timeoutCloseAction });
  }
  setTimeout(() => { figma.closePlugin(); }, timeoutCloseAction);
}
// *********** CREATE *********** //

// *********** REMOVE *********** //
if (figma.command === 'remove') {
  clearTypographic();
  clearVariables();
  figma.notify("😢 Variáveis e tipografias do Ligero foram removido!", { timeout: 5000 });
  setTimeout(() => { figma.closePlugin(); }, timeoutCloseAction);
}
// *********** REMOVE *********** //

async function replaceColors() {

  async function getAllNodes() {
    return new Promise((resolve) => {
      const currentPage = figma.currentPage;
      const nodes = [];
      const allNodes = currentPage.findAll();
      allNodes.forEach(node => {
        nodes.push({
          "idNode": node.id,
          "boundVariables": node.boundVariables
        });
      });
      resolve(nodes);
    });
  }

  await getAllNodes().then((nodes) => {
    const fff = new Promise((resolve) => {
      let variable = [];
      nodes.forEach((node) => {
        const localVariable = figma.variables.getVariableById(node.boundVariables.fills[0].id);
        variable.push({
          "idNode": node.idNode,
          "nodeBoundVariables": node.boundVariables,
          "idVariable": localVariable.id,
          "nameVariable": localVariable.name,
          "variableCollectionId": localVariable.variableCollectionId,
          "remoteVariable": localVariable.remote
        });
      });
      resolve(variable);
    });

    fff.then((ddd) => { console.log(ddd) });
  });
}

async function createTypographic() {
  const textStylesArray = [
    {
      "id": "S:618e07cb1749fde19f60a094b082dc1a8d44c70f,",
      "name": "h1",
      "description": "Header",
      "fontName": {
        "family": "Poppins",
        "style": "Bold"
      },
      "fontSize": 32,
      "letterSpacing": {
        "unit": "PERCENT",
        "value": 0
      },
      "lineHeight": {
        "unit": "PIXELS",
        "value": 48
      },
      "listSpacing": 0,
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textDecoration": "NONE",
      "type": "TEXT"
    },
    {
      "id": "S:9c46b2a155899cc662de894e6dbd51fe4ff1193f,",
      "name": "h2",
      "description": "Header",
      "fontName": {
        "family": "Poppins",
        "style": "Bold"
      },
      "fontSize": 24,
      "letterSpacing": {
        "unit": "PERCENT",
        "value": 0
      },
      "lineHeight": {
        "unit": "PIXELS",
        "value": 32
      },
      "listSpacing": 0,
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textDecoration": "NONE",
      "type": "TEXT"
    },
    {
      "id": "S:0dab44231b09d5085a47b7d0f2cfe84dbc192237,",
      "name": "h3",
      "description": "Header",
      "fontName": {
        "family": "Poppins",
        "style": "Bold"
      },
      "fontSize": 20,
      "letterSpacing": {
        "unit": "PERCENT",
        "value": 0
      },
      "lineHeight": {
        "unit": "PIXELS",
        "value": 32
      },
      "listSpacing": 0,
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textDecoration": "NONE",
      "type": "TEXT"
    },
    {
      "id": "S:d65e2e44a21b08c8e6581674121ecd8ec4db5980,",
      "name": "h4",
      "description": "Header",
      "fontName": {
        "family": "Poppins",
        "style": "Bold"
      },
      "fontSize": 16,
      "letterSpacing": {
        "unit": "PERCENT",
        "value": 0
      },
      "lineHeight": {
        "unit": "PIXELS",
        "value": 24
      },
      "listSpacing": 0,
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textDecoration": "NONE",
      "type": "TEXT"
    },
    {
      "id": "S:3f57bea7efb05dc38d1d41a7840260ec3bdf1b1c,",
      "name": "h5",
      "description": "Header",
      "fontName": {
        "family": "Poppins",
        "style": "Bold"
      },
      "fontSize": 14,
      "letterSpacing": {
        "unit": "PERCENT",
        "value": 0
      },
      "lineHeight": {
        "unit": "PIXELS",
        "value": 24
      },
      "listSpacing": 0,
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textDecoration": "NONE",
      "type": "TEXT"
    },
    {
      "id": "S:8808526fa852b3a1854a251b4afb8e8a1a711e28,",
      "name": "h6",
      "description": "Header",
      "fontName": {
        "family": "Poppins",
        "style": "Bold"
      },
      "fontSize": 12,
      "letterSpacing": {
        "unit": "PERCENT",
        "value": 0
      },
      "lineHeight": {
        "unit": "PIXELS",
        "value": 16
      },
      "listSpacing": 0,
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textDecoration": "NONE",
      "type": "TEXT"
    },
    {
      "id": "S:b0908800ee26ad39fee79e27e29d4bf5d11e4ce7,",
      "name": "primary-content",
      "description": "Conteudo",
      "fontName": {
        "family": "Poppins",
        "style": "Regular"
      },
      "fontSize": 16,
      "letterSpacing": {
        "unit": "PERCENT",
        "value": 0
      },
      "lineHeight": {
        "unit": "PIXELS",
        "value": 24
      },
      "listSpacing": 0,
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textDecoration": "NONE",
      "type": "TEXT"
    },
    {
      "id": "S:662ae06e8addfee945add8dd1e80e3e73e52d486,",
      "name": "primary-content-bold",
      "description": "Conteúdo",
      "fontName": {
        "family": "Poppins",
        "style": "Bold"
      },
      "fontSize": 16,
      "letterSpacing": {
        "unit": "PERCENT",
        "value": 0
      },
      "lineHeight": {
        "unit": "PIXELS",
        "value": 24
      },
      "listSpacing": 0,
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textDecoration": "NONE",
      "type": "TEXT"
    },
    {
      "id": "S:77d19da78dcd150c27314ccdb1814579ad8f9877,",
      "name": "secondary-content",
      "description": "Conteúdo",
      "fontName": {
        "family": "Poppins",
        "style": "Regular"
      },
      "fontSize": 14,
      "letterSpacing": {
        "unit": "PERCENT",
        "value": 0
      },
      "lineHeight": {
        "unit": "PIXELS",
        "value": 24
      },
      "listSpacing": 0,
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textDecoration": "NONE",
      "type": "TEXT"
    },
    {
      "id": "S:178c78410ffc3627d8fc51b54aee9bfed7eefd4c,",
      "name": "secondary-content-bold",
      "description": "Conteúdo",
      "fontName": {
        "family": "Poppins",
        "style": "Bold"
      },
      "fontSize": 14,
      "letterSpacing": {
        "unit": "PERCENT",
        "value": 0
      },
      "lineHeight": {
        "unit": "PIXELS",
        "value": 24
      },
      "listSpacing": 0,
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textDecoration": "NONE",
      "type": "TEXT"
    },
    {
      "id": "S:f0d732cbe59e7ed4e28cdc15951c21760b3a7684,",
      "name": "tertiary-content",
      "description": "Conteúdo",
      "fontName": {
        "family": "Poppins",
        "style": "Regular"
      },
      "fontSize": 12,
      "letterSpacing": {
        "unit": "PERCENT",
        "value": 0
      },
      "lineHeight": {
        "unit": "PIXELS",
        "value": 16
      },
      "listSpacing": 0,
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textDecoration": "NONE",
      "type": "TEXT"
    },
    {
      "id": "S:e8fddc03dde2a5a6ca20779c7b4fda95f2eecfb1,",
      "name": "tertiary-content-bold",
      "description": "Header",
      "fontName": {
        "family": "Poppins",
        "style": "Bold"
      },
      "fontSize": 12,
      "letterSpacing": {
        "unit": "PERCENT",
        "value": 0
      },
      "lineHeight": {
        "unit": "PIXELS",
        "value": 16
      },
      "listSpacing": 0,
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textDecoration": "NONE",
      "type": "TEXT"
    }
  ];

  function replaceTypographic() {
    let createdStyle = [];
    return new Promise((resolve) => {
      loadFont().then(() => {
        textStylesArray.forEach(style => {
          const textStyle = figma.createTextStyle();
          textStyle.name = style.name;
          textStyle.fontName = style.fontName;
          textStyle.fontSize = style.fontSize;
          createdStyle.push({
            "object": textStyle,
            "id": textStyle.id,
            "name": textStyle.name
          });
        });
        resolve(createdStyle);
      }).catch ((error) => {
        console.log(error);
        figma.notify("❌ Falha ao criar a Variable do Ligero!", { timeout: timeoutCloseAction });
      });
    });
  }

  await replaceTypographic().then((createdStyle) => {
    figma.root.findAllWithCriteria({ types: ["TEXT"] }).forEach((node) => {
      const oldStyle = textStylesArray.find(style => style.id === node.textStyleId.split(",")[0] + ",");
      console.log(oldStyle)
      if (oldStyle) {
        const newStyle = createdStyle.find(style => style.name === oldStyle.name);
        node.setRangeTextStyleId(0, node.characters.length, newStyle.id);
      }
    });
  });
}

function clearTypographic() {
  const localTextStyles = figma.getLocalTextStyles();
  localTextStyles.forEach(style => {
    style.remove();
  });
}

function clearVariables() {
  figma.variables.getLocalVariableCollections().map(collection => {
    collection.remove();
  });
}

function createCollectionVariable() {
  const LigeroCollection = new Set([
    {
      "id": "VariableCollectionId:1783:11659",
      "defaultModeId": "1783:0",
      "hiddenFromPublishing": false,
      "key": "84e9159c9eecf7703721f625b6945a6ded06e555",
      "modes": [
        {
          "name": "Light",
          "modeId": "1783:0"
        },
        {
          "name": "Dark",
          "modeId": "1793:0"
        }
      ],
      "name": "Ligero/Color_Tokens",
      "remote": false,
      "variableIds": [
        "VariableID:1793:11780",
        "VariableID:1793:11779",
        "VariableID:1793:11778",
        "VariableID:1793:11760",
        "VariableID:1793:11759",
        "VariableID:1793:11757",
        "VariableID:1793:11761",
        "VariableID:1793:12534",
        "VariableID:1793:13135",
        "VariableID:1793:13260",
        "VariableID:1928:10304",
        "VariableID:1827:15711",
        "VariableID:1827:15710",
        "VariableID:1827:15709",
        "VariableID:1793:12290",
        "VariableID:1827:15708",
        "VariableID:1793:11783",
        "VariableID:1793:11782",
        "VariableID:1793:11781",
        "VariableID:1793:12422",
        "VariableID:1793:13136",
        "VariableID:1793:13261",
        "VariableID:1793:12289",
        "VariableID:1783:11665",
        "VariableID:2066:671",
        "VariableID:2066:681",
        "VariableID:2066:683",
        "VariableID:2066:684",
        "VariableID:2066:682",
        "VariableID:2066:1973",
        "VariableID:3927:4579",
        "VariableID:3927:4580",
        "VariableID:3927:4581",
        "VariableID:3927:4582",
        "VariableID:1928:10221",
        "VariableID:1928:10222",
        "VariableID:1928:10365",
        "VariableID:2054:10222",
        "VariableID:2054:10223",
        "VariableID:2054:10224",
        "VariableID:2054:10225",
        "VariableID:2307:5401",
        "VariableID:2307:7086",
        "VariableID:1793:13132",
        "VariableID:1793:13133",
        "VariableID:1793:15378",
        "VariableID:1783:11757",
        "VariableID:1793:11751",
        "VariableID:1793:13127",
        "VariableID:1823:17026",
        "VariableID:1827:15736",
        "VariableID:1827:15737",
        "VariableID:1827:15738",
        "VariableID:1827:15739",
        "VariableID:1827:15740",
        "VariableID:1827:15741",
        "VariableID:2480:19709",
        "VariableID:2480:19710",
        "VariableID:2374:10576",
        "VariableID:2645:13274",
        "VariableID:2645:13275",
        "VariableID:2649:20017",
        "VariableID:2649:22522",
        "VariableID:2668:27301",
        "VariableID:2668:27302",
        "VariableID:2668:27303",
        "VariableID:2668:27304",
        "VariableID:2649:4439",
        "VariableID:2649:4440",
        "VariableID:2649:4441",
        "VariableID:2649:4442",
        "VariableID:2649:9110",
        "VariableID:3092:32787"
      ]
    },
    {
      "id": "VariableCollectionId:3396:28257",
      "defaultModeId": "3396:0",
      "hiddenFromPublishing": false,
      "key": "8d9f6511f152ec45bbdf886a9e445f647c8f6227",
      "modes": [
        {
          "name": "Mode 1",
          "modeId": "3396:0"
        }
      ],
      "name": "Ligero/Spacing_Tokens",
      "remote": false,
      "variableIds": [
        "VariableID:3396:34522",
        "VariableID:3396:34523",
        "VariableID:3396:34524",
        "VariableID:3396:34525",
        "VariableID:3396:34526",
        "VariableID:3396:34527",
        "VariableID:3396:34528",
        "VariableID:3396:34529",
        "VariableID:3396:34530",
        "VariableID:3396:34531",
        "VariableID:3396:34532",
        "VariableID:3396:34533",
        "VariableID:3396:34534"
      ]
    },
    {
      "id": "VariableCollectionId:3396:34535",
      "defaultModeId": "3396:1",
      "hiddenFromPublishing": false,
      "key": "dba76e28630cbc233af8c59f733370bf8eff0f18",
      "modes": [
        {
          "name": "Mode 1",
          "modeId": "3396:1"
        }
      ],
      "name": "Ligero/Corner_Radius",
      "remote": false,
      "variableIds": [
        "VariableID:3396:34536",
        "VariableID:3396:34537",
        "VariableID:3396:34538",
        "VariableID:3396:34539"
      ]
    }
  ]);

  // Creating collections in Figma
  // Created only a single mode
  LigeroCollection.forEach(collection => {
    const collectionCreated = figma.variables.createVariableCollection(collection.name);

    // Refactory
    collectionCreated.renameMode(collectionCreated.modes[0].modeId, collection.modes[0].name);
  });

  // Dataset Variables 
  const LigeroVariables = new Set([
    {
      "id": "VariableID:1783:11665",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "f341ac05381ab27bae9bd50ac48a41c58c1c49ef",
      "name": "Component tokens/BackgroundColor",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11761"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11757"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1783:11757",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "cf64ef26fc71ecf18c85f90bf028f14b71d9f191",
      "name": "Component tokens/Componentes/Error Components/Area Color",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11761"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11782"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:11751",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "b82a696fd1fe4ad5317bf3a578bd0c2efd83d206",
      "name": "Component tokens/Componentes/Error Components/Border Color",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11782"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:11757",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "0ee691800c055980e558ffa7b75fb04c44e08465",
      "name": "Global Tokens/Brand/Primary",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.8705882430076599,
          "g": 0.20392157137393951,
          "b": 0.2862745225429535,
          "a": 1
        },
        "1793:0": {
          "r": 0.8705882430076599,
          "g": 0.20392157137393951,
          "b": 0.2862745225429535,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:11759",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "1fcee35cbe321b19b3def8189e61220618638053",
      "name": "Global Tokens/Brand/Primary Dark",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.5686274766921997,
          "g": 0,
          "b": 0.07058823853731155,
          "a": 1
        },
        "1793:0": {
          "r": 0.5686274766921997,
          "g": 0,
          "b": 0.07058823853731155,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:11760",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "3ec1955c2541bac2d95e9e0e1804ed1314989157",
      "name": "Global Tokens/Brand/Primary Light",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.9803921580314636,
          "g": 0.2823529541492462,
          "b": 0.2823529541492462,
          "a": 1
        },
        "1793:0": {
          "r": 0.9803921580314636,
          "g": 0.2823529541492462,
          "b": 0.2823529541492462,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:11761",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "6ea6ec49763f29286a6702b8ba45d69c963a1d8e",
      "name": "Global Tokens/Neutral/High Pure",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
        },
        "1793:0": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:11778",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "35c0b7422fad022c29813d29ac8690fe0629d434",
      "name": "Global Tokens/Brand/Secondary",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.3333333432674408,
          "g": 0.729411780834198,
          "b": 0.7372549176216125,
          "a": 1
        },
        "1793:0": {
          "r": 0.3333333432674408,
          "g": 0.729411780834198,
          "b": 0.7372549176216125,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:11779",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "a0274895911157e48c64e74f3d67053099376844",
      "name": "Global Tokens/Brand/Secondary Dark",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0,
          "g": 0.4901960790157318,
          "b": 0.501960813999176,
          "a": 1
        },
        "1793:0": {
          "r": 0,
          "g": 0.4901960790157318,
          "b": 0.501960813999176,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:11780",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "1be5540002bf8011ab19ce98f18e2cb9a924a28e",
      "name": "Global Tokens/Brand/Secondary Light",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.41960784792900085,
          "g": 0.8313725590705872,
          "b": 0.8392156958580017,
          "a": 1
        },
        "1793:0": {
          "r": 0.41960784792900085,
          "g": 0.8313725590705872,
          "b": 0.8392156958580017,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:11781",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "8ac441f892e608638578dbda769219b676b94dfa",
      "name": "Global Tokens/Feedback/Color Success",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.09803921729326248,
          "g": 0.501960813999176,
          "b": 0.2705882489681244,
          "a": 1
        },
        "1793:0": {
          "r": 0.09803921729326248,
          "g": 0.501960813999176,
          "b": 0.2705882489681244,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:11782",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "4b1ac3cd29bfffe0c92004962be20ae3fbff061e",
      "name": "Global Tokens/Feedback/Color Error",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.8470588326454163,
          "g": 0.09803921729326248,
          "b": 0.08627451211214066,
          "a": 1
        },
        "1793:0": {
          "r": 0.5686274766921997,
          "g": 0,
          "b": 0.07058823853731155,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:11783",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "4a4306f715d05e5383a93c7b4a7c0fec7fa96eeb",
      "name": "Global Tokens/Feedback/Color Warning",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.9686274528503418,
          "g": 0.729411780834198,
          "b": 0.11764705926179886,
          "a": 1
        },
        "1793:0": {
          "r": 0.6784313917160034,
          "g": 0.5529412031173706,
          "b": 0,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:12289",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "a8c722389cd4bd64c3b3fa52ce9efd6dd013a8fe",
      "name": "Global Tokens/Neutral/Low Pure",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "1793:0": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:12290",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "572418fc20017dc04198a7e761f19620e28c0722",
      "name": "Global Tokens/Transparent/Intense",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 0.6399999856948853
        },
        "1793:0": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 0.6399999856948853
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:12422",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "24cbd8d6fba4b39d334c02de4e2138f9a0761f18",
      "name": "Global Tokens/Neutral/Low Light",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.5960784554481506,
          "g": 0.5960784554481506,
          "b": 0.5960784554481506,
          "a": 1
        },
        "1793:0": {
          "r": 0.7803921699523926,
          "g": 0.7803921699523926,
          "b": 0.7803921699523926,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:12534",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "187c3ebabcd4df3fa0be8ebf53e49bbc4326421f",
      "name": "Global Tokens/Neutral/High Light",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.95686274766922,
          "g": 0.95686274766922,
          "b": 0.95686274766922,
          "a": 1
        },
        "1793:0": {
          "r": 0.20000000298023224,
          "g": 0.20000000298023224,
          "b": 0.20000000298023224,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:13127",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "d193bce0a3930b1aae6a64dbcc90aaba95c0a92e",
      "name": "Component tokens/Componentes/Success Componts/Area Color",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1783:11665"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11781"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:13132",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "573b12bd2a77dfe062b409a96e4f48f01edc5212",
      "name": "Component tokens/Componentes/Disable Components/Area Color",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13135"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11757"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:13133",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "e134c22847e3a50be108825a21a4a0e483484aee",
      "name": "Component tokens/Componentes/Disable Components/Border Color",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12422"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12290"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:13135",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "70b05143c566980e3b7d294e322bf10f7f1ea1b4",
      "name": "Global Tokens/Neutral/High Medium",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.8980392217636108,
          "g": 0.8980392217636108,
          "b": 0.8980392217636108,
          "a": 1
        },
        "1793:0": {
          "r": 0.4000000059604645,
          "g": 0.4000000059604645,
          "b": 0.4000000059604645,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:13136",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "d30459b5f603bca6579c8fe601298753ceb6d1a2",
      "name": "Global Tokens/Neutral/Low Medium",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.4000000059604645,
          "g": 0.4000000059604645,
          "b": 0.4000000059604645,
          "a": 1
        },
        "1793:0": {
          "r": 0.8980392217636108,
          "g": 0.8980392217636108,
          "b": 0.8980392217636108,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:13260",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "7f8d67346bba4eb4988730ad48365e7b10eec00b",
      "name": "Global Tokens/Neutral/High Dark",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.7803921699523926,
          "g": 0.7803921699523926,
          "b": 0.7803921699523926,
          "a": 1
        },
        "1793:0": {
          "r": 0.5960784554481506,
          "g": 0.5960784554481506,
          "b": 0.5960784554481506,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:13261",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "3d4db2e562939e4cc185296552bb201af6f92d4f",
      "name": "Global Tokens/Neutral/Low Dark",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.20000000298023224,
          "g": 0.20000000298023224,
          "b": 0.20000000298023224,
          "a": 1
        },
        "1793:0": {
          "r": 0.95686274766922,
          "g": 0.95686274766922,
          "b": 0.95686274766922,
          "a": 1
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1793:15378",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "5ec5a8163d462ed0b7b746ac4fad52e10892e8d2",
      "name": "Component tokens/Componentes/Error Components/Help Text Color",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11782"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1823:17026",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "6dbe0939bc5d7223917f85010f8fc90b44dcb6cd",
      "name": "Component tokens/Componentes/Success Componts/Border Color",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11781"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1827:15708",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "e0f369c832a2e98ecbb93ceaf19c3f197a4893c3",
      "name": "Global Tokens/Transparent/Semi-Opaque",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 0.7200000286102295
        },
        "1793:0": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 0.7200000286102295
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1827:15709",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "79d3460db2754bb5db98b749330944a4a2d46306",
      "name": "Global Tokens/Transparent/Medium",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 0.3199999928474426
        },
        "1793:0": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 0.3199999928474426
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1827:15710",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "40a5090a5e16d115518b9a7657ef901edbb0d69d",
      "name": "Global Tokens/Transparent/Light",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 0.1599999964237213
        },
        "1793:0": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 0.1599999964237213
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1827:15711",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "e214ad397044b9716e1d17412e63f54186971899",
      "name": "Global Tokens/Transparent/Semi-Transparen",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 0.07999999821186066
        },
        "1793:0": {
          "r": 1,
          "g": 1,
          "b": 1,
          "a": 0.07999999821186066
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1827:15736",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "66f3791b7a2cd69d0f1c10ffa11dd4d34e576e34",
      "name": "Component tokens/Componentes/Texts Components/Placeholder Enable",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12422"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1827:15708"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1827:15737",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "da2f6542bae20197acfc1ca7571a835e9875dcd2",
      "name": "Component tokens/Componentes/Texts Components/Placeholder Disable",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13260"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1827:15709"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1827:15738",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "69a326ba7f28aee317a5b82cca2037e6e188e356",
      "name": "Component tokens/Componentes/Texts Components/Label and Text Enable",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1827:15739",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "0be8203aedef1e84c81e59573f40a7405bef56d7",
      "name": "Component tokens/Componentes/Texts Components/Text Disable",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12422"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12290"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1827:15740",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "4692ddd21ba1072fd64d6c8b2483046168e86708",
      "name": "Component tokens/Componentes/Texts Components/Label Disable",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13136"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12290"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1827:15741",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "3ac3f7c7471dbea5dbf4e99697eda34492636e60",
      "name": "Component tokens/Componentes/Texts Components/Help Text",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13136"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1928:10221",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "3c526551061ddfdc71c5132de7eaf9f55a8b83af",
      "name": "Component tokens/Componentes/Check Toggle and Switch/Background On",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11778"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1928:10222",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "2a0c04b389c3f869b28ea098bca445d70838dd45",
      "name": "Component tokens/Componentes/Check Toggle and Switch/Ball On",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11761"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11778"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1928:10304",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "8481f440b83b74330b7db424926c516ca7f50d0a",
      "name": "Global Tokens/Transparent/Low-Medium-Intense",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "r": 0.4000000059604645,
          "g": 0.4000000059604645,
          "b": 0.4000000059604645,
          "a": 0.6399999856948853
        },
        "1793:0": {
          "r": 0.4000000059604645,
          "g": 0.4000000059604645,
          "b": 0.4000000059604645,
          "a": 0.6399999856948853
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:1928:10365",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "8c3a350fc49ed912dca7b7713bc87dc8490e22b3",
      "name": "Component tokens/Componentes/Check Toggle and Switch/Stroke On",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11778"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2054:10222",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "a23f836a593c89039c93b085e89adf95bb76a225",
      "name": "Component tokens/Componentes/Check Toggle and Switch/Error",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11782"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11782"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2054:10223",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "887adad4edd127687076da21c1d8ebb386ba1f6c",
      "name": "Component tokens/Componentes/Check Toggle and Switch/Check Inverse Error",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11761"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2054:10224",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "bcb9f40745a118e5ebbabf021c63b7becefdc397",
      "name": "Component tokens/Componentes/Check Toggle and Switch/Check Inverse Disable",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11761"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12290"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2054:10225",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "6d0f88cd3931c2c5bbf0bdac8b0e8ba77fb7cb9d",
      "name": "Component tokens/Componentes/Check Toggle and Switch/Check Inverse",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11761"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11757"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2066:671",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "6bd557a01bb23e8710cd04fd550701f61aae1330",
      "name": "Component tokens/Componentes/Alert/Background",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11761"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2066:681",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "f769d5e9154948f37507d04952252095232c3434",
      "name": "Component tokens/Componentes/Alert/Text-Title-Error",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11782"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2066:682",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "6417bd72e61ee45a5a3736b50c72e68441df0f56",
      "name": "Component tokens/Componentes/Alert/Text",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11761"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2066:683",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "5acfe20108db5ecdac7c74e7825263475c314294",
      "name": "Component tokens/Componentes/Alert/Text-Title-Warning",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11783"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2066:684",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "74d5ae3de456219d18d699aa376d58c6c4b6822b",
      "name": "Component tokens/Componentes/Alert/Text-Title-Success",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11781"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2066:1973",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "780754069e838489e96ba337234912bfb6cb8678",
      "name": "Component tokens/Componentes/Alert/Icon",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13136"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13135"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2307:5401",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "a2c1e8547c8f63f41fb464c88ce498f469422620",
      "name": "Component tokens/Componentes/Check Toggle and Switch/Hover",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11759"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12290"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2307:7086",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "4537ff6f4d3eda6b530959d2b1fae45a0da42cfd",
      "name": "Component tokens/Componentes/Check Toggle and Switch/Pressed",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11760"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2374:10576",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "6d29c07741e53771bf4aadc68dd3c5bf9df2176a",
      "name": "Component tokens/BackgroundColorPrimary",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11757"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2480:19709",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "f0a7343eec049fe336a0ac99599b008d647edc47",
      "name": "Component tokens/Componentes/Texts Components/Hover",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11779"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12290"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2480:19710",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "533514db6c024c1b3932c6cc4321e68225858c06",
      "name": "Component tokens/Componentes/Texts Components/Pressed",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11780"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2645:13274",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "f5ddc456875f364228bb3e1f2945d200269cb754",
      "name": "Component tokens/Componentes/Badge Tag and Label/Text Enable",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13261"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12534"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2645:13275",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "5a9c3e2307e1b5d09c633c27f8552036466e0831",
      "name": "Component tokens/Componentes/Badge Tag and Label/Background Enable",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13135"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13136"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2649:4439",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "60e8aa6dad793b9035ff83bf9a16632c3ee5744f",
      "name": "Component tokens/Componentes/Avatar/Enable Icon",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13135"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13136"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2649:4440",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "db053cf65eec63dc8e61832342e4f8db1f13946e",
      "name": "Component tokens/Componentes/Avatar/Enable Background",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13136"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13135"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2649:4441",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "d47d513572e00cf6254fbb903aa2cb2f8dbbc73e",
      "name": "Component tokens/Componentes/Avatar/Disable Background",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13135"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13136"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2649:4442",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "b8419d18f87ef8cb9ab5619060d8f4f997a1977a",
      "name": "Component tokens/Componentes/Avatar/Disable Icon",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12422"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13260"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2649:9110",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "c4ba413206d180355057488c69959007339c8166",
      "name": "Component tokens/Componentes/Avatar/Selected",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12534"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12534"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2649:20017",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "7cc91726570ccec214aed4265ae820463399324d",
      "name": "Component tokens/Componentes/Badge Tag and Label/Text Disable",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12422"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13260"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2649:22522",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "0d8de3fdc808ba918a67f35413a4d780a4a28b3f",
      "name": "Component tokens/Componentes/Badge Tag and Label/Background Disable",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12534"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:13261"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2668:27301",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "f2248c0f65871e982cff58667717d12dea9ab07c",
      "name": "Component tokens/Componentes/Badge Tag and Label/Success Background",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11781"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2668:27302",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "60f8498be0ac5de87e946afaf28a5aaf78a59fae",
      "name": "Component tokens/Componentes/Badge Tag and Label/Success Text",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11761"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11781"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2668:27303",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "99c5fd2cdb226c0a91e34e0d99957dea24c8d8ac",
      "name": "Component tokens/Componentes/Badge Tag and Label/Error Background",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11782"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:2668:27304",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "cd2569b48a121281d6e128ef910b934963454002",
      "name": "Component tokens/Componentes/Badge Tag and Label/Error Text",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11761"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11782"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:3092:32787",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "5e79af4c981fae1043ab1f183c10c5399bd55395",
      "name": "Component tokens/Componentes/Card/Background",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11761"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:3396:34522",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "aaf5b69253ea9eb278d4a92e989f537fbe28657c",
      "name": "Quarck",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:0": 4
      },
      "variableCollectionId": "VariableCollectionId:3396:28257"
    },
    {
      "id": "VariableID:3396:34523",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "b9fda65589fc7bedc6133469cf13fa9b79619f3e",
      "name": "Nano",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:0": 8
      },
      "variableCollectionId": "VariableCollectionId:3396:28257"
    },
    {
      "id": "VariableID:3396:34524",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "541745aea858e5ab089c177b91b851411dad1836",
      "name": "XXXS",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:0": 16
      },
      "variableCollectionId": "VariableCollectionId:3396:28257"
    },
    {
      "id": "VariableID:3396:34525",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "cd21847c6e15813d164fab86e3fe3f1df609d120",
      "name": "XXS",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:0": 24
      },
      "variableCollectionId": "VariableCollectionId:3396:28257"
    },
    {
      "id": "VariableID:3396:34526",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "6c31336c3e93d92350ecbf7234057f952ef1587c",
      "name": "XS",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:0": 32
      },
      "variableCollectionId": "VariableCollectionId:3396:28257"
    },
    {
      "id": "VariableID:3396:34527",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "dd768ee7d27be271e3d51b34adb1cf68c17395e1",
      "name": "SM",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:0": 40
      },
      "variableCollectionId": "VariableCollectionId:3396:28257"
    },
    {
      "id": "VariableID:3396:34528",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "87acb983d0d21cc74fab65a534ef47562c539ff3",
      "name": "MD",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:0": 48
      },
      "variableCollectionId": "VariableCollectionId:3396:28257"
    },
    {
      "id": "VariableID:3396:34529",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "ba9c85dc5a721a9d0aec92297bf186e85ba2fee7",
      "name": "LG",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:0": 56
      },
      "variableCollectionId": "VariableCollectionId:3396:28257"
    },
    {
      "id": "VariableID:3396:34530",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "3fccbd4cc3928f2c4f8173f53169c31214a5404e",
      "name": "XL",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:0": 64
      },
      "variableCollectionId": "VariableCollectionId:3396:28257"
    },
    {
      "id": "VariableID:3396:34531",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "801bb59817199976bc2b0be2603a5e270fb59bc0",
      "name": "XXL",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:0": 80
      },
      "variableCollectionId": "VariableCollectionId:3396:28257"
    },
    {
      "id": "VariableID:3396:34532",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "3070365de92fae3d45823a0e5961849b2dfb8a2f",
      "name": "XXXL",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:0": 120
      },
      "variableCollectionId": "VariableCollectionId:3396:28257"
    },
    {
      "id": "VariableID:3396:34533",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "746d12ea6a7f6fcd08d6b83e3c4bc52e77b179b6",
      "name": "Huge",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:0": 160
      },
      "variableCollectionId": "VariableCollectionId:3396:28257"
    },
    {
      "id": "VariableID:3396:34534",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "68033d631e072e780b842f46a026522573b723db",
      "name": "Giant",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:0": 200
      },
      "variableCollectionId": "VariableCollectionId:3396:28257"
    },
    {
      "id": "VariableID:3396:34536",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "8c79bdbd87254ce9b60521d8053a7c3d41db81cb",
      "name": "SM",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:1": 4
      },
      "variableCollectionId": "VariableCollectionId:3396:34535"
    },
    {
      "id": "VariableID:3396:34537",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "126d7c2f31377e100eb0293d16862147372ef003",
      "name": "MD",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:1": 8
      },
      "variableCollectionId": "VariableCollectionId:3396:34535"
    },
    {
      "id": "VariableID:3396:34538",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "929382f23591f0d43a1d961105d0b275fa0a0bb4",
      "name": "LG",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:1": 16
      },
      "variableCollectionId": "VariableCollectionId:3396:34535"
    },
    {
      "id": "VariableID:3396:34539",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "f22c0c98358d30e57a3bbacd0eb5ac91f4bde8f9",
      "name": "Circle",
      "remote": false,
      "resolvedType": "FLOAT",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "3396:1": 32
      },
      "variableCollectionId": "VariableCollectionId:3396:34535"
    },
    {
      "id": "VariableID:3927:4579",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "c775a758c71ba6b4ffcace6a3bc98de5cfe255ad",
      "name": "Component tokens/Componentes/Buttons/Default",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11757"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:3927:4580",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "b85d9a29a7b85ccd178f89153174289cb12e993e",
      "name": "Component tokens/Componentes/Buttons/Hover",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11759"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1827:15708"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:3927:4581",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "dfd4cd04c3154b422ea9afa8d7d9884bb216c1c2",
      "name": "Component tokens/Componentes/Buttons/Pressed",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:11760"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12289"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    },
    {
      "id": "VariableID:3927:4582",
      "codeSyntax": {},
      "description": "",
      "hiddenFromPublishing": false,
      "key": "d942fdf0a3e5b27945d562b9ccd94546ac65aa25",
      "name": "Component tokens/Componentes/Buttons/Disable",
      "remote": false,
      "resolvedType": "COLOR",
      "scopes": [
        "ALL_SCOPES"
      ],
      "valuesByMode": {
        "1783:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12422"
        },
        "1793:0": {
          "type": "VARIABLE_ALIAS",
          "id": "VariableID:1793:12290"
        }
      },
      "variableCollectionId": "VariableCollectionId:1783:11659"
    }
  ]);

  // Mapped collection
  const mappedCollection = mapIdCollections(LigeroCollection);

  let valuesByMode = [];

  LigeroVariables.forEach(variable => {
    const collectionId = mappedCollection.find(mapped => mapped.from === variable.variableCollectionId).to;
    const newVariable = figma.variables.createVariable(variable.name, collectionId, variable.resolvedType);
    valuesByMode.push({
      "oldVariableId": variable.id,
      "newVariableId": newVariable.id,
      "oldModeId": Object.keys(variable.valuesByMode)[0],
      "newModeId": Object.keys(newVariable.valuesByMode)[0],
      "oldValue": Object.values(variable.valuesByMode)[0]
    });
  });

  valuesByMode.forEach(obj => {
    const variable = figma.variables.getVariableById(obj.newVariableId);

    if (obj.oldValue.type !== 'VARIABLE_ALIAS') {
      variable.setValueForMode(
        obj.newModeId,
        obj.oldValue
      );
    } else {
      variable.setValueForMode(
        obj.newModeId,
        {
          type: 'VARIABLE_ALIAS', 
          id: valuesByMode.find(val => val.oldVariableId === obj.oldValue.id).newVariableId
        }
      )
    }
  });
}

function mapIdCollections(LigeroCollection) {
  let newMapCollection = [];

  const oldLigeroCollection = new Set(Array.from(LigeroCollection).map(objeto => ({
    id: objeto.id,
    name: objeto.name
  })));

  figma.variables.getLocalVariableCollections().forEach(newCollection => {

    const localCollection = {
      "id": newCollection.id,
      "name": newCollection.name
    }

    for (const collection of oldLigeroCollection) {
      if (collection.name === localCollection.name) {
        newMapCollection.push({
          "from": collection.id,
          "to": localCollection.id,
          "name": localCollection.name
        });
      }
    }
  });

  return newMapCollection;
}