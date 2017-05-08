export default function getErrorResponse(data) {
  let response = 'error';
  if (data) {
    if (data.errors) {
      response = data.errors.map(error => error.title).join(', ');
    } else if (data.error) {
      response = data.error;
    } else if (data.responseJSON) {
      if (data.responseJSON.error) {
        response = data.responseJSON.error
      } else if (data.responseJSON.errors) {
        response = data.responseJSON.errors.join(', ');
      }
    }
  }
  return response;
}
