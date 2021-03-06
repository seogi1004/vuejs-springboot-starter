import { mount } from 'vue-test-utils'
import RateChartComp from '@/components/rateChart'

describe('rateChart.vue', () => {
    let cmp;

    beforeEach(() => {
        cmp = mount(RateChartComp, {
            propsData: {
                names: [ 'Google', 'Microsoft', 'Facebook', 'Amazon', 'Apple' ],
                values: [ 767, 632, 328, 528, 629 ],
                valueSum: 2884
            }
        });
    });

    it('snapshot', () => {
        cmp.vm.$nextTick(() => {
            expect(cmp.vm.$el).toMatchSnapshot();
        });
    });

    it('methods.dataFormat', () => {
        expect(cmp.vm.dataFormat(1234, null)).toBe(1234);
        expect(cmp.vm.dataFormat(1234, 2884)).toEqual('100.0%');
    });
});