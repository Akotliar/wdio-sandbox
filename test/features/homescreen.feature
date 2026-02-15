Feature: HomeScreen displayed when application opens

Background:
  Given I am on the RideYR Homescreen

@navigateHome
Scenario: Homescreen search by stop code
    Then I should be able to search for a stop code in the search input field

Scenario: Homescreen view Service Alerts 
   When I select Service Alerts tab
   Then I should be able to view active service alerts