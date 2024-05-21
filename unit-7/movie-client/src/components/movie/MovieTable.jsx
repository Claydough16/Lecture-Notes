import React from 'react'
import { Button, Table } from 'reactstrap'
import { baseURL } from '../../environment'

function MovieTable(props) {

    // console.log(props);

    async function deleteMovie(id) {
        const url = `${baseURL}/movies/${id}`

        try {
            
            let res = await fetch(url, {
                headers: new Headers({
                    'Authorization': props.token
                }),
                method: 'DELETE'
            });

            let data = await res.json();

            if(data) {
                props.fetchMovies();
            }

        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <>
            <h1>List of Movies</h1>
            <Table striped>
                <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Genre
                        </th>
                        <th>
                            Rating
                        </th>
                        <th>
                            Length
                        </th>
                        <th>
                            Year Released
                        </th>
                        <th>
                            Edit | Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.movies.map(movie => (
                    <tr key={movie._id}>
                        <th scope="row">
                            {movie.title}
                        </th>
                        <td>
                            {movie.genre}
                        </td>
                        <td>
                            {movie.rating}
                        </td>
                        <td>
                            {movie.length} mins
                        </td>
                        <td>
                            {movie.releaseYear}
                        </td>
                        <td>
                            <Button 
                                color='danger'
                                onClick={() => deleteMovie(movie._id)}
                            >Delete</Button>
                        </td>
                    </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default MovieTable