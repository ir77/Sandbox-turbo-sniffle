package com.example.turbo_sniffle

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class SampleController {
    @GetMapping("/form")
    @Suppress("FunctionOnlyReturningConstant")
    fun getForm(): String = "This is a sample form response"

    @PostMapping("/form")
    @Suppress("FunctionOnlyReturningConstant")
    fun submitForm(): String = "Form submitted successfully"
}
