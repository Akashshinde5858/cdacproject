package com.bookmyflight.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class FlightException extends Exception{

	public FlightException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FlightException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
	
}
