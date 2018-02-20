$(function () {
    console.log('ham');
    $('._hamburger').click(function () {
        $('._nav').slideToggle();
    });
});


$(document).ready(function(){     
    $(".link-ajax").click(function(){
        $.ajax({url: "https://jsonplaceholder.typicode.com/posts",  method: 'GET'}).then(function(data) {
            console.log("ajax");
            $('.ajax-text').fadeToggle(2000).html(data[1].body);
        });  
    });
});


console.log("start module1");
$(document).ready(function(){
    console.log('popover');
    $('.btn-default').popover({
    title: "Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.", 
    content: "Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.", 
    placement: "bottom",
    animation: true
    });
    $('.img-carousel').popover({title: "Hello!!!", content: "Blablabla", trigger: "click"});   
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbWJ1cmdlci5qcyIsImxpbmstYWpheC5qcyIsIm1vZHVsZTEuanMiLCJwb3BvdmVyLWxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnaGFtJyk7XHJcbiAgICAkKCcuX2hhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuX25hdicpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxufSk7IiwiXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpeyAgICAgXHJcbiAgICAkKFwiLmxpbmstYWpheFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQuYWpheCh7dXJsOiBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiLCAgbWV0aG9kOiAnR0VUJ30pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFqYXhcIik7XHJcbiAgICAgICAgICAgICQoJy5hamF4LXRleHQnKS5mYWRlVG9nZ2xlKDIwMDApLmh0bWwoZGF0YVsxXS5ib2R5KTtcclxuICAgICAgICB9KTsgIFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuIiwiY29uc29sZS5sb2coXCJzdGFydCBtb2R1bGUxXCIpOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygncG9wb3ZlcicpO1xyXG4gICAgJCgnLmJ0bi1kZWZhdWx0JykucG9wb3Zlcih7XHJcbiAgICB0aXRsZTogXCJQcm9pbiBpYWN1bGlzIHB1cnVzIGNvbnNlcXVhdCBzZW0gY3VyZSBkaWduaSBzc2ltLiBEb25lYyBwb3J0dGl0b3JhIGVudHVtIHN1c2NpcGl0IGFlbmVhbiByaG9uY3VzIHBvc3VlcmUgb2RpbyBpbiB0aW5jaWR1bnQuXCIsIFxyXG4gICAgY29udGVudDogXCJEb25lYyBwb3J0dGl0b3JhIGVudHVtIHN1c2NpcGl0IGFlbmVhbiByaG9uY3VzIHBvc3VlcmUgb2RpbyBpbiB0aW5jaWR1bnQuXCIsIFxyXG4gICAgcGxhY2VtZW50OiBcImJvdHRvbVwiLFxyXG4gICAgYW5pbWF0aW9uOiB0cnVlXHJcbiAgICB9KTtcclxuICAgICQoJy5pbWctY2Fyb3VzZWwnKS5wb3BvdmVyKHt0aXRsZTogXCJIZWxsbyEhIVwiLCBjb250ZW50OiBcIkJsYWJsYWJsYVwiLCB0cmlnZ2VyOiBcImNsaWNrXCJ9KTsgICBcclxufSk7XHJcbiJdfQ==
