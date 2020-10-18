import { useRef, useState } from 'react';

export default function login () {
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    const [message, setMessage] = useState<any>(null)

    const handleLogin = async () => {
        const resp = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailRef.current?.value,
                password: passRef.current?.value
            })
        });
        const json = await resp.json();
        setMessage(json)
    }

    return (
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', marginTop: '8vh', flexDirection: 'column'}}>
            {JSON.stringify(message)}
            <input type="text" placeholder="email" ref={emailRef} />
            <input type="password" placeholder="password" ref={passRef} />
            <button onClick={handleLogin} type="submit">Login</button>
        </div>
    )
}