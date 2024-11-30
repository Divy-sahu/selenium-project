package day2;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class WithTestNG {

	 @Test
	void OpenPage() throws InterruptedException
	{
		WebDriver driver = new ChromeDriver();

		driver.get("https://in.indeed.com/");
		
		driver.manage().window().maximize();
		
		Thread.sleep(3000);
		
		System.out.println(driver.getTitle());
		System.out.println(driver.getCurrentUrl());
		
		driver.close();
		
	}
}
