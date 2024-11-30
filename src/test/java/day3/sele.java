package day3;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class sele {
    public static void main(String[] args) throws InterruptedException {
        WebDriver driver = new ChromeDriver();

        driver.get("https://www.selenium.dev/selenium/web/web-form.html");

        driver.getTitle();

        driver.manage().timeouts().implicitlyWait(Duration.ofMillis(5000));

        WebElement textBox = driver.findElement(By.name("my-text"));
        WebElement submitButton = driver.findElement(By.cssSelector("button"));
        Thread.sleep(3000);
        textBox.sendKeys("Selenium");
        submitButton.click();
        Thread.sleep(3000);
        WebElement message = driver.findElement(By.id("message"));
        Thread.sleep(3000);
  
		System.out.println(driver.getTitle());
		System.out.println(driver.findElement(By.id("message")));

        driver.quit();
    }
}