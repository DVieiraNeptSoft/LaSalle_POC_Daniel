f_setBusy(true);

var options = {
    parameters: {
        "IV_CODIGO_AGRUPACION": modeloModelObjectQuery.getData().IV_CODIGO_AGRUPACION, // Optional 
        "IV_CODIGO_FACULTAD": modeloModelObjectQuery.getData().IV_CODIGO_FACULTAD, // Optional 
        "IV_CODIGO_PROGRAMA": modeloModelObjectQuery.getData().IV_COD_PROGRAMA, // Optional
    }
};

apioRestAPIGetDocentes(options);