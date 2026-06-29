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
    const parsed = new URL(
      url.startsWith('http') ? url : `https://${url}`
    );
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

function logError(
  data,
  message = 'Invalid value for old_url query param',
  level = 'error'
) {
  //TODO: implement postHog
}
