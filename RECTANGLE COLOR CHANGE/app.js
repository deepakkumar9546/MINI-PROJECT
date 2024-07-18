var rect=document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
   var rectangle = rect.getBoundingClientRect();
   var insiderectval=details.clientX-rectangle.left;


if(insiderectval<rectangle.width/2){
    var redcolor=gsap.utils.mapRange(0,rectangle.width/2,255,0,insiderectval);
    gsap.to(rect,{
        backgroundColor:`rgb(${redcolor},0,0)`,
        ease:Power4,
    })
}
else{
    
var bluecolor=gsap.utils.mapRange(rectangle.width/2,rectangle.width,0,255,insiderectval);
gsap.to(rect,{
    backgroundColor:`rgb(0,0,${bluecolor})`,
    ease:Power4,
})
}

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white",
    })
})
})
