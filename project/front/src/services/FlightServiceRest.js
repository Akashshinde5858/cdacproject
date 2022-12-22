
export default class FlightServiceRest{
    constructor(){
        this.uri = "http://localhost:8080/flight";
        this.flights = [];
    }

    // Service method to fetch all flights
    async getFlights() {
        return await fetch(this.uri + "/fetchall").then(response => {
           if(!response.ok) {
               this.handleResponseError(response);
           }
           return response.json();
       }).then(data => {  
           console.log("flights data from service" + data);          
           return data;
       }).catch(error => {
           console.log("Error : "  + error.message)
       })
   }

   // Service method to Add a new flight in the database
   async saveFlight(flight) {
        return await fetch(this.uri+"/add", {
            method:"POST",
            mode:"cors",
            headers: {
                "content-type" : "application/json"
            },
            body:JSON.stringify(flight)
        }).then(response => {
        if(!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
        }).catch(error => {
            console.log(error.message);
        });
    }

    // Service method to make changes in an existing flight
    async updateFlight(flight){
        return await fetch(this.uri+"/update", {
            method:"PUT",
            mode:"cors",
            headers: {
                "content-type" : "application/json"
            },
            body:JSON.stringify(flight)
        }).then(response => {
        if(!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
        }).catch(error => {
            console.log("Error : " + error.message);
        });
    }

    // Service method to remove flight from database
    async deleteFlight(fid){
        return await fetch(this.uri + "/remove/"+ fid, {
            method:"DELETE",
            mode:"cors"
        }).then(response => {
            if(!response.ok) {
                this.handleResponseError(response);
            }
            return response.json();
        }).catch(error => {
            console.log("Error : " + error.message);
        })
    }

    // Service method to fetch flights on source, Destination and Date
    async getFlightsForUser(source, destination, date) {
        return await fetch(this.uri +
             `/fetch?source=${source}&destination=${destination}&date=${date}`)
        .then(response => {
           if(!response.ok) {
               this.handleResponseError(response);
           }
           return response.json();
       }).then(data => {  
           console.log("flights data from service" + data);          
           return data;
       }).catch(error => {
           console.log("Error : "  + error.message)
       })
   }
}