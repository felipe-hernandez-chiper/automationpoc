import { Duration } from '@serenity-js/core';
import { Task } from '@serenity-js/core'
import { Ensure } from '@serenity-js/assertions';
import { Click, isVisible, Wait } from '@serenity-js/webdriverio';
import { catalogUI } from '../../ui/catalog'

export const catalogSuccessLogin = {
    check: () => 
        Task.where(
            `#actor checks the enough fields to confirm a success onboarding`,
            Click.on(catalogUI.helpPointMessageButtonClose()),
            Wait.until(catalogUI.catalogCustomerAddress(), isVisible()),
            Ensure.that(catalogUI.catalogCustomerAddress(), isVisible()),
        )
}