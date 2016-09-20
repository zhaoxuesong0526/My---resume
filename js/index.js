FastClick.attach(document.body);
(function () {
    var winW = document.documentElement.clientWidth || document.body.clientWidth,
        descW = 320;
    document.documentElement.style.fontSize = winW / descW * 100 + "px";
})();


new Swiper(".swiper-container", {
    direction: 'vertical',
    loop: true,
    onSlideChangeEnd: callback
});

function callback(swiper) {
    var i = swiper.activeIndex;
    var ary = swiper.slides;
        [].forEach.call(ary, function (item, index) {
            if(index==i){
                if (i == 0||i==5) {
                    item.id = "page5"
                } else if (i == 6||i==1) {
                    item.id = null
                } else {
                    item.id = "page" + i
                }
                return
            }
            item.id=null;
        });
}

var musicAudio=document.getElementById("musicAudio");
var music=document.getElementById("music");
window.setTimeout(function(){
    musicAudio.play();
    musicAudio.addEventListener("canplay",function(){
        music.style.display="block";
        music.className="music move"
    },false)
},1000);
music.addEventListener("click",function(){
    if(musicAudio.paused){
        musicAudio.play();
        music.className="music move";
        return
    }
    musicAudio.pause();
    music.className="music"
},false);
