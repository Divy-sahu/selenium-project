package day4;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class CallerDeskLogin {

    public static void main(String[] args) throws InterruptedException {
        
       
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-notifications"); 
	
		 options.addArguments("--use-fake-ui-for-media-stream");
		options.addArguments("--use-fake-device-for-media-stream");
		 
        options.addArguments("--disable-features=MediaRouter"); 
        
        WebDriver driver = new ChromeDriver(options);
        driver.navigate().to("https://app.callerdesk.io/");
        driver.manage().window().maximize();
        driver.manage().window().setSize(new Dimension(2000, 1500));

        
        Thread.sleep(1000);

        
        WebElement user = driver.findElement(By.id("emailuser"));
        WebElement pwd = driver.findElement(By.id("passworduser"));
        WebElement sub = driver.findElement(By.id("do_signin-submit-btn"));

        user.sendKeys("divyanshsahu3073@gmail.com");
        pwd.sendKeys("12345");
        sub.click();


        Thread.sleep(2000); 
 WebElement usrmang = driver.findElement(By.xpath("//*[@id=\"bs-example-navbar-collapse-2\"]/ul/li[4]/a/i"));
        
        // You can click the element or interact with it as needed
        usrmang.click();
        
        WebElement link = driver.findElement(By.linkText("Members"));
        link.click();

        Thread.sleep(2000);
        
    }
}
