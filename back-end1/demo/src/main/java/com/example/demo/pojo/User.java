package com.example.demo.pojo;

public class User {

	private Integer userId;
	private String userName;
	private String password;
	private String email;

	// Getter 和 Setter 方法...


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
		return "user [userName=" + userName + ", password=" + password + ", email=" + email + "]";
	}
}
