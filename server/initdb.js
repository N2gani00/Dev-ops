import { pgPool } from "./pgconf.js";

await dbtest();

async function dbtest(){
  try {
    await pgPool.query('CREATE TABLE cars (brand VARCHAR(255),model VARCHAR(255))')
    await pgPool.query("INSERT INTO cars VALUES('Saab', '90')")
    await pgPool.query("INSERT INTO cars VALUES('Seat', 'Leon')")
    await pgPool.query("INSERT INTO cars VALUES('Opel', 'Mocca')")    
  } catch (error) {
    console.log(error);
  }
}