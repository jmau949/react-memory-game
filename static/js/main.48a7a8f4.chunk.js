(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://robohash.org/1?set=set2&size=180x180"},{"id":2,"image":"https://robohash.org/2?set=set2&size=180x180"},{"id":3,"image":"https://robohash.org/3?set=set2&size=180x180"},{"id":4,"image":"https://robohash.org/4?set=set2&size=180x180"},{"id":5,"image":"https://robohash.org/5?set=set2&size=180x180"},{"id":6,"image":"https://robohash.org/6?set=set2&size=180x180"},{"id":7,"image":"https://robohash.org/7?set=set2&size=180x180"},{"id":8,"image":"https://robohash.org/8?set=set2&size=180x180"}]')},,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(3),o=a.n(r),c=(a(14),a(4)),i=a(5),l=a(7),m=a(6),h=a(8),g=(a(15),function(e){return n.a.createElement("div",{className:"card-container"},n.a.createElement("img",{alt:"monster",src:e.monster.image,onClick:function(){e.clicks(e.monster.id)}}))}),u=(a(16),function(e){return n.a.createElement("div",{className:"card-list"},e.monsters.map((function(t){return n.a.createElement(g,{key:t.id,monster:t,clicks:e.click})})))}),d=(a(17),a(1));var p=function(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("a",{className:"navbar-brand"},"Monster Memory Game"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"https://github.com/jmau949"},"Git-hub Link"))))))},v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).handleClick=function(t){var a=e.state.clicked;if(console.log(a),console.log(t),a.includes(t))e.setState({clicked:[],score:0,message:e.state.options[4]});else if(a.push(t),e.setState({score:e.state.score+1,message:e.state.options[Math.floor(3*Math.random())]}),8!==a.length){e.state.score>=e.state.highscore&&e.setState({highscore:a.length});for(var s=d.length-1;s>0;s--){var n=Math.floor(Math.random()*(s+1)),r=d[s];d[s]=d[n],d[n]=r}}else e.setState({score:0,highscore:8,clicked:[],message:e.state.options[3]})},e.state={monsters:d,score:0,highscore:0,clicked:[],message:"",options:["Good one","Nice pick","Safe!","You Win!","Oops, already clicked, try again"]},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p,null),n.a.createElement("h1",null,"Monster Guess"),n.a.createElement("h4",null,"Score: ",this.state.score," Highscore: ",this.state.highscore),n.a.createElement(b,{message:this.state.message}),n.a.createElement(u,{monsters:this.state.monsters,click:this.handleClick}))}}]),t}(s.Component),b=function(e){return"Oops, already clicked, try again"===e.message?n.a.createElement("div",null,e.message&&n.a.createElement("p",{className:"alert alert-danger",role:"alert"},e.message)):n.a.createElement("div",null,e.message&&n.a.createElement("p",{className:"alert alert-success",role:"alert"},e.message))},f=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.48a7a8f4.chunk.js.map