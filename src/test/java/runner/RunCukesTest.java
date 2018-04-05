package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
// D:\Subha\feature\src\test\java\com\kgisl\features
@CucumberOptions(features = "..\\feature\\src\\test\\java\\features", 
glue = "definitions", dryRun = false, strict = true,
tags = {"@calc"},
plugin = { "pretty", "html:target/html", "json:target/cucumber.json" })
public class RunCukesTest {

}