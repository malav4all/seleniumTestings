const webdriver = require("selenium-webdriver")
By = webdriver.By
until = webdriver.until
key = webdriver.Key

let driver = new webdriver.Builder().forBrowser("chrome").build()
driver.get("http://localhost:3000/")
driver.findElement(By.id('userId')).sendKeys('malav');
driver.findElement(By.id('password')).sendKeys('Malav@12345',key.RETURN);
setTimeout(()=>{
    driver.findElement(By.name('logs')).click(); 
},2000)


// driver.sleep(10000)
// driver.quit()