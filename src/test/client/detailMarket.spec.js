import { shallowMount } from '@vue/test-utils'
import DetailMarketComp from '@/detailMarket'
import { samples } from './data.js'

describe('detailMarket.vue', () => {
    it('computed', () => {
        const cmp = shallowMount(DetailMarketComp, {
            propsData: {
                title: 'Min Market Cap',
                data: samples[2]
            }
        });

        expect(cmp.vm.maxYear).toEqual('2017');
        expect(cmp.vm.minYear).toEqual('2015');
    });
});