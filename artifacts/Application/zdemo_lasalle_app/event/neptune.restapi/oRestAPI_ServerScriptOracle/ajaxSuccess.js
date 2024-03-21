f_setBusy(false);

debugger;

// modeloMultiModelEventos.getData()

var tab_array = [];

//ORACLE
// modeloMultiModelInteg.getData().ORACLE = [xhr.responseJSON.rows, { COLOR: "RED" }];
modeloMultiModelInteg.getData().ORACLE = xhr.responseJSON.rows;

//SAP
modeloMultiModelInteg.getData().SAP = [modeloMultiModelEventos.getData().result.GT_ASIG_DOCENTE, { COLOR: "VERDE" }];

console.log(modeloMultiModelEventos.getData().result.GT_ASIG_DOCENTE);

var test = modeloMultiModelIntegrado.getData();

// For loop
for (i = 0; i < modeloMultiModelInteg.getData().ORACLE.length; i++) {

    //INTEGRATION
    var new_arry = {};

    new_arry.NUMERO_IDENTIFICACION = modeloMultiModelInteg.getData().ORACLE[i].DOCUMENTO_DOCENTE;
    new_arry.NOMBRES = modeloMultiModelInteg.getData().ORACLE[i].APELLIDOS_DOCENTE + ' ' + modeloMultiModelInteg.getData().ORACLE[i].NOMBRES;
    new_arry.APELLIDOS_DOCENTE = modeloMultiModelInteg.getData().ORACLE[i].APELLIDOS_DOCENTE;
    new_arry.CODIGO_EVENTO = modeloMultiModelInteg.getData().ORACLE[i].ID_EVENTO;
    new_arry.ABREV_GRUPO = modeloMultiModelInteg.getData().ORACLE[i].ABREV_GRUPO;
    new_arry.NOMBRE_GRUPO = modeloMultiModelInteg.getData().ORACLE[i].GRUPO;
    new_arry.ABREV_MATERIA = modeloMultiModelInteg.getData().ORACLE[i].CODIGOPROGRAMAMODULOMATERIA;
    new_arry.NOMBRE_MATERIA = modeloMultiModelInteg.getData().ORACLE[i].PROGRAMAMODULOMATERIA;
    new_arry.HORAS = modeloMultiModelInteg.getData().ORACLE[i].HORAS;
    new_arry.COLOR = 'Error';

    // modeloModelObjectInteg.getData().NUMERO_IDENTIFICACION = modeloMultiModelInteg.getData().ORACLE[i].DOCUMENTO_DOCENTE;
    // modeloModelObjectInteg.getData().NOMBRES = modeloMultiModelInteg.getData().ORACLE[i].APELLIDOS_DOCENTE + ' ' + modeloMultiModelInteg.getData().ORACLE[i].NOMBRES;
    // modeloModelObjectInteg.getData().APELLIDOS_DOCENTE = modeloMultiModelInteg.getData().ORACLE[i].APELLIDOS_DOCENTE;
    // modeloModelObjectInteg.getData().CODIGO_EVENTO = modeloMultiModelInteg.getData().ORACLE[i].ID_EVENTO;
    // modeloModelObjectInteg.getData().ABREV_GRUPO = modeloMultiModelInteg.getData().ORACLE[i].ABREV_GRUPO;
    // modeloModelObjectInteg.getData().NOMBRE_GRUPO = modeloMultiModelInteg.getData().ORACLE[i].GRUPO;
    // modeloModelObjectInteg.getData().ABREV_MATERIA = modeloMultiModelInteg.getData().ORACLE[i].CODIGOPROGRAMAMODULOMATERIA;
    // modeloModelObjectInteg.getData().NOMBRE_MATERIA = modeloMultiModelInteg.getData().ORACLE[i].PROGRAMAMODULOMATERIA;
    // modeloModelObjectInteg.getData().HORAS = modeloMultiModelInteg.getData().ORACLE[i].HORAS;
    // modeloModelObjectInteg.getData().COLOR = 'Error';

    // console.log(modeloModelObjectInteg.getData());
    console.log(new_arry);

    // ModelData.Add(modeloMultiModelEventos.getData().result.GT_ASIG_DOCENTE, modeloModelObjectInteg.getData());
    ModelData.Add(modeloMultiModelEventos.getData().result.GT_ASIG_DOCENTE, new_arry);

    //Integration
    // modeloMultiModelInteg.getData().INTEG = [
    //     {
    //         DOCUMENTO_DOCENTE: modeloMultiModelInteg.getData().ORACLE[0][i].DOCUMENTO_DOCENTE,
    //         NOMBRES: modeloMultiModelInteg.getData().ORACLE[0][i].NOMBRES,
    //         APELLIDOS_DOCENTE: modeloMultiModelInteg.getData().ORACLE[0][i].APELLIDOS_DOCENTE,
    //         PERIODO: modeloMultiModelInteg.getData().ORACLE[0][i].PERIODO,
    //         ID_PROGRAMA: modeloMultiModelInteg.getData().ORACLE[0][i].ID_PROGRAMA,
    //         NOMBRE_PROGRAMA: modeloMultiModelInteg.getData().ORACLE[0][i].NOMBRE_PROGRAMA
    //     }
    // ]

}

// modeloListRUPSAP.setData(modeloMultiModelEventos.getData().result.GT_ASIG_DOCENTE);
modeloTableRUPSAP.setData(modeloMultiModelEventos.getData().result.GT_ASIG_DOCENTE);


// console.log(modeloMultiModelInteg.getData().ORACLE);

debugger;