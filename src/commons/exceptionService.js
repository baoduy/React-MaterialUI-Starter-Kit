export function getErrorMessage(error, info) {
  if (typeof error === 'string') return error;
  return 'There is an error had been uncured. Please contact your App Support for details.';
}
