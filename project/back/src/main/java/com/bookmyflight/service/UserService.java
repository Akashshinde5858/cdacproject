package com.bookmyflight.service;

import java.util.Collection;

import com.bookmyflight.bean.Login;
import com.bookmyflight.entity.User;
import com.bookmyflight.exception.UserException;

public interface UserService {
	
	 int createUser(User user) throws UserException;
	 
	 User validate(Login login);
	
	 public Collection<User> fetchAllUsers();
	
}
