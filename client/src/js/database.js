import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>{ 
console.log('Push to the Database')
//creates a connection to the version of the the database we want
const jateDb = await openDB('jate', 1);

//make a transaction to the database
const tx = jateDb.transaction('jate','readwrite')

//Open the store you want
const store = tx.objectStore('jate');

//passing the content 
const request = store.put({id: 1, value: content });

//confirm the request
const result = await request;
console.log(result);

};



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => { 
  console.error('getDb not implemented');

//create the connection to the database
const jateDb = await openDB('jate', 1);

//make the transaction again
const tx = jateDb.transaction('jate','readonly');
//open the store we want
const store = tx.objectStore('jate');
// using get all to get all the data in the database 
const request = store.getAll();

//confirmation of the request 
const result = await request;
console.log(result);
return result;

};
initdb();
