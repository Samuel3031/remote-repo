package com.example.demo.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.demo.pojo.ResponseMessage;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestControllerAdvice
public class GlobalExceptionHandlerAdvice {

    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandlerAdvice.class);

    // 通用異常處理
    @ExceptionHandler({Exception.class})
    public ResponseMessage<Void> handlerException(Exception e, HttpServletRequest request, HttpServletResponse response) {
        // 記錄異常
        log.error("發生異常: ", e);

        // 設置回應狀態碼
        response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());

        // 回傳統一的錯誤回應
        return ResponseMessage.error(HttpStatus.INTERNAL_SERVER_ERROR.value(), "伺服器發生錯誤，請稍後再試");
    }

    // 自定義的其他異常處理（例如 IllegalArgumentException）
    @ExceptionHandler({IllegalArgumentException.class})
    public ResponseMessage<Void> handleIllegalArgumentException(IllegalArgumentException e, HttpServletRequest request, HttpServletResponse response) {
        log.warn("參數錯誤: ", e);

        response.setStatus(HttpStatus.BAD_REQUEST.value());

        return ResponseMessage.error(HttpStatus.BAD_REQUEST.value(), e.getMessage());
    }
}
