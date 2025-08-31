let arr=['banner_rblue','banner_blue','banner_hblue','banner_orange','banner_snow'];
let color=['260','250','270','60','360'];
let totel=5;

var loc=0;

let root = document.documentElement;
let ban_url = document.getElementById("ban_src");

if(ban_url){
    console.log('ok');
}
else{
    console.log('no');
}

let slider_t = document.getElementById("colorSlider");
let output_t = document.getElementById("hueValue");
let r_t = document.querySelector(':root');
function setHue(hue) {
    //console.log(hue+' '+typeof(hue));
    output_t.innerHTML = hue;
    slider_t.value = hue;
    r_t.style.setProperty(`--primary-hue`, hue);
}

function cnt_nxt(){
    loc+=1;
    if(loc>=totel){
        loc=0;
    }
}
function save_banner(){
    root.setAttribute('bannerName',loc);
    localStorage.setItem('bannerName',loc);
}
function load_banner(){
    let t=localStorage.getItem('bannerName');
    console.log('local value='+t);
    if(t){
        root.setAttribute('bannerName',t);
    }
}
function set_theme(){
    console.log("photo location: /img/banner/"+arr[loc]+".jpg");
    ban_url.src="/img/banner/"+arr[loc]+".jpg";
    setHue(color[loc]);
}

load_banner();
loc=parseInt(root.getAttribute('bannerName'));
console.log(loc);
set_theme();

let themeN = async function() {
    var t = document.getElementById("theme-next");
    t.addEventListener('click', e => {
        //console.log("here");
        cnt_nxt();
        //console.log(loc);
        set_theme();
        save_banner();
    });
};
themeN();
