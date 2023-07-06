import { test } from '@playwright/test';

test.describe('Amazon homepage',()=> {

    test("amazon page", async({page}) => {
        console.log("Amazon landing page");
        page.goto("https://www.amazon.in/");
        

    })



})
