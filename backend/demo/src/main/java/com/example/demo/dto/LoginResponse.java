package com.example.demo.dto;

import com.example.demo.entity.User;

public class LoginResponse {

    private String message;
    private User user;

    public LoginResponse(String message, User user) {
        this.message = message;
        this.user = user;
    }

    public String getMessage() {
        return message;
    }

    public User getUser() {
        return user;
    }
}