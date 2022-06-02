import axios from "axios";
import { Component } from "react";
import { Card } from "react-bootstrap";

export default class RandomUserAPI extends Component{
    state={
        status: [],
        error: []
    }

    componentDidMount(){
        axios.get("https://api.randomuser.me/?nat=US&results=5")
            .then(res => {
                this.setState({
                    status: res.status
                })
            })
            .catch(err => {
                this.setState({
                    error: err
                })
            });
    }

    render(){
        const status = this.state.status;
        return(
            <Card style={{ width: '18rem' }} bg={status ? "success" : "danger"} text="light">
                <Card.Body>
                    <Card.Title>Random User API</Card.Title>
                    <Card.Subtitle className="mb-2 text-light fst-italic">https://api.randomuser.me/?nat=US&results=5</Card.Subtitle>
                    <Card.Text>
                        Status: {status ? this.state.status : this.state.error}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}