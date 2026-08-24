function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

// Returns a shortened, query-string-free version of a URL for display in the
// UI. The full URL is still used for the actual link (href) — this only
// affects the visible text so long URLs don't blow out the layout.
function truncateUrlForDisplay(url, maxLength = 60) {
  if (!url) return '';
  let display = url;
  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
    // Drop the query string and hash; keep origin + path.
    display = `${parsed.origin}${parsed.pathname}`;
  } catch (_) {
    // Not a parseable URL — fall back to stripping the query/hash manually.
    display = url.split(/[?#]/)[0];
  }
  if (display.length > maxLength) {
    display = `${display.substring(0, maxLength - 1)}…`;
  }
  return display;
}

// Picks a random attributed quote for the current language and renders it into
// the quote block. The block stays hidden if no quotes are available so older
// app versions (which don't ship quote data) degrade gracefully.
function renderRandomQuote() {
  const quotes = selected_lang.quotes;
  if (!quotes?.length) return;

  const quoteBlock = document.getElementById('quoteBlock');
  const quoteText = document.getElementById('quoteText');
  const quoteAttribution = document.getElementById('quoteAttribution');
  if (!quoteBlock || !quoteText || !quoteAttribution) return;

  const { quote, attribution } =
    quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = quote;
  quoteAttribution.textContent = attribution;
  quoteBlock.classList.remove('hide');
}

function logError(
  data,
  message = 'Invalid value for old_url query param',
  level = 'error'
) {
  //TODO: implement postHog
}
