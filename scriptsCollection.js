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





// *********** Get All Local Variables *********** //
const getAllLocalVariables = figma.variables.getLocalVariables().map(variable => {
    return {
        "id": variable.id,
        "codeSyntax": variable.codeSyntax,
        "description": variable.description,
        "hiddenFromPublishing": variable.hiddenFromPublishing,
        "key": variable.key,
        "name": variable.name,
        "remote": variable.remote,
        "resolvedType": variable.resolvedType,
        "scopes": variable.scopes,
        "valuesByMode": variable.valuesByMode,
        "variableCollectionId": variable.variableCollectionId
    }
});
// *********** Get All Local Variables *********** //





// *********** Remove All Local Variables *********** //
const removeAllLocalVariables = figma.variables.getLocalVariables().map(variable => {
    variable.remove();
});
// *********** Remove All Local Variables *********** //





// *********** Get All Local Collection *********** //
const getAllLocalCollection = figma.variables.getLocalVariableCollections().map(collection => {
    return {
        "id": collection.id,
        "defaultModeId": collection.defaultModeId,
        "hiddenFromPublishing": collection.hiddenFromPublishing,
        "key": collection.key,
        "modes": collection.modes,
        "name": collection.name,
        "remote": collection.remote,
        "variableIds": collection.variableIds
    }
});
// *********** Get All Local Collection *********** //





// *********** Create Collection *********** //
getAllLocalCollection.map(collection => {
    const collectionCreated = figma.variables.createVariableCollection(collection.name);
    collectionCreated.renameMode(collectionCreated.modes[0].modeId, collection.modes[0].name);
})
// *********** Create Collection *********** //