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
