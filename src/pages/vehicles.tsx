import { NextPageContext } from 'next';
import { myGet } from '../../api/myGet';

export default function vehicle({vehicles}: any) {
    return (
        <div>
            <h2>Hello People</h2>
            {JSON.stringify(vehicles)}
        </div>
    )
}

vehicle.getInitialProps = async (ctx: NextPageContext) => {
    
    const json = await myGet('http://localhost:3000/api/vehicles', ctx)
    return {vehicles: json}

}
