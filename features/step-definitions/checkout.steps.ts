import 'expect-webdriverio';
import { Then, When } from "@cucumber/cucumber";
import { actorInTheSpotlight } from '@serenity-js/core';
import { stepTimeout } from '../../features/support/configs'
import { catalogProducts } from '../../main/tasks/catalog/catalogProduct'
import { checkoutCar } from '../../main/tasks/checkout/checkoutCar';

When('gets the car details and confirm the order creation', stepTimeout, async () => {
        await actorInTheSpotlight().attemptsTo(
            await catalogProducts.selectCarTab()
        )
        
        await actorInTheSpotlight().attemptsTo(
            await checkoutCar.confirmProducts()
        )
    }
)

Then('confirm the order was created as expected', stepTimeout, async () => {
        
    }
)