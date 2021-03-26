(()=>{"use strict";const e=document.querySelector("#card").content.querySelector(".popup"),t={flat:"Квартира",bungalow:"Бунгало",house:"Дом",palace:"Доврец"},r=document.querySelector(".map__filters"),o=document.querySelector(".ad-form"),n=r.querySelectorAll("select"),a=document.querySelectorAll("fieldset");r.classList.add("ad-form--disabled"),o.classList.add("ad-form--disabled");const c=e=>{e.disabled=!0},l=e=>{e.disabled=!1};n.forEach(c),a.forEach(c);const s=window.L,i=35.6895,d=139.69171,u=document.querySelector("#address"),p=s.layerGroup(),y=s.map("map-canvas").on("load",(()=>{r.classList.remove("ad-form--disabled"),o.classList.remove("ad-form--disabled"),n.forEach(l),a.forEach(l)})).setView({lat:i,lng:d},9);s.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(y);const m=s.icon({iconUrl:"/img/main-pin.svg",iconSize:[52,52],iconAnchor:[26,52]}),f=s.icon({iconUrl:"/img/pin.svg",iconSize:[40,40],iconAnchor:[20,40]}),g=s.marker({lat:i,lng:d},{draggable:!0,icon:m}),h=g.getLatLng(),v=r=>{p.clearLayers(),r.slice(0,10).forEach((r=>{const o=s.marker({lat:r.location.lat,lng:r.location.lng},{icon:f});o.bindPopup((r=>{const o=e.cloneNode(!0),n=o.querySelector(".popup__avatar"),a=o.querySelector(".popup__title"),c=o.querySelector(".popup__text--address"),l=o.querySelector(".popup__text--price"),s=o.querySelector(".popup__type"),i=o.querySelector(".popup__text--capacity"),d=o.querySelector(".popup__text--time"),u=o.querySelector(".popup__description"),p=o.querySelector(".popup__features"),y=o.querySelector(".popup__photos");var m,f;return n.src=r.author.avatar,a.textContent=r.offer.title,c.textContent=r.offer.address,l.textContent=r.offer.price+" ₽/ночь",s.textContent=t[r.offer.type],r.offer.rooms||r.offer.guests?i.textContent=`${f=r.offer.rooms,1===f&&(f+=" комната"),f>1&&f<5&&(f+=" комнаты"),f>=5&&f<=20&&(f+=" комнат"),f} для ${m=r.offer.guests,m+(1===m?" гостя":" гостей")}`:i.remove(),d.textContent=`Заезд после ${r.offer.checkin} выезд до ${r.offer.checkout}`,u.textContent=r.offer.description,((e,t)=>{e.innerHTML="";for(let r=0;r<t.length;r++){const o=document.createElement("li");o.classList.add("popup__feature",`popup__feature--${t[r]}`),e.appendChild(o)}})(p,r.offer.features),((e,t)=>{e.innerHTML="";for(let r=0;r<t.length;r++){const o=document.createElement("img");o.className="popup__photo",o.width="45",o.height="40",o.alt="Фотография жилья",o.src=t[r],e.appendChild(o)}})(y,r.offer.photos),o})(r)),p.addLayer(o)}))};p.addTo(y),g.addTo(y);const S=(e,t)=>{u.value=`${e}, ${t}`};S(h.lat,h.lng),g.on("move",(e=>{const t=e.target.getLatLng();S(t.lat.toFixed(5),t.lng.toFixed(5))}));const q=({url:e,method:t="GET",headers:r=new Headers,body:o=null})=>fetch(`https://22.javascript.pages.academy/keksobooking${e}`,{method:t,headers:r,body:o}).then((e=>{if(e.ok)return e.json();throw new Error("`${response.status}: ${response.statusText}`")})),L=(e,t)=>q({url:"/data"}).then(e).catch(t),E=e=>"ESC"===e.key||"Escape"===e.key,w=document.querySelector("main"),C=document.querySelector("#success").content.querySelector(".success"),b=document.querySelector("#error").content.querySelector(".error"),k=(e,t)=>{e.remove(),document.removeEventListener("keydown",t)},x=()=>{document.addEventListener("keydown",V),b.querySelector(".error__message").textContent="Ошибка размещения объявления",b.addEventListener("click",T),w.appendChild(b)},V=e=>{E(e)&&(e.preventDefault(),k(b,V))},T=()=>{k(b,V),b.removeEventListener("click",T)},$=e=>{E(e)&&(e.preventDefault(),k(C,$))},A=()=>{k(C,$),C.removeEventListener("click",A)},D=document.querySelector(".map__filters"),M=D.querySelector("#housing-type"),j=D.querySelector("#housing-price"),F=D.querySelector("#housing-rooms"),H=D.querySelector("#housing-guests"),U=(e,t,r)=>"any"===r.value||e.offer[t].toString()===(r.value||"any"),z=e=>U(e,"type",M)&&U(e,"rooms",F)&&U(e,"guests",H)&&(e=>{switch(j.value){case"middle":return e.offer.price<=5e4&&e.offer.price>=1e4;case"low":return e.offer.price<1e4;case"high":return e.offer.price>5e4}return!0})(e)&&(e=>{const t=Array.from(D.querySelectorAll('input[type="checkbox"]:checked'));return!t.length||t.every((t=>e.offer.features.includes(t.value)))})(e),N=e=>{v(e),D.addEventListener("change",_.debounce((()=>{p.clearLayers(),v(e.filter(z))}),500))},O=document.querySelector(".ad-form-header__preview").querySelector("img").src,G=["gif","jpg","jpeg","png"],P=document.querySelector(".ad-form"),R=P.querySelector("#avatar"),W=P.querySelector(".ad-form-header__preview").querySelector("img"),B=P.querySelector("#images"),I=P.querySelector(".ad-form__photo");I.style.width="auto",I.style.minWidth="70px",I.style.marginTop="2px";const J=(e,t,r)=>{e.addEventListener("change",(e=>{const o=e.target.files[0],n=o.type.toLowerCase();if(G.some((e=>n.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(e=>{r(e,t)})),e.readAsDataURL(o)}}))};J(R,W,((e,t)=>{t.src=e.target.result})),J(B,I,((e,t)=>{const r=document.createElement("img");r.className="popup__photo",r.width="70",r.alt="Фотография жилья",r.src=e.target.result,t.appendChild(r)}));const K=document.querySelector(".ad-form"),Q=K.querySelector("#type"),X=K.querySelector("#price"),Y=K.querySelector("#timein"),Z=K.querySelector("#timeout"),ee=K.querySelector("#room_number"),te=K.querySelector("#capacity"),re=Array.from(te.options),oe=document.querySelector("#title"),ne=document.querySelector("#price"),ae={1:["1"],2:["1","2"],3:["1","2","3"],100:["0"]},ce={bungalow:0,flat:1e3,house:5e3,palace:1e4},le=()=>{re.forEach((e=>{e.disabled=!ae[ee.value].includes(e.value),e.selected=!e.disabled}))};le(),ee.addEventListener("change",(()=>{le()}));const se=()=>{const e=oe.value.length;oe.validity.tooShort?oe.setCustomValidity("Ещё "+(30-e)+" симв., бро!"):oe.validity.tooLong?oe.setCustomValidity("Удали лишние "+(e-100)+" симв., бро!"):oe.validity.valueMissing?oe.setCustomValidity("Обязательное поле, бро!"):oe.setCustomValidity("")};oe.addEventListener("invalid",(()=>{se()})),oe.addEventListener("input",(()=>{se(),oe.reportValidity()}));const ie=()=>{ne.validity.valueMissing?ne.setCustomValidity("Обязательное поле, бро!"):ne.validity.rangeUnderflow?ne.setCustomValidity("Нужно больше золота! ("+ne.min+")"):ne.validity.rangeOverflow?ne.setCustomValidity("Ну это тумач!"):ne.setCustomValidity("")};ne.addEventListener("invalid",(()=>{ie()})),ne.addEventListener("input",(()=>{ie(),ne.reportValidity()})),Q.addEventListener("change",(()=>{let e=Q.value;X.placeholder=ce[e],X.min=ce[e]})),Y.addEventListener("change",(()=>{let e=Y.value;Z.value=e})),Z.addEventListener("change",(()=>{let e=Z.value;Y.value=e}));const de=()=>{K.reset(),D.reset(),L(N),y.setView({lat:i,lng:d},9),g.setLatLng({lat:i,lng:d}),S(i,d),W.src=O,I.innerHTML=""},ue=()=>{document.addEventListener("keydown",$),C.addEventListener("click",A),w.appendChild(C),de()};K.addEventListener("submit",(e=>{var t,r,o;e.preventDefault(),t=ue,r=x,o=new FormData(e.target),q({url:"",method:"POST",body:o}).then(t).catch(r)})),K.querySelector(".ad-form__reset").addEventListener("click",(e=>{e.preventDefault(),de()})),L(N,(()=>{x(),b.querySelector(".error__message").textContent="Объявления не загрузились"}))})();
//# sourceMappingURL=main.bundle.js.map