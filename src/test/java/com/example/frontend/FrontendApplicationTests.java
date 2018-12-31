package com.example.frontend;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static junit.framework.TestCase.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FrontendApplicationTests {

    @Test
    public void contextLoads() {
        assertEquals("test", "test");
    }
}
