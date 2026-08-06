package com.example.demo.controller;

import com.example.demo.entity.Question;
import com.example.demo.service.QuestionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @PostMapping
    public Question createQuestion(
            @RequestBody Question question) {

        return questionService.saveQuestion(question);
    }

    @GetMapping
    public List<Question> getAllQuestions() {

        return questionService.getAllQuestions();
    }

    @GetMapping("/{id}")
    public Question getQuestionById(
            @PathVariable Long id) {

        return questionService.getQuestionById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteQuestion(
            @PathVariable Long id) {

        questionService.deleteQuestion(id);

        return "Question deleted successfully";
    }
}