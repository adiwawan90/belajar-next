import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';
import bcrypt from 'bcrypt';

// export default async function getAllVehicles(req:NextApiRequest, res:NextApiResponse) {
//     const id = req.query.id
//     const db = await sqlite.open('./dbtest.sqlite');
//     // const person = await db.get(`select * from person where id=${id}`);
//     const person = await db.get('select * from person where id= ?', [id]);

//     res.json(person);
// }

// membuat PUT untuk update date 
export default async function signup(req:NextApiRequest,res: NextApiResponse) {
    const db = await sqlite.open('./dbtest.sqlite');

    // filter dahulu method nya, jika method nya POST makaa update data
    if (req.method === 'POST') {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {

        
            const statement = await db.prepare(
                `INSERT INTO person (name, email, password) values (?, ?, ?)`
            );
            const result = await statement.run(
                req.body.name,
                req.body.email,
                hash
            );
            result.finalize();

            const person = await db.all('select * from person ');
            
            res.json(person);
        });
    } else { // tampilkan data jika mehod selain POST
        res.status(405).json({message: 'we only support POST'})
    }
}