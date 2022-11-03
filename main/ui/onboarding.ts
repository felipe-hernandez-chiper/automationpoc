import { by, Target } from '@serenity-js/webdriverio';

export const onboardingUI = {
    onboardingWelcomeEnter: () =>
        Target.the('Onboarding Enter Button').located(by.xpath('//*[@resource-id="onboardingWelcomeEnter"]')),
    countryDropDown: () =>
        Target.the('country selector').located(by.xpath('//*[@resource-id="onboardingSignInPhoneCode"]')),
    onboardingSignInPhone: () =>
        Target.the('phone number input').located(by.xpath('//*[@resource-id="onboardingSignInPhone"]')),
    smsButton: () =>
        Target.the('Sms Button').located(by.xpath('//*[@resource-id="onboardingSignInSMS"]')),
    wspButton: () =>
        Target.the('Whatsapp Button').located(by.xpath('//*[@resource-id="onboardingSignInWS"]')),
    callButton: () =>
        Target.the('Call Button').located(by.xpath('//*[@resource-id="onboardingSignInCall"]')),
    otpField: () =>
        Target.the('Otp Field').located(by.xpath('//*[@content-desc="onboardingConfirmCodeField"]'))
}
