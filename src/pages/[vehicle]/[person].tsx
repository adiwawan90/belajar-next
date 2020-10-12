import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import { VehiclePerson } from '../../../api/VehiclePerson';

export interface PersonProps {
    ownersList?: VehiclePerson[];
}

const Person = ({ownersList}: PersonProps) => {
    const router = useRouter();

    const {vehicle, person} = router.query;

    const [owners, setOwners] = useState(ownersList);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const ownersList: VehiclePerson[] | undefined = await response.json();
            setOwners(ownersList)
        }
        if (ownersList?.length == 0){
            loadData();
        }
    },[])

    if (!owners) {
        return <h2>Loading ...</h2>
    }
    return (
        <>
            <h1>Hellloooooo...,</h1> <br/>
            <h2>{`Vehicle: ${vehicle}, person: ${person}`}</h2>
        </>
    )
}

export default Person

Person.getInitialProps = async ({query, req}: NextPageContext) => {
    if(!req) {
        return {ownersList: []}
    }
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const ownersList: VehiclePerson[] | undefined = await response.json();

    return {
        // owners: [
        //     {
        //         username: 'adi',
        //         name: 'adi setyawan'
        //     },
        //     {
        //         username: 'wawan',
        //         name: 'adi guerero'
        //     },
            
        // ]
        ownersList: ownersList
    }
}
