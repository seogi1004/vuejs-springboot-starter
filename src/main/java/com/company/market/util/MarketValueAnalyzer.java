package com.company.market.util;

import com.company.market.dao.MarketValue;

import java.util.List;

public class MarketValueAnalyzer {
    public static MarketValue getCompanyWithMaximumMarket(List<MarketValue> list) {
        if(list == null || list.size() == 0) return null;

        MarketValue maxMarket = list.get(0);
        for(int i = 1; i < list.size(); i++) {
            if(list.get(i).year2019 > maxMarket.year2019) {
                maxMarket = list.get(i);
            }
        }

        return maxMarket;
    }

    public static MarketValue getCompanyWithMinimumMarket(List<MarketValue> list) {
        if(list == null || list.size() == 0) return null;

        MarketValue minMarket = list.get(0);
        for(int i = 1; i < list.size(); i++) {
            if(list.get(i).year2019 < minMarket.year2019) {
                minMarket = list.get(i);
            }
        }

        return minMarket;
    }
}