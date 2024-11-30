package day4;

import java.net.http.HttpClient;
import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import day3.newweb;
import io.opentelemetry.exporter.logging.SystemOutLogRecordExporter;

public class Drpdown {

    public static void main(String[] args) throws InterruptedException {
    	
    	WebDriver driver = new ChromeDriver();
    
    	driver.get("https://www.selenium.dev/selenium/web/web-form.html");
    	driver.manage().window().maximize();
    
    	WebElement drop = driver.findElement(By.name("my-select"));
    	
    	Select sel  = new Select(drop);
    	sel.selectByVisibleText("One");
    			
    	WebElement pick = driver.findElement(By.name("my-file"));
    	//pick.sendKeys("C:\\Users\\DELL\\OneDrive\\Desktop\\Payslip_DIVYANSH_SAHU_07-2023.pdf");
    	WebElement check1 = driver.findElement(By.id("my-check-1"));
    	WebElement check2 = driver.findElement(By.id("my-check-2"));
    	WebElement check3 = driver.findElement(By.id("my-radio-1"));
    	WebElement check4 = driver.findElement(By.id("my-radio-2"));
    	
    	check1.click();
    	Thread.sleep(1000);
    	check2.click();
    	Thread.sleep(1000);
    	check3.click();
    	Thread.sleep(1000);
    	check4.click();
    	Thread.sleep(1000);
    	
    	WebElement subc = driver.findElement(By.xpath("//button[@class=\'btn btn-outline-primary mt-3\']"));
    	subc.click();
    	WebElement very = driver.findElement(By.xpath("//h1[@class=\'display-6\']"));
    	String txvery = very.getText();
        
    	
    	boolean status =  driver.getPageSource().contains("Form submitted");
    			
    			if(status==true)
    			{
    				System.out.println("Test Case pass ");
    			}
    			else
    			{
    				System.out.println("Test Case fail");
    			}
    	
    	//driver.findElement(By.id("emailuser")).sendKeys("Divyanshsahu3073@gmail.com");
    	//driver.findElement(By.id("passworduser")).sendKeys("12345");
    	//driver.findElement(By.id("do_signin-submit-btn")).click();
    	Thread.sleep(5000);
    	
    	driver.quit();
    	
    	
    	
    }
	
}
