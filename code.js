console.clear();

// *********** TextStyle *********** //
function carregarFonte() {
  figma.loadFontAsync({ family: "Poppins", style: "Bold" });
  figma.loadFontAsync({ family: "Poppins", style: "Regular" });
}

figma.on("run", () => {
  carregarFonte()
});

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

async function createTextStyle(style) {
  const textStyle = figma.createTextStyle();
  textStyle.name = style.name;
  textStyle.fontName = style.fontName;  
  textStyle.fontSize = style.fontSize;
}

if (figma.command === 'includeTextStyles') {
  textStylesArray.forEach(style => {
    createTextStyle(style);
  });
  figma.closePlugin();
  figma.notify("🚀 TextStyle do Ligero foi criado!", { timeout: 5000 });
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
  figma.closePlugin();
  figma.notify("😢 TextStyle do Ligero foi removido!", {timeout: 5000});
}
// *********** Clear TextStyles *********** //