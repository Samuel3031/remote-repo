package com.example.demo.pojo;

import org.springframework.http.HttpStatus;

public class ResponseMessage<T> {
	private boolean success;//登入狀態
	private Integer code; // 狀態碼
	private String message; // 消息
	private T data; // 資料

	// 私有建構子，防止外部直接實例化
	private ResponseMessage(boolean success,Integer code, String message, T data) {
		this.setSuccess(success);
		this.code = code;
		this.message = message;
		this.data = data;
	}

	// 成功回應（僅數據）
	public static <T> ResponseMessage<T> success(T data) {
		return new ResponseMessage<>(true,HttpStatus.OK.value(), "success", data);
	}

	// 成功回應（無數據）
	public static <T> ResponseMessage<T> success() {
		return new ResponseMessage<>(true,HttpStatus.OK.value(), "success", null);
	}

	// 成功回應（無數據）
	public static <T> ResponseMessage<T> success(int i) {
		return new ResponseMessage<>(true,HttpStatus.OK.value(), "回應成功" + i, null);
	}

	// 自定義消息的成功回應
	public static <T> ResponseMessage<T> success(String message, T data) {
		return new ResponseMessage<>(true,HttpStatus.OK.value(), message, data);
	}

	// 錯誤回應（使用自定義消息和預設狀態碼 400）
	public static <T> ResponseMessage<T> error(String message) {
		return new ResponseMessage<>(false,HttpStatus.BAD_REQUEST.value(), message, null);
	}

	// 錯誤回應（自定義狀態碼和消息）
	public static <T> ResponseMessage<T> error(Integer code, String message) {
		return new ResponseMessage<>(false,code, "後端存取失敗", null);
	}

	// Getters and Setters
	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}
}
