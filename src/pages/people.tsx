import { NextPageContext } from 'next';
import { myGet } from '../../api/myGet';

export default function people({peoples}: any) {
    return (
        <div>
            <h2>Hello People</h2>
            {JSON.stringify(peoples)}
        </div>
    )
}

people.getInitialProps = async (ctx: NextPageContext) => {
    
    const json = await myGet('http://localhost:3000/api/persons', ctx)
    return {peoples: json}

}
