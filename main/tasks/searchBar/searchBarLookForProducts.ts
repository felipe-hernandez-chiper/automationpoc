import { Task } from '@serenity-js/core'
import { Click, Enter, isVisible, Wait } from '@serenity-js/webdriverio';
import { searchBarUi } from '../../ui/searchBar';

export const searchBarLookForProducts = {
    lookFor: async () =>
        Task.where(`#actor looks for a product in the search`,
            await Click.on(searchBarUi.searchBarBanner()),
            await Enter.theValue("ron").into(searchBarUi.searchBarField()),
            await Click.on(searchBarUi.searchBarResultItem(1)),
            await Click.on(searchBarUi.searchBarResultItem(1)),
            await Click.on(searchBarUi.searchBarHelpPoint())
        )
}