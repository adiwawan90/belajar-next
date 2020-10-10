import { useRouter } from 'next/router'
import { Link } from 'next/link';

const Hay = () => {
    const router = useRouter();

    console.log(router.query);
    const {vehicle, person} = router.query;
    return (
        <>
            <h1>Hellloooooo...,</h1> <br/>
            <h2>{`Vehicle: ${vehicle}, person: ${person}`}</h2>
        </>
    )
}

export default Hay