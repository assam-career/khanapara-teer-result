(function(){
if(typeof DATA==="undefined"||!DATA.length){var e=document.getElementById("archive");if(e)e.innerHTML='<p class="note">Add your results in results.js to show the archive here.</p>';return}
var M="January February March April May June July August September October November December".split(" ");
var rows=DATA.map(function(l){var p=l.split("|"),d=p[0].trim().split(" ");return{t:p[0].trim(),y:+d[2],m:M.indexOf(d[1]),d:+d[0],fr:p[1],sr:p[2]}});
rows.sort(function(a,b){return new Date(b.y,b.m,b.d)-new Date(a.y,a.m,a.d)});
var g={};rows.forEach(function(r){(g[r.y]=g[r.y]||[]).push(r)});
var out="";Object.keys(g).sort(function(a,b){return b-a}).forEach(function(y,i){
out+='<details'+(i===0?' open':'')+'><summary>Khanapara Teer Results – '+y+'</summary><div class="tw"><table><thead><tr><th>Date</th><th>F/R</th><th>S/R</th></tr></thead><tbody>'+g[y].map(function(r){return'<tr><td>'+r.t+'</td><td>'+r.fr+'</td><td>'+r.sr+'</td></tr>'}).join("")+'</tbody></table></div></details>'});
document.getElementById("archive").innerHTML=out;
})();
