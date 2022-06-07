import axios from "axios";
import { Component } from "react";
import { Card } from "react-bootstrap";

export default class RandomUserAPI extends Component{
    constructor(props){
        super(props);
        
        this.state={
            status: [],
            error: []
        }

    }

    componentDidMount(){
        axios({
            method: 'get',
            url: "https://api.randomuser.me/",
            params: {nat: 'US', results: '5'}
        })
        .then(res => {
            this.setState({
                status: res.status
            })
            console.log(res);
        })
        .catch(err => {
            this.setState({
                error: err.message + " (" + err.code + ")"
            })
        });
    }

    render(){
        const status = this.state.status;
        return(
            <Card style={{ width: '18rem' }} bg={status.length === 0 ? "danger" : "success"} text="light">
                <Card.Body>
                    <Card.Title>Random User API</Card.Title>
                    <Card.Subtitle className="mb-2 text-light fst-italic">https://api.randomuser.me/?nat=US&results=5</Card.Subtitle>
                    <Card.Text>
                        Status: {status.length === 0 ? this.state.error : this.state.status}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}