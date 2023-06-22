function doGet(){

    // verificarArchivos();

    return HtmlService.createTemplateFromFile('html/web')
        .evaluate()
        .setTitle('planeador');
}

function obtenerHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
    let hoja = SpreadsheetApp.openById('1p8nVzMIh-5TTk2im7KkOUhAj7msbv_3zIFrgRMOtYFY').getActiveSheet();
    console.log(hoja);
    let datos = hoja.getDataRange().getValues();
    console.log(datos);
    return datos;
}

// function verificarArchivos(){}

