import { shallow } from 'vue-test-utils'
import DetailMarketComp from '@/components/detailMarket'
import { data } from '../samples.js'

describe('detailMarket.vue', () => {
    let cmp ;

    beforeEach(() => {
        cmp = shallow(DetailMarketComp, {
            propsData: {
                title: 'Min Market Cap',
                data: data[2]
            }
        });
    });

    it('snapshot', () => {
        cmp.vm.$nextTick(() => {
            expect(cmp.vm.$el).toMatchSnapshot();
        });
    });

    it('computed', () => {
        expect(cmp.vm.maxYear).toEqual('2017');
        expect(cmp.vm.minYear).toEqual('2015');
    });
});