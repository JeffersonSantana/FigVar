// *********** Exportar PaintStyles *********** //
const dataPaintStyle = figma.getLocalPaintStyles().map(style => {
    return {
        "name": style.name,
        "paints": style.paints
    }
})

console.log(dataPaintStyle)
// *********** Exportar PaintStyles *********** //





// *********** Limpar PaintStyles *********** //
const localPaintStyles = figma.getLocalPaintStyles();

localPaintStyles.forEach(style => {
    style.remove();
});
// *********** Limpar PaintStyles *********** //





// *********** Exportar TextStyles *********** //
const dataTextStyle = figma.getLocalTextStyles().map(style => {
    return {
        "name": style.name,
        "description": style.description,
        "fontName": style.fontName,
        "fontSize": style.fontSize,
        "letterSpacing": style.letterSpacing,
        "lineHeight": style.lineHeight,
        "listSpacing": style.listSpacing,
        "paragraphIndent": style.paragraphIndent,
        "paragraphSpacing": style.paragraphSpacing,
        "textDecoration": style.textDecoration,
        "type": style.type
    }
})

console.log(dataTextStyle)
// *********** Exportar TextStyles *********** //





// *********** Limpar TextStyles *********** //
const localTextStyles = figma.getLocalTextStyles();

localTextStyles.forEach(style => {
    style.remove();
});
// *********** Limpar TextStyles *********** //