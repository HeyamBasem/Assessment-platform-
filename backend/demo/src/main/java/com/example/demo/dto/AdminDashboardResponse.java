package com.example.demo.dto;

import lombok.Data;

@Data
public class AdminDashboardResponse {

    private long totalUsers;
    private long totalAssessments;
    private long totalSubmissions;
    private long totalResults;
}