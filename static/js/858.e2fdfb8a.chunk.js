"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[858],{858:function(e,n,t){t.r(n);var c=t(439),r=t(689),i=t(791),s=t(184);n.default=function(){var e=(0,r.UO)().movieId,n=(0,i.useState)([]),t=(0,c.Z)(n,2),a=t[0],h=t[1];return(0,i.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=9095dc0682bb2e62c57b5cbea7d9ca43&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return h(e.results)}))}),[e]),(0,s.jsx)(s.Fragment,{children:a&&(0,s.jsx)("ul",{children:a.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:e.author}),(0,s.jsx)("p",{children:e.content}),(0,s.jsxs)("p",{children:[" ",(0,s.jsx)("b",{children:"\u041e\u043f\u0443\u0431\u043b\u0456\u043a\u043e\u0432\u0430\u043d\u043e:"}),"  ",e.created_at]}),(0,s.jsxs)("p",{children:[" ",(0,s.jsx)("b",{children:"\u041e\u043d\u043e\u0432\u043b\u0435\u043d\u043e:"}),"  ",e.updated_at]}),(0,s.jsx)("hr",{})]},e.id)}))})})}}}]);
//# sourceMappingURL=858.e2fdfb8a.chunk.js.map