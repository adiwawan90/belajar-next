import {useState, useEffect} from 'react';
import Link from 'next/link';

const Details = ({owners}) => {
    // const datas = [
    //     {v: 'car', p: 'adi'},
    //     {v: 'bus', p: 'wawan'},
    //     {v: 'motor', p: 'rony'},
    // ]

    // const [owners, setOwners] = useState([]);
    // useEffect(() => {
    //     const loadData = async () => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const ownersList = await response.json();
    //         setOwners(ownersList)
    //     }

    //     loadData();
    // },[])
    return (
        <div>
        
            {
                owners.map((owner)=> (
                    <div key={owner.id}>
                        <Link as={`/${owner.username}/${owner.name}`} href='/[vehicle]/[person]'>
                            <a>Route to {`${owner.username}/${owner.name}`}</a>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Details ;

Details.getInitialProps = async ctx => {
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
        owners: ownersList
    }
}
