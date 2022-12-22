package com.bookmyflight.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookmyflight.entity.Ticket;
import com.bookmyflight.entity.User;


public interface UserRepository extends JpaRepository<User, Integer> {
	//Finds the User from database with matching username and password
	User findByUsernameAndPassword(String username,String password);
	
}
