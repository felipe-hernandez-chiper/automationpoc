import { onboardingUI } from '../ui/onboarding'
import { constants } from '../constans/constants'

export const getButtonByChannel = (channel: string) => {
    switch (channel) {
        case constants.smsChannel:
            return onboardingUI.smsButton()

        case constants.callChannel:
            return onboardingUI.callButton()

        case constants.whatsappChannel:
            return onboardingUI.wspButton()
    }
}