Feature: Bottles
  As a big beer drinker
  I want to sing a song

  Scenario: First paragraph with 99 bottles
    Given I have 99 bottles of beer
    When I sing the first paragraph
    Then I should say "99 bottles of beer on the wall, 99 bottles of beer."

  Scenario: Second paragraph with 99 bottles
    Given I have 99 bottles of beer
    When I sing the second paragraph
    Then I should say "Take one down and pass it around, 98 bottles of beer on the wall."

  Scenario: Second paragraph with 3 bottles
    Given I have 3 bottles of beer
    When I sing the second paragraph
    Then I should say "Take one down and pass it around, 2 bottles of beer on the wall."

  Scenario: Second paragraph with 1 bottles
    Given I have 1 bottles of beer
    When I sing the second paragraph
    Then I should say "Take one down and pass it around, no more bottles of beer on the wall."

