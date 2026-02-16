var iconmenu = document.getElementById("iconmenu");
var iconclose = document.getElementById("iconclose");
var col = document.querySelector("#col");


var tl = gsap.timeline()
 
tl.to(col,{
    right:30,
    duration:0.5,
})
tl.from('h4',{
    opacity:0,
    x:150,
    duration:0.5,
    stagger:0.2,
})

tl.from(iconclose,{
    opacity:0,
    x:150,
    duration:0.5,
})

tl.pause()

iconmenu.addEventListener("click", function() {
   tl.play()
})

iconclose.addEventListener("click", function(){
    tl.reverse()
})
