package com.example.demo.service;

import com.example.demo.entity.Assessment;
import com.example.demo.repository.AssessmentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssessmentService {

    @Autowired
    private AssessmentRepository assessmentRepository;

    public Assessment saveAssessment(
            Assessment assessment) {

        return assessmentRepository.save(
                assessment
        );
    }

    public List<Assessment> getAllAssessments() {

        return assessmentRepository.findAll();
    }

    public Assessment getAssessmentById(Long id) {

        Optional<Assessment> assessment =
                assessmentRepository.findById(id);

        return assessment.orElse(null);
    }

    public void deleteAssessment(Long id) {

        assessmentRepository.deleteById(id);
    }
}