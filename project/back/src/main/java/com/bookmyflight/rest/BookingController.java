package com.bookmyflight.rest;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookmyflight.bean.ListPassenger;
import com.bookmyflight.entity.Booking;
import com.bookmyflight.entity.Flight;
import com.bookmyflight.entity.Passenger;
import com.bookmyflight.entity.Ticket;
import com.bookmyflight.entity.User;
import com.bookmyflight.exception.FlightException;
import com.bookmyflight.service.BookingService;
import com.bookmyflight.service.FlightService;



@CrossOrigin()
@RestController
@RequestMapping("/book")
public class BookingController {

	@Autowired
	private BookingService bookservice;
	
	@Autowired
	private FlightService flightservice;
	
	//Post requset for add booking
	@PostMapping(value = "/booking", consumes = "application/json")
	public String addBooking(@RequestBody Booking booking, @RequestParam int fid, String source, String destination, String date) throws FlightException {
		
//		Flight flight = flightservice.fetchFlight(source, destination, LocalDate.parse(date));
		
		Flight flight = flightservice.fetchById(fid);
		if(flight.getAvailableSeats()<=0) {
			return "Seats are not available";
		}else if(booking.getNumberOfSeatsToBook()>flight.getAvailableSeats()) {
			return "Only "+flight.getAvailableSeats()+" are Available";
		}else {
			flight.setAvailableSeats(flight.getAvailableSeats()-booking.getNumberOfSeatsToBook());
			flightservice.updateFlight(flight);
			booking.setFlight(flight);
			booking.setBookingDate(LocalDate.now());
			int bid = bookservice.addBooking(booking);
			return "" + bid;
		}
	}
	
	//Post request for adding passengers for booking id
	@PostMapping(value = "/passenger/{bid}",  consumes = "application/json")
	public String addPassengers(@RequestBody ListPassenger pass1, @PathVariable int bid) {
//		int pid = bookservice.addPassenger(passenger, bid);
		String s1 = "";
		Booking booking=bookservice.getBookingById(bid);
		for (int i = 0; i<booking.getNumberOfSeatsToBook(); i++) {
			s1 += " : "+bookservice.addPassenger(pass1.getPass1().get(i), bid) ; 
		}
		
		return "Passengers added with id's " + s1 ;
	}
	

	//Post request for generating ticket for user id and booking id
	@PostMapping(value = "/ticket/{userId}/{bookid}/{pay}", consumes = "application/json",produces = "application/json")
	public ResponseEntity<?> createBookingTicket(@RequestBody Ticket ticket, @PathVariable int userId, @PathVariable int bookid, @PathVariable int pay ) {
		
//		int bid = bookservice.addBooking(booking);
		Booking booking=bookservice.getBookingById(bookid);
		booking.setPayStatus(pay);
		bookservice.updateBooking(booking);
		
		int pay_status = booking.getPayStatus();
		double total_pay=booking.getFlight().getPrice()*booking.getNumberOfSeatsToBook();
		if(pay_status==1) {
			LocalDate date = LocalDate.now();
			ticket.setBooking_date(date);
			ticket.setTotal_pay(total_pay); 
			Ticket ticket1 = bookservice.generateTicket(ticket, userId, bookid);
			//return "Ticket generated for bookingid : " + bookid + "Ticket generated with id : " + tid + "Ticket generated for userid :" +userId ;
			return new ResponseEntity<Ticket>(ticket1, HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("Payment failed, please book ticket again.",HttpStatus.NOT_FOUND);
		}
	}
	
	//Get request for fetching tickets for user
	@GetMapping(value="/getTickets/{uid}" ,produces = "application/json")
	public List<Ticket> getAllTickets(@PathVariable int uid) {
		bookservice.getTicket(uid);
		return bookservice.getTicket(uid);
		
	}
	

}
