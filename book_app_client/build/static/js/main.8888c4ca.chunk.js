(this.webpackJsonpbook_app=this.webpackJsonpbook_app||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(9),r=a.n(s),i=(a(15),a(7)),c=a.n(i),l=a(2),u=a(3),h=a(5),m=a(4),d=a(1),p=a(6),b=(a(17),a(18),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={term:""},a.handleTermChange=a.handleTermChange.bind(Object(d.a)(a)),a.handleSearch=a.handleSearch.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleTermChange",value:function(e){this.setState({term:e.target.value}),e.preventDefault()}},{key:"handleSearch",value:function(){this.props.onSearch(this.state.term)}},{key:"render",value:function(){return o.a.createElement("div",{className:"searchBar"},o.a.createElement("h1",{className:"searchTitle"},"Search for books"),o.a.createElement("input",{className:"searchInput",type:"text",placeholder:"Search by title, author, subject...",onChange:this.handleTermChange}),o.a.createElement("button",{className:"searchButton",type:"submit",onClick:this.handleSearch},"Search"))}}]),t}(o.a.Component)),v=(a(19),a(20),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).markAsRead=a.markAsRead.bind(Object(d.a)(a)),a.removeBook=a.removeBook.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"markAsRead",value:function(){this.props.markAsRead(this.props.id)}},{key:"removeBook",value:function(){this.props.removeBook(this.props.id)}},{key:"render",value:function(){return o.a.createElement("div",{className:"book-container"},o.a.createElement("img",{src:this.props.img,alt:this.props.title}),o.a.createElement("div",{className:"bookTitle"},this.props.title),o.a.createElement("div",null,this.props.author),o.a.createElement("div",{className:"bookPublisher"},this.props.publisher),1===this.props.isRead&&o.a.createElement("div",null,"I've read this book!"),0===this.props.isRead&&o.a.createElement("div",null,"Have not read yet"),0===this.props.isRead&&o.a.createElement("button",{onClick:this.markAsRead},"Finished Reading?"),1===this.props.isRead&&o.a.createElement("button",{onClick:this.removeBook},"Remove book"))}}]),t}(o.a.Component)),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={isLoaded:!1,items:[],latestBook:null},a.markAsRead=a.markAsRead.bind(Object(d.a)(a)),a.removeBook=a.removeBook.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:4000/readingList").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.bookList})}))}},{key:"componentDidUpdate",value:function(e){this.props.latestBook!==e.latestBook&&(this.setState({latestBook:this.props.latestBook}),this.componentDidMount())}},{key:"markAsRead",value:function(e){var t,a;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t="http://localhost:4000/readingList/".concat(e),a={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({book:{is_read:1}})},n.next=4,c.a.awrap(fetch(t,a).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)})));case 4:this.componentDidMount();case 5:case"end":return n.stop()}}),null,this)}},{key:"removeBook",value:function(e){var t,a;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t="http://localhost:4000/readingList/".concat(e),a={method:"DELETE"},n.next=4,c.a.awrap(fetch(t,a));case 4:this.componentDidMount();case 5:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return this.state.isLoaded?o.a.createElement("div",{className:"readingList-container"},this.state.items.length>0&&o.a.createElement("h1",null,"My reading list:"),o.a.createElement("div",{className:"readingList"},this.state.items.map((function(t){return o.a.createElement(v,{key:t.id,id:t.id,title:t.title,author:t.author,publisher:t.publisher,img:t.img,isRead:t.is_read,markAsRead:e.markAsRead,removeBook:e.removeBook})})))):o.a.createElement("div",null,"Loading readinglist...")}}]),t}(o.a.Component),f=(a(21),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(){this.props.onAdd(this.props.book)}},{key:"render",value:function(){return o.a.createElement("div",{className:"book-container"},o.a.createElement("img",{src:this.props.src,alt:this.props.title}),o.a.createElement("div",{className:"bookTitle"},this.props.title),o.a.createElement("div",{className:"bookAuthor"},this.props.author),o.a.createElement("div",{className:"bookPublisher"},this.props.publisher),o.a.createElement("button",{onClick:this.handleClick},"Add to list"))}}]),t}(o.a.Component)),j=(a(22),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"booklist"},this.props.searchResults.map((function(t){return o.a.createElement(f,{book:t,title:t.volumeInfo.title,author:t.volumeInfo.authors[0],src:t.volumeInfo.imageLinks.thumbnail,publisher:t.volumeInfo.publisher,onAdd:e.props.onAdd})})))}}]),t}(o.a.Component)),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={totalItems:0,booklist:[],latestBook:null},a.search=a.search.bind(Object(d.a)(a)),a.addToList=a.addToList.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"search",value:function(e){var t,a,n,o,s;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t="https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&maxResults=40"),a=[],r.next=4,c.a.awrap(fetch(t));case 4:return n=r.sent,r.next=7,c.a.awrap(n.json());case 7:if((o=r.sent).items){r.next=10;break}return r.abrupt("return");case 10:s=o.totalItems,o.items.forEach((function(e){e.volumeInfo.title&&e.volumeInfo.authors&&e.volumeInfo.imageLinks&&e.volumeInfo.publisher&&a.push(e)})),this.setState({totalItems:s,booklist:a});case 13:case"end":return r.stop()}}),null,this)}},{key:"addToList",value:function(e){var t;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return"http://localhost:4000/readingList",t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({book:{title:e.volumeInfo.title,author:e.volumeInfo.authors[0],publisher:e.volumeInfo.publisher,img:e.volumeInfo.imageLinks.thumbnail}})},a.next=4,c.a.awrap(fetch("http://localhost:4000/readingList",t).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)})));case 4:this.setState({latestBook:e});case 5:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return o.a.createElement("div",{className:"app-main-container"},o.a.createElement("div",{className:"vertical"},o.a.createElement("div",{className:"search-bar-component"},o.a.createElement(b,{onSearch:this.search})),o.a.createElement("div",{className:"reading-list-component"},o.a.createElement(k,{latestBook:this.state.latestBook}))),o.a.createElement("div",{className:"search-results-component"},o.a.createElement(j,{searchResults:this.state.booklist,onAdd:this.addToList})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.8888c4ca.chunk.js.map