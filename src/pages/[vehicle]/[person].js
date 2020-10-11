import { useRouter } from 'next/router';
import { Link } from 'next/link';
import {useState, useEffect} from 'react';

const Hay = ({ownersList, ctx}) => {
    const router = useRouter();

    console.log('ini ctx: ',ctx);
    const {vehicle, person} = router.query;

    const [owners, setOwners] = useState(ownersList);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const ownersList = await response.json();
            setOwners(ownersList)
        }
        if (ownersList.length == 0){
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

export default Hay

Hay.getInitialProps = async ctx => {
    if(!ctx.req) {
        return {ownersList: []}
    }
   const { query } = ctx;
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const ownersList = await response.json();

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
        ownersList: ownersList,
        ctx
    }
}
