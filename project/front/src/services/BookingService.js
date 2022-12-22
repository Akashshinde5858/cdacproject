import axios from "axios"

/**
 * @author Akash
 * Using Axios library to send request to spring boot and fetch response
 * The service method handles operations for booking, ticket and passengers
 */
export default class BookingService {
    constructor() {
        this.uri = "http://localhost:8080/book";
    }

    // Service method to add booking 
    async addBooking(numberOfSeatsToBook,flightNumber,source,destination,date) {
        return await axios.post(this.uri+"/booking",{numberOfSeatsToBook},
        {params:{"fid":flightNumber,"source":source,"destination":destination,"date":date}}).then(response => {
            console.log(response.data)
            if(response.data.length>3){
                alert(response.data)
                return response
            } else{
                localStorage.setItem("bid",parseInt(response.data))
                return response
            }
        })
    }

    // Service method to add passengers
    async addPassengers(pass1){
        return await axios.post(this.uri+"/passenger/"+localStorage.getItem("bid"),pass1).then(response => {
            console.log(response.data)
        })
    }

    // Service method to generate ticket 
    async generateTicket(ticket){
        const uid = JSON.parse(localStorage.getItem("user")).userId;
        return await axios.post(this.uri+"/ticket/"+uid+"/"+localStorage.getItem("bid")+"/1",ticket)
        .then(response => {
            console.log(response.data)
            localStorage.setItem("ticket",JSON.stringify(response.data))
            return response;
        })
    }

    // Service method to fetch tickets based on userid
    async getTickets() {
        const uid = JSON.parse(localStorage.getItem("user")).userId;
        return await axios.get(this.uri+"/getTickets/"+uid)
        .then(response => {
            console.log(response.data)
             localStorage.setItem("tickets",JSON.stringify(response.data))
            return response;
        })
    }

}