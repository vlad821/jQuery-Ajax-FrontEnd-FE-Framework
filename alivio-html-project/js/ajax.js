$.ajax({
    url: 'https://www.dictionaryapi.com/api/v3/references/medical/json/doctor?key=API_KEY',
    method: 'GET',
    success: function(data) {
        // Display the response data on the page
        $('#responseDiv').html('<p>' + JSON.stringify(data) + '</p>');
    },
    error: function(error) {
        console.error('Error:', error);
    }
});
