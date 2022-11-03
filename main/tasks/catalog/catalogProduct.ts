import { Cli } from '@cucumber/cucumber';
import { Task } from '@serenity-js/core'
import { Click } from '@serenity-js/webdriverio';
import { catalogUI } from '../../ui/catalog';

export const catalogProducts = {
    selectById: async (id: Number) =>
        Task.where(`#actor selects the product number ${id} in the catalog products list`,
            await Click.on(catalogUI.catalogProduct(id)),
        ),
    
    selectCarTab: async () =>
        Task.where('#actor gets the car detail',
            await Click.on(catalogUI.catalogCarTab())   
    )
}