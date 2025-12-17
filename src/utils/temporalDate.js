// Formats today's date as "mm/dd/yyyy" using the Temporal API.
// If Temporal is not available natively, install the polyfill:
//   npm i @js-temporal/polyfill
import { Temporal } from '@js-temporal/polyfill';

export function formatTodayMMDDYYYY() {
    const now = Temporal.Now;
    console.log(now);


    const date = now.plainDateISO(); // e.g., PlainDate { year, month, day }
    const mm = String(date.month).padStart(2, '0');
    const dd = String(date.day).padStart(2, '0');
    const yyyy = String(date.year);
    return `${mm}/${dd}/${yyyy}`;
}

// Optional: variant that accepts any Temporal.PlainDate
export function formatPlainDateMMDDYYYY(plainDate) {
    const mm = String(plainDate.month).padStart(2, '0');
    const dd = String(plainDate.day).padStart(2, '0');
    const yyyy = String(plainDate.year);
    return `${mm}/${dd}/${yyyy}`;
}
