import{S as L,i as M,s as w,e as S,b as c,d as _,f as g,w as H,n as d,E as j,c as h,m as b,j as v,k,o as T,P as B,Q as C,a as E,R as q,T as D,J}from"./index.1ea07ba3.js";import{B as P}from"./Block.d18f3efd.js";import"./styles.ed3b21b5.js";function Q(n){let e;return{c(){e=S("div"),c(e,"class","output-html"),c(e,"id",n[0]),_(e,"min-h-[6rem]",n[3]),_(e,"!hidden",!n[2])},m(a,i){g(a,e,i),e.innerHTML=n[1]},p(a,[i]){i&2&&(e.innerHTML=a[1]),i&1&&c(e,"id",a[0]),i&8&&_(e,"min-h-[6rem]",a[3]),i&4&&_(e,"!hidden",!a[2])},i:H,o:H,d(a){a&&d(e)}}}function R(n,e,a){let{elem_id:i=""}=e,{value:s}=e,{visible:l=!0}=e,{min_height:f=!1}=e;const r=j();return n.$$set=t=>{"elem_id"in t&&a(0,i=t.elem_id),"value"in t&&a(1,s=t.value),"visible"in t&&a(2,l=t.visible),"min_height"in t&&a(3,f=t.min_height)},n.$$.update=()=>{n.$$.dirty&2&&r("change")},[i,s,l,f]}class z extends L{constructor(e){super(),M(this,e,R,Q,w,{elem_id:0,value:1,visible:2,min_height:3})}}function A(n){let e,a,i,s,l;const f=[n[3],{variant:"center"}];let r={};for(let t=0;t<f.length;t+=1)r=B(r,f[t]);return e=new C({props:r}),s=new z({props:{min_height:n[3]&&n[3]?.status!=="complete",value:n[2],elem_id:n[0],visible:n[1]}}),s.$on("change",n[5]),{c(){h(e.$$.fragment),a=E(),i=S("div"),h(s.$$.fragment),c(i,"class","transition"),_(i,"opacity-20",n[3]?.status==="pending")},m(t,m){b(e,t,m),g(t,a,m),g(t,i,m),b(s,i,null),l=!0},p(t,m){const u=m&8?q(f,[D(t[3]),f[1]]):{};e.$set(u);const o={};m&8&&(o.min_height=t[3]&&t[3]?.status!=="complete"),m&4&&(o.value=t[2]),m&1&&(o.elem_id=t[0]),m&2&&(o.visible=t[1]),s.$set(o),m&8&&_(i,"opacity-20",t[3]?.status==="pending")},i(t){l||(v(e.$$.fragment,t),v(s.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),k(s.$$.fragment,t),l=!1},d(t){T(e,t),t&&d(a),t&&d(i),T(s)}}}function F(n){let e,a;return e=new P({props:{visible:n[1],elem_id:n[0],disable:!0,$$slots:{default:[A]},$$scope:{ctx:n}}}),{c(){h(e.$$.fragment)},m(i,s){b(e,i,s),a=!0},p(i,[s]){const l={};s&2&&(l.visible=i[1]),s&1&&(l.elem_id=i[0]),s&143&&(l.$$scope={dirty:s,ctx:i}),e.$set(l)},i(i){a||(v(e.$$.fragment,i),a=!0)},o(i){k(e.$$.fragment,i),a=!1},d(i){T(e,i)}}}function G(n,e,a){let{label:i}=e,{elem_id:s=""}=e,{visible:l=!0}=e,{value:f=""}=e,{loading_status:r}=e;const t=j();function m(u){J.call(this,n,u)}return n.$$set=u=>{"label"in u&&a(4,i=u.label),"elem_id"in u&&a(0,s=u.elem_id),"visible"in u&&a(1,l=u.visible),"value"in u&&a(2,f=u.value),"loading_status"in u&&a(3,r=u.loading_status)},n.$$.update=()=>{n.$$.dirty&16&&t("change")},[s,l,f,r,i,m]}class I extends L{constructor(e){super(),M(this,e,G,F,w,{label:4,elem_id:0,visible:1,value:2,loading_status:3})}}var U=I;const V=["static"];export{U as Component,V as modes};
//# sourceMappingURL=index.06395df1.js.map