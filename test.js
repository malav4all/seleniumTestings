const webdriver = require("selenium-webdriver")
By = webdriver.By
until = webdriver.until
key = webdriver.Key

let driver = new webdriver.Builder().forBrowser("chrome").build()
driver.get("http://thisis your project url")
driver.findElement(By.id('userId')).sendKeys('your id name');
driver.findElement(By.id('password')).sendKeys('your id password',key.RETURN);
setTimeout(()=>{
    driver.findElement(By.name('this is your btn id or name')).click(); 
},2000)


// driver.sleep(10000)
// driver.quit()