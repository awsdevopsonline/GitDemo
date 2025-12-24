const {test} = require('@playwright/test')
//
//test.describe.configure({mode: 'serial'});

test("UI Basics1",async  ({page})=> {

    await page.goto("https://google.com"); 
       await page.locator("[title='Search']").fill("punnam@gmail.com");       
   // await page.locator(".truncate").pressSequentially("Playwright");
    await page.locator("a[aria-label='Gmail ']").click();  
    await console.log("HELLO WORLD 1");  

});

test("UI Basics2",async  ({page})=> {
    await page.goto("https://google.com");
          await page.locator("[title='Search']").click(); //fill("punnam@gmail.com");       
    //await page.locator(".truncate").pressSequentially("Playwright");
    await page.locator("a[aria-label='Gmail']").click();  
    await console.log("HELLO WORLD 2");  

});

test("UI Basics3", async ({page}) => {
    await page.goto("https://google.com");
    await page.locator("[title='Search']").fill("punnam@gmail.com");
    await page.locator("a[aria-label='Gmail ']").click();
    console.log("HELLO WORLD 3");
});


test("UI Basics4", async ({page}) => {
    await page.goto("https://google.com");
    await page.locator("[title='Search']").fill("punnam@gmail.com");
    await page.locator("a[aria-label='Gmail ']").click();
    console.log("HELLO WORLD 3");
});


test("UI Basics55", async ({page}) => {
    await page.goto("https://google.com");
    await page.locator("[title='Search']").fill("punnam@gmail.com");
    await page.locator("a[aria-label='Gmail ']").click();
    console.log("HELLO WORLD 3");
});