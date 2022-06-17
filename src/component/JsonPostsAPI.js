import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export default function JsonPostsAPI(){
    const [status, setStatus] = useState([]);
    const [error, setError] = useState([]);

    const getApi = () => {
        axios({
            method: 'get',
            url: "https://jsonplaceholder.typicode.com/posts",
        })
        .then(res => {
            setStatus(res.status);
            console.log(res);
        })
        .catch(err => {
            setError(err.message + " (" + err.code + ")");
        });
    }

    useEffect(() => {
        getApi();
    })

    return(
        <Card style={{ width: '18rem' }} bg={status.length === 0 ? "danger" : "success"} text="light">
            <Card.Body>
                <Card.Title>Jsonplaceholder Posts API</Card.Title>
                <Card.Subtitle className="mb-2 text-light fst-italic">https://jsonplaceholder.typicode.com/posts</Card.Subtitle>
                <Card.Text>
                    Status: {status.length === 0 ? error : status}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}