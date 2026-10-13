const $ = id => document.getElementById(id);
const grads = ["#8e2de2,#4a00e0","#f12711,#f5af19","#11998e,#38ef7d","#2193b0,#6dd5ed","#ee0979,#ff6a00","#373b44,#4286f4","#cc2b5e,#753a88","#134e5e,#71b280","#da22ff,#9733ee","#ff512f,#dd2476"];
const playlists = [["Today's Top Hits","🔥"],["Lo-Fi Beats","🌙"],["Bollywood Hits","🎬"],["Punjabi Swag","🕺"],["Gym Power","💪"],["Focus Flow","🧠"],["Retro Classics","📻"],["Chill Vibes","🌴"]];
const songs = [["Midnight Drive","Neon Echo"],["Kal Ki Baat","Arjun K."],["Skyline","Luna Park"],["Dil Ka Rasta","Meera S."],["Gravity","Orbit"],["Tere Bina","Aarav"],["Golden Hour","Sunset Club"],["Raftaar","DJ Veer"]];
$("playlists").innerHTML = playlists.map((p,i)=>
  `<div class="card" data-p="${p[0]}|Playlist"><div class="cover" style="background:linear-gradient(135deg,${grads[i]})">${p[1]}</div><b>${p[0]}</b><span>Playlist • Spotify</span><button class="play">▶</button></div>`).join("");
$("songs").innerHTML = songs.map((s,i)=>
  `<div class="card" data-p="${s[0]}|${s[1]}"><div class="cover" style="background:linear-gradient(135deg,${grads[(i+3)%10]})">♪</div><b>${s[0]}</b><span>${s[1]}</span><button class="play">▶</button></div>`).join("");
let playing=false,t=0,timer=null,cur=["Nothing playing","Pick a song to start"];
const fmt = s => Math.floor(s/60)+":"+String(s%60).padStart(2,"0");
function toast(m){const e=$("toast");e.textContent=m;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),2400)}
function showNow(){$("tTitle").textContent=cur[0];$("tArtist").textContent=cur[1];$("art").textContent=cur[0]==="Nothing playing"?"♪":"🎵"}
function stop(){playing=false;clearInterval(timer);$("ppB").textContent="▶";t=0;$("fill").style.width="0";$("cur").textContent="0:00"}
function play(){
  playing=true;$("ppB").textContent="⏸";clearInterval(timer);
  timer=setInterval(()=>{t++;if(t>=30){stop();return}$("fill").style.width=(t/30*100)+"%";$("cur").textContent=fmt(t)},1000);
}
function tryPlay(title,artist){cur=[title,artist];showNow();t=0;play()}
document.addEventListener("click",e=>{
  const c=e.target.closest("[data-p]");
  if(c){const [a,b]=c.dataset.p.split("|");tryPlay(a,b);return}
  if(e.target.closest("[data-plan]"))toast("Demo plan: payment is not included");
});
$("heroPremium").onclick=()=>$("songsH").scrollIntoView();
$("ppB").onclick=()=>{
  if(cur[0]==="Nothing playing"){tryPlay(songs[0][0],songs[0][1]);return}
  playing?(playing=false,clearInterval(timer),$("ppB").textContent="▶"):play();
};
const step=d=>{const i=songs.findIndex(s=>s[0]===cur[0]);const n=songs[(i+d+songs.length)%songs.length];tryPlay(n[0],n[1])};
$("nextB").onclick=()=>step(1);
$("prevB").onclick=()=>step(-1);
