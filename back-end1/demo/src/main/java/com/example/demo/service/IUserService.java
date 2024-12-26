package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.pojo.User;

public interface IUserService {

	int add(UserDto user);

	User getUser(Integer userId);

	int delete(Integer userId);

	User login(Integer user_id, String password);

	int edit(UserDto user);

}
