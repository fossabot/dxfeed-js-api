(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{HVoQ:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return l}));var a=t("Fcif"),c=t("+I+c"),b=t("/FXl"),s=t("TjRS"),o=(t("aD51"),{});void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/usage.mdx"}});var r={_frontmatter:o},i=s.a;function l(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(b.b)(i,Object(a.a)({},r,t,{components:n,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"basic-usage"},"Basic Usage"),Object(b.b)("p",null,"We have several classes in implementation:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Feed ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"(public)"))),Object(b.b)("li",{parentName:"ul"},"Endpoint ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"(private)"))),Object(b.b)("li",{parentName:"ul"},"Subscriptions ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("em",{parentName:"strong"},"(private)")))),Object(b.b)("p",null,"The ",Object(b.b)("em",{parentName:"p"},"Feed")," is entry point for configuration and creating subscriptions.\n",Object(b.b)("em",{parentName:"p"},"Feed")," manages private classes for connecting and subscribing.\nThe ",Object(b.b)("em",{parentName:"p"},"Endpoint")," is responsible for managing the web socket connection.\n",Object(b.b)("em",{parentName:"p"},"Subscriptions")," for managing open subscriptions."),Object(b.b)("h2",{id:"import-package"},"Import package"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import Feed from '@dxfeed/api'\n")),Object(b.b)("h2",{id:"configure--create-connection"},"Configure & Create connection"),Object(b.b)("p",null,"Create instance of Feed."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const feed = new Feed()\n")),Object(b.b)("p",null,"Provide auth token if needed."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"feed.setAuthToken('authToken')\n")),Object(b.b)("p",null,"Set web socket address and open connection."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"feed.connect('wss://tools.dxfeed.com/webservice/cometd')\n")),Object(b.b)("h2",{id:"configure--create-subscription"},"Configure & Create subscription"),Object(b.b)("p",null,"You should specify event types and symbol names."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"feed.subscribe<{ value: number }>(\n    [EventType.Summary, EventType.Trade], /* event types */\n    ['AEX.IND:TEI'], /* symbols */\n    handleEvent\n)\n")),Object(b.b)("p",null,"For timed subscription you should also provide time to start subscription from."),Object(b.b)("p",null,"For Candle event type along with base symbol, you should specify an aggregation period. You can also set price type. More details: ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://kb.dxfeed.com/display/DS/REST+API#RESTAPI-Candlesymbols"}),"https://kb.dxfeed.com/display/DS/REST+API#RESTAPI-Candlesymbols"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"feed.subscribeTimeSeries<{ value: number }>(\n    [EventType.Summary, EventType.Trade], /* event types */\n    ['AEX.IND:TEI'], /* symbols */\n    0, /* fromTime */\n    handleEvent\n)\n")),Object(b.b)("p",null,"Last argument its event handler for process incoming events."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const handleEvent = event => {\n    /* process event */\n}\n")),Object(b.b)("h2",{id:"close-subscription"},"Close subscription"),Object(b.b)("p",null,"All subscribe methods return unsubscribe handler, you need to call this method for unsubscribe."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const unsubscribe = feed.subscribe(eventTypes, symbols, handleEvent)\n\nonExit(() => unsubscribe())\n")),Object(b.b)("h2",{id:"close-connection"},"Close connection"),Object(b.b)("p",null,"If you need to close the web socket connection"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"feed.disconnect()\n")))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/usage.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-usage-mdx-27feb27558262bdc4fd3.js.map