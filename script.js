(function(){
var P=[["Home","index.html"],["About Us","about.html"],["Contact Us","contact.html"],["Privacy Policy","privacy.html"],["Terms of Service","terms.html"]];
var h=document.createElement("header");h.innerHTML='<div class="w hd"><a class="logo" href="index.html">Khanapara<span>Teer</span></a><span class="live">● LIVE</span></div>';
document.body.prepend(h);
var f=document.createElement("footer");f.innerHTML='<div class="w">'+P.map(function(p){return'<a href="'+p[1]+'">'+p[0]+'</a>'}).join("")+'<p>Disclaimer: This website is for information only. We do not sell, play or promote teer tickets. Always verify results with the official source.</p><p>© '+new Date().getFullYear()+' Khanapara Teer Result. All rights reserved.</p></div>';
document.body.append(f);
})();
