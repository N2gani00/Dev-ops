import express from 'express';
import { pgPool } from './pgconf.js';
const app = express()
const port = process.env.port || 3000;

app.use(express.static('public'));

app.get('/info', async (req, res) => {
    console.log('This is a test for database');
     try {
      // const q = await pgPool.query('SELECT * FROM cars');      
      // res.json(q.rows);
    } catch (error) {
      console.log(error.message);
      
      res.send(error.message);
    }
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`------ Example app listening on port ${port}`)
})



export {app};