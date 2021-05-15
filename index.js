import puppeteer from 'puppeteer-extra';
import pluginStealth from 'puppeteer-extra-plugin-stealth';
//import schedule from 'node-schedule';
// Use this in main script
import {getFromApi, postToApi} from './api_service.js';

let email = 'tomaszdomagaa@gmail.com';
let password = 'Tom@szek18';

puppeteer.use(pluginStealth());

(async () =>{
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage();
    await page.goto('https://www.nike.com/pl/launch?s=upcoming')

    //Coockies page section
    await page.waitForSelector('button[data-qa="accept-cookies"]');
    await page.evaluate(() =>
        document.querySelector('button[data-qa="top-nav-join-or-login-button"]').click());

    //Loging page section
    await page.waitForSelector('button[data-qa="top-nav-join-or-login-button"]');
    await page.evaluate(() =>
        document.querySelector('button[data-qa="top-nav-join-or-login-button"]').click());

    //Email
    await page.waitForSelector('.emailAddress');
    await page.focus('.emailAddress > input');
    await page.keyboard.type(email);

    //Password
    await page.focus('.password > input');
    await page.keyboard.type(password);

    //Submit
    await page.evaluate(() =>
        document.querySelector('.loginSubmit > input').click());
    
    await page.evaluate(() => 
        document.querySelector(''))

    await page.screenshot({ path: 'example.png' });
    await browser.close();
})();

