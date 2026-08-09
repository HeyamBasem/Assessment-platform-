# 11. High-Level Architecture — Assessment Dashboard System

## 11.1 Overview

The Assessment Dashboard System follows a Monolithic Architecture where all business modules are deployed within a single Spring Boot application connected to a PostgreSQL database. The system provides role-based access for Administrators, Teachers, and Students through a React Single Page Application (SPA).

The React frontend communicates with the backend using REST APIs, while Spring Boot handles authentication, user management, assessment management, question management, submissions, results, dashboard analytics, and school directory information. All application data is stored in a centralized PostgreSQL database.

## 11.2 Architecture Diagram

```mermaid
flowchart TB

    subgraph Client_Tier["Client Tier"]
        Browser["Web Browser"]
    end

    Browser -->|HTTPS| React

    subgraph Presentation_Tier["Presentation Tier"]
        React["React SPA<br/>(React Router + Axios)"]
    end

    React -->|REST API Calls| Controllers

    subgraph Application_Tier["Application Tier - Spring Boot Monolith"]

        Controllers["REST Controllers"]

        Controllers --> UserModule
        Controllers --> AssessmentModule
        Controllers --> QuestionModule
        Controllers --> SubmissionModule
        Controllers --> ResultModule
        Controllers --> DashboardModule
        Controllers --> SchoolModule

        UserModule["User Module<br/>Register / Login"]
        AssessmentModule["Assessment Module"]
        QuestionModule["Question Module"]
        SubmissionModule["Submission Module"]
        ResultModule["Result Module"]
        DashboardModule["Dashboard Module"]
        SchoolModule["School Directory Module"]

        UserModule --> ServiceLayer
        AssessmentModule --> ServiceLayer
        QuestionModule --> ServiceLayer
        SubmissionModule --> ServiceLayer
        ResultModule --> ServiceLayer
        DashboardModule --> ServiceLayer
        SchoolModule --> ServiceLayer

        ServiceLayer["Service Layer"]

        ServiceLayer --> RepositoryLayer

        RepositoryLayer["Repository Layer<br/>(Spring Data JPA)"]
    end

    RepositoryLayer -->|JDBC| Database

    subgraph Data_Tier["Data Tier"]
        Database["PostgreSQL Database"]
    end
```