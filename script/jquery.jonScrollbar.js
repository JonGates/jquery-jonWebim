/*
== jon jquery scrollbars plugin == 
version: 1.0.1 
author: Jon Gates (http://blog.jongates.org) 
plugin home: https://github.com/JonGates/jonScrollbar
*/

;(function($){
	/*methods | 方法*/
	var methods={
		init:function(options){
			var defaults={
				axis			: 'y',
				wheel			: true,
				wheelSpeed		: 40,
				wheelLock		: true,
				scrollInvert	: false,
				trackSize		: false,
				thumbSize		: false,
				theme			: 'light'
			},
			options=$.extend({},defaults,options);
			return this.each(function(){
				var $this		= $(this);
				/*创建DOM结构*/
				if($this.hasClass("jonScrollbar")){return;}
				$this.wrapInner("<div class='jonScrollBox"+" jonScroll-"+options.theme+"'/>");
				var jonScrollBox=$this.children(".jonScrollBox");
				jonScrollBox.wrapInner("<div class='jonScrollBox_substance' />");
				jonScrollBox.wrapInner("<div class='jonScrollBox_container' />");
				jonScrollBox.prepend('<div class="jonScrollBox_bar"><div class="jonScrollBox_track"><div class="jonScrollBox_thumb"><div class="jonScrollBox_end"></div></div></div></div>');

				this.mousePosition	= 0;
				this.isHorizontal	= options.axis === 'x';
				this.hasTouchEvents	= ("ontouchstart" in document.documentElement);
				this.wheelEvent		= ("onwheel" in document || document.documentMode >= 9) ? "wheel" : (document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll");
				this.sizeLabel = this.isHorizontal ? "width" : "height";
				this.posiLabel = this.isHorizontal ? "left" : "top";

				/* 全局数据 */
				$this.data({
					"options_axis":options.axis,
					"options_wheel":options.wheel,
					"options_wheelSpeed":options.wheelSpeed,
					"options_wheelLock":options.wheelLock,
					"options_scrollInvert":options.scrollInvert,
					"options_trackSize":options.trackSize,
					"options_thumbSize":options.thumbSize,

					"mousePosition":this.mousePosition,
					"isHorizontal":this.isHorizontal,
					"hasTouchEvents":this.hasTouchEvents,
					"wheelEvent":this.wheelEvent,
					"sizeLabel":this.sizeLabel,
					"posiLabel":this.posiLabel,

					"contentPosition":0,
					"viewportSize":0,
					"contentSize":0,
					"contentRatio":0,
					"trackSize":0,
					"trackRatio":0,
					"thumbSize":0,
					"trackRatio":0
				});

				$this.jonScrollbar("update");
			});
		},
		/* 这个里面的是要私有化的，暴露很危险 */
		update:function(scrollTo){
			var $this		= $(this);
			var $viewport	= $this.find(".jonScrollBox_container"),
				$overview	= $this.find(".jonScrollBox_substance"),
				$scrollbar	= $this.find(".jonScrollBox_bar"),
				$track		= $scrollbar.find(".jonScrollBox_track"),
				$thumb		= $scrollbar.find(".jonScrollBox_thumb");

				$this.jonScrollbar("setSize");

				if($this.data("hasTouchEvents")){
					$viewport[0].ontouchstart = function(event){
						if(1 === event.touches.length){
							event.stopPropagation();
							start(event.touches[0]);
						}
					};
				}else{
					$thumb.bind("mousedown", start);
					$track.bind("mousedown", drag);
				}

				$(window).resize(function(){
					$this.jonScrollbar("update",'relative');
				});

				if($this.data("options_wheel") && window.addEventListener){
					$this[0].addEventListener($this.data("wheelEvent"), wheel, false );
				}else if($this.data("options_wheel")){
					$this[0].onmousewheel = wheel;
				}

				function start(event){
					$("body").addClass("noSelect");
					$('.jonScrollBox_thumb').addClass('jonScrollBox_thumbHov');
					$('div').attr('unselectable', 'on');//ie6
					$this.data("mousePosition",$this.data("isHorizontal") ? event.pageX : event.pageY);
					$this.data("thumbPosition",parseInt($thumb.css($this.data("posiLabel")), 10) || 0);
					if($this.data("hasTouchEvents")){
						document.ontouchmove = function(event){
							event.preventDefault();
							drag(event.touches[0]);
						};
						document.ontouchend = end;
					}else{
						$(document).bind("mousemove", drag);
						$(document).bind("mouseup", end);
						$thumb.bind("mouseup", end);
					}
				}

				function wheel(event){
					if($this.data("contentRatio") < 1){
						var evntObj		 = event || window.event,
							deltaDir		= "delta" + $this.data("options_axis").toUpperCase(),
							wheelSpeedDelta = -(evntObj[deltaDir] || evntObj.detail || (-1 / 3 * evntObj.wheelDelta)) / 40;
						$this.data("contentPosition", $this.data("contentPosition") - wheelSpeedDelta * $this.data("options_wheelSpeed"));
						$this.data("contentPosition", Math.min(($this.data("contentSize") - $this.data("viewportSize")), Math.max(0, $this.data("contentPosition"))));
						$this.trigger("move");
						$thumb.css($this.data("posiLabel"), $this.data("contentPosition") / $this.data("trackRatio"));
						$overview.css($this.data("posiLabel"), -$this.data("contentPosition"));
						if($this.data("options_wheelLock") || ($this.data("contentPosition") !== ($this.data("contentSize") - $this.data("viewportSize")) && $this.data("contentPosition") !== 0)){
							evntObj = $.event.fix(evntObj);
							evntObj.preventDefault();
						}
					}
				}

				function drag(event){
					if($this.data("contentRatio") < 1){
						var mousePositionNew   = $this.data("isHorizontal") ? event.pageX : event.pageY,
							thumbPositionDelta = mousePositionNew - $this.data("mousePosition");
						if($this.data("options_scrollInvert") && $this.data("hasTouchEvents")){
							thumbPositionDelta = $this.data("mousePosition") - mousePositionNew;
						}
						var thumbPositionNew = Math.min(($this.data("trackSize") - $this.data("thumbSize")), Math.max(0, $this.data("thumbPosition") + thumbPositionDelta));
						$this.data("contentPosition",thumbPositionNew * $this.data("trackRatio"));
						$this.trigger("move");
						$thumb.css($this.data("posiLabel"), thumbPositionNew);
						$overview.css($this.data("posiLabel"), -$this.data("contentPosition"));
					}
				}

				function end(){
					$("body").removeClass("noSelect");
					$('.jonScrollBox_thumb').removeClass('jonScrollBox_thumbHov');
					$('div').attr('unselectable', 'off');//ie6
					$(document).unbind("mousemove", drag);
					$(document).unbind("mouseup", end);
					$thumb.unbind("mouseup", end);
					document.ontouchmove = document.ontouchend = null;
				}
		},
		setSize:function(){
			var $this		= $(this),
				$viewport	= $this.find(".jonScrollBox_container"),
				$overview	= $this.find(".jonScrollBox_substance"),
				$scrollbar	= $this.find(".jonScrollBox_bar"),
				$track		= $scrollbar.find(".jonScrollBox_track"),
				$thumb		= $scrollbar.find(".jonScrollBox_thumb");
			var sizeLabelCap  = $this.data("sizeLabel").charAt(0).toUpperCase() + $this.data("sizeLabel").slice(1).toLowerCase();
				//$this.data("viewportSize",$viewport[0]['offset'+ sizeLabelCap]);
				$this.data("viewportSize",$viewport.outerHeight());
				$this.data("contentSize",$overview[0]['scroll'+ sizeLabelCap]);
				$this.data("contentRatio",$this.data("viewportSize") / $this.data("contentSize"));
				//$this.data("trackSize",$this.data("trackSize") || $this.data("viewportSize"));
				$this.data("trackSize",$this.data("viewportSize"));
				$this.data("thumbSize",Math.min($this.data("trackSize"), Math.max(0, (($this.data("trackSize") * $this.data("contentRatio"))))));
				$this.data("trackRatio",$this.data("thumbSize") ? ($this.data("contentSize") - $this.data("viewportSize")) / ($this.data("trackSize") - $this.data("thumbSize")) : ($this.data("contentSize") / $this.data("trackSize")));

			$scrollbar.toggleClass("disable", $this.data("contentRatio") >= 1);

			$thumb.css($this.data("posiLabel"), $this.data("contentPosition") / $this.data("trackRatio"));
			$overview.css($this.data("posiLabel"), -$this.data("contentPosition"));
			$scrollbar.css($this.data("sizeLabel"), $this.data("trackSize"));
			$track.css($this.data("sizeLabel"), $this.data("trackSize"));
			$thumb.css($this.data("sizeLabel"), $this.data("thumbSize"));	
		},
		scrollTo:function(scrollTo){
			var $this		= $(this);
			switch (scrollTo){
				case "last":
					$this.data("contentPosition",$this.data("contentSize") - $this.data("viewportSize"));
					break;
				case "relative":
					$this.data("contentPosition",Math.min(Math.max($this.data("contentSize") - $this.data("viewportSize"), 0), Math.max(0, $this.data("contentPosition"))));
					break;
				default:
					$this.data("contentPosition",parseInt(scrollTo, 10) || 0);
			};
			$this.jonScrollbar("setSize");	
		}
	},
	/*private function | 私有方法 (有时间吧上面的私有函数放这里)*/
	functions={};

	/*plugin fn*/
	$.fn.jonScrollbar=function(method){
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
})(jQuery);