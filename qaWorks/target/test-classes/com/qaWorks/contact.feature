Feature: Contact Us Page
	As an end user
	I want a contact us page
	So that I can find out more about QAWorks exciting services!!

@login
Scenario: Valid Submission
	Given I am on the QAWorks Site
	Then I should be able to contact QAWorks with the following information
		| name    | j.Bloggs                                  |
		| email   | j.Bloggs@qaworks.com                      |
		| message | Please contact me I want to find out more |

@errorMessage
Scenario: Error Message
	Given I am on the QAWorks Site
	When I leave message as blank
	And Click send button
	Then I should see an error message



#Bug Found: Server Error when filling wrong email address and clicking Send button