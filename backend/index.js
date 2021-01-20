const app = require('./app/app.js');
const { PORT } = require('./app/config/port.js')

const server = async () =>
    app.listen(PORT, () =>
        console.info(`Server on PORT: ${PORT}`));

server();