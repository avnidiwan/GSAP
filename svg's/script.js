let initialPath = `M 50 100 Q 100 100 1200 100`

let finalPath = `M 50 100 Q 100 100 1200 100`

let string = document.querySelector('#string')

// string.addEventListener('mouseenter', function(dets){
//     console.log(dets)
// })

// string.addEventListener('mouseleave', function(){
//     console.log("leaved")
// })

string.addEventListener('mousemove', function(dets){
    
    finalPath = `M 50 100 Q ${dets.x} ${dets.y} 1200 100`

    console.log(finalPath)

    gsap.to("svg path", {
        attr: {d:finalPath},
        duration:0.1,
        ease:"power4.out"
    })
})


string.addEventListener("mouseleave", function(){
    gsap.to('svg path', {
        attr: {d:initialPath},
        duration:1.5,
        ease: "elastic.out(1,0.2)",

    })
})