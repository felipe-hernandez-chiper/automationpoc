import { Task } from '@serenity-js/core'
import { Click } from '@serenity-js/webdriverio';
import { catalogUI } from '../../ui/catalog';

export const catalogInternalCard = {
    addNecessaryUnits: async () =>
        Task.where('#actor adds units of this product',
            Click.on(catalogUI.catalogInternalAddQuantityButton()),
            Click.on(catalogUI.catalogInternalAddQuantityButton()),
        ),
    addProductToCar: async () =>
        Task.where('#actor adds the product to complete the minimum order values',
            Click.on(catalogUI.catalogInternalAddProductButton())
        )
}