require("dotenv").config();
const server = require('./app');
const { PORT } = require('./config/index');

async function main() {
  try {
    server.listen(PORT, ()=> console.log(`server listening on port ${PORT}`));
  } catch (error) {
    console.error(error);
  }
}

main();