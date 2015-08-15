$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/qaWorks/contact.feature");
formatter.feature({
  "id": "contact-us-page",
  "description": "As an end user\r\nI want a contact us page\r\nSo that I can find out more about QAWorks exciting services!!",
  "name": "Contact Us Page",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 14998227693,
  "status": "passed"
});
formatter.scenario({
  "id": "contact-us-page;valid-submission",
  "tags": [
    {
      "name": "@login",
      "line": 6
    }
  ],
  "description": "",
  "name": "Valid Submission",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the QAWorks Site",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I should be able to contact QAWorks with the following information",
  "keyword": "Then ",
  "line": 9,
  "rows": [
    {
      "cells": [
        "name",
        "j.Bloggs"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "j.Bloggs@qaworks.com"
      ],
      "line": 11
    },
    {
      "cells": [
        "message",
        "Please contact me I want to find out more"
      ],
      "line": 12
    }
  ]
});
formatter.match({
  "location": "StepDefinitions.I_am_on_the_QAWorks_Site()"
});
formatter.result({
  "duration": 4756633800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_should_be_able_to_contact_QAWorks_with_the_following_information(DataTable)"
});
formatter.result({
  "duration": 12516938913,
  "status": "passed"
});
formatter.before({
  "duration": 17791913133,
  "status": "passed"
});
formatter.scenario({
  "id": "contact-us-page;error-message",
  "tags": [
    {
      "name": "@errorMessage",
      "line": 14
    }
  ],
  "description": "",
  "name": "Error Message",
  "keyword": "Scenario",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I am on the QAWorks Site",
  "keyword": "Given ",
  "line": 16
});
formatter.step({
  "name": "I leave message as blank",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "Click send button",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I should see an error message",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "location": "StepDefinitions.I_am_on_the_QAWorks_Site()"
});
formatter.result({
  "duration": 4722786304,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_leave_message_as_blank()"
});
formatter.result({
  "duration": 8768006309,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.click_send_button()"
});
formatter.result({
  "duration": 458848524,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_should_see_an_error_message()"
});
formatter.result({
  "duration": 10137455313,
  "status": "passed"
});
});