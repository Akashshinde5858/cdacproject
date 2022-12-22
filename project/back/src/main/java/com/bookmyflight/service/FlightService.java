package com.bookmyflight.service;

import java.time.LocalDate;
import java.util.Collection;

import com.bookmyflight.entity.Flight;
import com.bookmyflight.exception.FlightException;

public interface FlightService {
	
	 int addFlight(Flight flight) throws FlightException;
	
	 Collection<Flight> fetchAll();
	
	 Flight fetchFlight(String source, String destination, LocalDate scheduleDate) 
			throws FlightException;
	 
	 Collection<Flight> fetchFlightsOnCondition(String source, String destination, LocalDate scheduleDate) 
				throws FlightException;
	
	 int updateFlight(Flight flight) throws FlightException; //seatnotavailableexception
	 
	 void removeFlight(int flightNumber);
	 
	 Flight fetchById(int fid);
}