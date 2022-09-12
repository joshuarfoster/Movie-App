$('#add').on('click', function() {
    $('<p>', { text: `Movie:${$('#movie').val()},Rating:${$('#rating').val()}` })
        .append($('<button>')).on('click', function(evt) {
            ($(this)).remove()
        })
        .appendTo($('#movieList'));
    return false;
})