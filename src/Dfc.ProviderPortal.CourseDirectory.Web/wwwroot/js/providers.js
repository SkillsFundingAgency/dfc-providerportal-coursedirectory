/*eslint-disable */




$.ajax({
    url: "providers.json",

    dataType: "json",
    success: function( response ) {
        console.log( response ); // server response
    }

});
