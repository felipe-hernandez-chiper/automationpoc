import { Task } from '@serenity-js/core'
import { Click, Enter } from '@serenity-js/webdriverio'
import { onboardingUI } from '../../ui/onboarding'

export const onboardingCheckOtp = {
    enter: () => 
        Task.where(
            `#actor fills the otp to complete de onboarding`,
            Click.on(onboardingUI.otpField()),
            Enter.theValue("1892").into(onboardingUI.otpField())
        )
}