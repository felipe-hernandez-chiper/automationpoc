import { Task } from '@serenity-js/core'
import { Click } from '@serenity-js/webdriverio';
import { onboardingUI } from '../../ui/onboarding';

export const onboardingWelcome = {
    enter: () =>
        Task.where(`#actor clicks welcome button`,
            Click.on(onboardingUI.onboardingWelcomeEnter())
        )
}