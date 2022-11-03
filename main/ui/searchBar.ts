import { by, Target } from '@serenity-js/webdriverio';

export const searchBarUi = {
    searchBarBanner: () =>
        Target.the('search bar banner').located(by.xpath('//*[@content-desc="SearchBarField"]')),
    searchBarField: () =>
        Target.the('search bar input text').located(by.xpath('//*[@content-desc="SearchBarTextInput"]')),
    searchBarResultItem: (index: Number) => 
        Target.the(`search bar result number ${index} in the list`).located(by.xpath(`//*[@content-desc="searchBarResult${index}"]`)),
    searchBarHelpPoint: () =>
        Target.the('search bar filter help point').located(by.xpath('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup'))
}