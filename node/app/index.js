const config = {
  db: {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
  },
  port: '3000'
}
const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection(config.db);

function listaNomeTemplate(rows) {
  let html = '<h1>Full Cycle Rocks!</h1><hr>'
  html += '<ul>'
  html += Object.keys(rows).map(key => '<li>' + rows[key].name + '</li>').join('')
  html += '</ul>'
  return html;
}

connection
  .query('CREATE TABLE IF NOT EXISTS peoples (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(55), PRIMARY KEY(id)) CHARACTER SET utf8 COLLATE utf8_unicode_ci;');

connection
  .query('INSERT INTO peoples SET ?', { name: 'Giovani Junior' });

app.get('/', (req, res) => {
  connection
    .query('SELECT * FROM peoples', (err, rows) => {
      if (err) throw err
      res.send(listaNomeTemplate(rows))
    });
});

app.listen(config.port, () => {
  console.log('Rodando na porta: ' + config.port)
})
