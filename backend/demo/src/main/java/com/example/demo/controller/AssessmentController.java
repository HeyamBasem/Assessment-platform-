package com.example.demo.controller;

import com.example.demo.entity.Assessment;
import com.example.demo.service.AssessmentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/assessments")
public class AssessmentController {

    @Autowired
    private AssessmentService assessmentService;

    @PostMapping
    public Assessment createAssessment(
            @RequestBody Assessment assessment) {

        return assessmentService.saveAssessment(
                assessment
        );
    }

    @GetMapping
    public List<Assessment> getAllAssessments() {

        return assessmentService.getAllAssessments();
    }

    @GetMapping("/{id}")
    public Assessment getAssessmentById(
            @PathVariable Long id) {

        return assessmentService.getAssessmentById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteAssessment(
            @PathVariable Long id) {

        assessmentService.deleteAssessment(id);

        return "Assessment deleted successfully";
    }
}