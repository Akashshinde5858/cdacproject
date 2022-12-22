package com.bookmyflight.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonManagedReference;



@Entity
@Table(name="booking")
@SequenceGenerator(name = "booking_seq",sequenceName = "booking_seq",initialValue = 2001)
public class Booking {
	@Id
	@GeneratedValue(generator = "booking_seq",strategy=GenerationType.SEQUENCE)
	@Column(name = "booking_id")
	private int bookingId;
	
	@Column(name="seats")
	private int numberOfSeatsToBook;
	
	private int payStatus;
	private LocalDate bookingDate;
	
	/* One booking remembers one flight
	Parent of Flight entity*/
	@OneToOne
	@JoinColumn(name = "flight_number")		
	private Flight flight;
	
	/*One booking remembers multiple passengers
	Parent of Passenger entity*/
	@JsonManagedReference
	@OneToMany(mappedBy = "booking",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	private List<Passenger> passengers = new ArrayList<Passenger>();
	
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public int getNumberOfSeatsToBook() {
		return numberOfSeatsToBook;
	}
	public void setNumberOfSeatsToBook(int numberOfSeatsToBook) {
		this.numberOfSeatsToBook = numberOfSeatsToBook;
	}
	public int getPayStatus() {
		return payStatus;
	}
	public void setPayStatus(int payStatus) {
		this.payStatus = payStatus;
	}
	public Flight getFlight() {
		return flight;
	}
	public void setFlight(Flight flight) {
		this.flight = flight;
	}
	public List<Passenger> getPassengers() {
		return passengers;
	}
	public void setPassengers(List<Passenger> passengers) {
		this.passengers = passengers;
	}
	public LocalDate getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}
	
	
}