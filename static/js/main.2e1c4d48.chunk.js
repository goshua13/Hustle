(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),i=a(3),l=a(4),u=a(6),s=a(5),m=a(7),d=a(14),h=function(e){var t=e.name,a=Object(n.useState)(new Date),r=Object(d.a)(a,2),c=r[0],i=r[1];Object(n.useEffect)(function(){i(new Date)},500);return o.a.createElement("div",{className:"container text-center center text-white"},function(){var e=c.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"});return 0==e[0]&&(e=e.replace(/^0+/,"")),o.a.createElement("h1",{id:"currentTime",style:{fontFamily:"Revalia",fontSize:"100px",fontWeight:"bold"}},e)}(),o.a.createElement("h4",{style:{fontFamily:"Orbitron",fontSize:"50px"}},function(){var e=(new Date).getHours();return 1<=e&&e<12?o.a.createElement("div",null,"Good morning, ",t):13<=e&&e<18?o.a.createElement("div",null," Good afternoon, ",t):o.a.createElement("div",null,"Good evening, ",t)}()))},p=a(18),f=a.n(p),v=a(28),g=a(13),E=a.n(g),b=a(2),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={text:""},a.onChange=function(e){a.setState({text:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.props.todoItem(a.state.text),a.setState({text:""})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.todoItem(localStorage.getItem("todo"))}},{key:"taskInput",value:function(){return o.a.createElement("div",{className:"input-field"},o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("h5",{className:"text-white"},"Enter in your main hustle for today"),o.a.createElement("input",{className:"form-control",type:"text",value:this.state.text,onChange:this.onChange})))}},{key:"removeTodo",value:function(){localStorage.removeItem("todo"),this.props.todoItem("")}},{key:"todo",value:function(){var e=this,t=this.props.addItem||localStorage.getItem("todo");return o.a.createElement("div",{className:"text-white text-center todo-item",onClick:function(){return e.removeTodo()}},o.a.createElement("h3",null,"Today"),o.a.createElement("br",null),o.a.createElement("h2",{className:"display-2 text-capitalize"},t))}},{key:"renderContent",value:function(){return localStorage.getItem("todo")?this.todo():this.taskInput()}},{key:"render",value:function(){return o.a.createElement("div",{className:"container d-flex justify-content-center"},this.renderContent())}}]),t}(n.Component),w=Object(b.b)(function(e){return{addItem:e.item.addItem}},{todoItem:function(e){return localStorage.setItem("todo",e),{type:"STORE_ITEM",payload:e}}})(y),O="",j=0,S="",N=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.props.fetchWeather):alert("browser not supported")}},{key:"componentWillUpdate",value:function(e,t){O=e.weather.weather[0].icon,j=9*((j=e.weather.main.temp)-273.15)/5+32,S=e.weather.name}},{key:"render",value:function(){return o.a.createElement("div",{className:"weather row"},o.a.createElement("img",{className:"col-8",src:"http://openweathermap.org/img/wn/".concat(O||"02d","@2x.png"),style:{width:50,height:50}}),o.a.createElement("h4",{className:"col-4 text-white",style:{width:10,height:10}},Math.round(j),"\xb0"),o.a.createElement("h2",{className:"col-12 text-white text-center"},S))}}]),t}(n.Component),x=Object(b.b)(function(e){return{weather:e.item.weather}},{fetchWeather:function(e){var t=e.coords;return function(){var e=Object(v.a)(f.a.mark(function e(a){var n,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("api.openweathermap.org/data/2.5/weather?","lat=").concat(t.latitude,"&lon=").concat(t.longitude,"&APPID=").concat("54670d34f8d9089536b383f9a5a7769d"),e.next=3,E.a.get(n);case 3:return o=e.sent,e.abrupt("return",a({type:"FETCH_WEATHER",payload:o.data}));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(N),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={name:""},a.onNameSubmit=function(e){e.preventDefault(),a.props.saveName(a.state.name),a.setState({name:""})},a.onNameChange=function(e){a.setState({name:e.target.value})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"showName",value:function(){return o.a.createElement("div",{className:"input-field"},o.a.createElement("form",{onSubmit:this.onNameSubmit},o.a.createElement("input",{className:"form-control",type:"text",value:this.state.name,onChange:this.onNameChange,placeholder:"Enter your name..."})))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.showName())}}]),t}(n.Component),k=Object(b.b)(null,{saveName:function(e){return localStorage.setItem("name",e),{type:"NAME",payload:e}}})(I),C=function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){E.a.get("https://favqs.com/api/qotd").then(function(e){return e}).then(function(e){return r(e.data.quote)})},[]),o.a.createElement("div",{id:"quotes",className:""},o.a.createElement("p",{className:"text-light"},'"',a.body,'"'))},T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={image:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=(new Date).getHours();1<=e&&e<12?this.setState({image:"https://source.unsplash.com/collection/539016/1600x900"}):13<=e&&e<18?this.setState({image:"https://source.unsplash.com/collection/3477914/1600x900"}):this.setState({image:"https://source.unsplash.com/collection/1658777/1600x900"})}},{key:"renderPage",value:function(){var e=localStorage.getItem("name");return e?o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{name:e}),o.a.createElement(w,null)):o.a.createElement(k,null)}},{key:"render",value:function(){return console.log(this.state.image),o.a.createElement("div",{id:"app"},o.a.createElement("img",{src:this.state.image}),o.a.createElement(x,null),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"components"},this.renderPage()),o.a.createElement(C,null)))}}]),t}(n.Component),D=Object(b.b)(function(e){var t=e.item;return{name:t.name,addItem:t.addItem}},null)(T);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(8),M=a(30),A=a(15),W={addItem:"",name:"",weather:[]},F=Object(_.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STORE_ITEM":return Object(A.a)({},e,{addItem:t.payload});case"NAME":return Object(A.a)({},e,{name:t.payload});case"FETCH_WEATHER":return Object.assign(Object(A.a)({},e,{weather:t.payload}));default:return e}}}),H=(a(59),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d)(Object(_.a)(M.a))(_.e)(F));c.a.render(o.a.createElement(b.a,{store:H},o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.2e1c4d48.chunk.js.map