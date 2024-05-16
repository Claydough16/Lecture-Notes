import React, { useState, useRef } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function Signup() {

    // const [ firstName, setFirstName ] = useState('');
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        // console.log('firstName: ', firstNameRef.current.value)

        const firstName = firstNameRef.current.value;
        const lastName = firstNameRef.current.value;
        const email = firstNameRef.current.value;
        const password = firstNameRef.current.value;

        let bodyObj = JSON.stringify({
            firstName, lastName, email, password
        })
        // console.log(bodyObj)

        const url= 'http://localhost:4000/user/signup';
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        //* Setting our headers to accept the JSON object within the browser.

        const requestOption = {
            headers,
            body: bodyObj,
            method: 'POST'
        }

        try {
            const response = await fetch(url, requestOption)
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <>
            <h2>Signup</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>First Name:</Label>
                    <Input 
                        // value={firstName}
                        // onChange={e => setFirstName(e.target.value)}
                        innerRef={firstNameRef}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Last Name:</Label>
                    <Input
                        innerRef={lastNameRef}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Email:</Label>
                    <Input
                        innerRef={emailRef}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>
                    <Input
                        innerRef={passwordRef}
                    />
                </FormGroup>
                <Button type='submit'>Signup</Button>
            </Form>
        </>
    )
}
