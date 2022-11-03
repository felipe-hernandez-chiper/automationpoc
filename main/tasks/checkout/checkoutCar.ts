import { Task } from '@serenity-js/core'
import { Click } from '@serenity-js/webdriverio';
import { checkoutUI } from '../../ui/checkout';

export const checkoutCar = {
    confirmProducts: async () =>
        Task.where(`#actor confirm `,
            await Click.on(checkoutUI.CheckoutCarConfirmButton()),
            await Click.on(checkoutUI.CheckoutCarConfirmButton()),
        )
}