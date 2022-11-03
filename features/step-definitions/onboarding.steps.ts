import 'expect-webdriverio';

import { Given, When, Then } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight } from '@serenity-js/core';

import { onboardingWelcome } from '../../main/tasks/onboarding/onboardingWelcome'
import { onboardingSingUp } from '../../main/tasks/onboarding/onboardingSingUp'
import { onboardingCheckOtp } from '../../main/tasks/onboarding/onboardingCheckOtp'

import { stepTimeout } from '../../features/support/configs'
import { catalogSuccessLogin } from '../../main/questions/catalog/catalogSuccessLogin';

Given('{actor} completes the onboarding welcome', stepTimeout , async (actor: Actor) => {
        await actor.attemptsTo(
            onboardingWelcome.enter()
        )
    }
)

When('gets an otp in {string} for the channel {string}', async (country: string, channel: string) => {
        await actorInTheSpotlight().attemptsTo(
            onboardingSingUp.using(country, channel)
        )
    }
)

When('confirms the otp sent', stepTimeout, async () => {
        await actorInTheSpotlight().attemptsTo(
            onboardingCheckOtp.enter()
        )
    }
)

Then('checks the onboarding was completed succesfully', stepTimeout, async () => {
        await actorInTheSpotlight().attemptsTo(
            catalogSuccessLogin.check()
        )
    }
)

