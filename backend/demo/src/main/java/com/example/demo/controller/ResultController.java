package com.example.demo.controller;

import com.example.demo.entity.Result;
import com.example.demo.service.ResultService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/results")
public class ResultController {

    @Autowired
    private ResultService resultService;

    @PostMapping
    public Result createResult(
            @RequestBody Result result) {

        return resultService.saveResult(result);
    }

    @GetMapping
    public List<Result> getAllResults() {

        return resultService.getAllResults();
    }

    @GetMapping("/{id}")
    public Result getResultById(
            @PathVariable Long id) {

        return resultService.getResultById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteResult(
            @PathVariable Long id) {

        resultService.deleteResult(id);

        return "Result deleted successfully";
    }
}