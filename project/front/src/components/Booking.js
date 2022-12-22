import React, { Component } from 'react';
import planeBG from "../assets/images/planebg1.jpg";
import BookingService from '../services/BookingService';
import Header from './Header';
import Footer from './Footer';

/*
 * this component takes input for creating booking
 * BookingService: Service for adding new booking in database
 */
class Booking extends Component {


    constructor(props){
        super(props)
        this.service = new BookingService();
        this.flag=false
        if(JSON.parse(localStorage.getItem('plane'))===null){
            this.props.history.push("/")
        }
        else{
        this.flight = JSON.parse(localStorage.getItem('plane'));
        this.flag=true
        this.state={
            flightNumber: this.flight.flightNumber,
            source: this.flight.source,
            destination:this.flight.destination,
            date:this.flight.travelDate,
            passengers:[0,1,2,3,4,5,6],
            numberOfSeatsToBook:0
            }
        }
    }
    componentDidMount(){
        if(!JSON.parse(localStorage.getItem("user"))){
            this.props.history.push("/login")
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    /**
     * This method add booking using service 
     * adds no of seats to local storage and redirects to Passengers component
     */
    goOnPassangers = () => {
        // console.log(this.state.nops)
        console.log(this.state.numberOfSeatsToBook)
        localStorage.setItem('nop',this.state.numberOfSeatsToBook)
        this.service.addBooking(this.state.numberOfSeatsToBook,this.state.flightNumber,this.state.source,this.state.destination,this.state.date
            ).then(response => {
                if(response.data.length>3)
                {

                }
                else{
                    this.props.history.push('/passengers')
                }
            })
        
        
    }

    change = (event) => {
        this.setState({numberOfSeatsToBook: event.target.value});
    }

    render(){
        return (
            <div class='pt-5'>
            <Header />  
        <div class='pt-5' style={{backgroundImage: `url(${planeBG})`,overflow: 'hidden', height: '700px'}}>
          <div class="row mb-4">
                <div class="col-lg-8 mx-auto text-center">
                <h1 class="display-6" style={{color:'white', fontWeight:'50pt'}}>Book My Flight</h1>
                </div>
            </div> 

			<div class="row">
				<div class="col-md-6 mx-auto">
					<div class="card ">
					    <div class="card-header">
                            <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active pt-3">
                                        <form>
                                        <div class="form-group">
                                        <h6><span class="form-label">Flight Number</span></h6>
                                        { this.flag &&
										<input class="form-control" type="text" onChange={this.handleInput} value={this.state.flightNumber} name="flightNumber" readOnly />
                                        }
                                        </div>
                                        <div class="form-group">
									    <h6><span class="form-label">Flying from</span></h6>
                                        { this.flag &&
										<input class="form-control" type="text" onChange={this.handleInput} value={this.state.source} name="source" readOnly />
                                        }
                                        </div>

                                        <div class="form-group"> 
									    <h6><span class="form-label">Flying to</span></h6>
                                        { this.flag &&
										<input class="form-control" type="text" onChange={this.handleInput} value={this.state.destination} name="destination" readOnly/>
                                        }
                                        </div>

                                        <div class="row">
									        <div class="col-md-12">
                                                <div class="form-group">
                                                <span class="form-label">Departing</span>
                                                { this.flag &&
                                                <input onChange={this.handleInput} value={this.state.date} class="form-control" disabled />
                                                }
                                                </div>
									        </div>
								        </div>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <span class="form-label">Number of Passenger</span>
                                                    { this.flag &&
                                                    <select class="form-control" onChange={this.change} value={this.state.numberOfSeatsToBook}>
                                                        {this.state.passengers.map(psng => (
                                                            <option value={psng}>{psng}</option>
                                                        ))}
                                                    </select>
                                                    }
                                                    <span class="select-arrow"></span>
                                                </div>
                                            </div>
								        </div>

                                        <div class="card-footer"> 
                                            <button onClick={this.goOnPassangers} type="button" class="subscribe btn btn-primary btn-block shadow-sm"> Book Ticket</button>
                                        </div>
                                        
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
	    </div>
        <Footer />
        </div>
        );
    }
}

export default Booking;