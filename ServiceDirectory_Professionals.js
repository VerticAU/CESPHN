// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Professionals', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Professionals', async function() {
    await driver.get("https://dev-cesphn.cs115.force.com/apex/servicedirectory")
    await driver.findElement(By.id("Professional Type")).click()
    {
      const dropdown = await driver.findElement(By.id("Professional Type"))
      await dropdown.findElement(By.css("*[value='Allied Health Provider - Medicare Approved']")).click()
    }
    await driver.findElement(By.css(".btn-cy2an")).click()
    await driver.wait(until.elementLocated(By.xpath("//form/div/div[2]")), 20000)
  })
})
