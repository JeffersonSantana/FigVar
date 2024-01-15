console.clear();

const timeoutCloseAction = 5000;

// *********** TextStyle *********** //
async function carregarFonte() {
  await figma.loadFontAsync({ family: "Poppins", style: "Bold" });
  await figma.loadFontAsync({ family: "Poppins", style: "Regular" });
}

async function createTextStyle(style) {
  carregarFonte().then(() => {
    const textStyle = figma.createTextStyle();
    textStyle.name = style.name;
    textStyle.fontName = style.fontName;
    textStyle.fontSize = style.fontSize;
  })
  .catch((error) => {
    console.log("Font loading error:", error);
  })
}

if (figma.command === 'includeTextStyles') {
  const textStylesArray = [
    {
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
      "name": "primary-content",
      "description": "primary-content",
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
      "name": "primary-content-bold",
      "description": "primary-content-bold",
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
      "name": "secundary-content",
      "description": "secundary-content",
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
      "name": "secundary-content-bold",
      "description": "secundary-content-bold",
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
      "name": "tertiary-content",
      "description": "tertiary-content",
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
        "value": 26
      },
      "listSpacing": 0,
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textDecoration": "NONE",
      "type": "TEXT"
    },
    {
      "name": "tertiary-content-bold",
      "description": "tertiary-content-bold",
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
  textStylesArray.forEach(style => {
    createTextStyle(style);
  });
  figma.notify("🚀 TextStyle do Ligero foi criado!", { timeout: timeoutCloseAction });
  setTimeout(() => { figma.closePlugin(); }, timeoutCloseAction);
}
// *********** TextStyle *********** //

// *********** Clear TextStyles *********** //
function clearAllTextStyles() {
  const localTextStyles = figma.getLocalTextStyles();
  localTextStyles.forEach(style => {
    style.remove();
  });
} 

if (figma.command === 'clearAllTextStyles') {
  clearAllTextStyles();
  figma.notify("😢 TextStyle do Ligero foi removido!", {timeout: 5000});
  setTimeout(() => { figma.closePlugin(); }, timeoutCloseAction);
}
// *********** Clear TextStyles *********** //

// *********** Create Collections and Variables *********** //
if (figma.command === 'createCollectionVariables') {
  try {
    // Dataset Collection
    const LigeroCollection = new Set([
      {
        "id": "VariableCollectionId:6:2",
        "defaultModeId": "6:0",
        "hiddenFromPublishing": false,
        "key": "aa8555d68bf024742de587699c2d26de622746cf",
        "modes": [
          {
            "name": "Light",
            "modeId": "6:0"
          },
          {
            "name": "Dark",
            "modeId": "6:1"
          }
        ],
        "name": "Ligero/Color_Tokens",
        "remote": false,
        "variableIds": [
          "VariableID:6:6",
          "VariableID:6:7",
          "VariableID:6:8",
          "VariableID:6:9",
          "VariableID:6:10",
          "VariableID:6:11",
          "VariableID:6:12",
          "VariableID:6:13",
          "VariableID:6:14",
          "VariableID:6:15",
          "VariableID:6:16",
          "VariableID:6:17",
          "VariableID:6:18",
          "VariableID:6:19",
          "VariableID:6:23",
          "VariableID:6:24",
          "VariableID:6:25",
          "VariableID:6:26",
          "VariableID:6:29",
          "VariableID:6:30",
          "VariableID:6:31",
          "VariableID:6:32",
          "VariableID:6:41",
          "VariableID:6:3",
          "VariableID:6:4",
          "VariableID:6:5",
          "VariableID:6:20",
          "VariableID:6:21",
          "VariableID:6:22",
          "VariableID:6:27",
          "VariableID:6:28",
          "VariableID:6:33",
          "VariableID:6:34",
          "VariableID:6:35",
          "VariableID:6:36",
          "VariableID:6:37",
          "VariableID:6:38",
          "VariableID:6:39",
          "VariableID:6:40",
          "VariableID:6:42",
          "VariableID:6:43",
          "VariableID:6:44",
          "VariableID:6:45",
          "VariableID:6:46",
          "VariableID:6:47",
          "VariableID:6:48",
          "VariableID:6:49",
          "VariableID:6:50",
          "VariableID:6:51",
          "VariableID:6:52",
          "VariableID:6:53",
          "VariableID:6:54",
          "VariableID:6:55",
          "VariableID:6:56",
          "VariableID:6:57",
          "VariableID:6:58",
          "VariableID:6:59",
          "VariableID:6:60",
          "VariableID:6:61",
          "VariableID:6:62",
          "VariableID:6:63",
          "VariableID:6:64",
          "VariableID:6:65",
          "VariableID:6:66",
          "VariableID:6:67",
          "VariableID:6:68",
          "VariableID:6:69",
          "VariableID:6:70",
          "VariableID:6:71"
        ]
      },
      {
        "id": "VariableCollectionId:6:72",
        "defaultModeId": "6:2",
        "hiddenFromPublishing": false,
        "key": "c9af69ea8c93cf8aca494563f02f6123fc962fc7",
        "modes": [
          {
            "name": "Mobile",
            "modeId": "6:2"
          },
          {
            "name": "Tablet",
            "modeId": "6:3"
          },
          {
            "name": "Desktop",
            "modeId": "6:4"
          }
        ],
        "name": "Ligero/Grid_Spacing",
        "remote": false,
        "variableIds": [
          "VariableID:6:73"
        ]
      },
      {
        "id": "VariableCollectionId:6:74",
        "defaultModeId": "6:5",
        "hiddenFromPublishing": false,
        "key": "0466c3d2f68e2a6af66dfc40f83e66c8831a837d",
        "modes": [
          {
            "name": "Mode 1",
            "modeId": "6:5"
          }
        ],
        "name": "Ligero/Spacing_Tokens",
        "remote": false,
        "variableIds": [
          "VariableID:6:75",
          "VariableID:6:76",
          "VariableID:6:77",
          "VariableID:6:78",
          "VariableID:6:79",
          "VariableID:6:80",
          "VariableID:6:81",
          "VariableID:6:82",
          "VariableID:6:83",
          "VariableID:6:84",
          "VariableID:6:85",
          "VariableID:6:86",
          "VariableID:6:87"
        ]
      },
      {
        "id": "VariableCollectionId:6:88",
        "defaultModeId": "6:6",
        "hiddenFromPublishing": false,
        "key": "a3345be4db3ce5fb7626696f05c80ea11d97bdad",
        "modes": [
          {
            "name": "Mode 1",
            "modeId": "6:6"
          }
        ],
        "name": "Ligero/Corner_Radius",
        "remote": false,
        "variableIds": [
          "VariableID:6:89",
          "VariableID:6:90",
          "VariableID:6:91",
          "VariableID:6:92"
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
        "id": "VariableID:6:3",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "412047ceec70f0981d58acd0fa24d3e61cbe99bf",
        "name": "Component tokens/Backgrounds Colors/BackgroundColor",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:9"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:6"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:4",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "ff579211699a0c7323fc0d1b735244ad72aa38d9",
        "name": "Component tokens/Componentes/Error Components/Area Color",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:9"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:14"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:5",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "3ebc46fc32ca9e99089d3b47d6165101f9d13626",
        "name": "Component tokens/Componentes/Error Components/Border Color",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:14"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:6",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "37fbc57c51c415716e9a606a262fea01fdab3f21",
        "name": "Global Tokens/Brand/Primary",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.8705882430076599,
            "g": 0.20392157137393951,
            "b": 0.2862745225429535,
            "a": 1
          },
          "6:1": {
            "r": 0.8705882430076599,
            "g": 0.20392157137393951,
            "b": 0.2862745225429535,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:7",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "1ef1473e25c8bb39c1eb8f0829280dc909e3e8f5",
        "name": "Global Tokens/Brand/Primary Dark",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.5686274766921997,
            "g": 0,
            "b": 0.07058823853731155,
            "a": 1
          },
          "6:1": {
            "r": 0.5686274766921997,
            "g": 0,
            "b": 0.07058823853731155,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:8",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "2dfa9be24006d509105beb22998fceb751ec2b68",
        "name": "Global Tokens/Brand/Primary Light",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.9803921580314636,
            "g": 0.2823529541492462,
            "b": 0.2823529541492462,
            "a": 1
          },
          "6:1": {
            "r": 0.9803921580314636,
            "g": 0.2823529541492462,
            "b": 0.2823529541492462,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:9",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "b300b909566da2baf438166fe0125dc9eda9c02c",
        "name": "Global Tokens/Neutral/High Pure",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
          },
          "6:1": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:10",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "f604557cf01c757fe5465e0ea49ae36828bfcda1",
        "name": "Global Tokens/Brand/Secondary",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.3333333432674408,
            "g": 0.729411780834198,
            "b": 0.7372549176216125,
            "a": 1
          },
          "6:1": {
            "r": 0.3333333432674408,
            "g": 0.729411780834198,
            "b": 0.7372549176216125,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:11",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "60c5bff061af4244a95deb3cff934735c109e891",
        "name": "Global Tokens/Brand/Secondary Dark",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0,
            "g": 0.4901960790157318,
            "b": 0.501960813999176,
            "a": 1
          },
          "6:1": {
            "r": 0,
            "g": 0.4901960790157318,
            "b": 0.501960813999176,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:12",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "6748fb131d76d9e3e064c3a5a8f0f34ef081cad3",
        "name": "Global Tokens/Brand/Secondary Light",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.41960784792900085,
            "g": 0.8313725590705872,
            "b": 0.8392156958580017,
            "a": 1
          },
          "6:1": {
            "r": 0.41960784792900085,
            "g": 0.8313725590705872,
            "b": 0.8392156958580017,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:13",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "bb8e18108240be25d58f89b9825d012d23a85091",
        "name": "Global Tokens/Feedback/Success Color",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.09803921729326248,
            "g": 0.501960813999176,
            "b": 0.2705882489681244,
            "a": 1
          },
          "6:1": {
            "r": 0.09803921729326248,
            "g": 0.501960813999176,
            "b": 0.2705882489681244,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:14",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "e1b62ca54385063625889a921423a21d948be8f6",
        "name": "Global Tokens/Feedback/Error Color",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.8470588326454163,
            "g": 0.09803921729326248,
            "b": 0.08627451211214066,
            "a": 1
          },
          "6:1": {
            "r": 0.5686274766921997,
            "g": 0,
            "b": 0.07058823853731155,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:15",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "a48f9033673f87b4eaebafc29b0fd1558f2fce10",
        "name": "Global Tokens/Feedback/Warning Color",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.9686274528503418,
            "g": 0.729411780834198,
            "b": 0.11764705926179886,
            "a": 1
          },
          "6:1": {
            "r": 0.6784313917160034,
            "g": 0.5529412031173706,
            "b": 0,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:16",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "6e6abf4e0229f99b1934135d8a54d0718ae8953f",
        "name": "Global Tokens/Neutral/Low Pure",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 1
          },
          "6:1": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:17",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "9a18b43c85ff0d65bd5f85ce97ba892101265922",
        "name": "Global Tokens/Transparent/Intense",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.6399999856948853
          },
          "6:1": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.6399999856948853
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:18",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "5b07cadee7661748092ac0e18388e29a8f88ac02",
        "name": "Global Tokens/Neutral/Low Light",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.5960784554481506,
            "g": 0.5960784554481506,
            "b": 0.5960784554481506,
            "a": 1
          },
          "6:1": {
            "r": 0.7803921699523926,
            "g": 0.7803921699523926,
            "b": 0.7803921699523926,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:19",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "e8f674a5e969c3145ac95d55a7dfdabf68eb68da",
        "name": "Global Tokens/Neutral/High Light",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.95686274766922,
            "g": 0.95686274766922,
            "b": 0.95686274766922,
            "a": 1
          },
          "6:1": {
            "r": 0.20000000298023224,
            "g": 0.20000000298023224,
            "b": 0.20000000298023224,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:20",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "5207acdd29efbebc1443011ffc29cd0ae44d5460",
        "name": "Component tokens/Componentes/Success Componts/Area Color",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:3"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:13"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:21",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "899306b528587644ca5d177c084dba699274597b",
        "name": "Component tokens/Componentes/Disable Components/Area Color",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:23"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:6"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:22",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "852fb62baf1b5d68fa9b79a9a74677a885bd584a",
        "name": "Component tokens/Componentes/Disable Components/Border Color",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:18"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:17"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:23",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "94aec2617ca48fca86070883baa99536e3bc13ae",
        "name": "Global Tokens/Neutral/High Medium",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.8980392217636108,
            "g": 0.8980392217636108,
            "b": 0.8980392217636108,
            "a": 1
          },
          "6:1": {
            "r": 0.4000000059604645,
            "g": 0.4000000059604645,
            "b": 0.4000000059604645,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:24",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "7ca5982010c3c00378ca0cce2cf0f9ee70d4a2e7",
        "name": "Global Tokens/Neutral/Low Medium",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.4000000059604645,
            "g": 0.4000000059604645,
            "b": 0.4000000059604645,
            "a": 1
          },
          "6:1": {
            "r": 0.8980392217636108,
            "g": 0.8980392217636108,
            "b": 0.8980392217636108,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:25",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "650b7e764b224c042b0dc92afb345c4bd3f6100b",
        "name": "Global Tokens/Neutral/High Dark",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.7803921699523926,
            "g": 0.7803921699523926,
            "b": 0.7803921699523926,
            "a": 1
          },
          "6:1": {
            "r": 0.5960784554481506,
            "g": 0.5960784554481506,
            "b": 0.5960784554481506,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:26",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "6f7e708031382a74a563ee8ca2442f77b714e30c",
        "name": "Global Tokens/Neutral/Low Dark",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.20000000298023224,
            "g": 0.20000000298023224,
            "b": 0.20000000298023224,
            "a": 1
          },
          "6:1": {
            "r": 0.95686274766922,
            "g": 0.95686274766922,
            "b": 0.95686274766922,
            "a": 1
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:27",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "d68b2bdb7b71af2f6b3fec3ea595f2e0eead770f",
        "name": "Component tokens/Componentes/Error Components/Help Text Color",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:14"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:28",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "89eabcb9d24d7978986d74591e44353b47a5cb78",
        "name": "Component tokens/Componentes/Success Componts/Border Color",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:13"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:29",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "77c19b5f56d3559c513a6f78c060e2fd4181cb33",
        "name": "Global Tokens/Transparent/Semi-Opaque",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.7200000286102295
          },
          "6:1": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.7200000286102295
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:30",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "939bbd86086f6679821d0f6b5077801b8009b0df",
        "name": "Global Tokens/Transparent/Medium",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.3199999928474426
          },
          "6:1": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.3199999928474426
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:31",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "5a860575b552bba7996b54ff9a9c304d3f6a7535",
        "name": "Global Tokens/Transparent/Light",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.1599999964237213
          },
          "6:1": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.1599999964237213
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:32",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "ed6589fc39ab87c08e92a20c9d6dddc266597b28",
        "name": "Global Tokens/Transparent/Semi-Transparen",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.07999999821186066
          },
          "6:1": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 0.07999999821186066
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:33",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "caddd8106cdfce0916e6a358d44c17981a8384e0",
        "name": "Component tokens/Componentes/Texts Components/Placeholder Enable",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:18"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:29"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:34",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "42b08c9844555cec25f4e9eecaeb308efe860584",
        "name": "Component tokens/Componentes/Texts Components/Placeholder Disable",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:25"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:30"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:35",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "b14a659001acabdde1530aa1e993bf5bceca4e47",
        "name": "Component tokens/Componentes/Texts Components/Label and Text Enable",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:36",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "89ed751fa2a3c94f6cdff2a0c43baf977f691dc4",
        "name": "Component tokens/Componentes/Texts Components/Text Disable",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:18"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:17"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:37",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "0a08579d79721feb82c0a75884c37d245d390ea6",
        "name": "Component tokens/Componentes/Texts Components/Label Disable",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:24"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:17"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:38",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "cd64e1eccc1f61784107c7ba2e72867bc1e26ff0",
        "name": "Component tokens/Componentes/Texts Components/Help Text",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:24"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:39",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "e832889d9a7ec748d0df0ac4642ce03e83cbf899",
        "name": "Component tokens/Componentes/Check Toggle and Switch/Background On",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:10"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:40",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "e915a4d956ac115c521138bf46c222b7b572f2b7",
        "name": "Component tokens/Componentes/Check Toggle and Switch/Ball On",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:9"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:10"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:41",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "6a14d49096d7353dbfe37b502ce30aec44ce0a79",
        "name": "Global Tokens/Transparent/Low-Medium-Intense",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "r": 0.4000000059604645,
            "g": 0.4000000059604645,
            "b": 0.4000000059604645,
            "a": 0.6399999856948853
          },
          "6:1": {
            "r": 0.4000000059604645,
            "g": 0.4000000059604645,
            "b": 0.4000000059604645,
            "a": 0.6399999856948853
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:42",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "347eaca6f1040374212a03693baaa26ba429f3e9",
        "name": "Component tokens/Componentes/Check Toggle and Switch/Stroke On",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:10"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:43",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "ba4ca32b09a837f1675952234c0d5abcdb7eb658",
        "name": "Component tokens/Componentes/Check Toggle and Switch/Error",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:14"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:14"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:44",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "a19ea0532caec876b33aa3eed70124b6bafbee37",
        "name": "Component tokens/Componentes/Check Toggle and Switch/Check Inverse Error",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:9"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:45",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "d1160baefb962a7cb4af34885fa11239dbfb7a71",
        "name": "Component tokens/Componentes/Check Toggle and Switch/Check Inverse Disable",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:9"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:17"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:46",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "db958f55f854f7ca42226212fcf1eea2cbe4937e",
        "name": "Component tokens/Componentes/Check Toggle and Switch/Check Inverse",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:9"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:6"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:47",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "dac2e57cde2533d139b12b875fec799cfbb4f637",
        "name": "Component tokens/Componentes/Alert/Background",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:9"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:48",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "536ddbc25104976a74265254d2a294258b3edd40",
        "name": "Component tokens/Componentes/Alert/Text-Title-Error",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:14"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:49",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "c79266187a968b974c5a7ea3d810100b850456d8",
        "name": "Component tokens/Componentes/Alert/Text",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:9"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:50",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "5a2c7113e3c952e4145c417d91467db669ca7883",
        "name": "Component tokens/Componentes/Alert/Text-Title-Warning",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:15"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:51",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "afa50c79bf4a0fa37b9173ef26a6636bc15edd0d",
        "name": "Component tokens/Componentes/Alert/Text-Title-Success",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:13"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:52",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "816a81e31f1f1f0d2b84ec7bbfbf6e321cd1aad5",
        "name": "Component tokens/Componentes/Alert/Icon",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:24"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:23"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:53",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "58a549d1c430ebb7b4a5beca94017d74429af482",
        "name": "Component tokens/Componentes/Check Toggle and Switch/Hover",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:7"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:17"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:54",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "60e0c3fa634544c67562992149fa22e20283fbf1",
        "name": "Component tokens/Componentes/Check Toggle and Switch/Pressed",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:8"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:55",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "be538061646e7effe65f7318f2304cdf49476123",
        "name": "Component tokens/Backgrounds Colors/BackgroundColorPrimary",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:6"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:56",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "d4c1f770ea06b5093e054093036a25ca2ad08b68",
        "name": "Component tokens/Componentes/Texts Components/Hover",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:11"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:17"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:57",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "8d233594671aebe7100795fbc8ac043250f0fc15",
        "name": "Component tokens/Componentes/Texts Components/Pressed",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:12"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:58",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "1f02c0042145d26924d1bc60174db78329846d60",
        "name": "Component tokens/Componentes/Badge Tag and Label/Text Enable",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:26"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:19"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:59",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "73be4e7d1339c283779ea5ce96d78834a4636cd6",
        "name": "Component tokens/Componentes/Badge Tag and Label/Background Enable",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:23"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:24"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:60",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "4a9114fe8aab0ec8475c5dc2d62964382ba5817c",
        "name": "Component tokens/Componentes/Avatar/Enable Icon",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:23"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:24"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:61",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "dacfbc4de962b62241a0d9ef8b6eba5b7ce26315",
        "name": "Component tokens/Componentes/Avatar/Enable Background",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:24"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:23"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:62",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "bcbf84745e47895c9028a626d5dca5d12f1cd49d",
        "name": "Component tokens/Componentes/Avatar/Disable Background",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:23"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:24"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:63",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "5595e625902b5f25a255d6ffc0170e8ac72611ff",
        "name": "Component tokens/Componentes/Avatar/Disable Icon",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:18"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:25"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:64",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "5eb0acb0254090dae8e176efbd44c2897a1abe2d",
        "name": "Component tokens/Componentes/Avatar/Selected",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:19"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:19"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:65",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "222d6fd17ae0a85985f674a491d9a18f446192c0",
        "name": "Component tokens/Componentes/Badge Tag and Label/Text Disable",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:18"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:25"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:66",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "f1d9bac05bedc5c24d977d53c457546f68a79edb",
        "name": "Component tokens/Componentes/Badge Tag and Label/Background Disable",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:19"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:26"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:67",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "0f6967059b732c5fdaa6998629f6bbd9a75f6c5a",
        "name": "Component tokens/Componentes/Badge Tag and Label/Success Background",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:13"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:68",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "79d6ed3576c39f0e4a3962bcaaea0cbfc04ab12e",
        "name": "Component tokens/Componentes/Badge Tag and Label/Success Text",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:9"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:13"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:69",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "5a075510007673ba87a7d82fa029dabca39f3332",
        "name": "Component tokens/Componentes/Badge Tag and Label/Error Background",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:14"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:70",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "4da6b47bf107977e28f12d882f419c3ab7147500",
        "name": "Component tokens/Componentes/Badge Tag and Label/Error Text",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:9"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:14"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:71",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "8577ead9f7ffebff246ca69b05b21e2b41cde2b3",
        "name": "Component tokens/Componentes/Card/Background",
        "remote": false,
        "resolvedType": "COLOR",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:0": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:9"
          },
          "6:1": {
            "type": "VARIABLE_ALIAS",
            "id": "VariableID:6:16"
          }
        },
        "variableCollectionId": "VariableCollectionId:6:2"
      },
      {
        "id": "VariableID:6:73",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "296b6ef5ba50cb5c8d33d184d45091f71088d820",
        "name": "Gap",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:2": 8,
          "6:3": 16,
          "6:4": 24
        },
        "variableCollectionId": "VariableCollectionId:6:72"
      },
      {
        "id": "VariableID:6:75",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "a01627b9901ce8ddbf08fe20ef3d280dcf32e754",
        "name": "Quarck",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:5": 4
        },
        "variableCollectionId": "VariableCollectionId:6:74"
      },
      {
        "id": "VariableID:6:76",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "78a86a0498ec98b1c7d6998d12d563462499042f",
        "name": "Nano",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:5": 8
        },
        "variableCollectionId": "VariableCollectionId:6:74"
      },
      {
        "id": "VariableID:6:77",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "a27ccf0d667308f54bba7f3436864f3c81378d16",
        "name": "XXXS",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:5": 16
        },
        "variableCollectionId": "VariableCollectionId:6:74"
      },
      {
        "id": "VariableID:6:78",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "feccc09f1a72249c10d577cab8041bb402043b35",
        "name": "XXS",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:5": 24
        },
        "variableCollectionId": "VariableCollectionId:6:74"
      },
      {
        "id": "VariableID:6:79",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "e6334a21573585628c5e24c6e4ab7c63300e0c16",
        "name": "XS",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:5": 32
        },
        "variableCollectionId": "VariableCollectionId:6:74"
      },
      {
        "id": "VariableID:6:80",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "8a2fe4e8b2839c40388af034608e8bbbfb2d02ab",
        "name": "SM",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:5": 40
        },
        "variableCollectionId": "VariableCollectionId:6:74"
      },
      {
        "id": "VariableID:6:81",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "3ae3a7616670c49665660639fb75ea9615524b4b",
        "name": "MD",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:5": 48
        },
        "variableCollectionId": "VariableCollectionId:6:74"
      },
      {
        "id": "VariableID:6:82",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "d16946a64b9ef75693343df0a4d356a3f632e114",
        "name": "LG",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:5": 56
        },
        "variableCollectionId": "VariableCollectionId:6:74"
      },
      {
        "id": "VariableID:6:83",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "d9c9954c0c887d8108ea33cb9470762ca6061706",
        "name": "XL",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:5": 64
        },
        "variableCollectionId": "VariableCollectionId:6:74"
      },
      {
        "id": "VariableID:6:84",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "8775fbaf903c9d952623ed7a84b982e08000bb0e",
        "name": "XXL",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:5": 80
        },
        "variableCollectionId": "VariableCollectionId:6:74"
      },
      {
        "id": "VariableID:6:85",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "96ecf0676ec37de042680192b98ca247ef0fc043",
        "name": "XXXL",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:5": 120
        },
        "variableCollectionId": "VariableCollectionId:6:74"
      },
      {
        "id": "VariableID:6:86",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "ed025be9425f79dd34361e2cdc94aca7c33a5fbb",
        "name": "Huge",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:5": 160
        },
        "variableCollectionId": "VariableCollectionId:6:74"
      },
      {
        "id": "VariableID:6:87",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "8e9af85accf41f9472e06d89562286d7c2914a9a",
        "name": "Giant",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:5": 200
        },
        "variableCollectionId": "VariableCollectionId:6:74"
      },
      {
        "id": "VariableID:6:89",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "a0d4cb2dd4eee446bcee7a577243a53678868d5a",
        "name": "SM",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:6": 4
        },
        "variableCollectionId": "VariableCollectionId:6:88"
      },
      {
        "id": "VariableID:6:90",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "88d297ec36887a9dd3ea821ed23298b38196a16e",
        "name": "MD",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:6": 8
        },
        "variableCollectionId": "VariableCollectionId:6:88"
      },
      {
        "id": "VariableID:6:91",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "9f803f12c91d1d5c253e9136a3ba7a3bdb7c978c",
        "name": "LG",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:6": 16
        },
        "variableCollectionId": "VariableCollectionId:6:88"
      },
      {
        "id": "VariableID:6:92",
        "codeSyntax": {},
        "description": "",
        "hiddenFromPublishing": false,
        "key": "c0fe6f7bf3603214965e1f03c6c2e57fe8eae85b",
        "name": "Circle",
        "remote": false,
        "resolvedType": "FLOAT",
        "scopes": [
          "ALL_SCOPES"
        ],
        "valuesByMode": {
          "6:6": 32
        },
        "variableCollectionId": "VariableCollectionId:6:88"
      }
    ]);

    // Mapped collection
    const mappedCollection = mapIdCollections(LigeroCollection);

    LigeroVariables.forEach(variable => {
      const collectionId = mappedCollection.find(mapped => mapped.from === variable.variableCollectionId).to;
      figma.variables.createVariable(variable.name, collectionId, variable.resolvedType);
    });

    // Success
    figma.notify("🚀 Variable do Ligero foi criado!", { timeout: timeoutCloseAction });
  } catch(e) {
    // Fail
    console.log(e);
    figma.notify("❌ Falha ao criar a Variable do Ligero!", { timeout: timeoutCloseAction });
  }
  setTimeout(() => { figma.closePlugin(); }, timeoutCloseAction);
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
        newMapCollection.push({ "from": collection.id, "to": localCollection.id, "name": localCollection.name });
      }
    }
  });

  return newMapCollection;
}
// *********** Create Collections and Variables *********** //