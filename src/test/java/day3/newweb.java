package day3;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.devtools.v128.page.model.NavigatedWithinDocument;

public class newweb {

	public static void main(String[] args) throws InterruptedException {
		
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.selenium.dev/selenium/web/web-form.html");
		driver.manage().window().maximize();
		Thread.sleep(3000);
		
		driver.findElement(By.xpath("//input[@id='my-text-id']")).sendKeys("Manual Testing");
		
		driver.findElement(By.xpath("//input[@name='my-password']")).sendKeys("abc@123");
		driver.findElement(By.xpath("//textarea[@name='my-textarea']")).sendKeys("for manual testing");
		//driver.findElement(By.xpath("//a[@href='./index.html']")).click();
		driver.findElement(By.linkText("Return to index")).click();
		Thread.sleep(3000);
		driver.navigate().back();
		
		driver.close();
	}

}
