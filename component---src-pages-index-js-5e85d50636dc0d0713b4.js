"use strict";(self.webpackChunkJoe_noh_github_io=self.webpackChunkJoe_noh_github_io||[]).push([[678],{8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return E},S:function(){return P},_:function(){return l},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(2369),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,p);return r.createElement(r.Fragment,null,r.createElement(m,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=l(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,b);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,i({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,v);return t?r.createElement(y,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(y,i({},e)),r.createElement("noscript",null,r.createElement(y,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=y.propTypes;const A=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],S=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:s().object.isRequired,alt:N},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],R=new Set;let W,I;const O=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:u,class:p,onStartLoad:m,onLoad:g,onError:h}=e,b=l(e,L);const{width:f,height:y,layout:w}=n,v=c(f,y,w),{style:E,className:k}=v,A=l(v,T),x=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(u=p);const N=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,f,y);return(0,r.useEffect)((()=>{W||(W=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void R.add(S);if(I&&R.has(S))return;let t,r;return W.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;x.current&&(x.current.innerHTML=a(i({isLoading:!0,isLoaded:R.has(S),image:n},b)),R.has(S)||(t=requestAnimationFrame((()=>{x.current&&(r=l(x.current,S,R,s,m,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{R.has(S)&&I&&(x.current.innerHTML=I(i({isLoading:R.has(S),isLoaded:R.has(S),image:n},b)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},A,{style:i({},E,s,{backgroundColor:d}),className:k+(u?" "+u:""),ref:x,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},G=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));G.propTypes=C,G.displayName="GatsbyImage";const Y=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function j(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=l(t,Y);return s&&console.warn(s),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const M=j((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:p="lazy",imgClassName:m,imgStyle:h,backgroundColor:b,objectFit:f,objectPosition:y}=e,w=l(e,A);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=i({objectFit:f,objectPosition:y,backgroundColor:b},h);const{width:v,height:N,layout:C,images:L,placeholder:T,backgroundColor:R}=o,W=c(v,N,C),{style:I,className:O}=W,G=l(W,x),Y={fallback:void 0,sources:[]};return L.fallback&&(Y.fallback=i({},L.fallback,{srcSet:L.fallback.srcSet?S(L.fallback.srcSet):void 0})),L.sources&&(Y.sources=L.sources.map((e=>i({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,i({},G,{style:i({},I,s,{backgroundColor:b}),className:O+(a?" "+a:"")}),r.createElement(g,{layout:C,width:v,height:N},r.createElement(E,i({},u(T,!1,C,v,N,R,f,y))),r.createElement(k,i({"data-gatsby-image-ssr":"",className:m},w,d("eager"===p,!1,Y,p,h)))))})),q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},U=new Set(["fixed","fullWidth","constrained"]),z={src:s().string.isRequired,alt:N,width:q,height:q,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!U.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};M.displayName="StaticImage",M.propTypes=z;const P=j(G);P.displayName="StaticImage",P.propTypes=z},2369:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,l=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},7827:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),n=a(1883),s=a(3738),i=a(6063),l=a(8032);var o=()=>r.createElement(l.S,{src:"../images/avatar.png",alt:"Joe-noh's avatar",placeholder:"blurred",width:200,height:200,style:{borderRadius:"50%"},__imageData:a(2916)}),c=a(1922);var d=()=>r.createElement(s.Z,null,r.createElement(i.Z,{title:"Home"}),r.createElement("div",{className:"index-module--container--f8c32"},r.createElement("div",{className:"index-module--avatar--46a74"},r.createElement(o,null)),r.createElement("h2",{className:"index-module--name--c8974"},"Joe-noh"),r.createElement("ul",{className:"index-module--links--cb3eb"},r.createElement("li",null,r.createElement(c.Z,{href:"https://twitter.com/Joe_noh"},"Twitter")),r.createElement("li",null,r.createElement(c.Z,{href:"https://github.com/Joe-noh"},"GitHub")),r.createElement("li",null,r.createElement(c.Z,{href:"https://qiita.com/Joe-noh"},"Qiita")),r.createElement("li",null,r.createElement(c.Z,{href:"https://hex.pm/users/joe-noh"},"Hex")),r.createElement("li",null,r.createElement(c.Z,{href:"https://www.slideshare.net/Joe_noh"},"Slide")),r.createElement("li",null,r.createElement(c.Z,{href:"https://joe-noh.hatenablog.com"},"Blog")),r.createElement("li",null,r.createElement(n.rU,{to:"/history/"},"History")),r.createElement("li",null,r.createElement(n.rU,{to:"/works/"},"Works")))))},2916:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADoklEQVR42n2U/U9bZRTH+8eYGOOmpSMtEJbKJi1t73PvbQHpC3ESwZfhXtiLi4aNucEgUwY0G45MSCZtKYwWWtbBEN2C+8Uf1LgtxqFx8SW+/GAWjS8Rwj7meUpBEPzh5D73nPN87vecc5/HYhgGBdN1Xdm/11vZxvyCWbaCyadpmuuS5XvBtxXUshXM6/VQXl5OWVmZMrl2Op24XJXoutgSatkYUE8hsDsc2IqsFO+wrVgRNlsR256wYneUoGk+Nttr2ejwmwb2kjLsxTYe216k7NFtRTzyuJXtT9rwVTjYWbKDYrsDYxOlFsNYa3TAb2IrdfKcVsa9aIATz1bQXL2Tzud3MXK0iltndP4cruPjt0ysViv20nIlYK1kfWUouo5pGLi8gvZGN79froV0BCakhSG1ss5GYDykYvMdAl9FKS6PD9PcULKEub2Cw3sEJEMwFoJkkC+iAT7tDsBIkOVEHZ90B5RyGWM8zF/DdRxrELi8eYYqWUqWjlMvGfnEZJClRAhGa+g7GuH4wUYexgIQD9DW0kTvkYiKLaqc/IdPvZhnSJYlYBo85RaMtQYgG2YpHuThSBDGwvxw0eR+VMBomL9jdWr940VTxWTOYjwImbDaKxmSpXqoCZ36GsHt3hpVrkwuQJmoV5DbZz2Qrs/7kiGWVTzE59FaIjUCTRhrPZRSn/bo7I1INRIWUpsK4AeD1TwYqlaw7/oNfh2qUaol8NUGnV1V+uq0V45evqmaENztq1WTXEoEWYzV5RXJKa/YQo/GzwMBNen7b9diGoICY1WhmrRp4PbpHN6j58tNRfi2389Cr6ZK/r7f4F6PxldRHa5IdUGON60No8BZd1JkoNKr0/6yyR/yX0xW88slUwF/GvDz25AfrtSyFH+G7v1+Kj1iFbZ6Uv5zwxgGzt0uDjWFWRg+wnLqhfx/ORpiebyRLy8fpKWhGuduN36/udnRW3MIIdA0jbbWkyTikyQSOW7duM7d3GfcmbrDRx/OEY9NMTiY5MC+A3g8nv+/HEzDpO/ceWav3SSTypFOZslNTzOX/Jr3Yt8wPXud1EiG3OQMM1Pv0/p6Gz6fb90FbSlcnO4qN+1vdDI3Pc/JE6cZuvQu2dQMuWtZ3mm7wfmWD7iay3I1PUu05wJnO7uZm5nnleb9SqlkrPZQvni9Xpr37iM1muG1Y630nbvAxFiO1Hiaga4JBs5kmJzIkE3P0HG6i66ON0nGUkQi9apNBYX/AMrbndxqaCFcAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/897527eed655057cb2c7f5c8bdc6238b/5aead/avatar.png","srcSet":"/static/897527eed655057cb2c7f5c8bdc6238b/e9fba/avatar.png 50w,\\n/static/897527eed655057cb2c7f5c8bdc6238b/15e42/avatar.png 100w,\\n/static/897527eed655057cb2c7f5c8bdc6238b/5aead/avatar.png 200w,\\n/static/897527eed655057cb2c7f5c8bdc6238b/d6138/avatar.png 400w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/897527eed655057cb2c7f5c8bdc6238b/dbc4a/avatar.webp 50w,\\n/static/897527eed655057cb2c7f5c8bdc6238b/d8057/avatar.webp 100w,\\n/static/897527eed655057cb2c7f5c8bdc6238b/2e34e/avatar.webp 200w,\\n/static/897527eed655057cb2c7f5c8bdc6238b/416c3/avatar.webp 400w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')}}]);
//# sourceMappingURL=component---src-pages-index-js-5e85d50636dc0d0713b4.js.map