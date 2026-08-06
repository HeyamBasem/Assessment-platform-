package com.example.demo.controller;

import com.example.demo.entity.Submission;
import com.example.demo.service.SubmissionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/submissions")
public class SubmissionController {

    @Autowired
    private SubmissionService submissionService;

    @PostMapping
    public Submission createSubmission(
            @RequestBody Submission submission) {

        return submissionService.saveSubmission(submission);
    }

    @GetMapping
    public List<Submission> getAllSubmissions() {

        return submissionService.getAllSubmissions();
    }

    @GetMapping("/{id}")
    public Submission getSubmissionById(
            @PathVariable Long id) {

        return submissionService.getSubmissionById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteSubmission(
            @PathVariable Long id) {

        submissionService.deleteSubmission(id);

        return "Submission deleted successfully";
    }
}