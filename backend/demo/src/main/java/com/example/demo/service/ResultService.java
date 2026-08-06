package com.example.demo.service;

import com.example.demo.entity.Result;
import com.example.demo.repository.ResultRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResultService {

    @Autowired
    private ResultRepository resultRepository;

    public Result saveResult(Result result) {
        return resultRepository.save(result);
    }

    public List<Result> getAllResults() {
        return resultRepository.findAll();
    }

    public Result getResultById(Long id) {

        Optional<Result> result =
                resultRepository.findById(id);

        return result.orElse(null);
    }

    public void deleteResult(Long id) {
        resultRepository.deleteById(id);
    }
}