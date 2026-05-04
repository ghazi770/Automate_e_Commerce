import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly baseURL: string;

  constructor(page: Page) {
    this.page = page;
    this.baseURL = 'https://practice.automationtesting.in/my-account/';
  }

  async gotoBaseURL() {
    await this.page.goto(this.baseURL);
  }

  async fill(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }

  // ✅ FIXED CLICK METHOD
  async click(locator: string) {
    const element = this.page.locator(locator);

    // wait for visibility
    await element.waitFor({ state: 'visible' });

    // handle overlays (ads / iframe blockers)
    await this.handleOverlays();

    // click
    await element.click();
  }

  // ✅ overlay handler (reusable)
  async handleOverlays() {
    try {
      // close "Cerrar" or similar ad buttons if present
      const closeBtn = this.page.locator('button:has-text("Cerrar")');

      if (await closeBtn.isVisible({ timeout: 2000 })) {
        await closeBtn.click();
      }
    } catch (e) {
      // ignore if not found
    }
  }
}