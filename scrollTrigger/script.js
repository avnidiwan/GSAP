gsap.to("#page1 .box", {
    borderRadius:"50%",
    duration:1,
    delay:1,
})
gsap.to("#page2 .box", {
    borderRadius:"50%",
    duration:1,
    delay:1,
    scrollTrigger:"#page2 .box"
})
// gsap.to("#page3 .box", {
//     borderRadius:"50%",
//     duration:1,
//     delay:1,
//     scrollTrigger:"#page3 .box"
// })

gsap.to("#page3 .box", {
    borderRadius:"50%",
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:"#page3 .box",
        scroller:"body",
        markers:true,
    }
})

//scrub
gsap.to("#page4 .box", {
    rotate:360,
   scale:1.5,
   borderRadius:"90%",
    scrollTrigger:{
        trigger:"#page4 .box",
        scroller:"body",
        markers:true,
        start:"top 80%",      
        scrub:1
    }
})

//pin
gsap.to("#page5 .box", {
    rotate:360,
    borderRadius:"90%",
  
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        markers:true,
        start:"top 60%",
       end:"top -60%",
        scrub:true,
       pin:true
    }
})