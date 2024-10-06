import { expect } from "@playwright/test";
import { test } from "./coverage_wrapper";

test("find-watman", async ({ page }) => {  
  await page.goto("/");
  await expect(page.getByAltText("This is watman")).toBeInViewport();
});

test.describe("Wikipedia Tests", () => {

  test("Homepage loads correctly", async ({ page }) => {
    await page.goto("https://www.wikipedia.org/");
    
    await expect(page).toHaveTitle(/Wikipedia/);
  });

  test("Search functionality works", async ({ page }) => {
    await page.goto("https://www.wikipedia.org/");
    await page.fill("input#searchInput", "Playwright");
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/.*Playwright/);
    await expect(page.locator("h1#firstHeading")).toHaveText("Playwright");
  });

  test("Verify presence of sections in an article", async ({ page }) => {
    await page.goto("https://en.wikipedia.org/wiki/Playwright");
    await expect(page.locator("h2:has-text('History')")).toBeVisible();
    await expect(page.locator("h2:has-text('References')")).toBeVisible();
  });

  test("Link navigation works", async ({ page }) => {
    await page.goto("https://en.wikipedia.org/wiki/Playwright");
    await page.click('a:has-text("Playwright (software)")');
  });

});