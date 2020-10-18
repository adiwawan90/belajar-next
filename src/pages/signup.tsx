import { useRef, useState } from 'react';

export default function signup () {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    const [message, setMessage] = useState<any>(null)

    const handleSignup = async () => {
        const resp = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameRef.current?.value,
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
            <h2>Create a new user!</h2>
            <input type="text" placeholder="name" ref={nameRef} />
            <input type="text" placeholder="email" ref={emailRef} />
            <input type="password" placeholder="password" ref={passRef} />
            <button onClick={handleSignup} type="submit">signup</button>
        </div>
    )
}