const app = require('./app');
const { PORT } = require('./src/config');

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`App started on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
}

start();