import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

import Footer from './Footer';
import Header from './Header';
import plane from '../assets/images/travel1.jpg';

/** 
 *
 * This component will render Register page for the app 
 * UserService: Service for registering new user
*/
export default class Register extends Component {

	constructor(props){
		super(props);
		this.service=new UserService();
		this.state={
			userId:0,
			fname:"",
			email:"",
			phone:null,
			username:"",
			password:"",
			isadmin:0
		}
	}

	componentDidMount(){
		
	}

	handleInput=(event)=>{
		const name=event.target.name;
		const value=event.target.value;
		this.setState({
			[name]:value
		});
	}

	/** this method is for password confirmation */ 
	handlePass=(event)=>{
		if(event.target.value!==this.state.password){
			this.setState({cp:"Invalid Password!!"});
			this.setState({flag:false});
		}
		else{
			this.setState({cp:""});
			this.setState({flag:true});
		}
	}

	/** 
	 * this method interacts with service to register new user
	 * redirects to login page
	*/
	registerUser = () =>{
		//alert('willing to register');
		this.service.addUser(this.state).then(response=>{
			if(response.status===200){
				console.log(response.data);
				this.props.history.push('/login/');
			}
		}).catch(error=>{
			console.log(error);
			alert('Registration failed');
		});
		this.setState({userId:0,
		fname:"",
		email:"",
		phone:0,
		username:"",
		password:"",
		isadmin:0
	});
		
	}

	render(){

    return (
        <div class='pt-5'>
            <Header />
			
				<div className="row mb-4" style={styling.wrapper}>
					<div className="col-lg-8 mx-auto text-center">
				
				
				</div> 
				<div className="row" style={{marginTop:'30px'}}>
				<div className="col-md-6 mx-auto">
					<div className="card ">
					<div className="card-header">
                    <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                       
                    <div className="tab-content">
                        <div className="tab-pane fade show active pt-3">
                            <form>
							<h3 style={{textAlign:'center'}}>Registration Form</h3>
                                <div className="form-group"> 
									<h6><span className="form-label">Name</span></h6>
										<input type="text" name="fname" value={this.state.fname} onChange={this.handleInput} required className="form-control" />
								</div>
                                <div className="form-group"> 
									<h6><span className="form-label">Email</span></h6>
										<input type="email" name="email" value={this.state.email} onChange={this.handleInput} required className="form-control" />
								</div>
                                <div className="form-group"> 
									<h6><span className="form-label">Contact</span></h6>
										<input  name="phone" pattern="[6-9][0-9]{9}" maxLength="10" value={this.state.phone} onChange={this.handleInput} required className="form-control" />
								</div>
                                <div className="form-group"> 
									<h6><span className="form-label">Username</span></h6>
										<input type="text" name="username" value={this.state.username} onChange={this.handleInput} required className="form-control" />
								</div>
                                <div className="form-group"> 
									<h6><span className="form-label">Password</span></h6>
										<input type="password" name="password" value={this.state.password} onChange={this.handleInput} required className="form-control" />
								</div>
                                <div className="form-group"> 
									<h6><span className="form-label">Confirm Password</span></h6>
										<input type="password" name="cpasswd" onChange={this.handlePass} className="form-control" required/><div className="text-danger">{this.state.cp} </div> 
								</div>
                                
                                <div className="card-footer"> 
								<button onClick={this.registerUser}  className="subscribe btn btn-primary btn-block shadow-sm" disabled={!this.state.flag}>Register</button>
								
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
let styling = {
    wrapper : {
        height : "110vh",
        background: `url(${plane})`
    }
}