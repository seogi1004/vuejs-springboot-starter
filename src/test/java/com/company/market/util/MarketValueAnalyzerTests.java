package com.company.market.util;

import com.company.market.dao.MarketValue;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertNull;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MarketValueAnalyzerTests {
    private static List<MarketValue> samples = new ArrayList<>();

    @BeforeClass
    public static void testSetup() {
        samples.add(new MarketValue("A", 552, 537, 761, 845, 1187, 723));
        samples.add(new MarketValue("B", 332, 542, 666, 653, 821, 779));
        samples.add(new MarketValue("C", 195, 223, 355, 370, 401, 376));
    }

    @Test
    public void testGetCompanyWithMaximumMarket() {
        MarketValue maxMarket = MarketValueAnalyzer.getCompanyWithMaximumMarket(samples);
        assertEquals("B", maxMarket.company);

        assertNull(MarketValueAnalyzer.getCompanyWithMaximumMarket(null));
        assertNull(MarketValueAnalyzer.getCompanyWithMaximumMarket(Collections.EMPTY_LIST));
    }

    @Test
    public void testGetCompanyWithMinimumMarket() {
        MarketValue minMarket = MarketValueAnalyzer.getCompanyWithMinimumMarket(samples);
        assertEquals("C", minMarket.company);

        assertNull(MarketValueAnalyzer.getCompanyWithMinimumMarket(null));
        assertNull(MarketValueAnalyzer.getCompanyWithMinimumMarket(Collections.EMPTY_LIST));
    }
}
