!function(){function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return s.Date.now()};function m(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function b(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(m(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=m(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var a=u.test(n);return a||c.test(n)?f(n.slice(2),a?2:8):r.test(n)?NaN:+n}n=function(t,n,e){var o,i,r,u,c,f,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=o,r=i;return o=i=void 0,a=n,u=t.apply(r,e)}function h(t){return a=t,c=setTimeout(T,n),l?g(t):u}function j(t){var e=t-f;return void 0===f||e>=n||e<0||s&&t-a>=r}function T(){var t=y();if(j(t))return O(t);c=setTimeout(T,function(t){var e=n-(t-f);return s?v(e,r-(t-a)):e}(t))}function O(t){return c=void 0,d&&o?g(t):(o=i=void 0,u)}function w(){var t=y(),e=j(t);if(o=arguments,i=this,f=t,e){if(void 0===c)return h(f);if(s)return c=setTimeout(T,n),g(f)}return void 0===c&&(c=setTimeout(T,n)),u}return n=b(n)||0,m(e)&&(l=!!e.leading,r=(s="maxWait"in e)?p(b(e.maxWait)||0,n):r,d="trailing"in e?!!e.trailing:d),w.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=f=i=c=void 0},w.flush=function(){return void 0===c?u:O(y())},w};var g={input:document.querySelector("#search-box"),list:document.querySelector(".country-list")},h=(document.querySelector("#search-box"),document.querySelector(".country-list"));g.input.addEventListener("input",t(n)((function(t){fetch("https://restcountries.com/v3.1/name//".concat(t.target.value,"?fields=name,capital,population,flags,languages")).then((function(t){return t.json()})).then((function(t){var n;!function(t){h.insertAdjacentHTML("afterbegin",t)}((n=t,console.log(n),n.map((function(t){return'<li class="country-item">\n          <img class="country-img" src="'.concat(t.flags.svg,'" alt="').concat(t.name.official,' flag">\n          <p class="country-name">').concat(t.name.official,"</p>\n        </li>")})).join("")))})).catch((function(t){return console.log(t)}))}),300))}();
//# sourceMappingURL=index.90b7fb15.js.map
