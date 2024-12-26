package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;

import com.example.demo.pojo.User;

@Mapper
public interface UserMapper {
	

	User userLogin(@Param("userId") Integer userId, @Param("password") String password);

	// 查询用户
	User findUsersByUserId(@Param("userId") Integer userId);

	// 查询所有用户
	List<User> findAllUsers();

	// 插入用户
	@Options(useGeneratedKeys = true, keyProperty = "userId", keyColumn = "user_id")
	int insertUser(User user);

	// 更新用户
	int updateUser(User user);

	// 删除用户
	int deleteUser(Integer userId);
}
