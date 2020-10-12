import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getAllVehicles(req:NextApiRequest, res:NextApiResponse) {
    const id = req.query.id
    const db = await sqlite.open('./dbtest.sqlite');
    const vehicle = await db.get(`select * from vehicle where id=${id}`);
    // const vehicle = await db.get('select * from vehicle where id= ?', [id]);

    res.json(vehicle);
}