(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(e,t,s){},98:function(e,t,s){"use strict";s.r(t);s(62),s(63),s(39),s(41),s(89),s(95),s(97);var a="classList"in document.createElement("div")?function(e,t){return e.classList.contains(t)}:function(e,t){return function(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}(t).test(e.className)},i=document.defaultView,r=i&&i.getComputedStyle?function(e){return i.getComputedStyle(e,null)}:function(e){return e.currentStyle},o=document.querySelector(".c-navbar"),c=o.querySelector(".c-navbar__toggler"),n=o.querySelector(".c-navbar__menu"),l=o.querySelector(".c-navbar__menu-container"),d=document.querySelector(".o-main__container");c.addEventListener("click",(function(){var e=r(l).width;a(o,"is-active")?(o.classList.remove("is-active"),n.style.width=0,d.style.transform="scale(1)",d.style.filter="blur(0)"):(o.classList.add("is-active"),n.style.width=e,d.style.transform="scale(.5)",d.style.filter="blur(6px)")}));var u=n.querySelectorAll(".c-navbar__item"),v=o.querySelectorAll(".c-navbar__image"),p=n.querySelector(".c-navbar__item-bg");u.forEach((function(e,t){e.addEventListener("mouseenter",(function(){p.style.opacity="1",v[t].style.opacity="1",0==t?p.style.top="".concat(20,"px"):1==t?p.style.top="".concat(108,"px"):2==t?p.style.top="".concat(190,"px"):3==t?p.style.top="".concat(280,"px"):4==t?p.style.top="".concat(360,"px"):5==t?p.style.top="".concat(445,"px"):6==t&&(p.style.top="".concat(530,"px"))})),e.addEventListener("mouseleave",(function(){v.forEach((function(e){e.style.opacity="0"})),p.style.opacity="0"}))})),window.addEventListener("scroll",(function(e){window.scrollY>50?o.classList.add("is-scrolled"):o.classList.remove("is-scrolled")}));var m=s(5),_=s(43),y=s(44),f=s(45),w=s(46),L=s(47);m.a.use([_.a,y.a,f.a,w.a,L.a]);var E=document.querySelector(".c-next-slider"),g=document.querySelector(".c-iamges-slider"),C=document.querySelector(".c-project-slider"),S=document.querySelector(".c-progress-slider__line"),h=new m.a(".c-next-slider",{slidesPerView:1,wrapperClass:"c-next-slider__wrapper",slideClass:"c-next-slider__item",slideActiveClass:"c-next-slider__item--active",loop:!0,allowTouchMove:!1}),x=new m.a(".c-count-slider",{direction:"vertical",slidesPerView:1,wrapperClass:"c-count-slider__wrapper",slideClass:"c-count-slider__item",slideActiveClass:"c-count-slider__item--active",loop:!0,allowTouchMove:!1}),q=new m.a(".c-progress-slider__container",{direction:"vertical",slidesPerView:1,wrapperClass:"c-progress-slider__wrapper",slideClass:"c-progress-slider__item",slideActiveClass:"c-progress-slider__item--active",loop:!0,allowTouchMove:!1}),b=new m.a(".c-project-slider",{fadeEffect:{crossFade:!0},spaceBetween:30,effect:"fade",wrapperClass:"c-project-slider__wrapper",slideClass:"c-project-slider__item",slideActiveClass:"c-project-slider__item--active",loop:!0,allowTouchMove:!1}),A=new m.a(".c-iamges-slider",{slidesPerView:1,wrapperClass:"c-iamges-slider__wrapper",slideClass:"c-iamges-slider__item",slideActiveClass:"c-iamges-slider__item--active",loop:!0,autoplay:{delay:3e3},controller:{control:[h,x,b,q],by:"container"}});A.on("slideChange",(function(e){S.classList.remove("is-active"),A.autoplay.running&&setTimeout((function(){S.classList.add("is-active")}),10)})),window.addEventListener("load",(function(e){S.classList.add("is-active")})),E.addEventListener("click",(function(e){A.slideNext()})),g.addEventListener("mouseenter",(function(){A.autoplay.stop(),S.classList.remove("is-active")})),g.addEventListener("mouseleave",(function(){A.autoplay.start(),S.classList.add("is-active")})),E.addEventListener("mouseenter",(function(){A.autoplay.stop(),S.classList.remove("is-active")})),E.addEventListener("mouseleave",(function(){A.autoplay.start(),S.classList.add("is-active")})),C.addEventListener("mouseenter",(function(){A.autoplay.stop(),S.classList.remove("is-active")})),C.addEventListener("mouseleave",(function(){A.autoplay.start(),S.classList.add("is-active")})),m.a.use([_.a,y.a,f.a,w.a,L.a]);var T=document.querySelectorAll(".c-testimonial-author"),k=new m.a(".o-testimonial__slider",{direction:"vertical",slidesPerView:1,wrapperClass:"o-testimonial__wrapper",slideClass:"o-testimonial__item",slideActiveClass:"o-testimonial__item--active",allowTouchMove:!1,autoplay:!0,pagination:{el:".o-testimonial__slider-pagination",clickable:!0}});k.on("slideChange",(function(){T.forEach((function(e){e.classList.remove("is-active")})),T[k.activeIndex].classList.add("is-active")})),T.forEach((function(e,t){e.addEventListener("click",(function(){T.forEach((function(e){e.classList.remove("is-active")})),k.slideTo(t),T[k.activeIndex].classList.add("is-active")})),e.addEventListener("mouseenter",(function(){k.autoplay.stop()})),e.addEventListener("mouseleave",(function(){k.autoplay.start()}))}));var V=document.querySelector(".o-creative-studio__card--1"),X=document.querySelector(".o-creative-studio__card--2"),j=document.querySelector(".o-creative-studio__card--3");X.addEventListener("mouseover",(function(e){V.style.transform="translateX(-57%)"})),X.addEventListener("mouseout",(function(e){V.style.transform="translateX(0%)"})),j.addEventListener("mouseover",(function(e){V.style.transform="translateX(-57%)",X.style.transform="translateX(-136%)"})),j.addEventListener("mouseout",(function(e){V.style.transform="translateX(0%)",X.style.transform="translateX(-70%)"}))}},[[98,1,2]]]);