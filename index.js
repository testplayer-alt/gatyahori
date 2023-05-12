
let password;
let num = 0;
let code;
let addbox;
let Truebutton = false;
const button = document.getElementById("mainbtn");
const music = new Audio('./sounds.mp3');
let phoneorpc;//trueでスマホfalseでpc
let noloop = true;

setInterval(() => {
    if(noloop){
        let a = document.getElementById("pcs");
        let style = window.getComputedStyle(a);
        if(style.getPropertyValue('color') == "rgb(0, 0, 255)"){
            console.log("スマホ");
            a.innerHTML = "スマホ版";
            phoneorpc = true;
        }else if(style.getPropertyValue('color') == "rgb(255, 0, 0)"){
            console.log("pc");
            a.innerHTML = "PC版";
            phoneorpc = false;
        }
    }
    noloop = false;
  }, 100);

function onbutton() {
    if(Truebutton){
        return;
    }else{
        Truebutton = true;
        let a = document.getElementById("says");
        a.innerHTML = "何が出るかな♪何が出るかな♪";
        num = 0;
        a.style.color = 'blue';
        setTimeout('func();', 500);
        setTimeout('Notext();', 2000);
    }
    
}
function Notext() {
    let a = document.getElementById("says");
    a.innerHTML = "";
}
function func() {
    num++;
    //console.log(num);
    if(num < 11){
        add();
        var a = document.documentElement;
        var y = a.scrollHeight - a.clientHeight;
        window.scroll(0, y);
        setTimeout('func();', 600);
    }else if(num == 11){
        document.getElementById("imgss31").style.display = "inline";
    }
}
function add() {
    if(phoneorpc){
        if(num <= 2){
            addbox = document.getElementById('adds');
        }else if(num <= 4){
            addbox = document.getElementById('addss');
        }else if(num <= 6){
            addbox = document.getElementById('addsss');
        }else if(num <= 8){
            addbox = document.getElementById('addssss');
        }else {
            addbox = document.getElementById('addsssss');
        }
    }else if(!phoneorpc){
        if(num <= 5){
            addbox = document.getElementById('adds');
        }else{
            addbox = document.getElementById('addss');
        }
    }
    
    
    let Random = Math.floor(Math.random() * 1001) + 0;
    if(Random >= 992 && Random <= 996){//ほし5
        code = '<li><img src="horis.jpg" class="imgss"><p>★★★★★<br>伝説の堀</p></li>';
        audio();
    }else if(Random >= 997 || Random == 0){
        code = '<li><img src="hori18.jpg" class="imgs18"><p>★★★★★<br>売られる堀</p></li>';
        audio();

    }else if(Random >= 1 && Random <= 140){//ほし1
        code = '<li><img src="hori.jpg" class="imgs"><p>★☆☆☆☆<br>ただの堀</p></li>';
    }else if(Random >= 141 && Random <= 280){
        code = '<li><img src="hori6.jpg" class="imgs6"><p>★☆☆☆☆<br>振り返る堀</p></li>';
    }else if(Random >= 281 && Random <= 420){
        code = '<li><img src="hori7.jpg" class="imgs7"><p>★☆☆☆☆<br>見つめる堀</p></li>';
    }else if(Random >= 421 && Random <= 560){
        code = '<li><img src="hori16.jpg" class="imgs16"><p>★☆☆☆☆<br>見つかる堀</p></li>';
    }else if(Random >= 561 && Random <= 700){
        code = '<li><img src="hori9.jpg" class="imgs9"><p>★☆☆☆☆<br>こんにちは</p></li>';



    }else if(Random >= 701 && Random <= 740){//ほし2
        code = '<li><img src="hori3.jpg" class="imgs3"><p>★★☆☆☆<br>ギタリスト堀</p></li>';
    }else if(Random >= 741 && Random <= 780){
        code = '<li><img src="hori14.jpg" class="imgs14"><p>★★☆☆☆<br>堀のまなざし</p></li>';
    }else if(Random >= 781 && Random <= 820){
        code = '<li><img src="hori11.jpg" class="imgs11"><p>★★☆☆☆<br>追い求める堀</p></li>';
    }else if(Random >= 821 && Random <= 860){
        code = '<li><img src="hori10.jpg" class="imgs10"><p>★★☆☆☆<br>振り向いたら堀</p></li>';
    }else if(Random >= 861 && Random <= 900){
        code = '<li><img src="hori22.jpg" class="imgs22"><p>★★☆☆☆<br>ギリ堀</p></li>';



    }else if(Random >= 901 && Random <= 910){//ほし3
        code = '<li><img src="hori5.jpg" class="imgs5"><p>★★★☆☆<br>戦闘体制の堀</p></li>';
    }else if(Random >= 911 && Random <= 920){
        code = '<li><img src="hori4.jpg" class="imgs4"><p>★★★☆☆<br>考える堀</p></li>';
    }else if(Random >= 921 && Random <= 930){
        code = '<li><img src="hori17.jpg" class="imgs17"><p>★★★☆☆<br>威嚇する堀</p></li>';
    }else if(Random >= 931 && Random <= 940){
        code = '<li><img src="hori19.jpg" class="imgs19"><p>★★★☆☆<br>連行する堀</p></li>';
    }else if(Random >= 941 && Random <= 950){
        code = '<li><img src="hori23.jpg" class="imgs23"><p>★★★☆☆<br>屈服する堀</p></li>';
    }else if(Random >= 951 && Random <= 960){
        code = '<li><img src="hori20.jpg" class="imgs20"><p>★★★☆☆<br>踊る堀</p></li>';



    }else if(Random >= 961 && Random <= 966){//ほし4
        code = '<li><img src="hori8.jpg" class="imgs8"><p>★★★★☆<br>見下ろす堀</p></li>';
    }else if(Random >= 967 && Random <= 972){
        code = '<li><img src="hori13.jpg" class="imgs13"><p>★★★★☆<br>見上げる堀</p></li>';
    }else if(Random >= 973 && Random <= 978){
        code = '<li><img src="hori12.jpg" class="imgs12"><p>★★★★☆<br>伝説の一歩手前</p></li>';
    }else if(Random >= 979 && Random <= 984){
        code = '<li><img src="hori15.jpg" class="imgs15"><p>★★★★☆<br>食事する堀</p></li>';
    }else if(Random >= 985 && Random <= 991){
        code = '<li><img src="hori21.jpg" class="imgs21"><p>★★★★☆<br>踊る堀</p></li>';
    }
    addbox.insertAdjacentHTML("beforeend",code);
}
function clears() {
    Truebutton = false;
    window.scroll(top);
    document.getElementById("imgss31").style.display = "none";
    let addbox = document.getElementById('adds');
    let addboxs = document.getElementById('addss');
    let addboxss = document.getElementById('addsss');
    let addboxsss = document.getElementById('addssss');
    let addboxssss = document.getElementById('addsssss');
    while (addbox.firstChild) {
        addbox.removeChild(addbox.firstChild);
    }
    while (addboxs.firstChild) {
        addboxs.removeChild(addboxs.firstChild);
    }
    while (addboxss.firstChild) {
        addboxss.removeChild(addboxss.firstChild);
    }
    while (addboxsss.firstChild) {
        addboxsss.removeChild(addboxsss.firstChild);
    }
    while (addboxssss.firstChild) {
        addboxssss.removeChild(addboxssss.firstChild);
    }
}
function audio() {
    music.currentTime = 0; //連続クリックに対応
    music.play(); //クリックしたら音を再生
}
