import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

// export default async function getAllVehicles(req:NextApiRequest, res:NextApiResponse) {
//     const id = req.query.id
//     const db = await sqlite.open('./dbtest.sqlite');
//     // const person = await db.get(`select * from person where id=${id}`);
//     const person = await db.get('select * from person where id= ?', [id]);

//     res.json(person);
// }

// membuat PUT untuk update date 
export default async function getPersonById(req:NextApiRequest,res: NextApiResponse) {
    const db = await sqlite.open('./dbtest.sqlite');

    // filter dahulu method nya, jika method nya PUT makaa update data
    if (req.method === 'PUT') {
        const statement = await db.prepare(
            `UPDATE person SET name=?, email=? where id=?`
        );
        const result = await statement.run(
            req.body.name,
            req.body.email,
            req.query.id
        );
        result.finalize();

    }
    // tampilkan data jika mehod selain PUT
    const person = await db.get('select * from person where id= ?', [req.query.id]);

    res.json(person);
}