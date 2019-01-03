import { shallowMount } from '@vue/test-utils'
import DetailMarketComp from '@/detailMarket'
import { data } from './samples.js'

describe('detailMarket.vue', () => {
    it('computed', () => {
        const cmp = shallowMount(DetailMarketComp, {
            propsData: {
                title: 'Min Market Cap',
                data: data[2]
            }
        });

        expect(cmp.vm.maxYear).toEqual('2017');
        expect(cmp.vm.minYear).toEqual('2015');
    });
});