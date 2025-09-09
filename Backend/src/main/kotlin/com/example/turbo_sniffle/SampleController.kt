package com.example.turbo_sniffle

import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping


@RestController
@RequestMapping("/api")
class ApplicationFormController {
    @GetMapping("/form")
    fun getForm(): String {
        return "This is a sample form response"
    }

    @PostMapping("/form")
    fun submitForm(): String {
        return "Form submitted successfully"
    }
}