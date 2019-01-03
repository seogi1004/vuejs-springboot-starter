package com.company.market;

import com.company.market.dao.MarketDao;
import com.company.market.dao.MarketDaoImplOfJson;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MarketValueApplication {
    @Bean
    public MarketDao injectMarketDao() {
        // TODO: 필요에 따라 MarketDaoImplOfMysql를 사용할 수 있음
        return new MarketDaoImplOfJson();
    }

    public static void main(String[] args) {
        SpringApplication.run(MarketValueApplication.class, args);
    }
}
