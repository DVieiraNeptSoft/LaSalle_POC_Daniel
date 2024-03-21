// Replace yourField with FieldName
var context = oEvent.oSource.getBindingContext();  

// Get Entire Model
var data = context.getObject();

oInput3.setValue(data.CODIGO_PROGRAMA);
modeloModelObjectQuery.getData().IV_COD_PROGRAMA = oInput3.getValue();

oDialogProgramas.close();