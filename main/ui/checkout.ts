import { by, Target } from '@serenity-js/webdriverio';

export const checkoutUI = {
    CheckoutCarConfirmButton: () =>
        Target.the('confirm Button').located(by.xpath('//*[@content-desc="CheckoutCarConfirmButton"]')),
}