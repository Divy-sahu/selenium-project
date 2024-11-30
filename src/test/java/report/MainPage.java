package report;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

public class MainPage implements I {
	
	WebDriver driver;
	boolean status;
	ExtentReports extentReports;
	ExtentTest extentTest;
	
	@BeforeTest
	void Launch_browser() throws InterruptedException
	{
		extentReports = new ExtentReports(path + "Image1.html");
		extentTest = extentReports.startTest("Dummy");		
		driver = new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();
		Thread.sleep(3000);
	}

	
	/*
	@Override
	public void Page_Varify() {
		
		status = driver.getPageSource().contains("Category");
		if(status==true)
		{
			extentTest.log(LogStatus.PASS, "Test case pass");
			//System.out.println("Test Case pss");
		}
		else 
		{
			extentTest.log(LogStatus.FAIL, "Test case fail");
			//System.out.println("Test Case fail");
		}
		
		extentReports.endTest(extentTest);
		extentReports.flush();		
	}
	*/
	@Test(priority = 1)
	public void clicksign() {
		WebElement link = driver.findElement(By.xpath("//*[@href='/login']"));
        link.click();     
        
        status= driver.getPageSource().contains("New User Signup!");
        if (status= true) {
        	extentTest.log(LogStatus.PASS, "test case pass");
        }
        else 
		{
			extentTest.log(LogStatus.FAIL, "Test case fail");
			
		}
        extentReports.endTest(extentTest);
		extentReports.flush();	
        
	}
	
	@Test(priority = 2)
	public void signup() {
		
		WebElement user = driver.findElement(By.xpath("//*[@id=\"form\"]/div/div/div[3]/div/form/input[2]"));
		WebElement mail = driver.findElement(By.xpath("//*[@id=\"form\"]/div/div/div[3]/div/form/input[3]"));
		WebElement sib = driver.findElement(By.xpath("//*[@id=\"form\"]/div/div/div[3]/div/form/button"));
		
		user.sendKeys("divy@gmail.com");
		mail.sendKeys("Div@123");
		sib.click();
		 status= driver.getPageSource().contains("Enter Account Information");
	        if (status= true) {
	        	extentTest.log(LogStatus.PASS, "test case pass");
	        }
	        else 
			{
				extentTest.log(LogStatus.FAIL, "Test case fail");
				
			}
	        extentReports.endTest(extentTest);
			extentReports.flush();	
	        
		
	}


	@Override
	public void Page_Varify() {
		// TODO Auto-generated method stub
		
	}
	
	
}
