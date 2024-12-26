package com.example.demo.dto;



import jakarta.validation.constraints.NotBlank;



public class UserDto {

	private Integer userId;
	@NotBlank(message = "用戶名不能為空")
	private String userName;
	@NotBlank(message = "密碼不能為空")
	private String password;
	@NotBlank(message = "email格式不正確")
	private String email;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "UserDto [userId=" + userId + ", userName=" + userName + ", password=" + password + ", email=" + email
				+ "]";
	}

}
