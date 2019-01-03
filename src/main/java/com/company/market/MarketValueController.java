package com.company.market;

import com.company.market.dao.MarketDao;
import com.company.market.dao.MarketValue;
import com.company.market.util.MarketValueAnalyzer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MarketValueController {
    @Autowired
    private final MarketDao marketDao;

    @Autowired
    public MarketValueController(MarketDao marketDao) {
        this.marketDao = marketDao;
    }

    @RequestMapping("/market")
    public String index(Model model) {
        model.addAttribute("message", "Configuring GitLab CI in Vue.js and the SpringBoot development environment.");
        return "index";
    }

    @RequestMapping("/market/list")
    @ResponseBody
    public List<MarketValue> getMarketValueList() {
        return marketDao.list();
    }

    @RequestMapping("/market/max")
    @ResponseBody
    public MarketValue getMaximumMarket() {
        return MarketValueAnalyzer.getCompanyWithMaximumMarket(marketDao.list());
    }

    @RequestMapping("/market/min")
    @ResponseBody
    public MarketValue getMinimumMarket() {
        return MarketValueAnalyzer.getCompanyWithMinimumMarket(marketDao.list());
    }
}