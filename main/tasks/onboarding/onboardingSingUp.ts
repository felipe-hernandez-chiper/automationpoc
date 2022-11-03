import { Task } from '@serenity-js/core'
import { Click, Enter } from '@serenity-js/webdriverio'
import { phoneBycountry } from '../../helpers/phoneNumberByCountries'
import { onboardingUI } from '../../ui/onboarding'
import { getButtonByChannel } from '../../helpers/getButtonByChannel'

export const onboardingSingUp = {
    using: (country: string, channel: string) =>
        Task.where(
            `#actor onboarding with country ${country} , phone number ${phoneBycountry(country)[0].phoneNumber} and channel ${channel} button`,
            Click.on(onboardingUI.countryDropDown()),
            Enter.theValue(phoneBycountry(country)[0].phoneNumber).into(onboardingUI.onboardingSignInPhone()),
            Click.on(getButtonByChannel(channel))
        )
}