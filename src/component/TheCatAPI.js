import axios from "axios";
import { Component } from "react";
import { Card } from "react-bootstrap";

export default class TheCatAPI extends Component{
    constructor(props){
        super(props);
        
        this.state={
            status: [],
            error: [],
            resMsg: []
        }
    }

    componentDidMount(){
        const x_api_key_value = "1280b4c1-8c31-4e40-af1a-63fca4bf37ac";
        axios({
            method: 'post',
            url: "https://api.thecatapi.com/v1/votes",
            headers: {
                "x-api-key": x_api_key_value
            },
            data: {
                "image_id": "asp2",
                "sub_id": "my-user-1234",
                "value": 1
            }
        })
        .then(res => {
            this.setState({
                status: res.status,
                resMsg: res.data.message
            })
            console.log(res);
        })
        .catch(err => {
            this.setState({
                error: err.message + " (" + err.code + ")",
                resMsg: err.response.data.message
            })
            console.log(err);
        });
    }

    render(){
        const status = this.state.status;
        return(
            <Card style={{ width: '18rem' }} bg={status.length === 0 ? "danger" : "success"} text="light">
                <Card.Body>
                    <Card.Title>The Cat API</Card.Title>
                    <Card.Subtitle className="mb-2 text-light fst-italic">https://api.thecatapi.com/v1/votes</Card.Subtitle>
                    <Card.Text>
                        Status: {status.length === 0 ? this.state.error : this.state.status}<br/>
                        Response Message: {this.state.resMsg}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}