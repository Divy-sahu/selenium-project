package day7;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;


public class MouseHoer {
	public static void main(String[] args) throws InterruptedException {		
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.browserstack.com/");
		driver.manage().window().maximize();
		//driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		Thread.sleep(3000);
		
		WebElement we = driver.findElement(By.xpath("//*[@id='products-dd-toggle']"));
		
		Actions action = new Actions(driver);
		action.moveToElement(we);

		WebElement we1 = driver.findElement(By.xpath("//*[@id='products-dd-tabpanel-1-inner-1']/div[1]/div[2]/a/span"));
	
		action.moveToElement(we1);
		action.click().build().perform();
	
	}

}
