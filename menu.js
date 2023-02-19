
$(document).ready(function(){


// heart
$(".heart").on("click",function(){
  $(this).toggleClass("is-active");
});
//filter
var mixer = mixiup('.product-list',{
  Selection:{
    target:'.product-card'
  },
  Animation:{
    duration:300
  }
});
})