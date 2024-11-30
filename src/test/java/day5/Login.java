package day5;

import java.sql.Driver;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class Login {
	WebDriver driver;
	@Parameters({"browser","baseurl"})
	@Test
	void A(String browser , String baseurl)
	{
		if(browser.equals("chrome"))
		{
			driver = new ChromeDriver();
		}
		else if(browser.equals("edge"))
		{
			driver = new EdgeDriver();
		}
		else 
		{
			System.out.println("Exit");
		}
		
		driver.manage().window().maximize();
		driver.get(baseurl); 
	}
	@Parameters({"search"})
	@Test
	void B(String search)
	{
		WebElement ser = driver.findElement(By.xpath(search));
		ser.sendKeys("manual testing");
		ser.sendKeys(Keys.ENTER);
	
		
	}

}
