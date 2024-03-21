// Replace yourField with FieldName
var context = oEvent.oSource.getBindingContext();  

// Get Entire Model
var data = context.getObject();

oInput4.setValue(data.NUMERO_IDENTIFICACION);

modeloModelObjectQuery.getData().IV_NUMERO_IDENTIFICACION = oInput4.getValue();

oDialogDocentes.close();