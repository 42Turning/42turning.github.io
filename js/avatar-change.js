let avatar = document.getElementById("avatar_id");
let avatar_src=document.getElementById("avatar_src");
var cnt_a=0;
var arr=['_rblue','_blue','_hblue','_orange','_snow',"_vertin"];
function save_avatar(){
    root.setAttribute('avatarName',cnt_a);
    localStorage.setItem('avatarName',cnt_a);
}
function load_avatar(){
    var t=localStorage.getItem('avatarName');
    console.log('local value='+t);
    var v=parseInt(t);
    if(0<=t && t<arr.length){
        root.setAttribute('avatarName',t);
    }
}
 

load_avatar();
cnt_a=parseInt(root.getAttribute('avatarName'));
console.log("/img/avatar/avatar"+arr[cnt_a]+".jpg");
avatar_src.src="/img/avatar/avatar"+arr[cnt_a]+".jpg";

let avatarC = async function() {
    avatar.addEventListener('click', e => {
        cnt_a=cnt_nxt(cnt_a,arr.length);
        //console.log(loc);
        avatar_src.src="/img/avatar/avatar"+arr[cnt_a]+".jpg";
        save_avatar();
    });
};
avatarC();