import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import planeBG from "../assets/images/planebg1.jpg";
import Footer from './Footer';
import Header from './Header';


class Summary extends Component {
    
    constructor(props){
        super(props)
        if(!localStorage.getItem('user')){this.props.history.push('/login')}
        else{
        this.summary = JSON.parse(localStorage.getItem('sid'))
        this.airplane = JSON.parse(localStorage.getItem('plane'))
        console.log(this.summary)
        this.amount = this.summary.length * this.airplane.price
        }
    }


    
    render(){
        if(!localStorage.getItem('user')){return null}
        
        const passList = this.summary.map((p) => {
            return(
                <tr>
                    <td>{p.pname}</td>
                    <td>{p.age}</td>
                    <td>{p.gender}</td>
                </tr>
            )
        })
    return (
        <div class='pt-5'>
        <Header />
        <div class="py-5" style={{backgroundImage: `url(${planeBG})`,overflow: 'hidden', height: '1200px'}}>
            <div className="row mb-4">
					<div className="col-lg-8 mx-auto text-center">
					{/* <h1 className="display-6">Book My Flight</h1> */}
					</div>
			</div>
            <div className="row">
				 <div className="col-lg-6 mx-auto">
					<div className="card ">
					   <div className="card-header">
                           <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">


                           <div className="tab-content">
                                <div className="tab-pane fade show active pt-3">
                                    <div className="container">
                                        <h4 align="center">Booking Summary</h4>
                                        <br/>
                                        <div>
                                            <table className="table">
                                            <h5 >Passenger Details</h5>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Age</th>
                                                    <th>Gender</th>
                                                </tr>
                                                {passList}<br></br>
                                                <h5 >Travelling Details</h5>
                                                <tr>
                                                    <th>Flight No.</th>
                                                    <th>Source </th>
                                                    <th>Destination</th>
                                                    <th>Travel Date</th>
                                                </tr>
                                                <tr>
                                                    <td>{this.airplane.flightNumber}</td>
                                                    <td>{this.airplane.source}</td>
                                                    <td>{this.airplane.destination}</td>
                                                    <td>{this.airplane.travelDate}</td>
                                                </tr>
                                                <br></br>
                                                <tr>
                                                    <td><strong>Amount to pay</strong></td>
                                                    <td></td>
                                                    <td><strong>₹{this.amount}</strong></td>
                                                </tr>
                                            </table>
                                            <div class="card-footer"> 
                                            <Link to='/payment' >
                                                <button  type="button"  class="subscribe btn btn-primary btn-block shadow-sm"> Make Payment</button>
                                            </Link>
                                        </div>
                                        </div>
                                        </div>
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

export default Summary;