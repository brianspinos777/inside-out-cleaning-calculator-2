(this["webpackJsonpinside-out-cleaning-calculator-2"]=this["webpackJsonpinside-out-cleaning-calculator-2"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(4),s=n.n(r),i=(n(9),n.p,n(10),n(2)),u=n(0),j=function(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),j=s[0],o=s[1],b=Object(a.useState)(""),l=Object(i.a)(b,2),d=l[0],O=l[1],p=Object(a.useState)(""),h=Object(i.a)(p,2),x=h[0],f=h[1],g=Object(a.useState)(""),m=Object(i.a)(g,2),v=m[0],y=m[1],F=function(t){return parseFloat(t.toFixed(10))},S=function(t){return isNaN(t)||null==t||0==t?"00":t<10?"0".concat(t):t};Object(a.useEffect)((function(){C(n,j)}),[n,j]);var C=function(t,e){var n=F(t/e),a=F(n%1),c=F(n-a),r=60*a,s=F(r%1),i=F(r-s),u=60*s,j=F(u%1),o=F(u-j);O(S(c)),f(S(i)),y(S(o))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:"Total payment"}),Object(u.jsx)("input",{"data-testid":"total-payment",type:"number",value:n,onChange:function(t){c(t.target.value)}}),Object(u.jsx)("p",{children:"Payment/Hr"}),Object(u.jsx)("input",{"data-testid":"payment-hr",type:"number",value:j,onChange:function(t){o(t.target.value)}}),Object(u.jsx)("p",{children:"Hours worked:"}),Object(u.jsxs)("p",{"data-testid":"hours-worked",children:["".concat(d,":").concat(x,":").concat(v)," Hrs"]})]})},o=function(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),j=s[0],o=s[1],b=Object(a.useState)(""),l=Object(i.a)(b,2),d=l[0],O=l[1],p=Object(a.useState)(0),h=Object(i.a)(p,2),x=h[0],f=h[1],g=function(t){var e=parseFloat(t);return isNaN(e)?0:parseFloat(e.toFixed(10))};return Object(a.useEffect)((function(){var t=g(n),e=g(j),a=g(d);if(0!=t||0!=t||0!=t){var c,r=g(a/60);f((c=t*(e+r),isNaN(c)?0:parseFloat(c.toFixed(2))))}else f(0)}),[n,j,d]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:"Payment/Hr"}),Object(u.jsx)("input",{"data-testid":"2-payment-hr",type:"number",value:n,onChange:function(t){c(t.target.value)}}),Object(u.jsx)("p",{children:"Hours worked"}),Object(u.jsx)("input",{"data-testid":"2-hours-worked-h",type:"number",value:j,onChange:function(t){o(t.target.value)}}),Object(u.jsx)("input",{"data-testid":"2-hours-worked-m",type:"number",value:d,onChange:function(t){O(t.target.value)}}),Object(u.jsx)("p",{children:"Total payment:"}),Object(u.jsxs)("p",{"data-testid":"2-total-payment",children:["$",x]})]})};n(12);var b=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"app-container",children:[Object(u.jsx)("img",{src:"/inside-out-cleaning-calculator-2/inside-out-logo.jpeg"}),Object(u.jsx)(j,{})]}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"app-container",children:Object(u.jsx)(o,{})})]})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),l()}],[[13,1,2]]]);
//# sourceMappingURL=main.b01c1899.chunk.js.map