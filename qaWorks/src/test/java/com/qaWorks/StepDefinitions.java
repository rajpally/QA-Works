package com.qaWorks;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {

	WebDriver driver;
	
	@Before
	public void startBrowser(){
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		System.out.println("Opening Browser......");
	}
	
	@After
	public void closeBrowser(){
		driver.quit();
		System.out.println("Closing Browser......");
	}

//Implemented steps with the snippets below:

@Given("^I am on the QAWorks Site$")
public void I_am_on_the_QAWorks_Site() throws Throwable {
	
	driver.get("http://www.qaworks.com/");
	//Clicking Contact button
	driver.findElement(By.xpath("//*[@id='menu']/li[1]/a")).click();
}

@Then("^I should be able to contact QAWorks with the following information$")
public void I_should_be_able_to_contact_QAWorks_with_the_following_information(DataTable arg1) throws Throwable {
	
	//Typing Name
	driver.findElement(By.xpath("//div[@id='ContactNameBox']//input")).sendKeys("j.Bloggs");
	//Typing Email id
	driver.findElement(By.xpath("//div[@id='ContactEmailBox']//input")).sendKeys("j.Bloggs@qaworks.com");
	//Typing Message
	driver.findElement(By.xpath("//div[@id='ContactMessageBox']//textarea")).sendKeys("Please contact me I want to find out more");
	//Clicking Send button
	driver.findElement(By.xpath("//div[@id='ContactSend']//input")).click();
}

@When("^I leave message as blank$")
public void i_leave_message_as_blank() throws Throwable {
	//Typing Name
	driver.findElement(By.xpath("//div[@id='ContactNameBox']//input")).sendKeys("j.Bloggs");
	//Typing Email id
	driver.findElement(By.xpath("//div[@id='ContactEmailBox']//input")).sendKeys("j.Bloggs@qaworks.com");

}

@When("^Click send button$")
public void click_send_button() throws Throwable {
	//Clicking Send button
	driver.findElement(By.xpath("//div[@id='ContactSend']//input")).click();
}

@Then("^I should see an error message$")
public void i_should_see_an_error_message() throws Throwable {
	if(driver.findElement(By.id("ctl00_MainContent_rfvMessage")).getText().equals("Please type your message")){
		System.out.println("Pass");
	}else{
		System.out.println("Fail");
	}
}
}

