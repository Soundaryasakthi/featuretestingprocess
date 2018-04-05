$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("calc.feature");
formatter.feature({
  "line": 2,
  "name": "Calculator",
  "description": "In order to avoid silly mistakes\r\n  As a math idiot\r\n  I want to be told the sum of two numbers",
  "id": "calculator",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@calc"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Add two numbers",
  "description": "",
  "id": "calculator;add-two-numbers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@mytag"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I have entered 50",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have also entered 70",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press add",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the result should be 120 on the screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 15
    }
  ],
  "location": "MyStepDefinitions.i_have_entered(int)"
});
formatter.result({
  "duration": 104393726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 20
    }
  ],
  "location": "MyStepDefinitions.i_have_also_entered(int)"
});
formatter.result({
  "duration": 90597,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.i_press_add()"
});
formatter.result({
  "duration": 468779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120",
      "offset": 21
    }
  ],
  "location": "MyStepDefinitions.the_result_should_be_on_the_screen(int)"
});
formatter.result({
  "duration": 101403,
  "status": "passed"
});
});