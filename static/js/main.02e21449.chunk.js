(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(12),a=c(5),r=(c(21),c(22),c(2)),s=c(1),j=(c(23),c(0)),i=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},b=c(7),l=c(10),o=c(8),h=c(4),d=c(6),O=c.n(d),x=function(e){var t=e.person,c=t.name,n=t.sex,r=t.slug;return Object(j.jsx)(a.b,{to:"../".concat(r),className:function(){return O()({"has-text-danger":"f"===n})},children:c})},u=function(e){var t=e.people,c=e.selectedSlug;return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.sex,n=e.born,a=e.died,r=e.father,s=e.fatherName,i=e.mother,b=e.motherName,l=e.slug,o=l===c,h=b||"-",d=s||"-";return Object(j.jsxs)("tr",{"data-cy":"person",className:O()({"has-background-warning":o}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(x,{person:e})}),Object(j.jsx)("td",{children:t}),Object(j.jsx)("td",{children:n}),Object(j.jsx)("td",{children:a}),Object(j.jsx)("td",{children:i?Object(j.jsx)(x,{person:i}):h}),Object(j.jsx)("td",{children:r?Object(j.jsx)(x,{person:r}):d})]},l)}))})]})},p=(c(25),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),m=function(){var e=Object(o.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),i=Object(h.a)(a,2),d=i[0],O=i[1],x=Object(s.useState)(!1),f=Object(h.a)(x,2),v=f[0],g=f[1],N=Object(r.h)().slug,y=void 0===N?"":N,w=function(){var e=Object(o.a)(Object(b.a)().mark((function e(){var t,c;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,m();case 4:t=e.sent,O(!1),c=t.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{mother:t.find((function(t){return t.name===e.motherName})),father:t.find((function(t){return t.name===e.fatherName}))})})),n(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),O(!0);case 13:g(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){w()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[v&&Object(j.jsx)(p,{}),0===c.length&&d&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===c.length&&!d&&!v&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&Object(j.jsx)(u,{people:c,selectedSlug:y})]})})]})},v=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},g=function(e){var t=e.to,c=e.text;return Object(j.jsx)(a.b,{to:t,className:function(e){var t=e.isActive;return O()("navbar-item",{"has-background-grey-lighter":t})},children:c})},N=function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(g,{to:"/",text:"Home"}),Object(j.jsx)(g,{to:"people",text:"People"})]})})})},y=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(N,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{path:"/",element:Object(j.jsx)(i,{})}),Object(j.jsx)(r.b,{path:"/home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})}),Object(j.jsx)(r.b,{path:"/people",element:Object(j.jsx)(f,{})}),Object(j.jsxs)(r.b,{path:"/people",children:[Object(j.jsx)(r.b,{index:!0,element:Object(j.jsx)(f,{})}),Object(j.jsx)(r.b,{path:":slug",element:Object(j.jsx)(f,{})})]}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)(v,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(y,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.02e21449.chunk.js.map