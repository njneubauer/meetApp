import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 200,
            args: [
                '--disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure'
            ]
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.Event');
    });

    afterAll(()=>{
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.Event .details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.Event .details-btn');
        const eventDetails = await page.$('.Event .details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.Event .details-btn');
        const eventDetails = await page.$('.Event .details');
        expect(eventDetails).toBeNull();
    });
});