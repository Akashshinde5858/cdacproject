import React, { Component } from 'react';
import FlightServiceRest from '../services/FlightServiceRest';
import plane from '../assets/images/travel1.jpg';
import Header from './Header';


class FlightListAdmin extends Component {
    constructor(props) {
        super(props);
        // this.service = new FlightService();
        this.service = new FlightServiceRest();
                this.state = {
                    }
        if(!localStorage.getItem('user')){
            alert('Please Login')
            this.props.history.push('/login')
            
        }
        else{
            if(JSON.parse(localStorage.getItem('user')).isadmin === 1 ){
                
            }
            else{
                alert('Access Denied')
                this.props.history.push('/')
               
            }
        }
    }
       

    componentDidMount() {
        this.getFlights();
    }

    /**
     * This method interacts with service to fetch all flights
     */
    getFlights = () => {
        this.service.getFlights().then(data => {
            console.log(data);
            this.setState({flights : data})
        })
    }

    /**
     * This method interacts with service to delete flight
    */
    onDelete = (fid) => {  

        if(window.confirm("Are you sure you want to delete the flight " + fid + " ?")) {
            this.service.deleteFlight(fid).then(response => {
                this.getFlights();
            })
        }
    }

    /**
     * This method stores flight data in local storage and redirects to UpdateFlight
    */
    onEdit = (flight) => {
        localStorage.setItem('flight', JSON.stringify(flight));
        console.log("flight to be updated : ",localStorage.getItem('flight'));
        this.props.history.push('/updateFlight');
    }

    /**
     * this method calculate travel duration
     */
    calculateDuration = (f) => {
        let t1 = new Date('1970-01-01T' + f.departureTime + 'Z')
        let t2 = new Date('1970-01-01T' + f.arrivalTime + 'Z')
        let hour = t1.getUTCHours() - t2.getUTCHours()
        let min = t1.getUTCMinutes() - t2.getUTCMinutes()

        if( hour < 0)
        {
            hour = 12+hour
        }
        if(min < 0){
            min = 60+min
        }

        return (hour +'hr '+min + 'min')

    }

    render() {
        if(!localStorage.getItem('user')){
            if(!this.state.flights)
                return null;
        }
        else{
            if(JSON.parse(localStorage.getItem('user')).isadmin === 1  )
                if(!this.state.flights)
                    return null;
        }
        
       

        const flightlist = this.state.flights.map(f => {
            return (
                <div className="card m-4 " style={{width: 350, height: "fit-content"}}>
                    
                        <div className="card-header">
                            <h5>Flight {f.flightNumber}</h5>
                        </div>
                        
                        <div className="card-body">
                        <div className="row mb-2">
                            <div className="col fw-bold">Source</div>
                            <div className="col">{f.source}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col fw-bold">Destination</div>
                            <div className="col">{f.destination}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col fw-bold">Travel Date</div>
                            <div className="col">{f.travelDate}</div>
                        </div>  
                        <div className="row mb-2">
                            <div className="col fw-bold">Takeoff Time</div>
                            <div className="col">{f.arrivalTime}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col fw-bold">Landing Time</div>
                            <div className="col">{f.departureTime}</div>
                        </div>    
                        <div className="row mb-2">
                            <div className="col fw-bold">Duration</div>
                            <div className="col">{this.calculateDuration(f)}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col fw-bold">Fare</div>
                            <div className="col">{f.price}</div>
                        </div>  
                        <div className="row mb-2">
                            <div className="col fw-bold">Available Seats</div>
                            <div className="col">{f.availableSeats}</div>
                        </div>  
                        <br/>
                            <button className="btn btn-danger mr-3" onClick={() => this.onDelete(f.flightNumber)}>Delete</button>
                            <button className="btn btn-primary" onClick={() => this.onEdit(f)}>Edit</button>
                        </div>
                        
                    
                </div>
            )
        });

        return (
            <div style={{backgroundImage: `url(${plane})`,overflow: 'hidden', height: '20000px'}}>
                <Header/>
                <div className="pt-5">
                <div className="pt-3"  style={styling.wrapper}>
                {flightlist}
                </div>
            </div>
            </div>
        );
    }
}

let styling = { 
    wrapper : {
        height: "700px",
        display : "flex", 
        flexWrap: "wrap", 
        justifyContent: "center"
    }
}

export default FlightListAdmin;