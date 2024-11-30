package day1;

import org.openqa.selenium.chrome.ChromeDriver;

public class First {

	public static void main(String[] args) {
		
		ChromeDriver driver = new ChromeDriver();
		
		driver.get("https://mvnrepository.com/");
		
		driver.manage().window().maximize();

	}

}
