import React, { Component } from 'react';
import FlightServiceRest from '../services/FlightServiceRest';
import plane from '../assets/images/travel1.jpg';
import Header from './Header';
import Footer from './Footer';

/**
 * 
 * this component takes input from admin for updating existing flight
 * FlightServiceRest : Service for updating flight in the database
*/
class UpdateFlight extends Component {

    constructor(props){
        super(props);
        // this.service= new FlightService();
        if(!localStorage.getItem('user')){
            alert('Please Login')
            this.props.history.push('/login')
        }
        else{
            if(JSON.parse(localStorage.getItem('user')).isadmin === 1 ){
                this.service = new FlightServiceRest();
                this.temp = JSON.parse(localStorage.getItem('flight'));
                this.state = {
                    flightNumber: this.temp.flightNumber,
                    source : this.temp.source,
                    destination: this.temp.destination,
                    travelDate: this.temp.travelDate,
                    arrivalTime: this.temp.arrivalTime,
                    departureTime: this.temp.departureTime,
                    price: this.temp.price,
                    availableSeats: this.temp.availableSeats
                }
            }
            else{
                alert('Access Denied')
                this.props.history.push('/')
            }
        }

        console.log("flight", this.temp);
    }

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }

    /**
     * This method interacts with service to update flight in database
     * takes data from local storage
     * redirects to FlightListAdmin component
    */
    onUpdate = (e) => { 
        e.preventDefault();
        const flight = this.state;
        console.log(flight);
        this.service.updateFlight(flight);
        alert("Your flight has been updated");
        this.props.history.push('/allFlights')
    }

    render() {
        if(!localStorage.getItem('user')){
            return null
        }
        else{
            if(JSON.parse(localStorage.getItem('user')).isadmin === 0  )
            {return null}
        }
        return (
            <div>
                <Header/>
            <div className="container-fluid" style={styling.wrapper}>

            <form className="m-auto mt-3 m-1 border border-dark p-3" onSubmit={this.onUpdate}
             style={styling.formStyle}>
                <h3 className="mb-3" style={styling.heading}>Update Flight Schedule</h3>
                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Flight Id</label>
                    <input type="number" className="col-5 my-1 p-1 border border-darken-2" value={this.state.flightNumber}
                     name="flightNumber" disabled />
                </div>
                {/* <label>Source</label> */}
                <div className="input-group mb-2 mr-sm-2">
                    {/* <!-- Drop down for source --> */}    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2" for="source">Source</label>
                    <select className="custom-select my-1 mr-sm-2" id="source" name="source" onClick={this.handleInput} required>
                    <option value="Chennai" onClick={this.handleInput}>{this.state.source}</option>
                    <option value="Delhi" onClick={this.handleInput}>Delhi</option>
                    <option value="Mumbai" onClick={this.handleInput}>Mumbai</option>
                    <option value="Kolkata" onClick={this.handleInput}>Kolkata</option>
                    </select>
                </div>    
                    {/* <!-- Drop down for destination --> */}
                
                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Destination</label>
                    <select className="custom-select my-1 mr-sm-2" name="destination" onClick={this.handleInput} required>
                    <option value="Chennai" onClick={this.handleInput}>{this.state.destination}</option>
                    <option value="Delhi" onClick={this.handleInput}>Delhi</option>
                    <option value="Mumbai" onClick={this.handleInput}>Mumbai</option>
                    <option value="Kolkata" onClick={this.handleInput}>Kolkata</option>
                    </select>
                </div>    
                    
                
                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Flying Date</label>
                    <input className="col-5 my-1 p-1 border border-darken-2" type="date" value={this.state.travelDate}
                     name="travelDate" onChange={this.handleInput} required />
                </div>

                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Takeoff Time</label>
                    <input className="col-5 my-1 p-1 border border-darken-2" type="time" value={this.state.arrivalTime}
                     name="arrivalTime" onChange={this.handleInput}  required />
                </div>
                
                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Landing Time</label>
                    <input className="col-5 my-1 p-1 border border-darken-2" type="time" value={this.state.departureTime}
                     name="departureTime" onChange={this.handleInput} required />
                </div>

                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Fare</label>
                    <input type="number" className="col-5 my-1 p-1 border border-darken-2" value={this.state.price}
                     name="price" onChange={this.handleInput}  required />
                </div>

                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Available seats</label>
                    <input type="number" className="col-5 my-1 p-1 border border-darken-2" value={this.state.availableSeats}
                     name="availableSeats" onChange={this.handleInput}  required />
                </div>
                
                <button type="submit" className="mr-4 btn btn-warning">Submit</button>
                <button type="reset" className="btn btn-outline-dark">Reset</button>
            </form>
            </div>
        <Footer/>
        </div>

        );
    }
}

let styling = {
    wrapper : {
        background: `url(${plane})`,
        paddingTop : 70,
        paddingBottom: 70
    },
    heading : {
        color : "midnightblue",
        textAlign: "center"
    },
    formStyle : {
        minWidth: 300, 
        maxWidth: 500
    }
}

export default UpdateFlight;