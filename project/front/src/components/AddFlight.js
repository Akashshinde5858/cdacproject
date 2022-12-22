import React from 'react';
import plane from '../assets/images/travel1.jpg';
import Footer from './Footer';
import Header from './Header';

import FlightServiceRest from '../services/FlightServiceRest';


class AddFlight extends React.Component {
    constructor(props){
        super(props);
        
        if(!localStorage.getItem('user')){
            alert('Please Login')
            this.props.history.push('/login')
        }
        else{
            if(JSON.parse(localStorage.getItem('user')).isadmin === 1 ){
            this.service = new FlightServiceRest();
            this.state = {
                source : undefined,
                destination: undefined,
                travelDate: undefined,
                arrivalTime: undefined,
                departureTime: undefined,
                price: 0,
                availableSeats: 0
            }
        }
        else{
            alert('Access Denied')
            this.props.history.push('/')
        }

    }
        
}
    /**
     * This method handles onChange event for input and changing states accordingly
     */
    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    /**
     * This method interacts with service to add flight in database on submit event
     * redirects to FlightListAdmin component
     */
    onSave = (e) => {
        e.preventDefault();
        const flight = this.state;
        console.log(flight);
        this.service.saveFlight(flight);
        alert("The flight has been added");
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
            <Header />
        
        <div className="container-fluid" style={styling.wrapper}>
            
            <form className="m-auto mt-3 m-1 border border-dark p-3" onSubmit={this.onSave}
             style={styling.formStyle}>
                <h1 className="mb-3" style={styling.heading}>Add New Flight Schedule</h1>
            
                <div className="input-group mb-2 mr-sm-2">
                    {/* <!-- Drop down for source --> */}    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2" for="source">Source</label>
                    <select className="custom-select my-1 mr-sm-2" id="source" name="source" onClick={this.handleInput} required>
                        <option value="Chennai" onClick={this.handleInput}>Chennai</option>
                        <option value="Delhi" onClick={this.handleInput}>Delhi</option>
                        <option value="Mumbai" onClick={this.handleInput}>Mumbai</option>
                        <option value="Kolkata" onClick={this.handleInput}>Kolkata</option>
                        <option value="Goa" onClick={this.handleInput}>Goa</option>
                        <option value="Pune" onClick={this.handleInput}>Pune</option>
                        <option value="Jaipur" onClick={this.handleInput}>Jaipur</option>
                        <option value="Bangalore" onClick={this.handleInput}>Bangalore</option>
                        <option value="Cochin" onClick={this.handleInput}>Cochin</option>
                        <option value="Ahmadabad" onClick={this.handleInput}>Ahmadabad</option>
                    </select>
                </div>    
                    {/* <!-- Drop down for destination --> */}
                
                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Destination</label>
                    <select className="custom-select my-1 mr-sm-2" name="destination" onClick={this.handleInput} required>
                        <option value="Chennai" onClick={this.handleInput}>Chennai</option>
                        <option value="Delhi" onClick={this.handleInput}>Delhi</option>
                        <option value="Mumbai" onClick={this.handleInput}>Mumbai</option>
                        <option value="Kolkata" onClick={this.handleInput}>Kolkata</option>
                        <option value="Goa" onClick={this.handleInput}>Goa</option>
                        <option value="Pune" onClick={this.handleInput}>Pune</option>
                        <option value="Jaipur" onClick={this.handleInput}>Jaipur</option>
                        <option value="Bangalore" onClick={this.handleInput}>Bangalore</option>
                        <option value="Cochin" onClick={this.handleInput}>Cochin</option>
                        <option value="Ahmadabad" onClick={this.handleInput}>Ahmadabad</option>
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
                    <input className="col-5 my-1 p-1 border border-darken-2" type="time" value={this.state.departure}
                     name="departureTime" onChange={this.handleInput} required />
                </div>

                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Fare</label>
                    <input type="number" className="col-5 my-1 p-1 border border-darken-2" value={this.state.price}
                     name="price" onChange={this.handleInput}  required />
                </div>

                <div className="input-group mb-2 mr-sm-2">    
                    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Available Seats</label>
                    <input type="number" className="col-5 my-1 p-1 border border-darken-2" value={this.state.availableSeats}
                     name="availableSeats" onChange={this.handleInput}  required />
                </div>
                
                <button type="submit" className="btn btn-warning mr-4">Submit</button>
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
        paddingTop : 100,
        paddingBottom : 100
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

export default AddFlight;