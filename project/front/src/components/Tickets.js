import React, { Component } from 'react';
import planeBG from "../assets/images/planebg1.jpg";
import Header from './Header';
import Footer from './Footer';
import BookingService from '../services/BookingService';

/**
 * 
 * this component renders list of tickets for a logged user
 * BookingService: Service for fetching tickets details from database
 */
class Tickets extends Component {
    state ={multiple_ticket:[]}
    constructor(props){
        super(props)
        this.service = new BookingService();
        this.state={tickets:[],load:false}
      this.tickets=[]
       
        if(!localStorage.getItem('user'))
        {
            this.props.history.push('/login')
        }
        else{
            this.service.getTickets().then(response => {
                console.log("Tickets page : " +response)
                this.tickett=
                JSON.stringify(response.data)
            this.setState({load:true,tickets:JSON.parse(localStorage.getItem("tickets"))})
           this.tickets.push(JSON.parse(localStorage.getItem("tickets")))
               console.log("Tickets: "+ this.tickett)

            
                

        });
        }
        
    }

    componentDidMount(){
        
    }

    /** 
     * stores ticket in local storage and redirects to Ticket component
    */
    showTicket(x) {
        console.log(x)
        localStorage.setItem('view-ticket',JSON.stringify(x))
        this.props.history.push('/ticket')
    }
    
    render(){
     
        

        const flightList = this.tickets.map((x)=>
        <tbody>
                <tr key={x.ticketNumber}>
                    <td>{x.ticketNumber}</td>
                    <td>{x.booking.flight.source}</td>
                    <td>{x.booking.flight.destination}</td>
                    <td>{x.booking.flight.travelDate}</td>
                    <td>{x.booking.bookingDate}</td>
                    <td><button class='btn-link' onClick={() => this.showTicket(x)}>View Ticket</button></td>
                </tr>
                </tbody>
        
        )

        return (
            <div className='pt-5'>
            <Header />  
            
        <div className='pt-5' style={{backgroundImage: `url(${planeBG})`,overflow: 'hidden', height: '700px'}}>
        
            <div className="row mb-4">
                <div className="col-lg-12 mx-auto text-center">
                <h1 className="display-6" style={{color:'white', fontWeight:'50pt'}}>My Bookings</h1>
                </div>
            </div> 

			<div className="row">
				<div className="col-md-8 mx-auto">
					<div className="card ">
					    <div className="card-header">
                            <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active pt-3">
                                        <table className="table table-striped">
                                        <thead>
                                        <tr className="thead-dark">
                                            <th>Ticket Number</th>
                                            <th>Source</th>
                                            <th>Destination</th>
                                            <th>Travel Date</th>
                                            <th>Booking Date</th>
                                            <th>Details</th>
                                        </tr>
                                        </thead>
                                            {flightList}
                                        </table>
                                            
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

export default Tickets;