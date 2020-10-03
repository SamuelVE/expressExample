import express from 'express'
import routes from './src/routes/crmRoutes'
import mysql from 'mysql'

const app = express()
const PORT = 4000;
const databaseName = 'crm'

routes(app);

var jeison = {
    "name": "samuel",
    "lastname": "vera"
}


var oldMessage = `Node and express server running on port ${PORT}`

app.get('/', (req,res) =>
    res.send(jeison)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);

//database connection
const connection = mysql.createConnection({
    host: "localhost",
    port: "3406",
    user: "root",
    password: "test1234",
    database: databaseName,
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.time('mysql');
    console.log("Connected to mysql database!"); 
    connection.end();  
  });

  function insertMySQL(connection, data, callback) {
      const values = [];
      const sql = `INSERT INTO ${databaseName} (nombres, apellidos, dni, cuil, zip, emailInstitucional, telefono, emailPersonal, celular, tipoDeInvestigador, categoriaDelInvestigador, fechaDeObtencion, situacionAcademica, pasaporte, horasDedicadas, nResolucionCategoria) VALUES ?`;

      Object.keys(data).forEach((key) => {
          values.push([key, data[key]]);
      });
  }
  