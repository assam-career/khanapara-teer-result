(function(){
var N=15; // latest table me kitni rows dikhani hain
var M="January February March April May June July August September October November December".split(" ");
function parse(l){var p=l.split("|"),t=p[0].trim(),d,m,y,x;
 if(x=t.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/)){d=+x[1];m=+x[2]-1;y=+x[3]}
 else{x=t.split(" ");d=+x[0];m=M.indexOf(x[1]);y=+x[2]}
 var dd=("0"+d).slice(-2)+"-"+("0"+(m+1)).slice(-2)+"-"+y;
 return{k:new Date(y,m,d).getTime(),y:y,t:dd,fr:(p[1]||"").trim(),sr:(p[2]||"").trim()}}
function tbl(r){return'<table><thead><tr><th>Date</th><th>FR</th><th>SR</th></tr></thead><tbody>'+r.map(function(x){return'<tr><td>'+x.t+'</td><td>'+x.fr+'</td><td>'+x.sr+'</td></tr>'}).join("")+'</tbody></table>'}
var a=document.getElementById("archive"),L=document.getElementById("latest-table");
if(typeof DATA==="undefined"||!DATA.length){if(a)a.innerHTML='<p class="note">Add your results in results.js to show the archive here.</p>';return}
var rows=DATA.map(parse).filter(function(r){return!isNaN(r.k)}).sort(function(a,b){return b.k-a.k});
if(L)L.innerHTML=tbl(rows.slice(0,N));
var g={};rows.forEach(function(r){(g[r.y]=g[r.y]||[]).push(r)});
var out="";Object.keys(g).sort(function(a,b){return b-a}).forEach(function(y){
out+='<details><summary>Khanapara Teer Results – '+y+'</summary><div class="tw">'+tbl(g[y])+'</div></details>'});
if(a)a.innerHTML=out;
})();
