import{a7 as G,S as H,i as O,s as W,N,j as S,v as M,O as x,a as b,d as u,l as D,w as j,b as m,f as h,G as g,x as z,p as d,n as v,A as y,M as q,u as F,e as k,c as w,a8 as P,m as B,o as I,L as T,t as _,g as p,K as $,h as A}from"../chunks/vendor-c564b019.js";import{t as K,c as Q,W as R,w as U}from"../chunks/WalletAccess-5297724b.js";import{N as L}from"../chunks/NavButton-5da891c2.js";import{c as J}from"../chunks/index-3fc4b8e4.js";import{S as X,H as Y}from"../chunks/graphql-126ef292.js";import"../chunks/config-189b06cb.js";import"../chunks/paths-28a87002.js";import"../chunks/notifications-f6b9b417.js";class Z{constructor(t,s){this.transactions=s,this.queryStore=new Y(t,`
    query {
      matches(first: 10) {
        id
        status
      }
    }`,Q,{path:"matches"}),this.store=G([this.queryStore,this.transactions],e=>this.update(e))}update([t]){if(t.data){let s=t.data;return{step:t.step,error:t.error,data:s}}else return t}acknowledgeError(){return this.queryStore.acknowledgeError()}subscribe(t,s){return this.store.subscribe(t,s)}}const tt=new Z(X,K);function V(o,t,s){const e=o.slice();return e[1]=t[s],e[3]=s,e}function et(o){let t,s,e,l=o[0].data,c=[];for(let r=0;r<l.length;r+=1)c[r]=C(V(o,l,r));const a=r=>v(c[r],1,1,()=>{c[r]=null});return s=new L({props:{href:"/createMatch",class:"m-4 w-max-content",$$slots:{default:[ct]},$$scope:{ctx:o}}}),{c(){for(let r=0;r<c.length;r+=1)c[r].c();t=S(),M(s.$$.fragment)},l(r){for(let n=0;n<c.length;n+=1)c[n].l(r);t=D(r),j(s.$$.fragment,r)},m(r,n){for(let f=0;f<c.length;f+=1)c[f].m(r,n);h(r,t,n),z(s,r,n),e=!0},p(r,n){if(n&1){l=r[0].data;let i;for(i=0;i<l.length;i+=1){const E=V(r,l,i);c[i]?(c[i].p(E,n),d(c[i],1)):(c[i]=C(E),c[i].c(),d(c[i],1),c[i].m(t.parentNode,t))}for(B(),i=l.length;i<c.length;i+=1)a(i);I()}const f={};n&16&&(f.$$scope={dirty:n,ctx:r}),s.$set(f)},i(r){if(!e){for(let n=0;n<l.length;n+=1)d(c[n]);d(s.$$.fragment,r),e=!0}},o(r){c=c.filter(Boolean);for(let n=0;n<c.length;n+=1)v(c[n]);v(s.$$.fragment,r),e=!1},d(r){T(c,r),r&&u(t),y(s,r)}}}function st(o){let t,s;return{c(){t=k("div"),s=_("Loading matches..."),this.h()},l(e){t=w(e,"DIV",{class:!0});var l=b(t);s=p(l,"Loading matches..."),l.forEach(u),this.h()},h(){m(t,"class","svelte-8b44jz")},m(e,l){h(e,t,l),g(t,s)},p:$,i:$,o:$,d(e){e&&u(t)}}}function at(o){let t,s,e=o[0].error+"",l;return{c(){t=k("div"),s=_("Error: "),l=_(e),this.h()},l(c){t=w(c,"DIV",{class:!0});var a=b(t);s=p(a,"Error: "),l=p(a,e),a.forEach(u),this.h()},h(){m(t,"class","svelte-8b44jz")},m(c,a){h(c,t,a),g(t,s),g(t,l)},p(c,a){a&1&&e!==(e=c[0].error+"")&&A(l,e)},i:$,o:$,d(c){c&&u(t)}}}function rt(o){let t,s;return{c(){t=k("div"),s=_("Matches not loaded"),this.h()},l(e){t=w(e,"DIV",{class:!0});var l=b(t);s=p(l,"Matches not loaded"),l.forEach(u),this.h()},h(){m(t,"class","svelte-8b44jz")},m(e,l){h(e,t,l),g(t,s)},p:$,i:$,o:$,d(e){e&&u(t)}}}function lt(o){let t,s,e,l=(o[1].status===0?"Not finished":"Finished")+"",c;return{c(){t=_("Match "),s=_(o[3]),e=_(" | "),c=_(l)},l(a){t=p(a,"Match "),s=p(a,o[3]),e=p(a," | "),c=p(a,l)},m(a,r){h(a,t,r),h(a,s,r),h(a,e,r),h(a,c,r)},p(a,r){r&1&&l!==(l=(a[1].status===0?"Not finished":"Finished")+"")&&A(c,l)},d(a){a&&u(t),a&&u(s),a&&u(e),a&&u(c)}}}function C(o){let t,s;return t=new L({props:{href:`/match/${o[3]}`,class:"m-4 w-max-content text-primary",$$slots:{default:[lt]},$$scope:{ctx:o}}}),{c(){M(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,l){z(t,e,l),s=!0},p(e,l){const c={};l&17&&(c.$$scope={dirty:l,ctx:e}),t.$set(c)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){y(t,e)}}}function ct(o){let t;return{c(){t=_("Create a match")},l(s){t=p(s,"Create a match")},m(s,e){h(s,t,e)},d(s){s&&u(t)}}}function nt(o){let t,s,e,l;const c=[rt,at,st,et],a=[];function r(n,f){return n[0].step?n[0].error?1:n[0].step==="LOADING"||!n[0].data?2:3:0}return s=r(o),e=a[s]=c[s](o),{c(){t=k("div"),e.c(),this.h()},l(n){t=w(n,"DIV",{class:!0});var f=b(t);e.l(f),f.forEach(u),this.h()},h(){m(t,"class",""+(P("flex flex-wrap items-center -mx-2")+" svelte-8b44jz"))},m(n,f){h(n,t,f),a[s].m(t,null),l=!0},p(n,f){let i=s;s=r(n),s===i?a[s].p(n,f):(B(),v(a[i],1,1,()=>{a[i]=null}),I(),e=a[s],e?e.p(n,f):(e=a[s]=c[s](n),e.c()),d(e,1),e.m(t,null))},i(n){l||(d(e),l=!0)},o(n){v(e),l=!1},d(n){n&&u(t),a[s].d()}}}function ot(o){let t,s,e,l,c;return l=new R({props:{$$slots:{default:[nt]},$$scope:{ctx:o}}}),{c(){t=N("symbol"),s=N("path"),e=S(),M(l.$$.fragment),this.h()},l(a){t=x(a,"symbol",{id:!0,viewBox:!0,class:!0});var r=b(t);s=x(r,"path",{d:!0,class:!0}),b(s).forEach(u),r.forEach(u),e=D(a),j(l.$$.fragment,a),this.h()},h(){m(s,"d","M12 4c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM24.719 16c0 0 0 0 0 0 0-1.812 1.469-3.281 3.281-3.281s3.281 1.469 3.281 3.281c0 0 0 0 0 0 0 1.812-1.469 3.281-3.281 3.281s-3.281-1.469-3.281-3.281zM21.513 24.485c0-1.641 1.331-2.972 2.972-2.972s2.972 1.331 2.972 2.972c0 1.641-1.331 2.972-2.972 2.972s-2.972-1.331-2.972-2.972zM13.308 28c0-1.487 1.205-2.692 2.692-2.692s2.692 1.205 2.692 2.692c0 1.487-1.205 2.692-2.692 2.692s-2.692-1.205-2.692-2.692zM5.077 24.485c0-1.346 1.092-2.438 2.438-2.438s2.438 1.092 2.438 2.438c0 1.346-1.092 2.438-2.438 2.438s-2.438-1.092-2.438-2.438zM1.792 16c0-1.22 0.989-2.208 2.208-2.208s2.208 0.989 2.208 2.208c0 1.22-0.989 2.208-2.208 2.208s-2.208-0.989-2.208-2.208zM5.515 7.515c0 0 0 0 0 0 0-1.105 0.895-2 2-2s2 0.895 2 2c0 0 0 0 0 0 0 1.105-0.895 2-2 2s-2-0.895-2-2zM28.108 7.515c0 2.001-1.622 3.623-3.623 3.623s-3.623-1.622-3.623-3.623c0-2.001 1.622-3.623 3.623-3.623s3.623 1.622 3.623 3.623z"),m(s,"class","svelte-8b44jz"),m(t,"id","icon-spinner6"),m(t,"viewBox","0 0 32 32"),m(t,"class","svelte-8b44jz")},m(a,r){h(a,t,r),g(t,s),h(a,e,r),z(l,a,r),c=!0},p(a,[r]){const n={};r&17&&(n.$$scope={dirty:r,ctx:a}),l.$set(n)},i(a){c||(d(l.$$.fragment,a),c=!0)},o(a){v(l.$$.fragment,a),c=!1},d(a){a&&u(t),a&&u(e),y(l,a)}}}function it(o,t,s){let e;return q(o,tt,l=>s(0,e=l)),F(()=>{console.log("mount players",{combine:J(U.address||"0x0000000000000000000000000000000000000000","hi").toString()})}),[e]}class vt extends H{constructor(t){super();O(this,t,it,ot,W,{})}}export{vt as default};
//# sourceMappingURL=matches.svelte-33318b33.js.map
