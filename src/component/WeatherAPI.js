import axios from "axios";
import { Component } from "react";
import { Card } from "react-bootstrap";

export default class WeatherAPI extends Component{
    constructor(props){
        super(props);
        
        this.state={
            status: [],
            error: [],
            resMsg: []
        }
    }

    componentDidMount(){
        axios({
            method: 'get',
            url: "https://goweather.herokuapp.com/weather/Jakarta"
            // url: "https://goweather.herokuapp.com/weather/Curitiba",
        })
        .then(res => {
            this.setState({
                status: res.status 
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
                    <Card.Title>Weather API</Card.Title>
                    <Card.Subtitle className="mb-2 text-light fst-italic">https://goweather.herokuapp.com/weather/:city</Card.Subtitle>
                    <Card.Text>
                        Status: {status.length === 0 ? this.state.error : this.state.status} <br/>
                        Response Message: {this.state.resMsg}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}