"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[703],{703:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(433),i=n(439),a=n(791),c="Movies_moviesList__Un-WS",u="Movies_moviesItem__BPaMl",s=n(984),o=n(87),l=n(184);var h=function(){var e,t=(0,o.lr)(),n=(0,i.Z)(t,2),h=n[0],d=n[1],f=(0,a.useMemo)((function(){return Object.fromEntries((0,r.Z)(h))}),[h]),m=(0,a.useState)(null!==(e=f.query)&&void 0!==e?e:""),v=(0,i.Z)(m,2),_=v[0],p=v[1],g=(0,a.useState)([]),x=(0,i.Z)(g,2),j=x[0],b=x[1];return(0,a.useEffect)((function(){fetch("https://api.themoviedb.org/3/search/movie?api_key=9095dc0682bb2e62c57b5cbea7d9ca43&language=en-US&page=1&include_adult=false&query=".concat(_)).then((function(e){return e.json()})).then((function(e){b(e.results),d(_?{query:_}:{})}))}),[_]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443"}),(0,l.jsx)("input",{onChange:function(e){p(e.target.value)},type:"text",value:_}),(0,l.jsx)("div",{className:c,children:j?j.map((function(e){return(0,l.jsx)(o.rU,{to:"".concat(e.id),children:(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("img",{width:400,src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title||e.name}),(0,l.jsx)("h2",{children:e.name||e.title})]})},(0,s.x0)())})):""})]})}},984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=703.74e137e9.chunk.js.map