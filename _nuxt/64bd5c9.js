(window.webpackJsonp=window.webpackJsonp||[]).push([[50,22,27,31,53],{428:function(t,e,o){var content=o(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("3b9a2b12",content,!0,{sourceMap:!1})},430:function(t,e,o){"use strict";o.r(e);var r={props:{size:{type:String,default:"m"},variant:{type:String,default:"contained"},backgroundColor:{type:String,default:"rgb(80, 100, 251)"},borderColor:{type:String,default:"rgb(80, 100, 251)"},color:{type:String,default:"var(--white)"},glow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},type:{type:String,default:"submit"},toLink:{type:String,default:null},to:{type:String,default:null},href:{type:String,default:null},target:{type:String,default:null},rel:{type:String,default:null},classes:{type:String,default:""}},computed:{styles:function(){var t=this.classes;switch(this.size){case"s":t+=" tm-rf-1 tm-rf0-l-up";break;case"l":t+=" tm-rf1";break;case"xl":t+=" tm-rf2";break;default:t+=" tm-rf0"}return t}}},n=(o(431),o(22)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return"internal"===t.toLink?e("nuxt-link",t._b({class:["tm-button","tm-button__size__".concat(t.size),"tm-button__variant__".concat(t.variant),"tm-lh-title","tm-medium",t.glow&&"tm-button__glow",t.styles],style:{"--background-color":t.backgroundColor,"--border-color":t.borderColor,"--color":t.color},attrs:{to:t.to}},"nuxt-link",{type:t.type,disabled:t.disabled},!1),[e("span",{staticClass:"tm-button__content"},[t._t("default")],2)]):"external"===t.toLink?e("a",t._b({class:["tm-button","tm-button__size__".concat(t.size),"tm-button__variant__".concat(t.variant),"tm-lh-title","tm-medium",t.glow&&"tm-button__glow",t.styles],style:{"--background-color":t.backgroundColor,"--border-color":t.borderColor,"--color":t.color},attrs:{href:t.href,target:"_blank",rel:"noreferrer noopener"}},"a",{type:t.type,target:t.target,href:t.href,rel:t.rel,disabled:t.disabled},!1),[e("span",{staticClass:"tm-button__content"},[t._t("default")],2)]):t.disabled?e("button",t._b({class:["tm-button","tm-button__size__".concat(t.size),"tm-button__variant__".concat(t.variant),"tm-lh-title","tm-medium",t.glow&&"tm-button__glow",t.styles],style:{"--background-color":t.backgroundColor,"--border-color":t.borderColor,"--color":t.color},attrs:{"aria-disabled":"true"}},"button",{type:t.type,target:t.target,href:t.href,rel:t.rel,disabled:t.disabled},!1),[e("span",{staticClass:"tm-button__content"},[t._t("default")],2)]):e("button",t._b({class:["tm-button","tm-button__size__".concat(t.size),"tm-button__variant__".concat(t.variant),"tm-lh-title","tm-medium",t.glow&&"tm-button__glow",t.styles],style:{"--background-color":t.backgroundColor,"--border-color":t.borderColor,"--color":t.color}},"button",{type:t.type,target:t.target,href:t.href,rel:t.rel,disabled:t.disabled},!1),[e("span",{staticClass:"tm-button__content"},[t._t("default")],2)])}),[],!1,null,"801b19d6",null);e.default=component.exports},431:function(t,e,o){"use strict";o(428)},432:function(t,e,o){var r=o(40)((function(i){return i[1]}));r.push([t.i,'.tm-button[data-v-801b19d6]{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;border-radius:.35em;color:var(--color);cursor:pointer;display:inline-flex;font-family:inherit;justify-content:center;outline:0;padding:0;position:relative;text-align:inherit;-webkit-text-decoration:none;text-decoration:none;text-rendering:inherit;transition:all .25s cubic-bezier(.165,.84,.44,1);-webkit-user-select:none;-moz-user-select:none;user-select:none}.tm-button[data-v-801b19d6]::-moz-focus-inner{border:0;padding:0}.tm-button[data-v-801b19d6]:active{opacity:.88;transition-duration:.05s}.tm-button__glow[data-v-801b19d6]:before{border-radius:inherit;content:"";opacity:.4;position:absolute;transform:translateZ(0);transition:background-position .4s cubic-bezier(.165,.84,.44,1),opacity .5s cubic-bezier(.165,.84,.44,1);z-index:-1}.tm-button__glow[data-v-801b19d6]:focus,.tm-button__glow[data-v-801b19d6]:focus:before,.tm-button__glow[data-v-801b19d6]:hover,.tm-button__glow[data-v-801b19d6]:hover:before{background-position:100% 100%}.tm-button__glow[data-v-801b19d6]:focus:before,.tm-button__glow[data-v-801b19d6]:hover:before{opacity:.5;transition-duration:.2s}.tm-button__variant__text[data-v-801b19d6]:focus,.tm-button__variant__text[data-v-801b19d6]:hover{opacity:.8}.tm-button__variant__text[data-v-801b19d6]:active{opacity:.6}.tm-button__variant__outlined.tm-button__glow[data-v-801b19d6]:before,.tm-button__variant__outlined[data-v-801b19d6]:after{border:.0625rem solid var(--border-color)}.tm-button__variant__outlined[data-v-801b19d6]:after{border-radius:inherit;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0;transition:opacity .25s cubic-bezier(.165,.84,.44,1)}.tm-button__variant__outlined.tm-button__glow[data-v-801b19d6]:before{bottom:-.0625em;filter:blur(.4rem);left:-.0625em;right:-.0625em;top:-.0625em}.tm-button__variant__outlined[data-v-801b19d6]:focus:after,.tm-button__variant__outlined[data-v-801b19d6]:hover:after{opacity:1}.tm-button__variant__contained[data-v-801b19d6]{-moz-osx-font-smoothing:grayscale;-webkit-backface-visibility:hidden;backface-visibility:hidden;background:var(--background-color);background-size:200% auto;box-shadow:var(--elevation-4);cursor:pointer;position:relative;transform:translateZ(0);transition:all .25s cubic-bezier(.165,.84,.44,1)}.tm-button__variant__contained[data-v-801b19d6]:focus,.tm-button__variant__contained[data-v-801b19d6]:hover{transform:translateY(-1px);transition-duration:.2s}.tm-button__variant__contained[data-v-801b19d6]:active{transform:translateY(-.5px);transition-duration:.05s}.tm-button__variant__contained[data-v-801b19d6]:after{border-radius:inherit;bottom:0;box-shadow:var(--elevation-16-ambient);content:"";left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity .25s cubic-bezier(.165,.84,.44,1);z-index:-1}.tm-button__variant__contained[data-v-801b19d6]:focus:after,.tm-button__variant__contained[data-v-801b19d6]:hover:after{opacity:.6;transition-duration:.2s}.tm-button__variant__contained[data-v-801b19d6]:active:after{opacity:.4;transition-duration:.05s}.tm-button__variant__contained[data-v-801b19d6]:before{background:inherit;bottom:0;filter:blur(1.25rem) brightness(1.5);left:1em;right:1em;top:.125em}.tm-button[disabled][data-v-801b19d6]{cursor:not-allowed!important;opacity:.65!important}.tm-button__size__s[data-v-801b19d6]{padding-bottom:var(--spacing-4);padding-top:var(--spacing-4)}.tm-button__size__s.tm-button__variant__contained[data-v-801b19d6],.tm-button__size__s.tm-button__variant__outlined[data-v-801b19d6]{padding-left:var(--spacing-6);padding-right:var(--spacing-6)}.tm-button__size__m[data-v-801b19d6]{padding-bottom:var(--spacing-5);padding-top:var(--spacing-5)}.tm-button__size__m.tm-button__variant__contained[data-v-801b19d6],.tm-button__size__m.tm-button__variant__outlined[data-v-801b19d6]{padding-left:var(--spacing-8);padding-right:var(--spacing-8)}.tm-button__size__l[data-v-801b19d6]{padding-bottom:var(--spacing-6);padding-top:var(--spacing-6)}.tm-button__size__l.tm-button__variant__contained[data-v-801b19d6],.tm-button__size__l.tm-button__variant__outlined[data-v-801b19d6]{padding-left:var(--spacing-9);padding-right:var(--spacing-9)}.tm-button__size__xl[data-v-801b19d6]{padding-bottom:var(--spacing-6);padding-top:var(--spacing-6)}.tm-button__content[data-v-801b19d6]{display:flex;flex-wrap:wrap}.tm-button[data-v-801b19d6] .icon__left,.tm-button[data-v-801b19d6] .icon__right{-moz-osx-font-smoothing:grayscale;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0);transition:transform .25s cubic-bezier(.165,.84,.44,1)}.tm-button[data-v-801b19d6] .icon__left{margin-right:.5em}.tm-button[data-v-801b19d6] .icon__right{margin-left:.5em}.tm-button[data-v-801b19d6]:focus .icon__right,.tm-button[data-v-801b19d6]:hover .icon__right{transform:translateX(.25rem)}.tm-button[data-v-801b19d6]:focus .icon__left,.tm-button[data-v-801b19d6]:hover .icon__left{transform:translateX(-.25rem)}',""]),r.locals={},t.exports=r},526:function(t,e,o){var content=o(644);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("5bbb7d3d",content,!0,{sourceMap:!1})},549:function(t,e,o){"use strict";o.r(e);var r=o(22),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"96",height:"97",viewBox:"0 0 96 97",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0-553770)"}},[e("g",{attrs:{"clip-path":"url(#clip1-983005)"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M48.0004 3.57676L9.31115 25.914V70.5885L48.0004 92.9257L86.6896 70.5885V25.914L48.0004 3.57676ZM89.5696 24.2512L48.0004 0.251221L6.43115 24.2512V72.2512L48.0004 96.2512L89.5696 72.2512V24.2512Z",fill:"white"}})]),t._v(" "),e("path",{attrs:{d:"M46.2917 32.6601C45.3419 32.3967 44.4802 31.9194 43.762 31.2834L31.0793 54.3182C32.0157 54.62 32.8586 55.132 33.552 55.7985L46.2917 32.6601Z",fill:"white"}}),t._v(" "),e("path",{attrs:{d:"M35.3916 59.1315C35.4759 59.5452 35.5202 59.9733 35.5202 60.4115C35.5202 60.9638 35.4499 61.5 35.3177 62.0115H60.8426C60.7105 61.5 60.6402 60.9638 60.6402 60.4115C60.6402 59.9733 60.6844 59.5452 60.7687 59.1315L35.3916 59.1315Z",fill:"white"}}),t._v(" "),e("path",{attrs:{d:"M52.2553 31.2682L65.0588 54.3253C64.1237 54.6304 63.2827 55.1455 62.5915 55.8145L49.7305 32.6539C50.6792 32.3871 51.5392 31.9068 52.2553 31.2682Z",fill:"white"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M66.9886 57.9096C65.6362 57.9096 64.5361 59.0106 64.5361 60.3639C64.5361 61.7172 65.6362 62.8182 66.9886 62.8182C68.341 62.8182 69.4413 61.7172 69.4413 60.3639C69.4413 59.0106 68.341 57.9096 66.9886 57.9096ZM66.9886 65.7563C64.0173 65.7563 61.6002 63.3374 61.6002 60.3639C61.6002 57.3905 64.0173 54.9715 66.9886 54.9715C69.9599 54.9715 72.3773 57.3905 72.3773 60.3639C72.3773 63.3374 69.9599 65.7563 66.9886 65.7563Z",fill:"white"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M47.9486 23.9896C46.5962 23.9896 45.4961 25.0906 45.4961 26.4439C45.4961 27.7972 46.5962 28.8982 47.9486 28.8982C49.301 28.8982 50.4013 27.7972 50.4013 26.4439C50.4013 25.0906 49.301 23.9896 47.9486 23.9896ZM47.9486 31.8363C44.9773 31.8363 42.5602 29.4174 42.5602 26.4439C42.5602 23.4705 44.9773 21.0515 47.9486 21.0515C50.9199 21.0515 53.3373 23.4705 53.3373 26.4439C53.3373 29.4174 50.9199 31.8363 47.9486 31.8363Z",fill:"white"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M29.0686 57.9096C27.7162 57.9096 26.6161 59.0106 26.6161 60.3639C26.6161 61.7172 27.7162 62.8182 29.0686 62.8182C30.421 62.8182 31.5213 61.7172 31.5213 60.3639C31.5213 59.0106 30.421 57.9096 29.0686 57.9096ZM29.0686 65.7563C26.0973 65.7563 23.6802 63.3374 23.6802 60.3639C23.6802 57.3905 26.0973 54.9715 29.0686 54.9715C32.0399 54.9715 34.4573 57.3905 34.4573 60.3639C34.4573 63.3374 32.0399 65.7563 29.0686 65.7563Z",fill:"white"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0-553770"}},[e("rect",{attrs:{width:"96",height:"96",fill:"white",transform:"translate(0 0.251221)"}})]),t._v(" "),e("clipPath",{attrs:{id:"clip1-983005"}},[e("rect",{attrs:{width:"96",height:"96",fill:"white",transform:"translate(0 0.251221)"}})])])])}),[],!1,null,null,null);e.default=component.exports},550:function(t,e,o){"use strict";o.r(e);var r=o(22),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"96",height:"97",viewBox:"0 0 96 97",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0-700235)"}},[e("g",{attrs:{"clip-path":"url(#clip1-167991)"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M48.0004 3.57676L9.31115 25.914V70.5885L48.0004 92.9257L86.6896 70.5885V25.914L48.0004 3.57676ZM89.5696 24.2512L48.0004 0.251221L6.43115 24.2512V72.2512L48.0004 96.2512L89.5696 72.2512V24.2512Z",fill:"white"}})]),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M48.9665 37.0514V27.4514L57.2803 22.6514L65.5941 27.4514V37.0514L57.2803 41.8514L48.9665 37.0514ZM48.0003 38.4914L39.6865 43.2914V52.8914L48.0003 57.6914L56.3141 52.8914V43.2914L48.0003 38.4914ZM48.0003 41.8169L53.4341 44.9541V51.2286L48.0003 54.3658L42.5665 51.2286V44.9541L48.0003 41.8169ZM58.2465 52.8914L66.5603 57.6914L74.8741 52.8914V43.2914L66.5603 38.4914L58.2465 43.2914V52.8914ZM66.5603 54.3658L61.1265 51.2286V44.9541L66.5603 41.8169L71.9941 44.9541V51.2286L66.5603 54.3658ZM47.0341 69.0514V59.4514L38.7203 54.6514L30.4065 59.4514V69.0514L38.7203 73.8514L47.0341 69.0514ZM38.7203 70.5258L44.1542 67.3886V61.1141L38.7203 57.9769L33.2865 61.1141V67.3886L38.7203 70.5258ZM37.7542 52.8914V43.2914L29.4403 38.4914L21.1265 43.2914V52.8914L29.4403 57.6914L37.7542 52.8914ZM34.8742 44.9541V51.2286L29.4403 54.3658L24.0065 51.2286V44.9541L29.4403 41.8169L34.8742 44.9541ZM38.7203 41.8514L47.0341 37.0514V27.4514L38.7203 22.6514L30.4065 27.4514V37.0514L38.7203 41.8514ZM44.1542 35.3886L38.7203 38.5258L33.2865 35.3886V29.1141L38.7203 25.9769L44.1542 29.1141V35.3886ZM48.9665 69.0514L57.2803 73.8514L65.5941 69.0514V59.4514L57.2803 54.6514L48.9665 59.4514V69.0514ZM51.8465 67.3886V61.1141L57.2803 57.9769L62.7141 61.1141V67.3886L57.2803 70.5258L51.8465 67.3886ZM62.7141 35.3886L57.2803 38.5258L51.8465 35.3886V29.1141L57.2803 25.9769L62.7141 29.1141V35.3886Z",fill:"white"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0-700235"}},[e("rect",{attrs:{width:"96",height:"96",fill:"white",transform:"translate(0 0.251221)"}})]),t._v(" "),e("clipPath",{attrs:{id:"clip1-167991"}},[e("rect",{attrs:{width:"96",height:"96",fill:"white",transform:"translate(0 0.251221)"}})])])])}),[],!1,null,null,null);e.default=component.exports},551:function(t,e,o){"use strict";o.r(e);var r=o(22),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"96",height:"97",viewBox:"0 0 96 97",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0-890356)"}},[e("g",{attrs:{"clip-path":"url(#clip1-629493)"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M48.0004 3.57676L9.31115 25.914V70.5885L48.0004 92.9257L86.6896 70.5885V25.914L48.0004 3.57676ZM89.5696 24.2512L48.0004 0.251221L6.43115 24.2512V72.2512L48.0004 96.2512L89.5696 72.2512V24.2512Z",fill:"white"}})]),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M56.8441 39.0413C54.0465 37.9434 51.0336 37.3699 47.9908 37.3699C41.5954 37.3699 35.5799 39.8693 31.0525 44.4076C26.5447 48.9259 24.0403 54.9278 24 61.3076L23.9946 62.1644L24.7424 62.5878C28.3466 64.6292 32.4224 65.7031 36.5526 65.7031C36.6661 65.7031 36.7806 65.7023 36.8944 65.7006C40.4947 65.649 44.0565 64.7872 47.2855 63.1967C46.2674 62.6297 45.2916 61.9912 44.3641 61.2873C38.7358 63.4946 32.357 63.2224 26.9588 60.4579C27.4839 49.2624 36.7432 40.2944 47.9908 40.2944C51.119 40.2944 54.209 40.9833 56.9997 42.2923C57.0356 41.2085 56.9839 40.1222 56.8441 39.0413",fill:"white"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M71.9813 61.109C71.8956 53.1772 68.0157 45.9405 61.548 41.5322C61.5528 42.6929 61.4749 43.8529 61.3148 45.006C65.9105 48.7414 68.7122 54.242 69.0188 60.2684C59.1054 65.3534 46.7421 61.7922 41.1105 52.075C39.5894 49.4502 38.6568 46.5156 38.3827 43.5169C37.4259 44.0363 36.5121 44.6339 35.6494 45.3039C36.1043 48.1896 37.0929 50.992 38.568 53.5373C41.7716 59.0649 46.9219 63.0278 53.0698 64.6958C55.1556 65.2618 57.2764 65.5418 59.3855 65.5418C63.4948 65.5418 67.5602 64.4788 71.2388 62.3961L71.9904 61.9703L71.9813 61.109Z",fill:"white"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M48.8383 20.8443L48.0968 20.4114L47.3551 20.8437C43.6909 22.9784 40.6467 26.0389 38.5514 29.6942C36.7421 32.8511 35.6719 36.3873 35.4209 39.9969C36.424 39.4033 37.469 38.8814 38.5494 38.4354C39.4802 32.4851 42.9562 27.1073 48.0955 23.821C57.5344 29.8627 60.6386 42.3893 54.9689 52.172C53.4335 54.8214 51.3341 57.112 48.8469 58.8707C49.7759 59.4346 50.7513 59.9242 51.765 60.3337C54.0643 58.4779 56.0218 56.2046 57.5114 53.6343C64.131 42.2125 60.2401 27.5031 48.8383 20.8443",fill:"white"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M47.9916 45.7964C46.6417 45.7964 45.5437 46.8946 45.5437 48.2445C45.5437 49.5944 46.6417 50.6927 47.9916 50.6927C49.3415 50.6927 50.4398 49.5944 50.4398 48.2445C50.4398 46.8946 49.3415 45.7964 47.9916 45.7964M47.992 53.6323C45.0209 53.6323 42.604 51.2155 42.604 48.2444C42.604 45.2735 45.0209 42.8564 47.992 42.8564C50.9631 42.8564 53.3802 45.2735 53.3802 48.2444C53.3802 51.2155 50.9631 53.6323 47.992 53.6323",fill:"white"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0-890356"}},[e("rect",{attrs:{width:"96",height:"96",fill:"white",transform:"translate(0 0.251221)"}})]),t._v(" "),e("clipPath",{attrs:{id:"clip1-629493"}},[e("rect",{attrs:{width:"96",height:"96",fill:"white",transform:"translate(0 0.251221)"}})])])])}),[],!1,null,null,null);e.default=component.exports},643:function(t,e,o){"use strict";o(526)},644:function(t,e,o){var r=o(40)((function(i){return i[1]}));r.push([t.i,"video[data-v-66de8e44]{border-radius:1.25rem}.percentage[data-v-66de8e44]{-webkit-text-fill-color:transparent;background:linear-gradient(to bottom right,#3fb3ff,#9010c7);-webkit-background-clip:text;background-clip:text}.section-cards[data-v-66de8e44]{grid-gap:var(--spacing-6);display:grid;gap:var(--spacing-6);grid-column:4/span 12;grid-template-columns:repeat(3,1fr);margin-top:var(--spacing-11)}.section-roadmap .section-header[data-v-66de8e44]{grid-column:1/span 15}.section-roadmap .section-video[data-v-66de8e44]{grid-column:5/16;margin-top:var(--spacing-6)}.section-roadmap .section-title[data-v-66de8e44]{grid-column:2/span 6;margin-top:-35%;position:relative}.section-roadmap .video-text[data-v-66de8e44]{grid-column:2/span 6;margin-top:var(--spacing-6)}.section-roadmap .video-text__btn[data-v-66de8e44]{margin-top:var(--spacing-8)}.section-roadmap .section-milestones[data-v-66de8e44]{grid-column:1/span 2;margin-top:var(--spacing-11)}.section-roadmap .section-milestones__title[data-v-66de8e44]{color:var(--white)}.section-roadmap .section-milestones__cta[data-v-66de8e44]{margin-top:var(--spacing-5)}.section-roadmap .section-row[data-v-66de8e44]{background:linear-gradient(258.96deg,#121435,#030419);border-radius:1rem;color:#fff;position:relative;transition:all .25s ease-out}.section-roadmap .section-row .meter[data-v-66de8e44]{background:linear-gradient(95.47deg,#121435,#282b53);background:var(--progress-bar-background-color,linear-gradient(95.47deg,#121435 0,#282b53 100%));border-radius:1rem;bottom:0;left:0;position:absolute;top:0;transition:opacity .15s;width:0;width:var(--progress-bar-width,0)}.section-roadmap .section-row .details[data-v-66de8e44]{grid-gap:var(--spacing-9);align-items:center;display:grid;gap:var(--spacing-9);grid-column-start:2;grid-template-columns:auto;padding:var(--spacing-8);position:relative;text-align:left}.section-roadmap .section-row .details .arrow[data-v-66de8e44]{color:var(--white-300);position:absolute;right:var(--spacing-7);top:var(--spacing-7)}.section-roadmap .section-row .details .icon[data-v-66de8e44]{fill:var(--white);margin:auto;margin-top:var(--spacing-8);transition:opacity .25s,transform .15s ease-out}.section-roadmap .section-row .details .title[data-v-66de8e44]{transition:transform .15s ease-out}.section-roadmap .section-row .details .subtitle[data-v-66de8e44]{color:var(--white-700);transition:color .15s,transform .15s ease-out}.section-roadmap .section-row .details .version[data-v-66de8e44]{margin-top:var(--spacing-5)}.section-roadmap .section-row .details .progress__wrapper[data-v-66de8e44]{align-items:flex-end;display:flex;flex-direction:column}.section-roadmap .section-row .details .progress__wrapper .progress[data-v-66de8e44]{align-items:center;display:flex}.section-roadmap .section-row[data-v-66de8e44]:hover{transform:translateY(-2px)}.section-roadmap .section-row:hover .meter[data-v-66de8e44]{opacity:.9}.section-roadmap .section-row:hover .details .icon[data-v-66de8e44]{opacity:.75;transform:translate(-2px,-2px)}.section-roadmap .section-row:hover .details .title[data-v-66de8e44]{transform:translateY(-3px)}.section-roadmap .section-row:hover .details .subtitle[data-v-66de8e44]{color:var(--white);transform:translateY(-2px)}.section-roadmap .section-row[data-v-66de8e44]:hover:active{transform:none;transition-duration:0s}.section-roadmap .section-proposal[data-v-66de8e44]{grid-column:1/5;margin-top:var(--spacing-10)}.section-roadmap .section-proposal__title[data-v-66de8e44]{color:var(--white);grid-column:1/span 4;margin-top:var(--spacing-7)}.proposal-card[data-v-66de8e44]{grid-column:5/span 8;margin-top:var(--spacing-7);position:relative}.proposal-item[data-v-66de8e44]{-webkit-backface-visibility:hidden;backface-visibility:hidden;background:linear-gradient(89.41deg,#99daff -.22%,#ffd1fd 99.78%);border-radius:var(--spacing-4);box-shadow:0 0 1px rgba(0,0,0,.07),0 8px 16px rgba(0,0,0,.05),0 20px 44px rgba(0,3,66,.12);cursor:pointer;display:block;grid-column:1/span 12;margin-top:var(--spacing-10);padding:var(--spacing-7);position:relative;text-align:left;transform:translateZ(0);transition:all .25s cubic-bezier(.165,.84,.44,1);width:23.3125rem}.proposal-item__icon[data-v-66de8e44]{color:var(--gray-600);display:flex;justify-content:flex-end;transition:color .1s ease-out,transform .25s ease-out}.proposal-item__title[data-v-66de8e44]{color:var(--gray-50);margin-top:var(--spacing-8);padding-right:2rem;transition:color .1s ease-out}.proposal-item__date[data-v-66de8e44]{color:var(--gray-trans-400);margin-top:var(--spacing-4)}.proposal-item:hover .articles-item__icon[data-v-66de8e44],.proposal-item:hover .articles-item__title[data-v-66de8e44]{color:var(--white)}.proposal-item:hover .articles-item__icon[data-v-66de8e44]{transform:translate(3px,-3px)}@media screen and (max-width:1520px){.section-cards[data-v-66de8e44]{grid-column:1/span 15;grid-template-columns:repeat(3,1fr)}.section-video[data-v-66de8e44]{grid-column:1/span 12}video[data-v-66de8e44]{height:auto!important;width:100%!important}}@media screen and (max-width:1024px){.section .section-header[data-v-66de8e44],.section-roadmap .section-video[data-v-66de8e44],.section-roadmap .video-text[data-v-66de8e44]{grid-column:1/span 15}.section-roadmap .section-title[data-v-66de8e44]{grid-column:1/span 15;margin-top:var(--spacing-8);text-align:left}.section-roadmap .proposal-card[data-v-66de8e44],.section-roadmap .section-milestones[data-v-66de8e44],.section-roadmap .section-proposal[data-v-66de8e44]{grid-column:1/span 12}.section-cards[data-v-66de8e44]{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width:767px){.section-roadmap .section-title[data-v-66de8e44]{margin-bottom:var(--spacing-5)}.section-roadmap .section-proposal[data-v-66de8e44]{margin-top:var(--spacing-8)}}@media screen and (max-width:576px){.section-roadmap .section-milestones__cta[data-v-66de8e44]{margin-top:var(--spacing-3)}.section-roadmap .section-row[data-v-66de8e44]{margin-top:var(--spacing-5)}.section-roadmap .section-row[data-v-66de8e44],.section-roadmap .section-row .meter[data-v-66de8e44]{border-radius:.75rem}.section-roadmap .section-row .details[data-v-66de8e44]{grid-auto-flow:unset;grid-template-columns:none}.section-cards[data-v-66de8e44]{grid-template-columns:repeat(1,1fr)}}@media screen and (max-width:414px){.meter[data-v-66de8e44]{width:100%}}",""]),r.locals={},t.exports=r},668:function(t,e,o){"use strict";o.r(e);o(33);var r=o(549),n=o(550),d=o(551),l={components:{IconIbc:r.default,IconSdk:n.default,IconCore:d.default},data:function(){return{milestoneList:[],bgColor:{sdk:"linear-gradient(95.47deg, #320B93 0%, #3B2AB7 100%)",core:"linear-gradient(95.47deg, #086108 0%, #018A01 100%)",ibc:"linear-gradient(95.47deg, #121435 0%, #282B53 100%)"},releases:[{url:"https://github.com/tendermint/tendermint/releases",version:"0.34",name:"Tendermint Core",repo:"tendermint/tendermint",logo:"core"},{url:"https://github.com/cosmos/ics/releases/tag/v1.0.0-rc6",version:"1.0",name:"IBC",repo:"cosmos/ics",logo:"ibc"},{url:"https://github.com/cosmos/cosmos-sdk/releases",version:"0.41",name:"Cosmos SDK",repo:"cosmos/cosmos-sdk",logo:"sdk"}]}}},c=(o(643),o(22)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section section-roadmap"},[e("div",{staticClass:"tm-section-container section-container"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-header tm-rf0 tm-medium tm-lh-title tm-overline"},[t._v("\n        Roadmap\n      ")]),t._v(" "),e("div",{staticClass:"section-video"},[e("video",{attrs:{width:"879",height:"493",autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"/videos/stargate-promo.mp4",type:"video/mp4"}}),t._v("\n          Your browser does not support the video tag.\n        ")])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"video-text"},[e("p",{staticClass:"section-paragraph tm-rf1 tm-lh-copy"},[t._v("\n          The latest releases of Tendermint Core, IBC and Cosmos SDK are ready\n          for Stargate. Are you?\n        ")]),t._v(" "),e("p",{staticClass:"section-paragraph tm-rf1 tm-lh-copy"},[t._v("\n          Now is the time to integrate with Stargate and prepare for the\n          imminent ecosystem upgrades.\n        ")]),t._v(" "),e("tm-button",{staticClass:"video-text__btn",attrs:{"to-link":"internal",to:"/testnet",size:"l",color:"var(--gray-50)","background-color":"linear-gradient(90deg, #99DAFF 0%, #FFD1FD 50%, var(--primary-900) 100%), var(--primary-900)"}},[t._v("Prepare "),e("span",{staticClass:"icon__right"},[t._v("--\x3e")])])],1),t._v(" "),e("div",{staticClass:"section-milestones"},[e("div",{staticClass:"section-milestones__title tm-rf3 tm-bold tm-lh-title"},[t._v("\n          Releases\n        ")]),t._v(" "),e("div",{staticClass:"section-milestones__cta"},[e("tm-button",{attrs:{"to-link":"external",href:"https://github.com/orgs/cosmosdevs/projects/1",color:"var(--link)",variant:"text",size:"l"}},[t._v("View project ↗")])],1)]),t._v(" "),e("div",{staticClass:"section-cards"},t._l(t.releases,(function(o){return e("a",{key:o.name,staticClass:"section-row",attrs:{href:o.url,target:"_blank",rel:"noreferrer noopener"}},[e("div",{staticClass:"meter",style:{"--progress-bar-width":"100%","--progress-bar-background-color":"".concat(t.bgColor[o.logo])}}),t._v(" "),e("div",{staticClass:"details"},[e("div",{staticClass:"arrow tm-rf2 tm-lh-solid"},[t._v("↗")]),t._v(" "),e("div",{staticClass:"icon"},[e("icon-".concat(o.logo),{tag:"component"})],1),t._v(" "),e("div",{staticClass:"text"},[e("div",{staticClass:"title tm-rf1 tm-bold tm-lh-copy"},[t._v("\n                "+t._s(o.name)+"\n              ")]),t._v(" "),e("div",{staticClass:"subtitle tm-rf0 tm-lh-copy"},[t._v(t._s(o.repo))]),t._v(" "),e("div",{staticClass:"version tm-rf0 tm-lh-copy tm-code"},[t._v("\n                "+t._s(o.version)+"\n              ")])])])])})),0)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-title tm-rf7 tm-bold tm-lh-title"},[e("span",{staticClass:"percentage"},[t._v("100%")]),t._v(" complete\n      ")])}],!1,null,"66de8e44",null);e.default=component.exports;installComponents(component,{TmButton:o(430).default})}}]);