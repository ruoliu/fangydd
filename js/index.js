function searchFocus(){document.querySelector(".header_search").onfocus=function(){window.location.href="search.html"}}function headerScroll(){var e=document.querySelector(".jd_nav"),t=document.querySelector(".jd_header"),n=e.offsetHeight+e.offsetTop;window.onscroll=function(){var e=window.document.body.scrollTop/n;e>1&&(e=1),t.style.backgroundColor="rgba(201, 21, 35,"+e+")"}}function cutDownTime(){var e=document.querySelectorAll(".main_content:nth-child(1) .content_top li"),t=document.querySelector(".main_content:nth-child(1) .content_top ul"),n=5,o=setInterval(function(){--n<=0&&(t.innerHTML="<li>秒杀已结束</li>",t.querySelector("li").style.width="100px",clearInterval(o));var r=Math.floor(n/60/60),a=Math.floor(n%3600/60),l=Math.floor(n%60);e[0].innerHTML=Math.floor(r/10),e[1].innerHTML=r%10,e[3].innerHTML=Math.floor(a/10),e[4].innerHTML=a%10,e[6].innerHTML=Math.floor(l/10),e[7].innerHTML=l%10},1e3)}function banner(){var e=document.querySelector(".banner_img"),t=document.querySelectorAll(".banner_index li"),n=document.body.offsetWidth,o=1,r=setInterval(function(){o++,e.style.transition="all .8s",e.style.transform="translateX("+o*n*-1+"px)"},1e3);e.addEventListener("webkitTransitionEnd",function(){o>8?(o=1,e.style.transition="none",e.style.transform="translateX("+o*n*-1+"px)"):o<1&&(o=8,e.style.transition="none");for(var r=0;r<t.length;r++)t[r].className="";t[o-1].className="current"});var a=0,l=0;e.addEventListener("touchstart",function(t){clearInterval(r),e.style.transition="none",a=t.touches[0].clientX}),e.addEventListener("touchmove",function(t){l=t.touches[0].clientX-a,e.style.transform="translateX("+(l+o*n*-1)+"px)"}),e.addEventListener("touchend",function(t){var a=n/3;Math.abs(l)>a?(l>0?o--:o++,e.style.transition="all .3s",e.style.transform="translateX("+o*n*-1+"px)"):(e.style.transition="all .3s",e.style.transform="translateX("+o*n*-1+"px)"),r=setInterval(function(){o++,e.style.transition="all .3s",e.style.transform="translateX("+o*n*-1+"px)"},1e3)})}function get_more(){var e=document.querySelector("#more"),t=document.querySelector(".jd_main");e.onclick=function(){var e=new XMLHttpRequest;e.open("get","php/index.php"),e.onreadystatechange=function(){if(200==e.status&&4==e.readyState){console.log(e.responseText);var n={items:JSON.parse(e.responseText)},o=template("template01",n);t.innerHTML+=o}},e.send()}}window.onload=function(){headerScroll(),cutDownTime(),banner(),get_more(),searchFocus()};