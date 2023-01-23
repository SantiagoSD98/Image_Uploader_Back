import app from "./app.js";
import * as dotenv from 'dotenv';

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

