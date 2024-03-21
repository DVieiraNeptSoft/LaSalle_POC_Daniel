var oracledb = modules.oracledb; //instance the module

const myusr = ""; //user
const mypw = ""; //password
const service_name = ""; //name of the service that we will connect to

async function run() {

    let connection;

    try {
        connection = await oracledb.getConnection({
            user: myusr,
            password: mypw,
            connectString: service_name
        });

        var result = await connection.execute(
       `SELECT manager_id, department_id, department_name
       FROM departments
       WHERE manager_id = :id`,
            [103],  // bind value for :id
        );
        console.log(result.rows);

    } catch (err) {
        log.info(err);
        console.log(err);
    } finally {
        console.log("Teste err");
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                log.info(err);

            }
        }
    }
}

await run();