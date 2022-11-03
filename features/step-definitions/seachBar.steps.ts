import 'expect-webdriverio';
import { When } from "@cucumber/cucumber";
import { actorInTheSpotlight } from '@serenity-js/core';
import { stepTimeout } from '../../features/support/configs'
import { searchBarLookForProducts } from '../../main/tasks/searchBar/searchBarLookForProducts';

When('looks for a products through search bar', stepTimeout, async () => {
        await actorInTheSpotlight().attemptsTo(
            await searchBarLookForProducts.lookFor()
        )
    } 
)