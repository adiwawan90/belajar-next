import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getAllPersons(req:NextApiRequest, res:NextApiResponse) {
    const db = await sqlite.open('./dbtest.sqlite');
    const persons = await db.all('select * from person')
    res.json(persons);
}