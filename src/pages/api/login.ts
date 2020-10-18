import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secret } from '../../../api/secret';
import cookie from 'cookie';

// export default async function getAllVehicles(req:NextApiRequest, res:NextApiResponse) {
//     const id = req.query.id
//     const db = await sqlite.open('./dbtest.sqlite');
//     // const person = await db.get(`select * from person where id=${id}`);
//     const person = await db.get('select * from person where id= ?', [id]);

//     res.json(person);
// }

// membuat PUT untuk update date 
export default async function login(req:NextApiRequest,res: NextApiResponse) {
    const db = await sqlite.open('./dbtest.sqlite');

    // filter dahulu method nya, jika method nya POST makaa update data
    if (req.method === 'POST') {
       const person = await db.get('select * from person where email = ?', [req.body.email])

       bcrypt.compare(req.body.password, person.password, (err, result) => {
        if(!err && result) {
            // menggunakan JWT
            const claims = {sub: person.id, myPersonEmail:person.email}
            const token = jwt.sign(claims, secret, { expiresIn: '1h' })

            // adding cookie
            res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                maxAge: 3600, // sesuai dgn lama token,
                path: '/'
            }))
            res.json({message: 'welcomeback to the App!', authToken: token})
        } else {
            res.json({message: 'Oops, something went wrong'})
        }
       });
    } else { // tampilkan data jika mehod selain POST
        res.status(405).json({message: 'we only support POST'})
    }
}