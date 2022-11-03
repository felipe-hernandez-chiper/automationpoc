import 'expect-webdriverio';
import { When } from "@cucumber/cucumber";
import { actorInTheSpotlight } from '@serenity-js/core';
import { stepTimeout } from '../../features/support/configs'
import { catalogProducts } from '../../main/tasks/catalog/catalogProduct';
import { catalogInternalCard } from '../../main/tasks/catalog/catalogInternalCard'

When('completes the minimum values to create an order', stepTimeout, async () => {
        await actorInTheSpotlight().attemptsTo(
            await catalogProducts.selectById(1)
        )
        
        await actorInTheSpotlight().attemptsTo(
            await catalogInternalCard.addNecessaryUnits(),
            await catalogInternalCard.addProductToCar()
        )
    }
)