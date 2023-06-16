const app = require('./app');
const { PORT } = require('./config');

const start = () => {
    try {
        app.listen(PORT, () => console.log(`App started on port ${PORT}`));
    } catch (error) {
        console.error(error);
    }
}

start();