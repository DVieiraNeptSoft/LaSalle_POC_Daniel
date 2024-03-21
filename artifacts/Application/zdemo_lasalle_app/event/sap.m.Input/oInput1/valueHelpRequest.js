f_setBusy(true);

s_Periodicidad = 'X';

var options = {
    parameters: {
        // "IV_NRO_ID": this.getValue()
        "IV_NRO_ID": ''
    }
};

apioRestAPIGetUnidadAcademica(options);

// oDialogUnidadAcademica.open();