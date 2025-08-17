function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

function logError(
  data,
  message = 'Invalid value for old_url query param',
  level = 'error'
) {
  //TODO: implement postHog
}
