<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Aizen API Docs</title>
<style>
* { box-sizing: border-box; margin:0; padding:0; }

:root {
  --bg:#ffffff;
  --text:#111;
  --box:#f7f7f7;
  --border:#ddd;
  --green:#00aa88;
  --shadow:rgba(0,170,136,.2);
}

body {
  font-family: monospace;
  background: var(--bg);
  color: var(--text);
  margin:0;
  padding:20px;
  overflow-x:hidden;
  transition:.3s;
}

body.dark {
  --bg:#0b0b0b;
  --text:#eee;
  --box:#121212;
  --border:#2a2a2a;
  --shadow:rgba(0,170,136,.2);
}

/* Loader */
#loader {
  position: fixed;
  top:0; left:0;
  width:100%; height:100%;
  background:var(--bg);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index:999;
  transition:opacity .8s;
}

.ring { width:90px; height:90px; border-radius:50%; border:6px solid rgba(0,170,136,.15); border-top:6px solid var(--green); animation:ringSpin 1s linear infinite; margin-bottom:20px; }
@keyframes ringSpin {0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}

.loader-text{font-size:20px;letter-spacing:2px;margin-bottom:10px;}
.dots{display:flex;gap:6px;}
.dots span{width:10px;height:10px;background:var(--green);border-radius:2px;opacity:.3;animation:dotPulse 1.2s infinite;}
.dots span:nth-child(2){animation-delay:.2s;}
.dots span:nth-child(3){animation-delay:.4s;}
.dots span:nth-child(4){animation-delay:.6s;}
@keyframes dotPulse{0%{opacity:.2;transform:scale(.8);}50%{opacity:1;transform:scale(1);}100%{opacity:.2;transform:scale(.8);}}

/* App */
#app{display:none;opacity:0;transform:translateY(40px) scale(.95);filter:blur(10px);transition:all 1s cubic-bezier(.19,1,.22,1);}
#app.show{opacity:1;transform:translateY(0) scale(1);filter:blur(0);}

/* Hamburger */
.hamburger{position:fixed;top:20px;right:20px;font-size:26px;cursor:pointer;z-index:1000;transition:.3s;}
.hamburger.active{transform:rotate(90deg);}

/* Menu Panel */
#menuPanel{position:fixed;top:0;left:-280px;width:260px;height:100%;background:var(--box);border-right:1px solid var(--border);padding:20px;transition:.35s;z-index:999;display:flex;flex-direction:column;}
#menuPanel.show{left:0;}
.menu-close{position:absolute;top:15px;right:15px;font-size:20px;cursor:pointer;}
.menu-header{text-align:center;margin-top:20px;}
.menu-header img{width:80px;border-radius:50%;margin-bottom:10px;}
.menu-name{font-weight:700;font-size:16px;}
.menu-role{font-size:13px;opacity:.6;}
.menu-line{height:1px;background:var(--border);margin:20px 0;}
.menu-footer{display:flex;flex-direction:column;gap:12px;}
.tab-pane{display:flex;justify-content:space-around;gap:10px;margin-top:10px;padding:8px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);}
.tab-pane span{cursor:pointer;font-size:16px;padding:6px 12px;border-radius:6px;transition:.2s;user-select:none;}
.tab-pane span:hover{background:rgba(0,170,136,.1);}

/* Logo */
.logo img{width:80px;border-radius:50%;margin-bottom:10px;}

/* Heading */
h1{font-size:22px;margin-bottom:20px;}

/* Stats */
.stats{display:flex;gap:10px;margin-bottom:10px;flex-wrap:wrap;}
.stat-box{flex:1 1 150px;padding:8px 10px;border-radius:6px;border:1px solid var(--border);font-size:13px;text-align:center;background:var(--box);}

/* Search */
.search{margin-bottom:25px;}
.search input{width:100%;padding:10px;background:var(--box);border:2px solid var(--border);color:var(--text);border-radius:6px;}

/* Categories & Endpoints */
.category{margin-top:30px;padding:15px;border-radius:10px;border:1px solid var(--border);background:var(--box);}
.category-title{font-size:18px;margin-bottom:10px;}
.endpoint{border:1px solid var(--border);border-radius:8px;margin-bottom:12px;padding:12px;transition:.2s;position:relative;background:var(--box);}
.endpoint:hover{border-color:var(--green);transform:translateY(-2px);}
.endpoint-header{display:flex;justify-content:space-between;cursor:pointer;}
.desc{color:#555;font-size:13px;}
.ready{color:var(--green);}
.error{color:#ff4d4d;}

/* Params */
.params{margin-top:12px;max-height:0;overflow:hidden;transition:max-height .35s ease;}
.params.open{max-height:700px;}
.param{margin-bottom:8px;}
input{width:100%;padding:6px;background:var(--box);border:1px solid var(--border);color:var(--text);border-radius:4px;}

/* Buttons */
.buttons{margin-top:10px;display:flex;gap:10px;flex-wrap:wrap;}
button{padding:6px 12px;border:none;background:var(--green);color:#fff;cursor:pointer;border-radius:4px;transition:.2s;}
button:hover{background:rgba(0,170,136,.8);}

/* Boxes */
.box{margin-top:10px;border:1px solid var(--border);border-radius:10px;overflow:hidden;box-shadow:0 2px 12px var(--shadow);transition:all .3s;position:relative;}
.box-header{display:flex;justify-content:space-between;background:var(--box);padding:6px 10px;font-size:13px;}
.box-header span.copy-btn{cursor:pointer;}
.box-content{padding:10px;white-space:pre-wrap;word-break:break-all;font-size:13px;}
.hidden{display:none;}

/* Notification Box */
#notifBox{position:fixed;top:80px;left:-320px;background:var(--green);color:#000;padding:10px 20px;border-radius:6px;z-index:2000;box-shadow:0 2px 10px rgba(0,0,0,.4);transition:left .4s ease;}

/* Responsive */
@media screen and (max-width:768px){
  body{padding:10px;}
  .stats{flex-direction:column;}
  .stat-box{flex:1 1 100%;}
  .buttons{flex-direction:column;}
}

@media screen and (max-width:480px){
  #menuPanel{width:220px;}
  .hamburger{font-size:22px;}
  h1{font-size:20px;}
  .tab-pane span{font-size:14px;padding:4px 8px;}
}
</style>
</head>
<body>

<div id="loader">
  <div class="ring"></div>
  <div class="loader-text">Aizen API's</div>
  <div class="dots"><span></span><span></span><span></span><span></span></div>
</div>

<div id="menuPanel">
  <div class="menu-close" onclick="closeMenu()">✕</div>
  <div class="menu-header">
    <img src="src/picture.png">
    <div class="menu-name">KANITSU</div>
    <div class="menu-role">THE OWNER WEB</div>
  </div>
  <div class="menu-line"></div>
  <div class="menu-footer">
    <div>Settings</div>
    <div class="tab-pane">
      <span id="themeBtn" onclick="toggleThemeTab()">🌙 Theme</span>
      <span id="audioBtn" onclick="toggleAudio()">🔊 Audio</span>
    </div>
  </div>
</div>

<div id="app">
  <div class="hamburger" id="hamburger" onclick="toggleMenu()">☰</div>
  <div class="logo"><img src="src/picture.png"></div>
  <h1>AIZEN REST API'S</h1>

  <div class="stats">
    <div class="stat-box" id="runtimeBox">RUNTIME: 0s</div>
    <div class="stat-box" id="endpointBox">ENDPOINT: 0</div>
    <div class="stat-box" id="categoryBox">KATEGORI: 0</div>
    <div class="stat-box" id="requestBox">REQUEST: 0</div>
  </div>

  <div class="search">
    <input id="search" placeholder="Search endpoint...">
  </div>

  <div id="api"></div>
  <div id="notifBox"></div>

  <audio id="bgm" loop>
    <source src="https://files.catbox.moe/ivp6zu.mp3">
  </audio>
</div>

<script>
// Audio & Theme
let audioPlaying=false, totalRequest=0;
const startTime=Date.now();
function formatTime(sec){ const d=Math.floor(sec/86400); sec%=86400; const h=Math.floor(sec/3600); sec%=3600; const m=Math.floor(sec/60); const s=sec%60; return `${d} Day${d!=1?'s':''}, ${h} Hour${h!=1?'s':''}, ${m} Minute${m!=1?'s':''}, ${s} Second${s!=1?'s':''}`; }
function updateStats(){ const runtime=Math.floor((Date.now()-startTime)/1000); document.getElementById("runtimeBox").innerText="RUNTIME: "+formatTime(runtime); document.getElementById("requestBox").innerText="REQUEST: "+totalRequest; }
setInterval(updateStats,1000);
setTimeout(()=>{ document.getElementById("loader").style.opacity="0"; setTimeout(()=>{ document.getElementById("loader").style.display="none"; const app=document.getElementById("app"); app.style.display="block"; setTimeout(()=>{app.classList.add("show");},50); },800); },1500);

// Fetch & Render
fetch("endpoints.json").then(r=>r.json()).then(data=>render(data));
function render(data){
  const container=document.getElementById("api"); container.innerHTML=""; let totalEndpoint=0, totalCategory=0;
  Object.keys(data).forEach(cat=>{
    totalCategory++; let html=`<div class="category"><div class="category-title">${cat}</div>`;
    data[cat].forEach((ep,i)=>{
      totalEndpoint++; const statusClass=ep.status?"ready":"error"; const statusText=ep.status?"READY":"ERROR"; let paramsHTML="";
      Object.keys(ep.params).forEach(p=>{ paramsHTML+=`<div class="param"><label>${p}</label><input data-param="${p}" placeholder="${ep.params[p]}"></div>`; });
      html+=`
      <div class="endpoint" id="ep${cat+i}">
        <div class="endpoint-header" onclick="toggleParams('param${cat+i}')">
          <div>${ep.name}</div>
          <div class="${statusClass}">[ ${statusText} ]</div>
        </div>
        <div class="desc">${ep.description}</div>
        <div class="params" id="param${cat+i}">
          ${paramsHTML}
          <div class="buttons">
            <button onclick="executeAPI('${ep.endpoint}','param${cat+i}','ep${cat+i}')">EXECUTE</button>
            <button onclick="resetAPI('param${cat+i}')">⟳ Refresh</button>
          </div>
          <div class="box hidden" id="urlbox${cat+i}">
            <div class="box-header"><span>URL</span><span class="copy-btn" onclick="copyURL('url${cat+i}')">📋</span></div>
            <div class="box-content" id="url${cat+i}"></div>
          </div>
          <div class="box hidden" id="resbox${cat+i}">
            <div class="box-header"><span>Result</span><span class="copy-btn" onclick="copyURL('res${cat+i}')">📋</span></div>
            <div class="box-content" id="res${cat+i}"></div>
          </div>
        </div>
      </div>`;
    }); html+="</div>"; container.innerHTML+=html;
  });
  document.getElementById("endpointBox").innerText="ENDPOINT: "+totalEndpoint;
  document.getElementById("categoryBox").innerText="KATEGORI: "+totalCategory;
}

// Functions
function toggleParams(id){ document.getElementById(id).classList.toggle("open"); }
document.getElementById("search").addEventListener("input",function(){ const q=this.value.toLowerCase(); document.querySelectorAll(".endpoint").forEach(ep=>{ ep.style.display=ep.querySelector(".endpoint-header div").innerText.toLowerCase().includes(q)?"block":"none"; }); });
function toggleMenu(){ document.getElementById("menuPanel").classList.toggle("show"); document.getElementById("hamburger").classList.toggle("active"); }
function closeMenu(){ document.getElementById("menuPanel").classList.remove("show"); document.getElementById("hamburger").classList.remove("active"); }
function toggleAudio(){ const audio=document.getElementById("bgm"); const btn=document.getElementById("audioBtn"); if(audioPlaying){ audio.pause(); btn.innerText="🔇 Audio"; } else{ audio.play(); btn.innerText="🔊 Audio"; } audioPlaying=!audioPlaying; }
function toggleThemeTab(){ document.body.classList.toggle("dark"); const btn=document.getElementById("themeBtn"); btn.innerText=document.body.classList.contains("dark")?"☀️ Theme":"🌙 Theme"; }
function showNotif(text){ const box=document.getElementById("notifBox"); box.innerText=text; box.style.left="20px"; setTimeout(()=>{box.style.left="-320px";},2000); }
function copyURL(id){ const text=document.getElementById(id).innerText; if(text){ navigator.clipboard.writeText(text); showNotif("Berhasil Menyalin ✅️"); } else showNotif("Nothing to copy ❌"); }
function resetAPI(id){ document.querySelectorAll(`#${id} input`).forEach(inp=>inp.value=""); document.getElementById("urlbox"+id.replace("param","")).classList.add("hidden"); document.getElementById("resbox"+id.replace("param","")).classList.add("hidden"); document.getElementById("url"+id.replace("param","")).innerText=""; document.getElementById("res"+id.replace("param","")).innerText=""; }

async function executeAPI(endpoint,paramId,epId){
  const inputs=document.querySelectorAll(`#${paramId} input`);
  let missing=false;
  inputs.forEach(inp=>{ if(!inp.value.trim()){ inp.style.border="1px solid orange"; missing=true; } else inp.style.border="1px solid var(--border)"; });
  if(missing){ showNotif("Isi semua parameter dulu! ⚠️"); return; }
  totalRequest++; updateStats();
  let params=[]; inputs.forEach(inp=>{ params.push(inp.dataset.param+"="+encodeURIComponent(inp.value.trim())); });
  let url=endpoint+"?"+params.join("&");
  const urlBox=document.getElementById("url"+paramId.replace("param","")); const resBox=document.getElementById("res"+paramId.replace("param",""));
  document.getElementById("urlbox"+paramId.replace("param","")).classList.remove("hidden");
  document.getElementById("resbox"+paramId.replace("param","")).classList.remove("hidden");
  urlBox.innerText=location.origin+url; resBox.innerText="Loading...";
  try{ const res=await fetch(url); const text=await res.text(); resBox.innerText=text||"Execute null"; showNotif(text?"Execute Success":"Execute null"); }catch(e){ resBox.innerText="Execute null"; showNotif("Execute null"); }
}
</script>
</body>
</html>
