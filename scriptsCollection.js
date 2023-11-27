// *********** Exportar PaintStyles *********** //
const novo = figma.getLocalPaintStyles().map(style => {
    return {
        "name": style.name,
        "paints": style.paints
    }
})

console.log(novo)
// *********** Exportar PaintStyles *********** //