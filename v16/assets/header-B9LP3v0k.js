const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login--PGw2YNQ.js","assets/firebase-VWNmRUa9.js","assets/wii-a5uC_Ctk.js","assets/firebase-C5lBK4nY.js","assets/widev-CiGWk2mv.js","assets/ruta-5V8CrVrk.js","assets/preload-helper-BpmfIVWr.js","assets/login-pzxUIRzl.css"])))=>i.map(i=>d[i]);
import{_ as n}from"./preload-helper-BpmfIVWr.js";import{rutas as l}from"./ruta-5V8CrVrk.js";import{M as c,$ as s,a as e}from"./widev-CiGWk2mv.js";import"./wii-a5uC_Ctk.js";const r=a=>{c?.("Bienvenido "+a.nombre),s(".nv_right").html(`
    <a href="/milab" class="nv_item" data-page="milab"><i class="fa-solid fa-graduation-cap"></i> <span>Mi Lab</span></a>
    <a href="/smile" class="nv_item" data-page="smile"><i class="fa-solid fa-dashboard"></i> <span>Dashboard</span></a>
    <a href="/mensajes" class="nv_item" data-page="mensajes"><i class="fa-solid fa-comments"></i> <span>Mensajes</span></a>
    <a href="/perfil" class="nv_item" data-page="perfil"><img src="${a.imagen||"./smile.avif"}" alt="${a.nombre}"><span>${a.nombre}</span></a>
    <button class="nv_item bt_salir" data-page="inicio"><i class="fa-solid fa-sign-out-alt"></i> <span>salir</span></button>
  `)},o=()=>{s(".nv_right").html(`
    <a href="/descubre" class="nv_item" data-page="descubre"><i class="fa-solid fa-gauge"></i> <span>Descubre </span></a>
    <button class="bt_auth registrar"><i class="fas fa-user-plus"></i><span>Registrar</span></button>
    <button class="bt_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>  
  `)};e.on(a=>a?r(a):(o(),l.navigate("/")));const t=e.user;t?r(t):o();const m=["wiTema","wiSmart","wiFresh"];s(document).on("click",".bt_salir",async()=>{const{salir:a}=await n(async()=>{const{salir:i}=await import("./login--PGw2YNQ.js");return{salir:i}},__vite__mapDeps([0,1,2,3,4,5,6,7]));a(m)});s(document).on("click",".bt_auth",async function(){const{abrirLogin:a}=await n(async()=>{const{abrirLogin:i}=await import("./login--PGw2YNQ.js");return{abrirLogin:i}},__vite__mapDeps([0,1,2,3,4,5,6,7]));a(s(this).hasClass("registrar")?"registrar":"login")});export{r as personal};
