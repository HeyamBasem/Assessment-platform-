package com.example.demo.controller;

import com.example.demo.dto.LoginRequest;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;
import com.example.demo.dto.LoginResponse;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
public User registerUser(
        @Valid @RequestBody User user) {

    return userService.saveUser(user);
}

    @PostMapping("/login")
public LoginResponse login(
        @RequestBody LoginRequest request) {

    User user = userService.login(
            request.getEmail(),
            request.getPassword()
    );

    if (user != null) {

        return new LoginResponse(
                "Login Successful",
                user
        );
    }

    return new LoginResponse(
            "Invalid Email or Password",
            null
    );
}

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PutMapping("/{id}")
    public User updateUser(
            @PathVariable Long id,
            @RequestBody User user) {

        return userService.updateUser(id, user);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {

        userService.deleteUser(id);

        return "User deleted successfully";
    }
}