package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.annotation.AroundLog;
import com.example.demo.dto.UserDto;
import com.example.demo.form.UserForm;
import com.example.demo.pojo.ResponseMessage;
import com.example.demo.pojo.User;
import com.example.demo.service.IUserService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/user")
public class UserController {
	private UserForm userForm = new UserForm();

	@Autowired
	IUserService userService;

	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:5173/", allowCredentials = "true")
	public ResponseMessage<User> login(@RequestBody UserDto loginRequest, HttpSession session) {
		System.out.println("請求登入 ID:" + loginRequest.getUserId());
		User user = userService.login(loginRequest.getUserId(), loginRequest.getPassword());
		if (user == null || !user.getPassword().equals(loginRequest.getPassword())) {
			return ResponseMessage.error("用戶名稱或密碼錯誤");
		}

		session.setAttribute("userId", user.getUserId());
		return ResponseMessage.success(user);
	}

	@PostMapping("/create") // URL: localhost:8088/user    method: post
	@AroundLog
	@CrossOrigin(origins = "http://localhost:5173/", allowCredentials = "true")
	public ResponseMessage<User> add(@Validated @RequestBody UserDto user) {
		System.out.println("請求創建用戶名:" + user.getUserName());

		User users = new User();
		users.setUserId(userService.add(user));
		return ResponseMessage.success(users);
	}

	// 查询
	@GetMapping("/{userId}") // URL: localhost:8088/user/1    method: get
	@CrossOrigin(origins = "http://localhost:5173/", allowCredentials = "true")
	public ResponseMessage get(@PathVariable Integer userId) {
		User userNew = userService.getUser(userId);
		return ResponseMessage.success(userNew);
	}

	// 修改
	@PutMapping
	@CrossOrigin(origins = "http://localhost:5173/", allowCredentials = "true")
	public ResponseMessage edit(@Validated @RequestBody UserDto user, HttpSession session) {
		System.out.println("請求修改 ID:" + user.getUserId() + "," + session.getAttribute("userId"));

		if (user.getUserId() == session.getAttribute("userId")) {
			return userService.edit(user) == 1 ? ResponseMessage.success("編輯成功") : ResponseMessage.error("修改失敗");
		} else {
			return ResponseMessage.error("修改失敗");
		}
	}

	// 删除用户
	@DeleteMapping("/{userId}")
	@CrossOrigin(origins = "http://localhost:5173/", allowCredentials = "true")
	public ResponseMessage delete(@PathVariable Integer userId, HttpSession session) {
		boolean a = userId == session.getAttribute("userId");
		System.out.println("請求刪除 ID:" + userId + "," + session.getAttribute("userId") + "是否相等" + a);
		if (userId == session.getAttribute("userId")) {
			userService.delete(userId);
			return ResponseMessage.success();
		} else {
			return ResponseMessage.error("刪除失敗");
		}
	}
	/*
	@GetMapping
	public String showLoginPage() {
		return "login";
	}
	
	@PostMapping("/login")
	@CrossOrigin
	public String handleLogin(@RequestParam("userId") Integer userId,
			@RequestParam("password") String password, HttpSession session,
			Model model) {
		User users = userService.getUsers(userId, password);
	
		// 判断是否查询到用户
		if (users == null ) {
			System.out.printf("登入失敗");
			model.addAttribute("error", "登入失敗");
			return "login";
		}
		
		session.setAttribute("userId", userId);
		return "helloworld";
	
	}
	
	@GetMapping("/update")
	public String showUpdatePage() {
		return "update";
	}
	
	@PostMapping("/update")
	public String updateUser(@RequestParam("userName") String userName,
			@RequestParam("email") String email, HttpSession session,
			Model model) {
	
		// 獲取當前登入用戶的 ID
		Integer sessionUserId = (Integer) session.getAttribute("userId");
		if (sessionUserId == null) {
			model.addAttribute("error", "請先登入");
			return "login";
		}
	
		// 獲取用戶資料
		User user = userService.getUser(sessionUserId);
		if (user == null) {
			model.addAttribute("error", "用戶不存在");
			return "update";
		}
	
		// 更新用戶資料
		user.setUserName(userName);
		user.setEmail(email);
		if(userService.edit(user)>0) {
	
		model.addAttribute("message", "用戶資料更新成功");
		}else{model.addAttribute("message", "更新失敗");}
		return "update";
	}
	
	public UserForm getUserForm() {
		return userForm;
	}
	
	public void setUserForm(UserForm userForm) {
		this.userForm = userForm;
	}
	*/

}
