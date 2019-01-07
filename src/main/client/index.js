import './index.scss'
import '@babel/polyfill'
import Vue from 'vue'
import LayoutComp from './components/layout'

async function fetchMarketDatas(urls) {
    const result = [];

    const jsonPromises = urls.map(async url => {
        const response = await fetch(url);
        return response.json();
    });

    for (const jsonPromises of jsonPromises) {
        result.push(await jsonPromises);
    }

    return result;
}

fetchMarketDatas([ '/market/list', '/market/max', '/market/min' ]).then(function(result) {
    new Vue({
        el: "#app",
        components: {
            layout: LayoutComp
        },
        data: {
            marketList: result[0],
            maxMarket: result[1],
            minMarket: result[2]
        }
    });
});