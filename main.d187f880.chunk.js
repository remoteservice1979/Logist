(this["webpackJsonpsignature-pad"]=this["webpackJsonpsignature-pad"]||[]).push([[0],{109:function(e,t,a){e.exports=a(227)},114:function(e,t,a){},115:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},120:function(e,t,a){},121:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(69),c=a.n(o),g=(a(114),a(29)),i=a(30),m=a(32),D=a(31),C=a(33),s=(a(115),a(108)),r=a(102),u=a(103),I=a.n(u);a(120);var A=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useRef)({}),g=function(){return c.current.clear()},i=function(){return o(c.current.getTrimmedCanvas().toDataURL("image/png"))};return l.a.createElement("div",null,l.a.createElement("h1",null,"Lowes Singnature pad Pad Example"),l.a.createElement(r.a,{modal:!0,trigger:l.a.createElement("button",null,"Open Signature Pad"),closeOnDocumentClick:!1},(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,{ref:c,canvasProps:{className:"signatureCanvas"}}),l.a.createElement("button",{onClick:i},"Save"),l.a.createElement("button",{onClick:g},"Clear"),l.a.createElement("button",{onClick:e},"Close"))})),l.a.createElement("br",null),l.a.createElement("br",null),a?l.a.createElement("img",{src:a,alt:"Lowes Signature APP",id:"imageid",style:{display:"block",margin:"0 auto",border:"1px solid black",width:"150px"}}):null)},Q=(a(121),a(15)),M=a.n(Q),d=a(104),w=a.n(d),b=a(45),N=a.n(b),B=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(m.a)(this,Object(D.a)(t).call(this,e))).state={customerDetails:[]},a}return Object(C.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getCustomerDetails(this.props.val)}},{key:"componentDidUpdate",value:function(e){this.props.val!==e.val&&this.getCustomerDetails(this.props.val)}},{key:"getCustomerDetails",value:function(e){var t=this;N.a.get("assets/samplejson/customer"+e+".json").then((function(e){t.setState({customerDetails:e.data})}))}},{key:"render",value:function(){var e=atob("JVBERi0xLjMNCiXi48 / TDQoNCjEgMCBvYmoNCjw8DQovVHlwZSAvQ2F0YWxvZw0KL091dGxpbmVzIDIgMCBSDQovUGFnZXMgMyAwIFINCj4 + DQplbmRvYmoNCg0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4 + DQplbmRvYmoNCg0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDINCi9LaWRzIFsgNCAwIFIgNiAwIFIgXSANCj4 + DQplbmRvYmoNCg0KNCAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFyZW50IDMgMCBSDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDkgMCBSIA0KPj4NCi9Qcm9jU2V0IDggMCBSDQo + Pg0KL01lZGlhQm94IFswIDAgNjEyLjAwMDAgNzkyLjAwMDBdDQovQ29udGVudHMgNSAwIFINCj4 + DQplbmRvYmoNCg0KNSAwIG9iag0KPDwgL0xlbmd0aCAxMDc0ID4 + DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBBIFNpbXBsZSBQREYgRmlsZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIFRoaXMgaXMgYSBzbWFsbCBkZW1vbnN0cmF0aW9uIC5wZGYgZmlsZSAtICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjY0LjcwNDAgVGQNCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRvcmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NTIuNzUyMCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDYyOC44NDgwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjE2Ljg5NjAgVGQNCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5nLCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjA0Ljk0NDAgVGQNCiggbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDU5Mi45OTIwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNTY5LjA4ODAgVGQNCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA1NTcuMTM2MCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBFdmVuIG1vcmUuIENvbnRpbnVlZCBvbiBwYWdlIDIgLi4uKSBUag0KRVQNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjYgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCAzIDAgUg0KL1Jlc291cmNlcyA8PA0KL0ZvbnQgPDwNCi9GMSA5IDAgUiANCj4 + DQovUHJvY1NldCA4IDAgUg0KPj4NCi9NZWRpYUJveCBbMCAwIDYxMi4wMDAwIDc5Mi4wMDAwXQ0KL0NvbnRlbnRzIDcgMCBSDQo + Pg0KZW5kb2JqDQoNCjcgMCBvYmoNCjw8IC9MZW5ndGggNjc2ID4 + DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIC4uLmNvbnRpbnVlZCBmcm9tIHBhZ2UgMS4gWWV0IG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NzYuNjU2MCBUZA0KKCBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY2NC43MDQwIFRkDQooIHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJvcmluZyBhcyB3YXRjaGluZyApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY1Mi43NTIwIFRkDQooIHBhaW50IGRyeS4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NDAuODAwMCBUZA0KKCBCb3JpbmcuICBNb3JlLCBhIGxpdHRsZSBtb3JlIHRleHQuIFRoZSBlbmQsIGFuZCBqdXN0IGFzIHdlbGwuICkgVGoNCkVUDQplbmRzdHJlYW0NCmVuZG9iag0KDQo4IDAgb2JqDQpbL1BERiAvVGV4dF0NCmVuZG9iag0KDQo5IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UeXBlMQ0KL05hbWUgL0YxDQovQmFzZUZvbnQgL0hlbHZldGljYQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCj4 + DQplbmRvYmoNCg0KMTAgMCBvYmoNCjw8DQovQ3JlYXRvciAoUmF2ZSBcKGh0dHA6Ly93d3cubmV2cm9uYS5jb20vcmF2ZVwpKQ0KL1Byb2R1Y2VyIChOZXZyb25hIERlc2lnbnMpDQovQ3JlYXRpb25EYXRlIChEOjIwMDYwMzAxMDcyODI2KQ0KPj4NCmVuZG9iag0KDQp4cmVmDQowIDExDQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDAwMTkgMDAwMDAgbg0KMDAwMDAwMDA5MyAwMDAwMCBuDQowMDAwMDAwMTQ3IDAwMDAwIG4NCjAwMDAwMDAyMjIgMDAwMDAgbg0KMDAwMDAwMDM5MCAwMDAwMCBuDQowMDAwMDAxNTIyIDAwMDAwIG4NCjAwMDAwMDE2OTAgMDAwMDAgbg0KMDAwMDAwMjQyMyAwMDAwMCBuDQowMDAwMDAyNDU2IDAwMDAwIG4NCjAwMDAwMDI1NzQgMDAwMDAgbg0KDQp0cmFpbGVyDQo8PA0KL1NpemUgMTENCi9Sb290IDEgMCBSDQovSW5mbyAxMCAwIFINCj4 + DQoNCnN0YXJ0eHJlZg0KMjcxNA0KJSVFT0YNCg =="),t=window["pdfjs-dist/build/pdf"];return t.GlobalWorkerOptions.workerSrc="//mozilla.github.io/pdf.js/build/pdf.worker.js",t.getDocument({data:e}).promise.then((function(e){console.log("PDF loaded");e.getPage(1).then((function(e){console.log("Page loaded");var t=e.getViewport({scale:1.5}),a=document.getElementById("the-canvas"),n=a.getContext("2d");a.height=t.height,a.width=t.width;var l={canvasContext:n,viewport:t};e.render(l).promise.then((function(){console.log("Page rendered")}))}))}),(function(e){console.error(e)})),0===this.state.customerDetails.length?l.a.createElement("p",null,"Loading Data"):l.a.createElement("div",{className:"customerdetails"},l.a.createElement(M.a,{bsStyle:"info",className:"centeralign"},l.a.createElement(M.a.Heading,null,l.a.createElement(M.a.Title,{componentClass:"h3"},this.state.customerDetails.name)),l.a.createElement(M.a.Body,null,l.a.createElement("canvas",{id:"the-canvas"}),l.a.createElement("p",null,"Name : ",this.state.customerDetails.name),l.a.createElement("p",null,"Email : ",this.state.customerDetails.email),l.a.createElement(A,null))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(m.a)(this,Object(D.a)(t).call(this,e))).state={selectedCustomer:1,customerList:[]},a}return Object(C.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getCustomerData()}},{key:"getCustomerData",value:function(){var e=this;N.a.get("assets/samplejson/customerlist.json").then((function(t){e.setState({customerList:t.data})}))}},{key:"render",value:function(){var e=this;return 0==this.state.customerList.length?l.a.createElement("p",null,"Loading data"):l.a.createElement("div",{className:"addmargin"},l.a.createElement("div",{className:"col-md-3"},this.state.customerList.map((function(t){return l.a.createElement(M.a,{bsStyle:"info",key:t.name,className:"centeralign"},l.a.createElement(M.a.Heading,null,l.a.createElement(M.a.Title,{componentClass:"h3"},t.name)),l.a.createElement(M.a.Body,null,l.a.createElement("p",null,t.email),l.a.createElement("p",null,t.phone),l.a.createElement(w.a,{bsStyle:"info",onClick:function(){return e.setState({selectedCustomer:t.id})}},"Click to View Details")))}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(B,{val:this.state.selectedCustomer})))}}]),t}(n.Component),p=a(105),j=a(23),h=function(e){function t(){return Object(g.a)(this,t),Object(m.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("Host URLhttps://remoteservice1979.github.io/Lowes"),l.a.createElement(p.a,{basename:"https://remoteservice1979.github.io/Lowes"},l.a.createElement("div",{className:"App"},l.a.createElement(j.d,null,l.a.createElement(j.b,{exact:!0,path:"/",render:function(){return l.a.createElement(j.a,{to:"/customerlist"})}}),l.a.createElement(j.b,{exact:!0,path:"/customerlist",component:v}),l.a.createElement(j.b,{exact:!0,path:"/signatureApp",component:A}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[109,1,2]]]);
//# sourceMappingURL=main.d187f880.chunk.js.map