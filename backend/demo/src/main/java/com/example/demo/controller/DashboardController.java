package com.example.demo.controller;

import com.example.demo.dto.AdminDashboardResponse;
import com.example.demo.dto.StudentDashboardResponse;
import com.example.demo.dto.TeacherDashboardResponse;
import com.example.demo.service.DashboardService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/admin")
    public AdminDashboardResponse getAdminDashboard() {

        return dashboardService.getAdminDashboard();
    }

    @GetMapping("/teacher")
    public TeacherDashboardResponse getTeacherDashboard() {

        return dashboardService.getTeacherDashboard();
    }

    @GetMapping("/student")
    public StudentDashboardResponse getStudentDashboard() {

        return dashboardService.getStudentDashboard();
    }
}