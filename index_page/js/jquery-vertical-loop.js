!function(t,n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof exports?module.exports=n(require("jquery")):t.VerticalLoop=n(t.jQuery)}(this,function(r){function s(t,n){this.opt=r.extend({delay:5e3,order:"asc",oninitend:function(t){}},n),this.container=r(t),this.items=this.container.find("li"),this.index=0,this.pager=null,this.animating=!1,this.screen=!1,this.mouseIn=!1,this._init()}return s.prototype={Constructor:s,_init:function(){var t=this,n=this.container.find("ul").clone();if("asc"===this.opt.order)n.appendTo(this.container);else if("desc"===this.opt.order){n.prependTo(this.container);var e=n.height();n.css("marginTop","-"+e+"px")}this._to(0),this._isInScreen()&&(t.autoStart(),t.screen=!0),r(window).scroll(function(){t._isInScreen()&&!1===t.screen?(t.screen=!0,t.autoStart()):t._isInScreen()||!0!==t.screen||(t.screen=!1,t.autoPause())}),this.opt.oninitend.call(this,this.container)},autoStart:function(){var t=this;this.timer=setInterval(function(){t._next()},this.opt.delay)},autoPause:function(){clearInterval(this.timer)},_next:function(){this._to(this.index)},_to:function(t){var n=this.container.find("ul").eq(0),e=this.container.height(),i=n.find("li").length,o=this,r=n.height(),s=n.find("li").height(),c=parseInt(e/s,10)||1,a=parseInt(i/c,10)||1,h=0-t*e;"asc"===this.opt.order?h=h:"desc"===this.opt.order&&(h=0-(r+h)),n.animate({marginTop:h+"px"},1e3,function(){t===a?("asc"===o.opt.order?n.css("marginTop",0):"desc"===o.opt.order&&n.css("marginTop",0-r),o.index=1):o.index=t+1})},_isInScreen:function(){var t=this.container;if(0<t.length)return r(document).scrollTop()+r(window).height()>t.offset().top&&t.offset().top+t.height()>r(document).scrollTop()}},r.fn.verticalLoop=function(o){return this.each(function(){var t=r(this),n=t.data("snVerticalLoop"),e={},i="";"object"==typeof o&&(e=o),"string"==typeof o&&(i=o),n||(n=new s(t,e),t.data("snVerticalLoop",n)),i&&n[i]()})},r.fn.verticalLoop.Constructor=s});