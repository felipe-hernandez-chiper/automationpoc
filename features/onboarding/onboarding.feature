@Onboarding
Feature: Onboarding Ecommerce

  Scenario Outline: Login to Ecommerce APP with an old Chiper User

    Given Customer completes the onboarding welcome
    When gets an otp in "<country>" for the channel "<channel>"
    And confirms the otp sent
    Then checks the onboarding was completed succesfully

    Examples:
      | channel   | country  |
      #| llamada   | brazil   | 
      #| sms  | mexico   |
      | whatsapp  | colombia |
