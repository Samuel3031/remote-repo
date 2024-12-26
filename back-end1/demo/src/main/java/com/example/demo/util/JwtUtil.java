package com.example.demo.util;

import java.util.Date;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtil {
    private static final String SECRET_KEY = "your-secret-key"; // 替换为更安全的密钥
    private static final long EXPIRATION_TIME = 86400000L; // 1天（毫秒）

    // 生成Token
    public static String generateToken(Integer userId) {
        return Jwts.builder()
                .setSubject(userId.toString()) // 设置JWT主题，通常是用户ID
                .setIssuedAt(new Date()) // 设置签发时间
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME)) // 设置过期时间
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY) // 设置签名算法和密钥
                .compact(); // 生成Token
    }

    // 解析Token
    public static String extractSubject(String token) {
        // 直接解析JWT并验证密钥
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY) // 设置密钥
                .parseClaimsJws(token) // 解析JWT
                .getBody(); // 获取Claims部分
        return claims.getSubject(); // 返回JWT的主体部分（用户ID）
    }

    // 验证Token
    public static boolean validateToken(String token, Integer userId) {
        String subject = extractSubject(token); // 获取Token中的subject（通常是用户ID）
        return subject.equals(userId.toString()) && !isTokenExpired(token); // 验证subject并检查过期
    }

    // 检查Token是否过期
    private static boolean isTokenExpired(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY) // 设置密钥
                .parseClaimsJws(token) // 解析JWT
                .getBody(); // 获取Claims部分
        return claims.getExpiration().before(new Date()); // 检查是否过期
    }
}
