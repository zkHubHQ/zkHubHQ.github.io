(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{528:function(e,t,n){var content=n(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(41).default)("1b4e96d6",content,!0,{sourceMap:!1})},647:function(e,t,n){"use strict";n(528)},648:function(e,t,n){var o=n(40)((function(i){return i[1]}));o.push([e.i,"[data-v-788a22aa] strong{color:var(--white);font-weight:700}.banner[data-v-788a22aa]{align-items:stretch;position:relative;width:100%;z-index:2}.banner[data-v-788a22aa],.banner__content[data-v-788a22aa]{display:flex;justify-content:center}.banner__content[data-v-788a22aa]{align-items:center;background:linear-gradient(90deg,#bf513f,#641179);background-color:#f8f9fc;color:var(--white);flex:auto;font-size:.875rem;letter-spacing:.01em;line-height:1.25rem;padding:.5rem 4rem;text-align:center;transition:background-color .15s ease-out}.banner__content[data-v-788a22aa]:focus,.banner__content[data-v-788a22aa]:hover{background-color:#f1f2f7}.banner__dismiss[data-v-788a22aa]{align-items:center;bottom:0;display:flex;padding:0 1rem;position:absolute;right:0;top:0}.banner__dismiss__icon[data-v-788a22aa]{border-radius:50%;opacity:.4;padding:.5rem;transition:opacity .15s ease-out,background-color .2s}.banner__dismiss__icon svg[data-v-788a22aa]{display:block}.banner__dismiss:focus .banner__dismiss__icon[data-v-788a22aa],.banner__dismiss:hover .banner__dismiss__icon[data-v-788a22aa]{background-color:rgba(0,0,0,.1);opacity:.7}.fade-leave-active[data-v-788a22aa]{transition:opacity .3s cubic-bezier(.32,0,.67,0),margin .3s cubic-bezier(.32,0,.67,0)}.fade-leave-to[data-v-788a22aa]{opacity:0}@media screen and (max-width:414px){.banner__content[data-v-788a22aa]{justify-content:flex-start;padding-left:1rem;padding-right:3rem;text-align:left}}@media screen and (max-width:320px){.banner__content[data-v-788a22aa]{font-size:.8125rem;line-height:1.125rem}.banner__dismiss[data-v-788a22aa]{padding:0 .5rem}}",""]),o.locals={},e.exports=o},653:function(e,t,n){"use strict";n.r(t);function o(e){var t=e.charAt(e.length-1),n=parseInt(e,10),o=new Date;switch(t){case"Y":o.setFullYear(o.getFullYear()+n);break;case"M":o.setMonth(o.getMonth()+n);break;case"D":o.setDate(o.getDate()+n);break;case"h":o.setHours(o.getHours()+n);break;case"m":o.setMinutes(o.getMinutes()+n);break;case"s":o.setSeconds(o.getSeconds()+n);break;default:o=new Date(e)}return o}function r(e){for(var t="",n=0,r=Object.keys(e);n<r.length;n++){var c=r[n];if(/^expires$/i.test(c)){var d=e[c],l=void 0;"object"==typeof d?l=d:(d+="number"==typeof d?"D":"",l=o(String(d))),t+=";".concat(c,"=").concat(l.toUTCString())}else/^secure$/.test(c)?e[c]&&(t+=";".concat(c)):t+=";".concat(c,"=").concat(e[c])}return function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(e,"path")||(t+=";path=/"),t}function c(e,t){if(void 0===t&&(t=decodeURIComponent),"string"!=typeof e||!e)return null;var n=new RegExp("(?:^|; )".concat(e.replace(/[.*+?^$|[\](){}\\-]/g,"\\$&"),"(?:=([^;]*))?(?:;|$)")).exec(document.cookie);return null===n?null:"function"==typeof t?t(n[1]):n[1]}function d(e,t,n,o){void 0===n&&(n=encodeURIComponent),"object"==typeof n&&null!==n&&(o=n,n=encodeURIComponent);var c=r(o||{}),d="function"==typeof n?n(t):t,l="".concat(e,"=").concat(d).concat(c);document.cookie=l}var l=n(463),f=n.n(l),h={data:function(){return{md:new f.a({linkify:!0,html:!0}),show:null,url:"https://five.hackatom.org?utm_source=stargate",content:"Build on Stargate and win prizes in <strong>HackAtom V</strong> &#8594;"}},mounted:function(){c("stargate-top-banner-hidden",!1)?this.show=!1:this.show=!0},methods:{close:function(){this.show=!1,d("stargate-top-banner-hidden",!0,{expires:"2D"})},beforeLeave:function(e){e.style.marginTop="-".concat(e.offsetHeight,"px")}}},_=(n(647),n(22)),component=Object(_.a)(h,(function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"fade",appear:""},on:{"before-leave":e.beforeLeave}},[e.show?t("div",{staticClass:"banner"},[t("a",{staticClass:"banner__content",attrs:{href:this.url,target:"_blank",rel:"noreferrer noopener"},domProps:{innerHTML:e._s(this.md.render(this.content))}}),t("a",{staticClass:"banner__dismiss",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.close.apply(null,arguments)}}},[t("div",{staticClass:"banner__dismiss__icon"},[t("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1.66669 1.66669L12.3334 12.3334M12.3334 1.66669L1.66664 12.3334",stroke:"var(--white)","stroke-width":"1.5","stroke-linecap":"round"}})])])])]):e._e()])}),[],!1,null,"788a22aa",null);t.default=component.exports}}]);