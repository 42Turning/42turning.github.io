let cnt_t=0;
var arr=['_rblue','_blue','_hblue','_orange','_snow'];
var color=['260','250','270','60','360'];
let ban_url = document.getElementById("ban_src");
let theme_n = document.getElementById("theme-next");
if(ban_url){
    console.log('ok');
}
else{
    console.log('no');
}

var r_t = document.querySelector(':root');
function setHue(hue) {
    //console.log(hue+' '+typeof(hue));
    //output_t.innerHTML = hue;
    //slider_t.value = hue;
    r_t.style.setProperty(`--primary-hue`, hue);
}

function save_banner(){
    root.setAttribute('bannerName',cnt_t);
    localStorage.setItem('bannerName',cnt_t);
}
function load_banner(){
    var t=localStorage.getItem('bannerName');
    console.log('local value='+t);
    var v=parseInt(t);
    if(0<=t && t<arr.length){
        root.setAttribute('bannerName',t);
    }
}
function set_theme(){
    console.log("photo location: /img/banner/banner"+arr[cnt_t]+".jpg");
    ban_url.src="/img/banner/banner"+arr[cnt_t]+".jpg";
    setHue(color[cnt_t]);
}

load_banner();
cnt_t=parseInt(root.getAttribute('bannerName'));
console.log(cnt_t);
set_theme();

let themeN = async function() {
    
    theme_n.addEventListener('click', e => {
        //console.log("here");
        cnt_t=cnt_nxt(cnt_t,arr.length);
        //console.log(loc);
        set_theme();
        save_banner();
    });
};
themeN();
