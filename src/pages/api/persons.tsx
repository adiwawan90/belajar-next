import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import sqlite from 'sqlite';
import jwt from 'jsonwebtoken';
import { secret } from '../../../api/secret';

export const authenticated = (fn:NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    jwt.verify(req.headers.authorization!, secret, async function(err, decoded) {
        if (!err && decoded) {
            return await fn(req, res)
        }

        res.status(401).json({message: 'Sorry you are not authenticated'});
    })


}

export default authenticated(async function getPersons(req:NextApiRequest, res:NextApiResponse) {
    const db = await sqlite.open('./dbtest.sqlite');
    const persons = await db.all('select id, email, name from person')
    res.json(persons);
})