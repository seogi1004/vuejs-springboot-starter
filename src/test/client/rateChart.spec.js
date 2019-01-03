import { shallowMount } from '@vue/test-utils'
import RateChartComp from '@/rateChart'

describe('rateChart.vue', () => {
    it('methods.dataFormat', () => {
        const cmp = shallowMount(RateChartComp, {
            propsData: {
                names: [ 'Google', 'Microsoft', 'Facebook', 'Amazon', 'Apple' ],
                values: [ 767, 632, 328, 528, 629 ],
                valueSum: 2884
            }
        });

        expect(cmp.vm.dataFormat(1234, null)).toBe(1234);
        expect(cmp.vm.dataFormat(1234, 2884)).toEqual('100.0%');
    });
});