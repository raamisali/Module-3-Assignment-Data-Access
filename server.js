const dotenv = require('dotenv');
dotenv.config({ path: './config.env' }); // this line has to come first sincewe need to tell where is the config file.
const app = require('./app');
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`App running on port ${port}...`);
});
