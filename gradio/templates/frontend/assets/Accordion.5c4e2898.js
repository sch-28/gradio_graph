import{S as w,i as A,s as j,e as b,t as q,a as v,c as S,b as g,d as p,f as y,g as d,m as z,l as B,h as D,j as k,k as C,n as E,o as F,p as G,u as H,q as I,r as J}from"./index.b9578f7f.js";import{C as K}from"./Column.ed0fb87a.js";function L(n){let e;const l=n[6].default,s=G(l,n,n[7],null);return{c(){s&&s.c()},m(t,r){s&&s.m(t,r),e=!0},p(t,r){s&&s.p&&(!e||r&128)&&H(s,l,t,t[7],e?J(l,t[7],r,null):I(t[7]),null)},i(t){e||(k(s,t),e=!0)},o(t){C(s,t),e=!1},d(t){s&&s.d(t)}}}function M(n){let e,l,s,t,r,u,_,i,f,m,o;return i=new K({props:{visible:n[3],$$slots:{default:[L]},$$scope:{ctx:n}}}),{c(){e=b("div"),l=b("div"),s=b("span"),t=q(n[0]),r=v(),u=b("span"),u.textContent="\u25BC",_=v(),S(i.$$.fragment),g(u,"class","transition"),p(u,"rotate-90",!n[3]),g(l,"class","w-full flex justify-between cursor-pointer"),g(e,"id",n[1]),g(e,"class","p-3 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col gap-3 hover:border-gray-300 dark:hover:border-gray-600 transition"),p(e,"hidden",!n[2])},m(a,c){y(a,e,c),d(e,l),d(l,s),d(s,t),d(l,r),d(l,u),d(e,_),z(i,e,null),f=!0,m||(o=B(l,"click",n[4]),m=!0)},p(a,[c]){(!f||c&1)&&D(t,a[0]),c&8&&p(u,"rotate-90",!a[3]);const h={};c&8&&(h.visible=a[3]),c&128&&(h.$$scope={dirty:c,ctx:a}),i.$set(h),(!f||c&2)&&g(e,"id",a[1]),c&4&&p(e,"hidden",!a[2])},i(a){f||(k(i.$$.fragment,a),f=!0)},o(a){C(i.$$.fragment,a),f=!1},d(a){a&&E(e),F(i),m=!1,o()}}}function N(n,e,l){let{$$slots:s={},$$scope:t}=e,{label:r}=e,{elem_id:u}=e,{visible:_=!0}=e,{open:i=!0}=e,f=i;const m=()=>{l(3,f=!f)};return n.$$set=o=>{"label"in o&&l(0,r=o.label),"elem_id"in o&&l(1,u=o.elem_id),"visible"in o&&l(2,_=o.visible),"open"in o&&l(5,i=o.open),"$$scope"in o&&l(7,t=o.$$scope)},[r,u,_,f,m,i,s,t]}class O extends w{constructor(e){super(),A(this,e,N,M,j,{label:0,elem_id:1,visible:2,open:5})}}var R=O;export{R as A};
//# sourceMappingURL=Accordion.5c4e2898.js.map