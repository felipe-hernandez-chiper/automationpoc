import { by, Target } from '@serenity-js/webdriverio';

export const catalogUI = {
    helpPointMessageButtonClose: () =>
        Target.the('helpPoint close button').located(by.xpath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup')),
        
    catalogCustomerAddress: () =>
        Target.the('Customer Delivery Address').located(by.xpath('//*[@content-desc="catalogAddress"]')),
    
    catalogProduct: (id: Number) =>
        Target.the(`Product number ${id} catalog products list`).located(by.xpath(`//*[@content-desc="CatalogProductCard${id}"]`)),
        
    catalogInternalAddQuantityButton: () =>
        Target.the('Internal add product quantity button').located(by.xpath('//*[@content-desc="catalogInternalAddQuantityButton"]')),
    
    catalogInternalAddProductButton: () =>
        Target.the('Internal add prodcut button').located(by.xpath('//*[@content-desc="catalogInternalAddToCarButton"]')),
        
    catalogCarTab: () =>
        Target.the('Car Tab').located(by.xpath('//*[@content-desc="catalogCarTab"]'))
}