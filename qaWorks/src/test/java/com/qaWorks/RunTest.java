package com.qaWorks;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(
			features = "src/test/resources",
			tags = "@login, @errorMessage"
		)
public class RunTest {

}
