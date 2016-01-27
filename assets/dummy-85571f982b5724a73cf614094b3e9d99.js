"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,r,n,l){var a=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,a=t["default"].Application.extend({modulePrefix:l["default"].modulePrefix,podModulePrefix:l["default"].podModulePrefix,Resolver:r["default"]}),(0,n["default"])(a,l["default"].modulePrefix),e["default"]=a}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,r){var n=r["default"].APP.name,l=r["default"].APP.version;e["default"]=t["default"].extend({version:l,name:n})}),define("dummy/components/fa-icon",["exports","ember-cli-font-awesome/components/fa-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/fa-list-icon",["exports","ember-cli-font-awesome/components/fa-list-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/fa-list",["exports","ember-cli-font-awesome/components/fa-list"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/fa-stack",["exports","ember-cli-font-awesome/components/fa-stack"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/freestyle-guide/component",["exports","ember-freestyle/components/freestyle-guide/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/freestyle-headers/component",["exports","ember-freestyle/components/freestyle-headers/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/freestyle-menu/component",["exports","ember-freestyle/components/freestyle-menu/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/freestyle-notes/component",["exports","ember-freestyle/components/freestyle-notes/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/freestyle-palette/component",["exports","ember-freestyle/components/freestyle-palette/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/freestyle-palette-item/component",["exports","ember-freestyle/components/freestyle-palette-item/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/freestyle-section/component",["exports","ember-freestyle/components/freestyle-section/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/freestyle-snippet/component",["exports","ember-freestyle/components/freestyle-snippet/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/freestyle-usage/component",["exports","ember-freestyle/components/freestyle-usage/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/freestyle-usage-controls/component",["exports","ember-freestyle/components/freestyle-usage-controls/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/md-text",["exports","ember-remarkable/components/md-text"],function(e,t){e["default"]=t["default"]}),define("dummy/components/x-foo/component",["exports","ember","dummy/components/x-foo/template"],function(e,t,r){var n=t["default"].computed;e["default"]=t["default"].Component.extend({layout:r["default"],special:n.equal("status","special")})}),define("dummy/components/x-foo/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:4,column:2},end:{line:8,column:2}},moduleName:"dummy/components/x-foo/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("    ");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","x-Foo-description x-Foo-description--special");var n=e.createTextNode("\n      Status: special\n    ");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:8,column:2},end:{line:12,column:2}},moduleName:"dummy/components/x-foo/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("    ");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","x-Foo-description x-Foo-description--normal");var n=e.createTextNode("\n      Status: decidedly not special\n    ");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:1,column:0},end:{line:13,column:6}},moduleName:"dummy/components/x-foo/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("div");e.setAttribute(r,"class","x-Foo");var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","x-Foo-title");var l=e.createTextNode("Foo");e.appendChild(n,l),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n);var n=e.createElement("p"),l=e.createTextNode("This is a component in the dummy app");e.appendChild(n,l),e.appendChild(r,n);var n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("");return e.appendChild(r,n),e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[0]),5,5),n},statements:[["block","if",[["get","special",["loc",[null,[4,8],[4,15]]]]],[],0,1,["loc",[null,[4,2],[12,9]]]]],locals:[],templates:[e,t]}}())}),define("dummy/controllers/application",["exports","ember","ember-freestyle/controllers/freestyle"],function(e,t,r){var n=t["default"].computed,l=t["default"].inject;e["default"]=r["default"].extend({emberFreestyle:l.service(),showCode:n.alias("emberFreestyle.showCode"),color:{name:"amber",base:"#ffc107"}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/freestyle",["exports","ember-freestyle/controllers/freestyle"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/ember-freestyle/ember-freestyle",["exports"],function(e){e["default"]={title:"Dummy App Styleguide",sections:["Colors","Typography","Custom Foo"],components:[{name:"freestyle-headers",section:"Typography",attrs:{h1:"A Dummy App Using Ember Freestyle 1",h2:"A Dummy App Using Ember Freestyle 2",h3:"A Dummy App Using Ember Freestyle 3",h4:"A Dummy App Using Ember Freestyle 4",h5:"A Dummy App Using Ember Freestyle 5",h6:"A Dummy App Using Ember Freestyle 6"}},{name:"freestyle-palette",section:"Colors",attrs:{title:"Color Palette",colors:[{name:"mauve",hex:"#dbb1bc"},{name:"lilac",hex:"#d3c4e3"},{name:"periwinkle",hex:"#8f95d3"},{name:"sky",hex:"#89daff"},{name:"coffee",hex:"#58504a"}]}},{name:"x-foo",section:"Custom Foo",attrs:{status:"active"}},{name:"x-foo",section:"Custom Foo",attrs:{status:"most definitely not active"}}]}}),define("dummy/freestyle/breakpoints",["exports"],function(e){e["default"]={FreestyleBreakpoints:{small:"320px",medium:"480px",large:"600px",huge:"1024px",giant:"1280px",monstrous:"1600px"}}}),define("dummy/freestyle/freestyle",["exports"],function(e){e["default"]={freestyle:{usage:{border:"solid 1px #cecece","border-radius":"5px","background-color":"rgba(#eee, .5)"}}}}),define("dummy/freestyle/palette",["exports"],function(e){e["default"]={FreestylePalette:{primary:{name:"cyan",description:"something toply cyanish",base:"#00bcd4",light:"#b2ebf2",dark:"#0097a7"},accent:{name:"amber",base:"#ffc107"},secondary:{name:"grey-ish",base:"#b6b6b6"},foreground:{name:"black-ish",base:"#212121",light:"#727272"},background:{name:"white",base:"#ffffff"}}}}),define("dummy/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.andHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.andHelper)),e["default"]=n}),define("dummy/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.equalHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.equalHelper)),e["default"]=n}),define("dummy/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.gtHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.gtHelper)),e["default"]=n}),define("dummy/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.gteHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.gteHelper)),e["default"]=n}),define("dummy/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.isArrayHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.isArrayHelper)),e["default"]=n}),define("dummy/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.ltHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.ltHelper)),e["default"]=n}),define("dummy/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.lteHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.lteHelper)),e["default"]=n}),define("dummy/helpers/md",["exports","ember-remarkable/helpers/md-remarkable"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.notEqualHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.notEqualHelper)),e["default"]=n}),define("dummy/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.notHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.notHelper)),e["default"]=n}),define("dummy/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.orHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.orHelper)),e["default"]=n}),define("dummy/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.xorHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.xorHelper)),e["default"]=n}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,r){e["default"]={name:"App Version",initialize:(0,t["default"])(r["default"].APP.name,r["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/ember-freestyle",["exports","dummy/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0],r=t["default"].modulePrefix,n=new RegExp("^"+r+"/(freestyle|snippets)");Object.keys(requirejs.entries).filter(function(e){return n.test(e)}).forEach(function(t){if(!t.match(/\.jshint/)){var r=require(t,null,null,!0),n=r["default"],l=t.split("/").reverse()[0],a="config:ember-freestyle-"+l;e.register(a,n,{instantiate:!1}),e.inject("service:ember-freestyle",l,a)}})}e["default"]={name:"ember-freestyle",initialize:r}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0];if(r["default"].exportApplicationGlobal!==!1){var n,l=r["default"].exportApplicationGlobal;n="string"==typeof l?l:t["default"].String.classify(r["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,r,n,l,a,o,u,m,i,d,s,p){function c(){t["default"].Helper||((0,r.registerHelper)("and",n.andHelper),(0,r.registerHelper)("or",l.orHelper),(0,r.registerHelper)("eq",a.equalHelper),(0,r.registerHelper)("not",o.notHelper),(0,r.registerHelper)("is-array",u.isArrayHelper),(0,r.registerHelper)("not-eq",m.notEqualHelper),(0,r.registerHelper)("gt",i.gtHelper),(0,r.registerHelper)("gte",d.gteHelper),(0,r.registerHelper)("lt",s.ltHelper),(0,r.registerHelper)("lte",p.lteHelper))}e.initialize=c,e["default"]={name:"truth-helpers",initialize:c}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,r){var n=t["default"].Router.extend({location:r["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/services/ember-freestyle",["exports","ember-freestyle/services/ember-freestyle"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/snippets",["exports"],function(e){e["default"]={"foo-normal.hbs":"      {{x-foo status='normal'}}","foo-special.hbs":"      {{x-foo status='special'}}","fp.hbs":"      {{freestyle-palette\n          title='Dummy App Color Palette'\n          description='This component displays the color palette specified in freestyle/palette.json'\n      }}","fpi.hbs":"      {{freestyle-palette-item color=color}}","fpi.js":"  color: {\n    name: 'amber',\n    base: '#ffc107'\n  }","fpi.scss":"$freestylePaletteItemBorderColor: #cecece;\n\n.FreestylePaletteItem {\n  display: inline-block;\n  border: solid 1px $freestylePaletteItemBorderColor;\n  margin: 0 5px 5px 0;\n\n  &-color {\n    height: 90px;\n    width: 160px;\n  }\n\n  &-info {\n    border-top: solid 1px $freestylePaletteItemBorderColor;\n    padding: 5px;\n    background-color: #fff;\n  }\n\n  &-hex {\n    font-weight: bold;\n    font-size: 12px;\n    margin-bottom: 0;\n  }\n\n  &-name {\n    font-size: 11px;\n    margin-top: 0;\n    color: gray;\n  }\n\n}","fpi:notes.js":"### A few notes regarding freestyle-palette-item\n\n- Accepts a color object\n- Looks very nice\n\n```\nimport Ember from 'ember';\n\nexport default Ember.Component.extend({\n  // ...\n  color: {\n    name: 'amber',\n    base: '#ffc107'\n  }\n  // ...\n});\n```"}}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:5,column:4},end:{line:10,column:4}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("      ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,r),n},statements:[["inline","x-foo",[],["status","special"],["loc",[null,[9,6],[9,32]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:12,column:4},end:{line:17,column:4}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("      ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,r),n},statements:[["inline","x-foo",[],["status","normal"],["loc",[null,[16,6],[16,31]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:3,column:2},end:{line:19,column:2}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(2);return n[0]=e.createMorphAt(t,1,1,r),n[1]=e.createMorphAt(t,3,3,r),n},statements:[["block","freestyle-usage",["foo-special"],["title","Foo -- Special","highlightJsTheme","hybrid"],0,null,["loc",[null,[5,4],[10,24]]]],["block","freestyle-usage",["foo-normal"],["title","Foo -- Normal","highlightJsTheme","hybrid"],1,null,["loc",[null,[12,4],[17,24]]]]],locals:[],templates:[e,t]}}(),t=function(){var e=function(){return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:23,column:4},end:{line:28,column:4}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("      ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,r),n},statements:[["inline","freestyle-palette",[],["title","Dummy App Color Palette","description","This component displays the color palette specified in freestyle/palette.json"],["loc",[null,[24,6],[27,8]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:30,column:4},end:{line:32,column:4}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("      ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,r),n},statements:[["inline","freestyle-palette-item",[],["color",["subexpr","@mut",[["get","color",["loc",[null,[31,37],[31,42]]]]],[],[]]],["loc",[null,[31,6],[31,44]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:21,column:2},end:{line:34,column:2}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(2);return n[0]=e.createMorphAt(t,1,1,r),n[1]=e.createMorphAt(t,3,3,r),n},statements:[["block","freestyle-usage",["fp"],["title","Freestyle Palette"],0,null,["loc",[null,[23,4],[28,24]]]],["block","freestyle-usage",["fpi"],["title","Freestyle Palette Item"],1,null,["loc",[null,[30,4],[32,24]]]]],locals:[],templates:[e,t]}}();return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:1,column:0},end:{line:36,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(2);return n[0]=e.createMorphAt(t,1,1,r),n[1]=e.createMorphAt(t,3,3,r),n},statements:[["block","freestyle-section",[],["name","Foo Things"],0,null,["loc",[null,[3,2],[19,24]]]],["block","freestyle-section",[],["name","Visual Style"],1,null,["loc",[null,[21,2],[34,24]]]]],locals:[],templates:[e,t]}}();return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:1,column:0},end:{line:36,column:20}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","freestyle-guide",[],[],0,null,["loc",[null,[1,0],[36,20]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/components/md-text",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/md-text.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),n},statements:[["content","parsedMarkdown",["loc",[null,[1,0],[1,18]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var r=t+"/config/environment",n=e["default"].$('meta[name="'+r+'"]').attr("content"),l=JSON.parse(unescape(n));return{"default":l}}catch(a){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-freestyle",version:"0.0.0+3f56e091"});