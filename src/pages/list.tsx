import Link from 'next/link';
import { VehiclePerson } from '../../api/VehiclePerson';

export interface ListProps {
    ownersList: VehiclePerson[] | undefined;
}

const List = ({ownersList}: ListProps) => {
    return (
        <div>
            {
                ownersList?.map((owner, i)=> (
                    <div key={i}>
                        <Link as={`/${owner.username}/${owner.name}`} href='/[vehicle]/[person]'>
                            <a>Navigate to {`${owner.username}/${owner.name}`}</a>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default List ;


List.getInitialProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const ownersList: VehiclePerson[] | undefined =  await response.json();

    return {
        ownersList: ownersList
    }
}
