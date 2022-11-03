@e2e @EcommerceUi

Feature: Create a Basic Order

    Scenario Outline: Create a basic order with old Chiper user
    
    Given Customer completes the onboarding welcome
    When gets an otp in "<country>" for the channel "<channel>"
    And confirms the otp sent
    Then checks the onboarding was completed succesfully
    When looks for a products through search bar
    And completes the minimum values to create an order
    When gets the car details and confirm the order creation
    Then confirm the order was created as expected
    
    Examples:
      | channel   | country  |
     #| llamada   | brazil   | 
     #| sms       | mexico   |
      | whatsapp  | colombia |
