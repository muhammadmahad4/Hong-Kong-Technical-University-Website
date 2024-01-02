var flag = 0;
function f2() {
    var source1 = document.getElementById("src1");
    var source2 = document.getElementById("src2");

    if (flag === 0) {
        source1.setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4");
        source2.setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mkv");
        flag = 1;
    } else if (flag === 1) {
        source1.setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mp4");
        source2.setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mkv");
        flag = 0;
    }

    video.load();
    video.play();
}


document.addEventListener('DOMContentLoaded',function(){
    const msgs = [
        "Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!",
        "Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!",
        "Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!"
        ]; //making an array to store msgs.
    
    
        window.onload = f; //making sure random message picked on load
        setInterval(msgloop, 3000); //making sure to change and display random msg after 3 seconds
    
        //generating a random index to pick from array
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
    
        heading = document.querySelector(".promotion-information-block1 > .heading > h3"); //selecting heading

        function f() {
        Randommsg = getRandomInt(msgs.length);
        heading.innerHTML = msgs[Randommsg];
    }

    function msgloop() {
        let indexofcurrent = Randommsg;
        indexofnewmsg = indexofcurrent + 1;
        if (indexofnewmsg >= msgs.length) {
            indexofnewmsg = 0;
        }
        heading.innerHTML = msgs[indexofnewmsg];
        Randommsg = indexofnewmsg; // Update the current message index
    }

    
        //code for enabling video.
        // var video = document.getElementById("video"); //selecting video element
        // // attaching event handler
        // video.onended = f2;
        // var flag = 0;
    
        //use flag to ensure that after video1, video 2 is played and vice versa. 
        // function f2() {
        //     var source1 = document.getElementById("src1");
        //     var source2 = document.getElementById("src2");
    
        //     if (flag === 0) {
        //         source1.setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4");
        //         source2.setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mkv");
        //         flag = 1;
        //     } else if (flag === 1) {
        //         source1.setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mp4");
        //         source2.setAttribute("src", "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mkv");
        //         flag = 0;
        //     }
    
        //     video.load();
        //     video.play();
        // }
})
