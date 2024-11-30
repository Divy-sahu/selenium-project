package day6;

import java.sql.Driver;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class crossbroswer {
 
	WebDriver driver;
	@Parameters({"baseurl", "browser"})
	@Test
	void homepage(String baseurl, String browser){
		
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
	

	@Test
	void login() {
		
		WebElement link = driver.findElement(By.xpath("//*[@href='/login']"));
        link.click();   
		
	}

}
