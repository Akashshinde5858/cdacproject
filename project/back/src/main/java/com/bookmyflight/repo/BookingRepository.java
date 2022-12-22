package com.bookmyflight.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookmyflight.entity.Booking;


public interface BookingRepository extends JpaRepository<Booking, Integer>{

}
