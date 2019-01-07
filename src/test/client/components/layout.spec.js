import { shallow } from 'vue-test-utils'
import LayoutComp from '@/components/layout'
import { data } from '../samples.js'

describe('layout.vue', () => {
    let cmp ;

    beforeEach(() => {
        cmp = shallow(LayoutComp, {
            propsData: {
                marketList: data,
                maxMarket: data[1],
                minMarket: data[2]
            }
        });
    });

    it("computed.rateNames", () => {
        expect(cmp.vm.rateNames[0]).toEqual('Google');
        expect(cmp.vm.rateNames[1]).toEqual('Microsoft');
    });

    it("computed.rateValues", () => {
        expect(cmp.vm.rateValues[0]).toBe(767);
        expect(cmp.vm.rateValues[1]).toBe(632);
    });

    it("computed.rateValueSum", () => {
        expect(cmp.vm.rateValueSum).toBe(2884);
    });
});