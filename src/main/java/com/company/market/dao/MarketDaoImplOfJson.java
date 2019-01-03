package com.company.market.dao;

import java.util.ArrayList;
import java.util.List;

public class MarketDaoImplOfJson implements MarketDao {
    @Override
    public List<MarketValue> list() {
        List<MarketValue> samples = new ArrayList<>();
        samples.add(new MarketValue("Google", 552, 537, 761, 845, 1187, 723));
        samples.add(new MarketValue("Microsoft", 332, 542, 666, 653, 821, 779));
        samples.add(new MarketValue("Facebook", 250, 223, 355, 401, 364, 376));
        samples.add(new MarketValue("Amazon", 132, 354, 581, 650, 721, 734));
        samples.add(new MarketValue("Apple", 336, 456, 663, 850, 720, 749));
        return samples;
    }
}
