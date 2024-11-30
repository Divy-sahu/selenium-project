package day8;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class useinterface implements inter{
	WebDriver driver;
	@BeforeTest
	void openbroswer() {
		
    driver = new ChromeDriver();
	driver.get(url);
    driver.manage().window().maximize();
	
	}
	@Test
	void EnterData()
	{
		driver.findElement(user).sendKeys("admin");
		driver.findElement(password).sendKeys("admin123");
		driver.findElement(submit).click();
		
		
	}

}
