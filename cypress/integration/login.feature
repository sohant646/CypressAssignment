Feature: Registration Module

    Scenario: Verify user is able to create an account
        When User navigate to website
        And User click on create an account header button
        And User enters the firstname
        And User enters the lastname
        And User enters the email
        And User enters the password
        And User enters the confirm password
        And User click on create an account button
        Then Verify user is getting required success message after creating an account

    Scenario: Verify user should be able to login with the same credentials created above
        When User navigate to website
        And User click on sign in header button
        And User enters the email under login page
        And User enters the password under login page
        And User click on signin button under login page
        Then Verify user logged in successfully