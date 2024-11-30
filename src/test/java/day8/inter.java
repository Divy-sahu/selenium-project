package day8;

import org.openqa.selenium.By;

public interface inter {
	String url = "https://automationexercise.com/signup";
	By user = By.xpath("//*[@id=\"form\"]/div/div/div[3]/div/form/input[2]");
	By password = By.xpath("//*[@id=\"form\"]/div/div/div[3]/div/form/input[3]");
    By submit = By.xpath("//*[@id=\"form\"]/div/div/div[3]/div/form/button");
    

}
