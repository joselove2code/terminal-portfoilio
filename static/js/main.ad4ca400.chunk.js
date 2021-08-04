(this["webpackJsonpterminal-portfolio"]=this["webpackJsonpterminal-portfolio"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var r,c,a,o,_,i,s,l,b,d,j,h,u=t(1),f=t.n(u),g=t(12),m=t.n(g),O=t(10),p=t(4),x=t(16),v=t(2),k=t(3),w=k.b.div(r||(r=Object(v.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: var(--backgroundColor);\n"]))),y=k.b.div(c||(c=Object(v.a)(["\n  margin: auto;\n  color: var(--green);\n  font-family: var(--font);\n  max-width: var(--maxWidth);\n  padding-left: var(--marginX);\n  padding-right: var(--marginX);\n"]))),C=k.b.header(a||(a=Object(v.a)(["\n  white-space: pre;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: var(--marginTop);\n  font-size: 8px;\n\n  @media (min-width: 600px) {\n    font-size: 14px;\n  }\n"]))),E=k.b.div(o||(o=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  @media (min-width: 600px) {\n    width: fit-content;\n  }\n"]))),H=k.b.div(_||(_=Object(v.a)(["\n  width: fit-content;\n\n  ::selection {\n    color: var(--backgroundColor);\n    background: var(--green);\n  }\n"]))),L=t(0),S=["__________              __    _____      .__  .__        ","\\______   \\____________/  |__/ ____\\____ |  | |__| ____  "," |     ___/  _ \\_  __ \\   __\\   __\\/  _ \\|  | |  |/  _ \\ "," |    |  (  <_> )  | \\/|  |  |  | (  <_> )  |_|  (  <_> )"," |____|   \\____/|__|   |__|  |__|  \\____/|____/__|\\____/ "],A=["  ___________                  .__              .__   ","  \\__    ___/__________  _____ |__| ____ _____  |  |  ","    |    |_/ __ \\_  __ \\/     \\|  |/    \\\\__  \\ |  |  ","    |    |\\  ___/|  | \\/  Y Y  \\  |   |  \\/ __ \\|  |__","    |____| \\___  >__|  |__|_|  /__|___|  (____  /____/","               \\/            \\/        \\/     \\/      "],B=function(){return Object(L.jsxs)(C,{children:[Object(L.jsx)(E,{children:S.map((function(n){return Object(L.jsx)(H,{children:n},n)}))}),Object(L.jsx)(E,{children:A.map((function(n){return Object(L.jsx)(H,{children:n},n)}))})]})},F=k.b.p(i||(i=Object(v.a)(["\n  line-height: var(--lineHeight);\n\n  ::selection {\n    color: var(--backgroundColor);\n    background: var(--green);\n  }\n"]))),I=k.b.span(s||(s=Object(v.a)(["\n  color: var(--cyan);\n  font-weight: ",";\n\n  ::selection {\n    color: var(--backgroundColor);\n    background: var(--cyan);\n  }\n"])),(function(n){return n.bold?"bold":"normal"})),M=function(){return Object(L.jsxs)(F,{children:["Hello, my name is ",Object(L.jsx)(I,{bold:!0,children:"Jos\xe9 Ignacio Cruz Moreira"}),".",Object(L.jsx)("br",{}),"I am a Full-Stack Software Engineer from Cuba.",Object(L.jsx)("br",{}),"If you want to know more about me, feel free to type some commands.",Object(L.jsx)("br",{}),Object(L.jsx)(I,{children:"Hint"}),": you can start by typing ",Object(L.jsx)(I,{children:"help"})," to see the list of all available commands."]})},T=k.b.div(l||(l=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),z=k.b.span(b||(b=Object(v.a)(["\n  margin-right: 5px;\n\n  ::selection, b::selection {\n    color: var(--backgroundColor);\n    background: var(--green);\n  }\n"]))),D=k.b.span(d||(d=Object(v.a)(["\n  position: relative;\n  line-height: var(--lineHeight);\n\n  ::selection {\n    color: var(--backgroundColor);\n    background: var(--green);\n  }\n  "]))),W=k.b.span(j||(j=Object(v.a)(["\n  left: 0;\n  position: absolute;\n  color: var(--backgroundColor);\n  line-height: var(--lineHeight);\n  background-color: var(--green);\n  animation: blink 1s steps(5, start) infinite;\n\n  @keyframes blink {\n    to {\n      visibility: hidden;\n    }\n  }\n"]))),J=function(n){var e=n.chars,t=n.caret;return Object(L.jsxs)(T,{children:[Object(L.jsxs)(z,{children:[Object(L.jsx)("b",{children:"root@portfolio:"}),Object(L.jsx)(I,{children:"~$"})]}),e.map((function(n,e){return Object(L.jsxs)(D,{children:[n,t===e&&Object(L.jsx)(W,{children:n})]},e)})),Object(L.jsx)(D,{children:t===e.length&&Object(L.jsx)(W,{children:"\xa0"})})]})};!function(n){n.End="End",n.Home="Home",n.Delete="Delete",n.BackSpace="Backspace",n.ArrowLeft="ArrowLeft",n.ArrowRight="ArrowRight"}(h||(h={}));var R,X=function(){var n=Object(u.useState)({caret:0,chars:[]}),e=Object(x.a)(n,2),t=e[0],r=e[1];return Object(u.useEffect)((function(){var n=function(n){var e=n.key;e===h.BackSpace?r({caret:Math.max(0,t.caret-1),chars:t.chars.filter((function(n,e){return e!==t.caret-1}))}):e===h.ArrowLeft?r(Object(p.a)(Object(p.a)({},t),{},{caret:Math.max(0,t.caret-1)})):e===h.ArrowRight?function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.chars.length;r(Object(p.a)(Object(p.a)({},t),{},{caret:Math.min(n,t.caret+1)}))}():e===h.Home?r(Object(p.a)(Object(p.a)({},t),{},{caret:0})):e===h.End&&r(Object(p.a)(Object(p.a)({},t),{},{caret:t.chars.length}))},e=function(n){var e=n.key;e===h.Delete?r(Object(p.a)(Object(p.a)({},t),{},{chars:t.chars.filter((function(n,e){return e!==t.caret}))})):function(n){var e=t.chars.filter((function(n,e){return e<t.caret})),c=t.chars.filter((function(n,e){return e>=t.caret}));r({caret:t.caret+1,chars:[].concat(Object(O.a)(e),[n],Object(O.a)(c))})}(e)};return document.addEventListener("keydown",n),document.addEventListener("keypress",e),function(){document.removeEventListener("keydown",n),document.removeEventListener("keypress",e)}}),[t]),Object(L.jsx)(w,{children:Object(L.jsxs)(y,{children:[Object(L.jsx)(B,{}),Object(L.jsx)(M,{}),Object(L.jsx)(J,{chars:t.chars,caret:t.caret})]})})},P=Object(k.a)(R||(R=Object(v.a)(["\n  :root {\n    --marginX: 15px;\n    --fontSize: 16px;\n    --marginTop: 15px;\n    --cyan: #3a96ddff;\n    --green: #16c60cff;\n    --maxWidth: 1210px;\n    --lineHeight: 20px;\n    --backgroundColor: black;\n    --font: Consolas, monospace;\n\n    @media (min-width: 1250px) {\n      --marginTop: 80px;\n    }\n  }\n"]))),Y=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(P,{}),Object(L.jsx)(X,{})]})},$=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(Object(L.jsx)(f.a.StrictMode,{children:Object(L.jsx)(Y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)})),$()}},[[24,1,2]]]);
//# sourceMappingURL=main.ad4ca400.chunk.js.map