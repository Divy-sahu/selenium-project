package day3;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Inputdata {
	
	public static void main(String[] args) throws InterruptedException {
		
		WebDriver driver = new ChromeDriver();
		driver.get("https://in.indeed.com/");
		driver.manage().window().maximize();
		Thread.sleep(3000);
		
		//driver.findElement(By.id("text-input-what")).sendKeys("Manual Testing");
		
		WebElement job = driver.findElement(By.id("text-input-what"));
		job.clear();
		job.sendKeys("Manual Testing");
		WebElement city = driver.findElement(By.id("text-input-where"));
		city.clear();
		city.sendKeys("noida");
		
	WebElement findjob = driver.findElement(By.className("yosegi-InlineWhatWhere-primaryButton"));
	findjob.click();
		
				
	}

}
