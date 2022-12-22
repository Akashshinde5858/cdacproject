import { Component } from "react";

import '../assets/css/FeedbackStyle.css'
import planeBG from "../assets/images/planebg1.jpg";
import Footer from './Footer';
import Header from './Header';


class Feedback extends Component{

    onFeedback = () => {
        alert('Thank you for your feedback!!')
        this.props.history.push('/')
    }
    onCancel = () => {
        alert('Thank you!! See you Soon!!!')
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
            <Header />  
                <div className='pt-5'  style={{backgroundImage: `url(${planeBG})`,overflow: 'hidden', height: '800px'}}>
                    <div class="h-100 d-flex justify-content-center py-5">
                    <div class="jumbotron my-auto display-5">
                        <h3 style={{color:'blue'}}>Thank you for travelling with Hawk Airways</h3>
                        
                        <h3 style={{color:'green'}} >We assure you to have <b>Safe and Happy Journey.</b></h3>
                        <br></br>
                        <h3>Please Rate your Experience with BookMyFlight:</h3>
                        <fieldset class="rating">
                            <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                            <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                            <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                            <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                            <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                            <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                            <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                            <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                            <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                            <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                        </fieldset>
                        <br></br>
                        <br></br>
                        <h4>Comment:</h4>
                            <textarea></textarea><br />
                            
                            <button onClick={this.onFeedback} className="btn btn-info">Send</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={this.onCancel} className="btn btn-warning">Cancel</button>
                    </div>
                </div>
               </div>
               <Footer />
            </div>
        )
    }
}

export default Feedback;