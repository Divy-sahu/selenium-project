package day7;

import java.awt.Window;
import java.io.File;
import java.io.IOException;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.io.FileHandler;
import org.testng.annotations.Test;

public class scroll implements screen {
	@Test
	void webpage() throws InterruptedException, IOException {
		
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.amazon.in/");
		
		driver.manage().window().maximize();
		Thread.sleep(3000);
		
		Dimension di = new Dimension(414, 915);
		driver.manage().window().setSize(di);
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("window.scroll(500, 1500)");
		
		File fi = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		FileHandler.copy(fi, new File(path + "image2.png"));
	}

}
