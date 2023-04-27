// Inicio el servidor y requiero variables de entorno
const app = require('./server');
const port = app.get('port');

app.listen(port, () => console.log("Listening on port " + port));