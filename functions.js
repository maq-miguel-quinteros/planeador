const HOJA = SpreadsheetApp.openById('1p8nVzMIh-5TTk2im7KkOUhAj7msbv_3zIFrgRMOtYFY').getActiveSheet();

function doGet(){

    return HtmlService.createTemplateFromFile('html/web')
        .evaluate()
        .setTitle('planeador');
}

function doPost(datos) {
    // insertarContacto(datos.parameter.nombre, datos.parameter.correo);
    return HtmlService.createTemplateFromFile('html/web')
        .evaluate()
        .setTitle('planeador');
}

function obtenerHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, correo){
    HOJA.appendRow([nombre, correo]);
}


