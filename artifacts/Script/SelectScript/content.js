// var dataQuery = req.query;
var data = req.body;

// log.info("Param Data");
// log.info(data);
// log.info(" ");

log.info("Body Data");
log.info(data);
log.info(" ");

var s_query;
var res_tab;

var select_table = "SELECT * FROM plantilla_academica_sap.vw_carga_aprobada_neptuno";
// var select_table = "SELECT JSON_OBJECT(*) FROM plantilla_academica_sap.vw_carga_aprobada_neptuno";
// var select_query = "WHERE periodo = :periodo AND id_plantilla = :id_plantilla";
var select_query = "WHERE";
var select_query_and = 'AND';
var select_fieldsFechas = '';
var select_fieldsFacultad = '';
var select_fieldsPrograma = '';
var select_fieldsDocente = '';

var s_year;
var s_month;
var s_day;
var s_separator = '/';
var s_format_date_ini;
var s_format_date_fin;

var check = '';

// var s_params_value = [2022001, 3075];
var s_params_value = [];

// s_query = select_table + ' ' + select_query;

if (data.struc_query.SAP === 'X') {
  // on the select query, use the fields of the oracle DB that will be filtered
  select_query = "WHERE DOCUMENTO_DOCENTE = :docdocente AND ABREV_GRUPO = :abrevgrupo AND PERIODO = :periodo";

  s_params_value.push(data.table_docentes[0].NUMERO_IDENTIFICACION, data.table_docentes[0].ABREV_GRUPO, data.struc_query.IV_ID_PERIODO);

  s_query = select_table + ' ' + select_query;

} else {

  if (data.struc_query.IV_FECHA_INICIAL != '' && data.struc_query.IV_FECHA_FINAL != '' && data.struc_query.IV_ID_PERIODO != '') {

    s_year = data.struc_query.IV_FECHA_INICIAL.substr(2, 2) // '22'
    s_month = data.struc_query.IV_FECHA_INICIAL.substr(4, 2) // '01'
    s_day = data.struc_query.IV_FECHA_INICIAL.substr(6, 2) // '11'

    s_format_date_ini = s_day + s_separator + s_month + s_separator + s_year; // result = 11/01/22

    s_year = data.struc_query.IV_FECHA_FINAL.substr(2, 2) // '22'
    s_month = data.struc_query.IV_FECHA_FINAL.substr(4, 2) // '01'
    s_day = data.struc_query.IV_FECHA_FINAL.substr(6, 2) // '11'

    s_format_date_fin = s_day + s_separator + s_month + s_separator + s_year; // result = 11/01/22

    select_fieldsFechas = "FECHA_INICIO >= :fechaini AND FECHA_FIN <= :fechafin AND PERIODO = :periodo";
    // s_params_value.push(data.struc_query.IV_FECHA_INICIAL, data.struc_query.IV_FECHA_FINAL, data.struc_query.IV_ID_PERIODO);
    s_params_value.push(s_format_date_ini, s_format_date_fin, data.struc_query.IV_ID_PERIODO);

    select_query = select_query + ' ' + select_fieldsFechas;

    check = 'X';

  }

  if (data.struc_query.IV_COD_FACULTAD != '') {

    select_fieldsFacultad = "ID_UNIDAD_ACADEMICA = :idunidad";
    s_params_value.push(data.struc_query.IV_COD_FACULTAD);

    if (check != '') {
      select_query = select_query + ' ' + select_query_and + ' ' + select_fieldsFacultad;
    } else {
      select_query = select_query + ' ' + select_fieldsFacultad;
    }

    check = 'X';

  }

  if (data.struc_query.IV_COD_PROGRAMA != '') {

    select_fieldsPrograma = "ID_PROGRAMA = :idprograma";
    s_params_value.push(data.struc_query.IV_COD_PROGRAMA);

    if (check != '') {
      select_query = select_query + ' ' + select_query_and + ' ' + select_fieldsPrograma;
    } else {
      select_query = select_query + ' ' + select_fieldsPrograma;
    }

    check = 'X';

  }

  if (data.struc_query.IV_NUMERO_IDENTIFICACION != '') {

    select_fieldsDocente = "DOCUMENTO_DOCENTE = :docdocente";
    s_params_value.push(data.struc_query.IV_NUMERO_IDENTIFICACION);

    if (check != '') {
      select_query = select_query + ' ' + select_query_and + ' ' + select_fieldsDocente;
    } else {
      select_query = select_query + ' ' + select_fieldsDocente;
    }

  }

  s_query = select_table + ' ' + select_query;

}

console.log("")
console.log("Constructed Query:")
console.log(s_query);

// myscript.js
// This example uses Node 8's async/await syntax.

// const oracledb = require('oracledb');

var oracledb = modules.oracledb;


//------Uncomment line 134 if you want to test it directly on the server script
//------Comment line 134 if you want to test in an app, otherwise you'll get an error that lib is already instanced
// oracledb.initOracleClient({ libDir: 'C:\\Neptune\\NPMmodules\\node_modules\\oracledb\\instantclient_21_6' });
//-------------------------------------------------------------------


// oracledb.outFormatObject = modules.oracledb.OUT_FORMAT_OBJECT;
// oracledb.outFormatObject = modules.oracledb.OUT_FORMAT_ARRAY;

const myusr = "Neptuno";
const mypw = "New20DeMnEpT22";
// const service_name = 'RUPTESTINGPL.lasalle.edu.co';
// const service_name = 'Neptuno@//172.19.0.132:1521/RUPTESTINGPL.lasalle.edu.co';
const service_name = "172.19.0.132:1521/RUPTESTINGPL.lasalle.edu.co";

async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection({
      user: myusr,
      password: mypw,
      connectString: service_name
    });

    var result_table = await connection.execute(
      // `SELECT manager_id, department_id, department_name
      //  FROM departments
      //  WHERE manager_id = :id`,
      // [103],  // bind value for :id
      // `SELECT * FROM plantilla_academica_sap.vw_carga_aprobada_neptuno`
      //  WHERE periodo IN :periodo
      //  AND id_plantilla IN :id_plantilla`,
      // [2022001, 3075]

      s_query,
      s_params_value,
      { outFormat: oracledb.OUT_FORMAT_OBJECT }

    );
    // console.log(result.rows);
    // var res_tab = JSON.stringify(result_table)
    res_tab = result_table
    // console.log();
    console.log(res_tab);
    console.log("teste");

  } catch (err) {
    log.info(err);
    console.log(err);
  } finally {
    console.log("Teste err");
    if (connection) {
      try {
        await connection.close();
        // console.log(connection);
      } catch (err) {
        log.info(err);

      }
    }
  }
}

console.log("");
console.log("Select begin:");
await run();

log.info("");
log.info("Result:");

result = res_tab;

log.info(result);

complete();