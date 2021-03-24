(this.webpackJsonpimdb_app_reactjs=this.webpackJsonpimdb_app_reactjs||[]).push([[0],{115:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),c=a.n(n),i=a(21),r=a.n(i),o=a(19),l=a(8),d=(a(93),a(9)),j=a(10),h=a(12),m=a(11),u=(a(94),a(95),a(63)),b=(a(96),a(73)),p=a.n(b),O=a(130),v=a(77),x=a.n(v),g=a(78),f=a.n(g),y=a(79),k=a.n(y),C=a(80),N=a.n(C),w=function(){var e=window.screen.width;return e<=575?"mobile":e>575&&e<=1024?"tablet":e>1024?"desktop":void 0},I=a(152),S=a(153),T=a(154),P=a(113),D=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.categoryName;return Object(s.jsx)(I.a,{children:Object(s.jsx)(S.a,{children:Object(s.jsxs)(T.a,{xs:12,children:[Object(s.jsx)("div",{className:"category-name",children:a}),Object(s.jsx)("hr",{}),Object(s.jsx)(p.a,{navButtonsAlwaysVisible:!0,children:t.map((function(e,t){return Object(s.jsx)(M,{movie:e},t)}))})]})})})}}]),a}(c.a.Component),M=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=w(),t=this.props.movie,a={backgroundImage:"url(".concat(t.Poster,")"),backgroundRepeat:"no-repeat",backgroundSize:"auto"},n=Object(u.a)(Object(u.a)({},a),{},{backgroundPosition:"center",backgroundSize:"cover",padding:"0",height:"450px"}),c=function(e){window.location.href="/movie/".concat(t._id)};return Object(s.jsx)(O.a,{children:"mobile"===e?Object(s.jsx)(I.a,{onClick:c,children:Object(s.jsx)(S.a,{children:Object(s.jsx)(T.a,{xs:12,style:n,children:Object(s.jsxs)("h2",{style:{padding:"5px 10px",backgroundColor:"black",opacity:"0.8",color:"white",position:"absolute",bottom:"0",width:"100%",fontSize:"1.8em"},children:[t.Title," (",t.Year,")"]})})})}):Object(s.jsx)(I.a,{onClick:c,className:"movie-container",children:Object(s.jsxs)(S.a,{children:[Object(s.jsx)(T.a,{md:6,lg:4,children:Object(s.jsx)(P.a,{src:t.Poster,rounded:!0})}),Object(s.jsxs)(T.a,{md:6,lg:8,children:[Object(s.jsxs)("h2",{children:[t.Title," (",t.Year,")"]}),Object(s.jsxs)(I.a,{className:"movie-details-container",children:[Object(s.jsxs)(S.a,{children:[Object(s.jsxs)(T.a,{md:12,className:"movie-icons-container",children:[Object(s.jsx)(x.a,{}),Object(s.jsxs)("span",{className:"movie-detail",children:[t.imdbRating,"/10"]})]}),Object(s.jsxs)(T.a,{md:12,className:"movie-icons-container",children:[Object(s.jsx)(f.a,{}),Object(s.jsx)("span",{className:"movie-detail",children:t.Runtime})]})]}),Object(s.jsxs)(S.a,{children:[Object(s.jsxs)(T.a,{md:12,className:"movie-icons-container",children:[Object(s.jsx)(k.a,{}),Object(s.jsx)("span",{className:"movie-detail",children:t.Language})]}),Object(s.jsxs)(T.a,{md:12,className:"movie-icons-container",children:[Object(s.jsx)(N.a,{}),Object(s.jsx)("span",{className:"movie-detail",children:t.Country})]})]})]})]})]})})})}}]),a}(c.a.Component),z=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={movies:[]},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.category;fetch("".concat("https://movies-app-siit.herokuapp.com","/movies?Genre=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results})})).catch((function(e){throw new Error(e)}))}},{key:"render",value:function(){var e=this.props.category;return Object(s.jsx)("div",{className:"carousel",children:Object(s.jsx)(D,{movies:this.state.movies,categoryName:e})})}}]),a}(c.a.Component),E=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={categories:["Action","Comedy","Drama","Crime","Mystery","Thriller","Horror","Animation","Sci-Fi"]},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(I.a,{fluid:!0,children:[Object(s.jsx)("p",{className:"motto",children:"... bringing Joy through Reel"}),this.state.categories.map((function(e,t){return Object(s.jsx)(z,{category:e},t)}))]})}}]),a}(c.a.Component),B=a(34),R=a.n(B),V=a(50),L=a(24),A=(a(71),function(e){return Object(s.jsx)(s.Fragment,{children:e.movies.map((function(e,t){return Object(s.jsxs)("div",{className:"oneMovieContainer",onClick:function(){window.location.href="/movie/".concat(e._id)},children:[Object(s.jsx)("p",{className:"movieTitle",children:e.Title}),Object(s.jsx)("img",{src:e.Poster,alt:"Movie"})]},t)}))})}),U=function(e){return Object(s.jsx)("div",{className:"movieHeading",children:Object(s.jsx)("h1",{children:e.heading})})},Y=function(e){return Object(s.jsxs)("div",{className:"searchBox",children:[Object(s.jsx)("p",{children:"Search by Movie Title or..."}),Object(s.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setTitleValue(t.target.value)},placeholder:"Type to Search..."}),Object(s.jsx)("p",{children:"...Try adding some more filter options!"}),Object(s.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setTypeValue(t.target.value)},placeholder:"Movie Type"}),Object(s.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setVotesValue(t.target.value)},placeholder:"IMDB Votes"}),Object(s.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setRatingValue(t.target.value)},placeholder:"IMDB Rating"}),Object(s.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setCountryValue(t.target.value)},placeholder:"Country"}),Object(s.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setLanguageValue(t.target.value)},placeholder:"Language"}),Object(s.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setGenreValue(t.target.value)},placeholder:"Genre"}),Object(s.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setRuntimeValue(t.target.value)},placeholder:"Runtime"}),Object(s.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setYearValue(t.target.value)},placeholder:"Year"}),Object(s.jsx)("button",{className:"submit form-control searchButton",onClick:e.clickHandler,children:"Search"})]})},_=(a(115),function(){var e=Object(n.useState)([]),t=Object(L.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),r=Object(L.a)(i,2),o=r[0],d=r[1],j=Object(n.useState)(""),h=Object(L.a)(j,2),m=h[0],u=h[1],b=Object(n.useState)(""),p=Object(L.a)(b,2),O=p[0],v=p[1],x=Object(n.useState)(""),g=Object(L.a)(x,2),f=g[0],y=g[1],k=Object(n.useState)(""),C=Object(L.a)(k,2),N=C[0],w=C[1],I=Object(n.useState)(""),S=Object(L.a)(I,2),T=S[0],P=S[1],D=Object(n.useState)(""),M=Object(L.a)(D,2),z=M[0],E=M[1],B=Object(n.useState)(""),_=Object(L.a)(B,2),F=_[0],G=_[1],H=Object(n.useState)(""),J=Object(L.a)(H,2),X=J[0],K=J[1],q=Object(n.useState)(1),Q=Object(L.a)(q,2),W=Q[0],Z=(Q[1],[o,m,O,f,N,T,z,F,X]),$=["Title","Type","imdbVotes","imdbRating","Country","Language","Genre","Runtime","Year"],ee=Object(l.f)().title,te="https://movies-app-siit.herokuapp.com/movies?Title=".concat(ee);var ae=function(){var e=Object(V.a)(R.a.mark((function e(t){var a,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,c(s.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){ae(te)}),[W,te]);return Object(s.jsxs)("div",{className:"mainSearchContainer",children:[Object(s.jsxs)("div",{className:"mainContainerSearch",children:[Object(s.jsx)(U,{heading:"Use the search box to find your favourite movies!"}),Object(s.jsx)(Y,{clickHandler:function(){var e=function(){for(var e="https://movies-app-siit.herokuapp.com/movies?",t=0;t<9;t++)""!==Z[t]&&(e+="".concat($[t],"=").concat(Z[t],"&"));return e}();ae(e),console.log("Search From Click!")},setTitleValue:d,setTypeValue:u,setVotesValue:v,setRatingValue:y,setCountryValue:w,setLanguageValue:P,setGenreValue:E,setRuntimeValue:G,setYearValue:K})]}),Object(s.jsx)("div",{className:"moviesContainer",children:Object(s.jsx)(A,{movies:a})})]})}),F=a(18),G=a.p+"static/media/UserIcon.f55c853c.svg",H=a.p+"static/media/PasswordIcon.383159d7.svg",J=a.p+"static/media/Btn.2befdc3e.svg",X=a.p+"static/media/BtnBlank.5345e1d5.svg",K=a.p+"static/media/BtnReg.2df73899.svg",q=a.p+"static/media/BtnBlankReg.fa6c8f79.svg",Q=(a(118),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={username:"",password:"",accessToken:""},s.handleChangeUsername=s.handleChangeUsername.bind(Object(F.a)(s)),s.handleChangePassword=s.handleChangePassword.bind(Object(F.a)(s)),s}return Object(j.a)(a,[{key:"handleChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleClick",value:function(e){var t=this,a={method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({username:this.state.username,password:this.state.password})},s=this.state,n=s.username,c=s.password;n&&c?fetch("https://movies-app-siit.herokuapp.com/auth/login",a).then((function(e){return 200===e.status?(alert("Logged In! You'll be redirected on Home"),e.json()):alert("wrong pass")})).then((function(e){t.setState({accessToken:e.accestToken}),localStorage.setItem("accessToken",e.accessToken),!0===e.authenticated&&t.props.history.push("/")})).catch((function(e){return console.log(e)})):alert("Cannot be Empty")}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"form",children:Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"form-input",children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"userData",children:[Object(s.jsx)("span",{children:Object(s.jsx)("img",{src:G})}),Object(s.jsx)("input",{autocomplete:"off",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleChangeUsername})]}),Object(s.jsxs)("div",{className:"userData",children:[Object(s.jsx)("span",{children:Object(s.jsx)("img",{src:H})}),Object(s.jsx)("input",{autocomplete:"off",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChangePassword}),Object(s.jsx)("p",{style:this.state.username&&this.state.password?{display:"none"}:{display:"block"},children:" Must fill all the form!"})]})]})})})}),Object(s.jsx)("div",{className:"form-footer",children:Object(s.jsx)("img",{src:J,onClick:function(t){return e.handleClick(t)}})})]})}}]),a}(c.a.Component)),W=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={username:"",password:"",confirmPassword:"",accessToken:""},s.handleChangeUsername=s.handleChangeUsername.bind(Object(F.a)(s)),s.handleChangePassword=s.handleChangePassword.bind(Object(F.a)(s)),s.handleChangeConfirmPassword=s.handleChangeConfirmPassword.bind(Object(F.a)(s)),s}return Object(j.a)(a,[{key:"handleChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleChangeConfirmPassword",value:function(e){this.setState({confirmPassword:e.target.value})}},{key:"handleClick",value:function(e){var t=this,a={method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({username:this.state.username,password:this.state.password})},s=(this.props.history,this.state);s.password!==s.confirmPassword?alert("Password Doesn't Match!"):fetch("https://movies-app-siit.herokuapp.com/auth/register",a).then((function(e){return 200===e.status?(alert("Registered, you'll be redirected on Home"),e.json()):alert("Username already existing")})).then((function(e){t.setState({accessToken:e.accestToken}),localStorage.setItem("accessToken",e.accessToken),!0===e.authenticated&&t.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"form",children:Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"form-input",children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"userData",children:[Object(s.jsx)("span",{children:Object(s.jsx)("img",{src:G})}),Object(s.jsx)("input",{autocomplete:"off",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleChangeUsername})]}),Object(s.jsxs)("div",{className:"userData",children:[Object(s.jsx)("span",{children:Object(s.jsx)("img",{src:H})}),Object(s.jsx)("input",{autocomplete:"off",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChangePassword})]}),Object(s.jsxs)("div",{className:"userData",children:[Object(s.jsx)("span",{children:Object(s.jsx)("img",{src:H})}),Object(s.jsx)("input",{autocomplete:"off",type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:this.state.confirmPassword,onChange:this.handleChangeConfirmPassword}),Object(s.jsx)("p",{style:this.state.password!==this.state.confirmPassword?{display:"block"}:{display:"none"},children:" Password Doesn't Match!"})]})]})})})}),Object(s.jsx)("div",{className:"form-footer",children:Object(s.jsx)("img",{src:K,onClick:function(t){return e.handleClick(t)}})})]})}}]),a}(n.Component),Z=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={active:!1},s.handleClick=s.handleClick.bind(Object(F.a)(s)),s}return Object(j.a)(a,[{key:"handleClick",value:function(e){this.setState({active:!this.state.active})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"form-container",children:[Object(s.jsx)("div",{classsName:"form-nav",children:this.state.active?Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{type:"button",src:J,onClick:this.handleClick}),Object(s.jsx)("img",{type:"button",src:X,onClick:this.handleClick})]}):Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{type:"button",src:q,onClick:this.handleClick}),Object(s.jsx)("img",{type:"button",src:K,onClick:this.handleClick})]})}),Object(s.jsx)("div",{className:"form-render",children:this.state.active?Object(s.jsx)(ee,{}):Object(s.jsx)($,{})})]})}}]),a}(c.a.Component),$=Object(l.g)(Q),ee=Object(l.g)(W);a(119);function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},c=Object.keys(e);for(s=0;s<c.length;s++)a=c[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)a=c[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var se=n.createElement("g",{transform:"translate(0.000000,720.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},n.createElement("path",{d:"M5185 5614 c-300 -44 -523 -143 -747 -331 -232 -196 -385 -468 -428 -761 l-12 -82 -373 0 -373 0 -40 68 c-146 244 -397 427 -702 509 -117 31 -367 43 -501 24 -453 -67 -834 -396 -945 -817 -23 -86 -27 -120 -27 -254 -1 -174 16 -267 75 -408 117 -282 410 -541 714 -631 50 -15 226 -51 248 -51 0 0 0 -236 -2 -525 l-2 -525 140 0 140 0 0 -190 0 -190 1080 0 1080 0 0 190 0 190 225 0 225 0 0 120 0 120 55 0 55 0 0 -75 0 -75 215 0 215 0 0 393 c0 215 -3 443 -7 505 l-6 112 -209 0 -208 0 0 -90 0 -90 -55 0 -55 0 0 180 c0 99 4 180 8 180 5 0 51 -9 103 -20 198 -43 472 -37 675 15 459 116 843 485 961 921 25 93 27 112 27 314 0 202 -2 221 -27 314 -125 462 -540 838 -1038 942 -72 15 -417 28 -484 18z m620 -308 c189 -76 422 -267 493 -402 18 -34 32 -66 32 -71 0 -12 -377 -195 -447 -218 -48 -15 -57 -15 -115 0 -112 28 -200 93 -242 177 -25 49 -26 60 -26 207 0 86 3 200 7 253 l6 97 41 3 c75 6 166 -11 251 -46z m-615 35 c25 -7 25 -10 47 -206 28 -259 28 -288 -1 -350 -28 -60 -119 -149 -181 -176 -90 -40 -141 -31 -426 72 -140 50 -264 97 -276 103 l-22 11 24 53 c101 217 377 434 620 487 65 14 174 17 215 6z m-2690 -546 c145 -18 394 -189 473 -324 l18 -31 -340 0 -341 0 0 113 c0 61 3 142 6 179 l7 67 41 3 c42 4 58 3 136 -7z m-406 -57 c3 -35 8 -116 11 -180 5 -102 4 -118 -10 -118 -12 0 -15 -12 -15 -56 0 -47 -5 -63 -31 -99 -56 -79 -151 -123 -236 -111 -42 5 -430 149 -446 165 -12 12 34 108 86 178 46 62 136 143 211 191 97 61 204 88 353 91 l71 1 6 -62z m3184 -223 c25 -21 34 -24 57 -15 14 5 45 10 68 10 125 -1 205 -113 162 -225 -26 -68 -72 -99 -156 -103 -110 -7 -169 38 -184 139 -5 31 -2 57 8 81 15 35 14 37 -14 64 l-29 28 22 23 c27 29 30 29 66 -2z m1202 -27 c66 -151 16 -477 -106 -696 -40 -71 -133 -172 -158 -172 -22 0 -304 266 -337 319 -39 60 -62 134 -63 200 -1 48 4 63 32 104 40 57 157 156 227 193 37 19 281 86 376 103 4 0 17 -23 29 -51z m-1956 -56 c-141 -1 -259 0 -262 2 -2 3 -2 20 2 38 l6 34 256 -36 256 -35 -258 -3z m530 -255 c-3 -10 -25 -59 -50 -110 l-44 -92 0 121 0 121 50 -11 c42 -8 49 -13 44 -29z m-3316 -174 c62 -46 92 -127 92 -246 -1 -102 -23 -143 -148 -287 -63 -72 -119 -130 -125 -130 -6 0 -39 29 -73 64 -72 74 -153 226 -180 341 -17 69 -25 299 -11 321 4 7 80 0 212 -17 161 -21 213 -31 233 -46z m3787 -63 c26 -13 69 -46 96 -74 66 -68 311 -447 298 -462 -18 -22 -107 -64 -184 -86 -73 -21 -100 -23 -295 -23 -229 0 -313 13 -432 64 l-48 20 0 90 0 91 82 132 c45 73 93 148 106 166 75 100 258 140 377 82z m-3449 -846 c-12 -30 -242 44 -269 86 -12 20 178 335 231 381 l37 33 3 -244 c1 -135 0 -250 -2 -256z"}),n.createElement("path",{d:"M6053 5103 c16 -17 28 -35 27 -40 -1 -4 13 -19 31 -33 18 -14 29 -18 24 -10 -5 9 -4 12 1 7 5 -5 9 -16 9 -24 0 -9 6 -18 14 -21 9 -3 11 0 6 8 -5 9 -4 11 4 6 6 -4 9 -11 6 -16 -3 -5 10 -30 30 -55 33 -43 39 -58 36 -78 -2 -12 29 -21 40 -10 22 22 -106 182 -211 262 l-45 35 28 -31z m68 -60 c13 -16 12 -17 -3 -4 -10 7 -18 15 -18 17 0 8 8 3 21 -13z"}),n.createElement("path",{d:"M5171 5274 c2 -79 46 -455 50 -427 6 36 -34 440 -45 450 -3 3 -6 -7 -5 -23z"}),n.createElement("path",{d:"M4560 5061 c-36 -32 -80 -80 -99 -107 l-33 -49 43 50 c23 28 70 76 103 107 79 75 70 74 -14 -1z"}),n.createElement("path",{d:"M4410 4880 c-6 -11 -8 -20 -6 -20 3 0 10 9 16 20 6 11 8 20 6 20 -3 0 -10 -9 -16 -20z"}),n.createElement("path",{d:"M2350 4615 c0 -184 18 -194 22 -12 3 138 2 157 -13 157 -5 0 -9 -65 -9 -145z"}),n.createElement("path",{d:"M1545 4558 c-47 -47 -94 -105 -109 -135 -31 -62 -32 -73 -8 -73 12 0 28 21 49 63 17 34 54 88 83 120 28 31 48 57 44 57 -4 0 3 11 16 25 13 14 20 25 15 25 -4 0 -45 -37 -90 -82z"}),n.createElement("path",{d:"M5254 4471 c21 -23 26 -26 26 -11 0 5 -10 15 -22 21 -23 12 -23 12 -4 -10z"}),n.createElement("path",{d:"M5500 4417 c18 -31 22 -49 18 -98 -4 -57 -4 -59 10 -33 21 41 10 110 -23 143 l-27 26 22 -38z"}),n.createElement("path",{d:"M6416 4482 c-3 -5 2 -31 10 -58 24 -75 13 -271 -20 -394 -34 -120 -101 -260 -158 -325 -30 -35 -36 -45 -18 -34 85 54 188 265 225 462 18 93 19 255 2 311 -12 39 -30 56 -41 38z"}),n.createElement("path",{d:"M1323 3914 c6 -144 23 -210 82 -331 40 -82 140 -212 152 -199 3 2 -14 28 -37 57 -100 126 -150 270 -159 454 -5 117 -8 130 -25 133 -18 4 -19 -2 -13 -114z"}),n.createElement("path",{d:"M5577 3842 c56 -55 286 -409 279 -428 -3 -8 0 -11 10 -7 7 3 14 7 14 9 0 19 -260 400 -295 433 -61 56 -67 52 -8 -7z"}),n.createElement("path",{d:"M1951 3375 c-47 -77 -91 -150 -99 -162 -12 -20 -11 -23 17 -37 40 -21 48 -20 22 2 l-22 17 44 70 c24 39 46 77 50 85 4 8 16 29 27 45 11 17 23 37 27 45 3 8 11 18 16 21 5 4 7 17 5 30 -2 19 -21 -7 -87 -116z"}),n.createElement("path",{d:"M5024 2947 c-3 -8 -4 -49 -2 -93 l3 -79 5 93 c5 92 4 104 -6 79z"}),n.createElement("path",{d:"M5023 1980 c0 -36 2 -50 4 -32 2 17 2 47 0 65 -2 17 -4 3 -4 -33z"}));function ne(e,t){var a=e.title,s=e.titleId,c=ae(e,["title","titleId"]);return n.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 720.000000 720.000000",preserveAspectRatio:"xMidYMid meet",ref:t,"aria-labelledby":s},c),a?n.createElement("title",{id:s},a):null,se)}var ce=n.forwardRef(ne),ie=(a.p,function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleTyping=function(t){var a=e.props.history;if("Enter"===t.key){var s=t.target.value;t.target.value="",a.push("/search/".concat(s))}},e.handleLogout=function(){var t=e.props.history;localStorage.removeItem("accessToken"),t.push("/")},e}return Object(j.a)(a,[{key:"render",value:function(){var e=localStorage.getItem("accessToken"),t=w();return Object(s.jsx)(I.a,{className:"header",fluid:!0,children:Object(s.jsxs)(S.a,{style:"mobile"!==t?{width:"100%"}:{width:"auto"},children:[Object(s.jsx)(T.a,{xs:4,md:4,lg:6,children:Object(s.jsxs)(S.a,{children:[Object(s.jsx)(T.a,{xs:6,lg:2,className:"logo-container",children:Object(s.jsx)(ce,{className:"app-logo"})}),Object(s.jsx)(T.a,{xs:6,lg:10,className:"appname-container",children:Object(s.jsx)(o.c,{to:"/",children:Object(s.jsx)("p",{className:"app-name",children:"MyIMDB"})})})]})}),e?Object(s.jsx)(T.a,{xs:8,md:3,lg:2,className:"links-container",children:Object(s.jsx)(o.c,{to:"/addmovie",className:"add-movie",children:"Add Movie"})}):Object(s.jsx)(T.a,{xs:8,md:3,lg:2,className:"links-container",children:Object(s.jsx)(o.c,{to:"/login-register",className:"login-register",children:"Login/Register"})}),Object(s.jsx)(T.a,{xs:e?9:10,md:e?4:5,lg:e?3:4,className:"search-container",children:Object(s.jsx)("input",{onKeyDown:this.handleTyping,placeholder:"Search",type:"text"})}),e?Object(s.jsx)(T.a,{xs:2,md:1,lg:1,className:"logout-container",children:Object(s.jsx)("p",{onClick:this.handleLogout,className:"logout",children:"Logout"})}):null]})})}}]),a}(c.a.Component)),re=Object(l.g)(ie);a(120);a.p;var oe=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).backButton=function(){return s.props.history.goBack()},s.state={loadind:!0,movie:[]},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(V.a)(R.a.mark((function e(){var t,a,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.pathname.replace("/movie/",""),"https://movies-app-siit.herokuapp.com/movies/",e.next=4,fetch("https://movies-app-siit.herokuapp.com/movies/"+t);case 4:return a=e.sent,e.next=7,a.json();case 7:s=e.sent,this.setState({movie:s,loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteMovie",value:function(){var e=Object(V.a)(R.a.mark((function e(){var t,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.pathname.replace("/movie/",""),"https://movies-app-siit.herokuapp.com/movies/",a=localStorage.getItem("accessToken"),e.next=5,fetch("https://movies-app-siit.herokuapp.com/movies/"+t,{method:"DELETE",headers:{"X-Auth-Token":a,"Content-Type":"application/json"}});case 5:e.sent,window.location.href="/";case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=localStorage.getItem("accessToken");return Object(s.jsx)("div",{children:this.state.loading||!this.state.movie?Object(s.jsx)("div",{className:"loading",children:"loading..."}):Object(s.jsxs)("tr",{className:"movie-details",style:{marginTop:"3%",marginBottom:"3%",marginLeft:"0%",width:"95vw",height:"90%",background:"rgba(230, 230, 240, 0.10)",borderRadius:"20px",zIndex:"-1px"},children:[Object(s.jsx)("th",{children:Object(s.jsx)("img",{className:"posters",src:this.state.movie.Poster})}),Object(s.jsxs)("th",{children:[Object(s.jsx)("h2",{className:"movie-title",children:this.state.movie.Title}),Object(s.jsx)("h2",{className:"movie-des",children:this.state.movie.Year}),Object(s.jsxs)("div",{children:[Object(s.jsx)(o.c,{to:{pathname:"/editmovie",movieDetails:{movieId:this.state.movieId,title:this.state.movie.Title,year:this.state.movie.Year,imdbId:this.state.movie.imdbID,type:this.state.movie.Genre,posterUrl:this.state.movie.Poster}},children:Object(s.jsx)("button",{className:"button",children:"Edit Movie"})})," ",e?Object(s.jsx)("button",{className:"button-del",onClick:this.deleteMovie,children:"Delete Movie"}):null]}),Object(s.jsxs)("div",{className:"imdbRating",children:[" ","IMDB Rating:",Object(s.jsxs)("span",{className:"rating",children:[" ",this.state.movie.imdbRating]})]}),Object(s.jsxs)("ul",{className:"movie-description",children:[Object(s.jsxs)("li",{children:[" ","Year :",Object(s.jsxs)("span",{className:"movie-des",children:[" ",this.state.movie.Year]})]}),Object(s.jsxs)("li",{children:["Plot :",Object(s.jsxs)("span",{className:"movie-des-plot",children:[" ",this.state.movie.Plot]})]}),Object(s.jsxs)("li",{children:["Genre :",Object(s.jsxs)("span",{className:"movie-des",children:[" ",this.state.movie.Genre]})]}),Object(s.jsxs)("li",{children:["Country :",Object(s.jsxs)("span",{className:"movie-des",children:[" ",this.state.movie.Country]})]}),Object(s.jsxs)("li",{children:["Type :",Object(s.jsxs)("span",{className:"movie-des",children:[" ",this.state.movie.Type]})]}),Object(s.jsxs)("li",{children:["Runtime :",Object(s.jsxs)("span",{className:"movie-des",children:[" ",this.state.movie.Runtime]})]}),Object(s.jsxs)("li",{children:["Actors:",Object(s.jsxs)("span",{className:"movie-des",children:[" ",this.state.movie.Actors]})]}),Object(s.jsxs)("li",{children:["Awards:",Object(s.jsxs)("span",{className:"movie-des",children:[" ",this.state.movie.Awards]})]}),Object(s.jsxs)("li",{children:["Production:",Object(s.jsxs)("span",{className:"movie-des",children:[" ",this.state.movie.Production]})]}),Object(s.jsxs)("li",{children:["ImdbID:",Object(s.jsxs)("span",{className:"movie-des",children:[" ",this.state.movie.imdbID]})]})]})]}),Object(s.jsx)("button",{className:"exit",onClick:this.backButton,children:"X"})]})})}}]),a}(c.a.Component),le=Object(l.g)(oe),de=a(42),je=a(81),he=(a(121),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={items:[],title:"",year:"",imdbID:"",type:"",poster:""},s.addItem=s.addItem.bind(Object(F.a)(s)),s.handleInput=s.handleInput.bind(Object(F.a)(s)),s.handleClick=s.handleClick.bind(Object(F.a)(s)),s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("accessToken");console.log(e),e||(window.location.href="/")}},{key:"handleClick",value:function(e){console.log("values",this.state.Title,this.state.Year,this.state.imdbID,this.state.Type,this.state.Poster),fetch("https://movies-app-siit.herokuapp.com/movies",{method:"POST",body:JSON.stringify({title:this.state.Title,year:this.state.Year,imdbID:this.state.imdbID,type:this.state.Type,poster:this.state.Poster})}),console.log(e)}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t){var a=[].concat(Object(je.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:""}})}}},{key:"handleInput",value:function(e){this.setState(Object(de.a)({},e.target.name,e.target.value)),console.log(e)}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"addmovie",children:[Object(s.jsxs)("form",{className:"add-form-movie",id:"add-form",children:[Object(s.jsx)("input",{className:"title",name:"title",type:"text",placeholder:"Enter Title",value:this.state.title,onChange:this.handleInput}),Object(s.jsx)("input",{className:"title",name:"year",type:"text",placeholder:"Enter Year",value:this.state.year,onChange:this.handleInput}),Object(s.jsx)("input",{className:"title",name:"imdbID",type:"text",placeholder:"Enter Imdb ID",value:this.state.imdbID,onChange:this.handleInput}),Object(s.jsx)("input",{className:"title",name:"type",type:"text",placeholder:"Enter Type",value:this.state.type,onChange:this.handleInput}),Object(s.jsx)("input",{className:"title",name:"poster",type:"text",placeholder:"Enter Poster URL",value:this.state.poster,onChange:this.handleInput}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"add-button",type:"submit",onClick:this.handleClick,children:"Add"})})]}),Object(s.jsx)("p",{children:this.state.items.text})]})}}]),a}(c.a.Component)),me=(a(122),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={movieId:0,items:[],title:"",year:"",imdbID:"",type:"",poster:"",movie:[]},s.handleInput=s.handleInput.bind(Object(F.a)(s)),s.handleClick=s.handleClick.bind(Object(F.a)(s)),s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.movieDetails,t=e.movieId,a=e.title,s=e.year,n=e.imdbID,c=e.type,i=e.posterUrl;this.setState({movieId:t,title:a,year:s,imdbID:n,type:c,poster:i}),localStorage.getItem("accessToken")||(window.location.href="/")}},{key:"handleClick",value:function(e){e.preventDefault();var t="https://movies-app-siit.herokuapp.com/movies/".concat(this.state.movieId);console.log("values",this.state.title,this.state.year,this.state.imdbID,this.state.type,this.state.poster),fetch(t,{headers:{"X-Auth-Token":localStorage.getItem("accessToken"),"Content-Type":"application/json"},method:"PUT",body:JSON.stringify({title:this.state.title,year:this.state.year,imdbID:this.state.imdbID,type:this.state.type,poster:this.state.poster})}).then((function(e){alert("Movie has been edited"),setTimeout((function(){window.location.href="/"}),1e3)}))}},{key:"editMovie",value:function(){this.setState({items:""})}},{key:"handleInput",value:function(e){this.setState(Object(de.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"addmovie",children:[Object(s.jsxs)("form",{className:"add-form-movie",id:"add-form",children:[Object(s.jsx)("input",{className:"title",name:"title",type:"text",placeholder:"Enter Title",value:this.state.title,onChange:this.handleInput}),Object(s.jsx)("input",{className:"title",name:"year",type:"text",placeholder:"Enter Year",value:this.state.year,onChange:this.handleInput}),Object(s.jsx)("input",{className:"title",name:"imdbID",type:"text",placeholder:"Enter Imdb ID",value:this.state.imdbID,onChange:this.handleInput}),Object(s.jsx)("input",{className:"title",name:"type",type:"text",placeholder:"Enter Type",value:this.state.type,onChange:this.handleInput}),Object(s.jsx)("input",{className:"title",name:"poster",type:"text",placeholder:"Enter Poster URL",value:this.state.poster,onChange:this.handleInput}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"add-button",onClick:this.handleClick,children:"Edit Movie"})})]}),Object(s.jsx)("p",{children:this.state.items.text})]})}}]),a}(c.a.Component)),ue=Object(l.g)(me),be=a(155),pe=a(69),Oe=a(156),ve=a(157),xe=a(159),ge=a(158),fe=a(160),ye=a(161),ke=a.p+"static/media/iconmonstr-linkedin-3.27a3f479.svg",Ce=a.p+"static/media/iconmonstr-github-1.04be58c1.svg",Ne=a.p+"static/media/Stefan.38153125.jpg",we=a.p+"static/media/Ionut-Liviu.70f98264.jpg",Ie=a.p+"static/media/Andreea.3d33eda0.jpg",Se=a.p+"static/media/StefanC.2ecc95fb.jpg",Te=a.p+"static/media/Dan.74c4c4d1.jpg",Pe=Object(pe.a)({container:{background:"linear-gradient(to top left, #808080 -220%, #000000 79%)"},footerTitle:{color:"white",textAlign:"center",padding:"25px 0",fontSize:"26px"},footerContainer:{justifyContent:"center",paddingBottom:"20px"},root:{borderRadius:"50%",padding:"0 auto",margin:"10px",display:"flex",justifyContent:"center",flexDirection:"column",backgroundColor:"rgba(255, 255, 255, 0.600)"},image:{width:"100px",height:"100px",borderRadius:"50%",margin:"auto",marginTop:"10px",display:"flex",justifyContent:"center",alignItems:"center"},name:{padding:"0",textAlign:"center"},description:{margin:"auto",textAlign:"center",padding:"5px "},cardContent:{padding:"0"},buttons:{display:"flex",justifyContent:"center",paddingBottom:"20px",zIndex:"-1"}});function De(){var e=Pe();return Object(s.jsxs)("div",{className:e.container,children:[Object(s.jsx)(I.a,{className:e.footerTitle,fluid:!0,children:"Our Team"}),Object(s.jsxs)(be.a,{container:!0,className:e.footerContainer,children:[Object(s.jsx)(be.a,{item:!0,xs:12,sm:4,lg:2,children:Object(s.jsx)(Oe.a,{className:e.root,children:Object(s.jsxs)(ve.a,{children:[Object(s.jsx)(ge.a,{className:e.image,image:Ne,title:"Stefan-Tudor Iloaie"}),Object(s.jsxs)(xe.a,{className:e.cardContent,children:[Object(s.jsx)(fe.a,{className:e.name,gutterBottom:!0,variant:"subtitle1",children:"Stefan-Tudor Iloaie"}),Object(s.jsx)(fe.a,{className:e.description,variant:"body2",color:"textSecondary",children:"Add Movie/Edit Movie"})]}),Object(s.jsxs)("div",{className:e.buttons,children:[Object(s.jsx)(ye.a,{size:"small",href:"https://www.linkedin.com/in/stefan-tudor-iloaie-8119859b/",target:"_blank",children:Object(s.jsx)("img",{src:ke})}),Object(s.jsx)(ye.a,{size:"small",href:"https://github.com/tudistef",target:"_blank",children:Object(s.jsx)("img",{src:Ce})})]})]})})}),Object(s.jsx)(be.a,{item:!0,xs:12,sm:4,lg:2,children:Object(s.jsx)(Oe.a,{className:e.root,children:Object(s.jsxs)(ve.a,{children:[Object(s.jsx)(ge.a,{className:e.image,image:we,title:"Ionut-Liviu Cojocaru"}),Object(s.jsxs)(xe.a,{className:e.cardContent,children:[Object(s.jsx)(fe.a,{className:e.name,gutterBottom:!0,variant:"subtitle1",children:"Ionut-Liviu Cojocaru"}),Object(s.jsx)(fe.a,{className:e.description,variant:"body2",color:"textSecondary",children:"Login/Register Page & Footer"})]}),Object(s.jsxs)("div",{className:e.buttons,children:[Object(s.jsx)(ye.a,{size:"small",href:"https://www.linkedin.com/in/ionutliviucojocaru/",target:"_blank",children:Object(s.jsx)("img",{src:ke})}),Object(s.jsx)(ye.a,{size:"small",href:"https://github.com/CojocaruionutLiviu",target:"_blank",children:Object(s.jsx)("img",{src:Ce})})]})]})})}),Object(s.jsx)(be.a,{item:!0,xs:12,sm:4,lg:2,children:Object(s.jsx)(Oe.a,{className:e.root,children:Object(s.jsxs)(ve.a,{children:[Object(s.jsx)(ge.a,{className:e.image,image:Ie,title:"Andreea-Stefana Bonda"}),Object(s.jsxs)(xe.a,{className:e.cardContent,children:[Object(s.jsx)(fe.a,{className:e.name,gutterBottom:!0,variant:"subtitle1",children:"Andreea-Stefana Bonda"}),Object(s.jsx)(fe.a,{className:e.description,variant:"body2",color:"textSecondary",children:"Home Page/Header & Footer"})]}),Object(s.jsxs)("div",{className:e.buttons,children:[Object(s.jsx)(ye.a,{size:"small",href:"https://www.linkedin.com/in/andreea-stefana-bonda-9727011b4/",target:"_blank",children:Object(s.jsx)("img",{src:ke})}),Object(s.jsx)(ye.a,{size:"small",href:"https://github.com/bondastefana",target:"_blank",children:Object(s.jsx)("img",{src:Ce})})]})]})})}),Object(s.jsx)(be.a,{item:!0,xs:12,sm:4,lg:2,children:Object(s.jsx)(Oe.a,{className:e.root,children:Object(s.jsxs)(ve.a,{children:[Object(s.jsx)(ge.a,{className:e.image,image:Se,title:"Stefan Ciobanu"}),Object(s.jsxs)(xe.a,{className:e.cardContent,children:[Object(s.jsx)(fe.a,{className:e.name,gutterBottom:!0,variant:"subtitle1",children:"Stefan Ciobanu"}),Object(s.jsx)(fe.a,{className:e.description,variant:"body2",color:"textSecondary",children:"Movie Details Page"})]}),Object(s.jsxs)("div",{className:e.buttons,children:[Object(s.jsx)(ye.a,{size:"small",href:"",children:Object(s.jsx)("img",{src:ke})}),Object(s.jsx)(ye.a,{size:"small",href:"https://github.com/Stefan-ciobanu",target:"_blank",children:Object(s.jsx)("img",{src:Ce})})]})]})})}),Object(s.jsx)(be.a,{item:!0,xs:12,sm:4,lg:2,children:Object(s.jsx)(Oe.a,{className:e.root,children:Object(s.jsxs)(ve.a,{children:[Object(s.jsx)(ge.a,{className:e.image,image:Te,title:"Bacila Dan"}),Object(s.jsxs)(xe.a,{className:e.cardContent,children:[Object(s.jsx)(fe.a,{className:e.name,gutterBottom:!0,variant:"subtitle1",children:"Dan Bacila"}),Object(s.jsx)(fe.a,{className:e.description,variant:"body2",color:"textSecondary",children:"Search Page"})]}),Object(s.jsxs)("div",{className:e.buttons,children:[Object(s.jsx)(ye.a,{size:"small",href:"",target:"_blank",children:Object(s.jsx)("img",{src:ke})}),Object(s.jsx)(ye.a,{size:"small",href:"https://github.com/baciladan",target:"_blank",children:Object(s.jsx)("img",{src:Ce})})]})]})})})]})]})}var Me=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={authenticated:!1},s}return Object(j.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(o.b,{children:[Object(s.jsx)(re,{}),Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{exact:!0,path:"/",children:Object(s.jsx)(E,{})}),Object(s.jsx)(l.a,{exact:!0,path:"/search/:title",children:Object(s.jsx)(_,{})}),Object(s.jsx)(l.a,{exact:!0,path:"/login-register",component:Z}),Object(s.jsx)(l.a,{exact:!0,path:"/movie/:id",children:Object(s.jsx)(le,{})}),Object(s.jsx)(l.a,{exact:!0,path:"/addmovie",children:Object(s.jsx)(he,{})}),Object(s.jsx)(l.a,{exact:!0,path:"/editmovie",children:Object(s.jsx)(ue,{})})]}),Object(s.jsx)(De,{})]})}}]),a}(c.a.Component),ze=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,163)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(o.a,{children:Object(s.jsx)(l.a,{children:Object(s.jsx)(Me,{})})})}),document.getElementById("root")),ze()},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.b14e51cd.chunk.js.map