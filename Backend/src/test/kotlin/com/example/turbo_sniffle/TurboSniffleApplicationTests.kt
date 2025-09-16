package com.example.turbo_sniffle

import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class TurboSniffleApplicationTests {
    @Test
    @Suppress("EmptyFunctionBlock")
    fun contextLoads() {
    }

    @Test
    fun sampleControllerTest() {
        val controller = SampleController()
        assert(controller.getForm() == "This is a sample form response")
        assert(controller.submitForm() == "Form submitted successfully")
    }
}
