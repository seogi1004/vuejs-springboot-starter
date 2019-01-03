<template>
    <div>
        <graph-pie
                :width="500"
                :height="500"
                :padding-top="75"
                :padding-right="75"
                :padding-bottom="75"
                :padding-left="75"
                :values="values"
                :names="names"
                :show-text-type="'outside'"
                :data-format="dataFormat"
                :shape="'donut'"
                :show-total-value="true">
            <note :text="'Market cap average'"></note>
            <legends :names="names"></legends>
            <tooltip :names="names"></tooltip>
        </graph-pie>
    </div>
</template>

<script>
    import PieGraph from 'vue-graph/src/components/pie'
    import NoteWidget from 'vue-graph/src/widgets/note'
    import TooltipWidget from 'vue-graph/src/widgets/tooltip'
    import LegendWidget from 'vue-graph/src/widgets/legends'

    export default {
        name: "rateChart",
        components: {
            'graph-pie': PieGraph,
            'note': NoteWidget,
            'tooltip': TooltipWidget,
            'legends': LegendWidget
        },
        props: {
            names: {
                type: Array,
                required: true
            },
            values: {
                type: Array,
                required: true
            },
            valueSum: {
                type: Number,
                required: true
            }
        },
        methods: {
            dataFormat: function(key, value) {
                if(!value) return key;
                return ((value / this.valueSum) * 100).toFixed(1) + '%';
            }
        }
    }
</script>

<style scoped>
    div {
        position: absolute;
        right: 15px;
    }
</style>