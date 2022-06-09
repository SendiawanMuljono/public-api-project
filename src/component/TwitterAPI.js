import axios from "axios";
import { Component } from "react"
import { Card } from "react-bootstrap";

//API Key: 0DJbGUMw9iSBumpvv5PTQAEVA
//API Key Secret: mePbkKkkpAlUCGFlxYZxjKFKeOWO7JtBW5hyoldZM18HGQaCyT
//Bearer Token: AAAAAAAAAAAAAAAAAAAAAG35dQEAAAAAbgHi1QPbRl0V9KhTJGvgaoR6U%2BU%3DUNLst6xpf8O78am8TOZWzwG3gAbtZkvc64FcBp8pH0WM1ODZEM
export default class TwitterAPI extends Component{
    constructor(props){
        super(props);

        this.state={
            status: [],
            error: []
        }
    }

    componentDidMount(){
        const token = "AAAAAAAAAAAAAAAAAAAAAG35dQEAAAAAbgHi1QPbRl0V9KhTJGvgaoR6U%2BU%3DUNLst6xpf8O78am8TOZWzwG3gAbtZkvc64FcBp8pH0WM1ODZEM";
        axios({
            method: 'get',
            url: 'https://api.twitter.com/2/tweets/20',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Access-Control-Allow-Origin": "*"
            }
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
            console.log(err);
        })
    }

    render(){
        const status = this.state.status;
        return(
            <Card style={{ width: '18rem' }} bg={status.length === 0 ? "danger" : "success"} text="light">
                <Card.Body>
                    <Card.Title>Twitter API</Card.Title>
                    <Card.Subtitle className="mb-2 text-light fst-italic">https://api.twitter.com/2/tweets/20</Card.Subtitle>
                    <Card.Text>
                        Status: {status.length === 0 ? this.state.error : this.state.status}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}