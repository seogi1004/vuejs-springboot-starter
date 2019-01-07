<template>
    <div class="row">
        <div class="col">
            <rate-chart :names="rateNames" :values="rateValues" :value-sum="rateValueSum"></rate-chart>
        </div>
        <div class="col table">
            <detail-market :title="'Max market cap'" :data="maxMarket"></detail-market><br/>
            <detail-market :title="'Min market cap'" :data="minMarket"></detail-market>
        </div>
    </div>
</template>

<script>
    import RateChartComp from './rateChart'
    import DetailMarketComp from './detailMarket'

    export default {
        name: 'layout',
        components: {
            rateChart: RateChartComp,
            detailMarket: DetailMarketComp
        },
        props: {
            marketList: {
                type: Array,
                required: false,
                default: null
            },
            maxMarket: {
                type: Object,
                required: false,
                default: null
            },
            minMarket: {
                type: Object,
                required: false,
                default: null
            }
        },
        computed: {
            rateNames: function() {
                return this.marketList.map(item => item.company);
            },
            rateValues: function() {
                const values = [];

                this.marketList.forEach(function(item) {
                    values.push(Math.floor((item.year2014 + item.year2015 + item.year2016 + item.year2017 + item.year2018 + item.year2019) / 6));
                });

                return values;
            },
            rateValueSum: function() {
                return this.rateValues.reduce((a, v) => a + v);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .row {
        &:before, &:after {
            display: table;
            content: " ";
            clear: both;
        }

        .col {
            position: relative;
            float: left;
            min-height: 1px;
            width: 50%;
            box-sizing: border-box;
        }

        .col.table {
            padding-left: 15px;
            padding-top: 120px;
        }
    }
</style>