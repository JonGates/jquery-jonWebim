jonWebim
===========
jon jquery webim plugin<br />
Webim插件，兼容所有浏览器！<br />
UI是由某赶集网剥离出来的；<br />
Scrollbar插件某集网用的是mCustomScrollbar插件，该插件不支持IE6~9，因此我重写了一个[jquery-jonScrollbar](https://github.com/JonGates/jquery-jonScrollbar/)插件；<br />
WEBIM代码也全部重写，也是为了兼容IE6~9，并且通过对象全部封装起来；<br />
版本内目前带了部分测试数据，后续版本稳定后，会用DEMO形式体现出功能！<br />

Usage
-----------
Refer to the [demo](#) and the [source code](https://github.com/JonGates/jquery-jonWebim/tree/master/script/)

### 依赖库
jquery.js [1.x](http://jquery.com/)
jquery.cookie.js [1.x](http://plugins.jquery.com/cookie/)
jquery.jonScrollbar.js [x](https://github.com/JonGates/jquery-jonScrollbar/)


### jquery 对象级调用
	<div id="im"></div>

	<script type="text/javascript">
		(function($){
			$('#im').jonWebim();
		})(jQuery);
	</script>

###  后续版本介绍：
v.0.0.0.3 加入删除用户列表<br/>
v.0.0.0.4 支持聊天记录Web Storage(需要浏览器支持)<br/>