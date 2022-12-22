package com.bookmyflight.entity;

import java.math.BigInteger;
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
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name="user")
@SequenceGenerator(name = "user_seq",sequenceName = "user_seq",initialValue = 1)
public class User {
	
	@Id
	@GeneratedValue(generator = "user_seq",strategy=GenerationType.SEQUENCE)
	@Column(name = "user_id")
	private int userId;
	
	private String username;
	
	@Column(name="user_fullname")
	private String fname;
	
	private String email;
	
	private String phone;
	
	private int isadmin;
	
	private String password;
	
	
	public User() {
		
	}
	public User(int uid, String username, String fname, String email, String phone, int isadmin, String password) {
		super();
		this.userId=uid;  
		this.username = username;
		this.fname = fname;
		this.email = email;
		this.phone = phone;
		this.isadmin = isadmin;
		this.password= password;
	}
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public int getIsadmin() {
		return isadmin;
	}
	public void setIsadmin(int isadmin) {
		this.isadmin = isadmin;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

}