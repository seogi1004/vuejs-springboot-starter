<template>
    <div>
        <h5>{{ title }}</h5>
        <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Max Year</th>
                    <th>Min Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ data.company }}</td>
                    <td>{{ maxYear }}</td>
                    <td>{{ minYear }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "detailMarket",
        props: {
            title: {
                type: String,
                required: true
            },
            data: {
                type: Object,
                required: true
            }
        },
        computed: {
            maxYear: function() {
                const keys = Object.keys(this.data);
                const values = Object.values(this.data);
                values.shift();

                const maxIndex = values.indexOf(Math.max(...values));
                return keys[maxIndex + 1].substr(4);
            },
            minYear: function() {
                const keys = Object.keys(this.data);
                const values = Object.values(this.data);
                values.shift();

                const minIndex = values.indexOf(Math.min(...values));
                return keys[minIndex + 1].substr(4);
            }
        }
    }
</script>

<style lang="scss" scoped>
    table {
        width: 400px;
    }

    th, td {
        font-size: 11px;
        padding: 5px;
        border: 1px solid #dcdcdc;
    }

    h5 {
        text-align: left;
        margin-bottom: 5px;
    }
</style>