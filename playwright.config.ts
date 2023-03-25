import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testDir: './tests',
    /* Test timeout */
    timeout: 30 * 1000,
    /* Expectation timeout */
    expect: {
        timeout: 5 * 1000
    },
    /* Not running in parallel at this time */
    fullyParallel: false,
    /* Use the html reporter for test results */
    reporter: 'html'
}