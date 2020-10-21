const sqlite = require('sqlite');

async function setup(){
    const db = await sqlite.open('./dbtest.sqlite');
    await db.migrate({force: 'last'});

    const person = await db.all('SELECT * FROM person');
    console.log('ALL PERSON: ', person, null, 2);
    const vehicle = await db.all('SELECT * FROM vehicle');
    console.log('ALL VEHICLE: ', vehicle, null, 2);
    const microphones = await db.all('select * from microphone');
    console.log(JSON.stringify(microphones, null, 4));
}

setup();

// const { open } = require('sqlite')
// const sqlite3 = require('sqlite3')

// open({
//     filename: '/tmp/database.db',
//     driver: sqlite3.Database
//   }).then( async (db) => {
//     // do your thing
//     await db.migrate({force: 'last'})
//     const person = await db.all('SELECT * FROM person');
//     console.log('ALL PERSON: ', person, null, 2);
//     const vehicle = await db.all('SELECT * FROM vehicle');
//     console.log('ALL VEHICLE: ', vehicle, null, 2);
// })
