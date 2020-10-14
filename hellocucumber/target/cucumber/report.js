$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFile/test.feature");
formatter.feature({
  "name": "login test case",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "login test",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user can login",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefinitions.user_can_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefinitions.user_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user password",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinitions.user_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefinitions.user_click_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User looged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefinitions.user_looged_in()"
});
formatter.result({
  "status": "passed"
});
});