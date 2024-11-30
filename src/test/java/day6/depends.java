package day6;

import org.checkerframework.checker.units.qual.t;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class depends {
	
	WebDriver driver;
	
	
	@Test
	void homepage() {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://automationexercise.com/");
		WebElement link = driver.findElement(By.xpath("//*[@href='/login']"));
        link.click();
		
	}
	@Test (dependsOnMethods = "signup")
	void loginpage(){
		
		WebElement user = driver.findElement(By.xpath("//*[@id=\"form\"]/div/div/div[1]/div/form/input[2]"));
		WebElement mail = driver.findElement(By.xpath("//*[@id=\"form\"]/div/div/div[1]/div/form/input[3]"));
		
		user.sendKeys("divy@gmail.com");
		mail.sendKeys("Div@123");
	}
	
	
	
	@Test(dependsOnMethods = "homepage")
	void signup() throws InterruptedException {
		
		WebElement user = driver.findElement(By.xpath("//*[@id=\"form\"]/div/div/div[3]/div/form/input[2]"));
		WebElement mail = driver.findElement(By.xpath("//*[@id=\"form\"]/div/div/div[3]/div/form/input[3]"));
		
		user.sendKeys("divy@gmail.com");
		mail.sendKeys("Div@123");
		Thread.sleep(2000);
	
	}

}
