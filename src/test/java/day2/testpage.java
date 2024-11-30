package day2;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class testpage {

	public static void main(String[] args) throws InterruptedException {
		WebDriver driver = new ChromeDriver();
		driver.get("https://app.callerdesk.io");
		driver.manage().window().maximize();
		Thread.sleep(2000);
		System.out.println(driver.getTitle());
boolean status = driver.getPageSource().contains("Sign In");
 if (status= true) {
	System.out.println("pass");
}
 else {
	System.out.println("fail");
}
 driver.close();
	}

}
