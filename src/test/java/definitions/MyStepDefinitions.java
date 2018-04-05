package definitions;


import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;

import static org.junit.Assert.fail;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class MyStepDefinitions {

    @Given("^I have entered (\\d+)$")
public void i_have_entered(int arg1)  {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("Given");
}

@Given("^I have also entered (\\d+)$")
public void i_have_also_entered(int arg1)  {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("Given2");
}

@When("^I press add$")
public void i_press_add()  {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("When");
}

@Then("^the result should be (\\d+) on the screen$")
public void the_result_should_be_on_the_screen(int arg1)  {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("Then");
}

}