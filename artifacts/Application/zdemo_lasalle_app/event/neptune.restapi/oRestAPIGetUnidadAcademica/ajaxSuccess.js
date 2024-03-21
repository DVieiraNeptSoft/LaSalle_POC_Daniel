// debugger;

f_setBusy(false);

modeloTableUnidadAcademica.setData(modeloMultiModelUnidadAcademica.getData().result.GT_UNIDAD_ACADEMICA);

if (s_Periodicidad === 'X') {
    oDialogUnidadAcademica.setTitle("Unidad Academica");
} else {
    oDialogUnidadAcademica.setTitle("Agrupación");
}

oDialogUnidadAcademica.open();