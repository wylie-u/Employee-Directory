(this["webpackJsonpemployee-directory-app-wu"]=this["webpackJsonpemployee-directory-app-wu"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n(12),c=n.n(r),a=(n(22),n(13)),i=n(14),l=n(17),h=n(16),o=(n(23),n(15)),u=n.n(o),j=function(e){return u.a.get("https://randomuser.me/api/?results=30")},d=n(0),b=function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("img",{alt:"user",src:e.user.picture.thumbnail})}),Object(d.jsx)("td",{children:e.user.name.first}),Object(d.jsx)("td",{children:e.user.name.last}),Object(d.jsx)("td",{children:e.user.cell}),Object(d.jsx)("td",{children:e.user.email}),Object(d.jsxs)("td",{children:[e.user.location.timezone.description," "]})]})},m=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("table",{className:"table-resposive",children:Object(d.jsxs)("thead",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Picture"}),Object(d.jsx)("th",{children:"Firstname"}),Object(d.jsx)("th",{children:"Lastname"}),Object(d.jsx)("th",{children:"Cell"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Timezone"})]}),e.users.map((function(e){return Object(d.jsx)(b,{user:e},e.cell)}))]})})})})};n(43);var O=function(e){return Object(d.jsx)("form",{onSubmit:e.handleForm,className:"search",children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for an Employee",id:"search"}),Object(d.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3 search-button",children:"Search"})]})})},p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleInputChange=function(t){e.setState({search:t.target.value})},e.state={search:"",users:[],filterResults:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;j().then((function(t){e.setState({users:t.data.results})}))}},{key:"render",value:function(){var e=this,t=this.state.users.filter((function(t){return t.name.first.toLowerCase().includes(e.state.search.toLowerCase())||t.name.last.toLowerCase().includes(e.state.search.toLowerCase())}));return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"background",children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(d.jsx)("p",{children:" Search for an employee by entering their name or email below."}),Object(d.jsx)(O,{handleInputChange:this.handleInputChange,name:this.search})]}),Object(d.jsx)(m,{users:t})]})})}}]),n}(s.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};c.a.render(Object(d.jsx)(p,{}),document.getElementById("root")),x()}},[[44,1,2]]]);
//# sourceMappingURL=main.01f4b8e4.chunk.js.map