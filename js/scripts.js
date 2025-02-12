document.addEventListener("DOMContentLoaded",function(){document.getElementById("currentYear").textContent=new Date().getFullYear()}),window.addEventListener("scroll",function(){let e=document.querySelector(".navbar");window.scrollY>50?e.classList.add("shadow-lg"):e.classList.remove("shadow-lg")}),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();let t=document.querySelector(this.getAttribute("href"));t&&t.scrollIntoView({behavior:"smooth",block:"start"})})}),document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("whatsappForm");e&&e.addEventListener("submit",function(e){e.preventDefault();let t=document.getElementById("phone").value.trim(),n=document.getElementById("message").value.trim();if(/^\+?[1-9]\d{7,14}$/.test(t))document.getElementById("phone").classList.remove("is-invalid");else{document.getElementById("phone").classList.add("is-invalid");return}let a=`https://api.whatsapp.com/send?phone=${encodeURIComponent(t)}`;n&&(a+=`&text=${encodeURIComponent(n)}`),window.open(a,"_blank")})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("img[loading='lazy']").forEach(e=>{e.addEventListener("load",function(){e.classList.add("fade-in")})})}),document.head.insertAdjacentHTML("beforeend",`
  <style>
    .fade-in { animation: fadeIn 1s ease-in-out; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
`);