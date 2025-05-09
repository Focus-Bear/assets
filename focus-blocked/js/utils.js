function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

function logSentryError(
  data,
  message = 'Invalid value for old_url query param',
  level = 'error'
) {
  // Sentry?.captureMessage(message, {
  //   level,
  //   extra: data,
  // });
}
