import React from 'react'
import Signup from './signup/Signup'
import { Container, Col, Row } from 'reactstrap';

export default function Auth() {
    return (
        <>
            <Container>
                <Row>
                    <Col md="6">
                        <Signup />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
