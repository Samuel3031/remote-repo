package com.example.demo.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.UserDto;
import com.example.demo.pojo.User;
import com.example.demo.repository.UserMapper;

@Service
public class UserService implements IUserService {

	@Autowired
	UserMapper userMapper;

	@Override
	public int add(UserDto user) {

		User userPojo = new User();

		BeanUtils.copyProperties(user, userPojo);
		
		userMapper.insertUser(userPojo);
		var a=userPojo.getUserId();
	
		return a;
	}

	@Override
	public User getUser(Integer userId) {
		User user = userMapper.findUsersByUserId(userId);
		if (user == null) {
			throw new IllegalArgumentException("用戶不存在");
		}
		return user;
	}

	@Override
	public int edit(UserDto user) {

		User userPojo = new User();

		BeanUtils.copyProperties(user, userPojo);

		return userMapper.updateUser(userPojo);
	}

	@Override
	public int delete(Integer userId) {
		// TODO 自動生成されたメソッド・スタブ
		return userMapper.deleteUser(userId);

	}

	@Override
	public User login(Integer user_id, String password) {
		// TODO 自動生成されたメソッド・スタブ
		User users = userMapper.userLogin(user_id, password);
		
		return users;
	}

}
