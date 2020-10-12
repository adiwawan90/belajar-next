import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getAllVehicles(req:NextApiRequest, res:NextApiResponse) {
    const id = req.query.id
    const db = await sqlite.open('./dbtest.sqlite');

    const vehiclesById  = await db.all('select * from vehicle where ownerId= ?', [id]);

    res.json(vehiclesById);
}