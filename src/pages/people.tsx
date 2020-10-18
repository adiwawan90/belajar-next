import { NextPageContext } from 'next';
import Router from 'next/router';

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

async function myGet(url: string, ctx: NextPageContext) {
    const cookie = ctx.req?.headers.cookie;
    const resp = await fetch(url, {
        headers: {
            cookie: cookie!
        }
    });

    if (resp.status === 401 && !ctx.req) {
        Router.replace('/login');
        return {};
    }

    if (resp.status === 401 && !ctx.req) {
        ctx.res?.writeHead(302, {
            Location: 'http://localhost:3000/login'
        });
        ctx.res?.end();
        return;
    }

    const json = await resp.json();
    return json
}