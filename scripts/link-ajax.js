

$(document).ready(function(){     
    $(".link-ajax").click(function(){
        $.ajax({url: "https://jsonplaceholder.typicode.com/posts",  method: 'GET'}).then(function(data) {
            console.log("ajax");
            $('.ajax-text').fadeToggle(2000).html(data[1].body);
        });  
    });
});

