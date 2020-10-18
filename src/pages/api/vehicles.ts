import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';
import { authenticated } from './persons';

export default authenticated(async function getAllVehicles(req:NextApiRequest, res:NextApiResponse) {
    const db = await sqlite.open('./dbtest.sqlite');
    const vehicles = await db.all('select * from vehicle');

    res.json(vehicles);
})