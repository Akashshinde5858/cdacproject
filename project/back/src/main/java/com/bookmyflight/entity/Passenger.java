package com.bookmyflight.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "passenger")
@SequenceGenerator(name = "passenger_seq",sequenceName = "passneger_seq",initialValue = 4001)
public class Passenger {

	@Id
	@GeneratedValue(generator = "passenegr_seq",strategy=GenerationType.SEQUENCE)
	private int pid;
	@Column(name = "pass_name")
	private String pname;
	private String gender;
	private int age;
	
	/*Many passengers are added to one booking
	 *Child of Booking entity  
	 */
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "booking_id")
	private Booking booking;
	
	public Passenger() {
	}
	
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}
	
	
}

