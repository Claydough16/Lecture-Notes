import React, { useEffect, useState } from 'react'
import MovieCreate from './MovieCreate'
import { Col, Container, Row } from 'reactstrap'
import MovieTable from './MovieTable'
import { baseURL } from '../../environment'

function MovieIndex(props) {

    const [movies, setMovies] = useState([])

    const fetchMovies = async () => {
        const url = `${baseURL}/movies`;

        const options = {
            method: 'GET',
            headers: new Headers({
                "Authorization": props.token
            })
        }

        try {

            const res = await fetch(url, options);
            const data = await res.json();
            // console.log(data);
            setMovies(data.result);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        if (props.token) {
            fetchMovies()
        }
    }, [props.token])

    return (
        <>
            <Container>
                <Row>
                    <Col md="4">
                        <MovieCreate token={props.token} fetchMovies={fetchMovies} />
                    </Col>
                    <Col md="8">
                        <MovieTable movies={movies} fetchMovies={fetchMovies} token={props.token} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MovieIndex