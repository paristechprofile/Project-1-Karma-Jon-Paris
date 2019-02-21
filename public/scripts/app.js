
$(document).ready(() => {
    $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/',
    success: handleSuccess,
    error: handleError
    });
});