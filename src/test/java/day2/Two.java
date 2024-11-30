package day2;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Two {

	public static void main(String[] args) throws InterruptedException {
		
		WebDriver driver = new ChromeDriver();
		driver.get("https://in.indeed.com/");		
		driver.manage().window().maximize();		
		Thread.sleep(3000);
		
		System.out.println(driver.getTitle());
		System.out.println(driver.getCurrentUrl());
		boolean status = driver.getPageSource().contains("It only takes a few seconds");
		if(status==true)
		{
			System.out.println("Test Case pass ");
		}
		else
		{
			System.out.println("Test Case fail");
		}
		
		driver.close();
	}

}
