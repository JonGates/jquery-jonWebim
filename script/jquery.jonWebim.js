/*
== jon jquery webim plugin == 
version: 0.0.0.2 
author: Jon Gates (http://blog.jongates.org) 
plugin home: https://github.com/JonGates/jquery-jonWebim
*/

;(function($){
	/*methods | 方法*/
	var methods={
		init:function(options){
			var defaults={
				uid				: 'appUserId',
				autoLogin		: true,
				noticeContent	: '公告内容',
				msgMaxSize		: 300,
				sendPicture		: true,
				msgSound		: true,
				limitMid		: 0,	//初始化加载的最小MID，服务器更具这个获取信息
				sendApi			: '/api.php?act=send',	//发送接口
				pushApi			: '/api.php?act=push',	//监听推送接口（用户状态和聊天信息通过这里更新）
				theme			: 'light'	//样式
			},
			options=$.extend({},defaults,options);
			var html	=	("	<div class=\"imjs-open\">");
				html	+=	("		<div class=\"webim-body\">");
				html	+=	("			<div class=\"webim-body-msg-count\"><span style=\"display:none\" class=\"webim-msg-count\">0</span></div>");
				html	+=	("			<div class=\"webim-body-comtent-header\" style=\"display:block\">");
				html	+=	("				<div class=\"webim-icon-setting-tips\" >");
				html	+=	("					<a href=\"javascript:;\" class=\"imjs-fold active\">自动收起</a><a class=\"imjs-unfold\" href=\"javascript:;\">保持展开</a>");
				html	+=	("				</div>");
				html	+=	("				<span class=\"webim-header-minibar\"><em class=\"webim-icon-setting\" title=\"设置\">&nbsp;</em><em class=\"webim-icon-mini\" title=\"最小化\">&nbsp;</em><em class=\"webim-icon-close\" title=\"关闭\">&nbsp;</em></span>");
				html	+=	("				<em class=\"imjs-userstatus webim-username-online\">&nbsp;</em><em class=\"imjs-username\"><strong>系统消息</strong></em>");
				html	+=	("			</div>");
				html	+=	("			<div id=\"imjs-lianxiren\" class=\"webim-lianxiren\">");
				html	+=	("				<!--<span class=\"imjs-allnewmsg-count\">0</span>-->");
				html	+=	("				<span class=\"imjs-lianxiren-tip\" style=\"display: inline;\">联系人[ <span class=\"fc-green\">0</span> / <em class=\"imjs-lianxiren-count\">0</em> ]</span>");
				html	+=	("				<span class=\"imjs-newmsgcount-tip\" style=\"display: none;\">您有<em class=\"imjs-newmsg-count\">0</em>条新消息</span>");
				html	+=	("				<span class=\"imjs-talk-tip\" style=\"display: none;\"><em class=\"imjs-username\">XXXX</em>-对话中</span>");
				html	+=	("			</div>");
				html	+=	("			");
				html	+=	("			<div class=\"webim-user-list\" style=\"display: block;\">");
				html	+=	("				<div>");
				html	+=	("					<div id=\"imjs-myfriends\" class=\"webim-myfriends c-li\">我的联系人</div>");
				html	+=	("				</div>");
				html	+=	("				<div class=\"webim-username\" id=\"imjs-user-list\" style=\"height: 0px;\">");
				html	+=	("					<div id=\"imjs-main-contact-list\" >");
				html	+=	("						<div id=\"imjs-main-default\" class=\"c-li\" style=\"cursor:pointer;display:none\">");
				html	+=	("							<em title=\"删除\" class=\"webim-close\">&nbsp;</em>");
				html	+=	("							<a style=\"display:none\" title=\"删除\" class=\"webim-close-enter\">删除</a>");
				html	+=	("							<em class=\"webim-status\">&nbsp;</em>");
				html	+=	("							<em class=\"webim-username-n\"></em>");
				html	+=	("							<em style=\"display:none\" class=\"webim-msg-count\">0</em>");
				html	+=	("						</div>");
				html	+=	("					</div>");
				html	+=	("				</div>");
				html	+=	("				<div class=\"webim-system-msg\">");
				html	+=	("					<div id=\"imjs-main-0-0_0_0_0\" style=\"cursor:pointer\" class=\"webim-system-info c-li\">系统消息<em style=\"display:none\" class=\"webim-msg-count\">0</em></div>");
				html	+=	("				</div>");
				html	+=	("			</div>");
				html	+=	("");
				html	+=	("			<div class=\"webim-body-content imjs-body-content\" >");
				html	+=	("				<div class=\"webim-body-comtent-talk-tips\">");
				html	+=	("					&nbsp;&nbsp;来源：<a style=\"\" class=\"imjs-link\" href=\"#\" target=\"_blank\" title=\"\"></a><a></a>");
				html	+=	("				</div>");
				html	+=	("");
				html	+=	("				<div id=\"imjs-body-content-talk\" class=\"webim-body-content-talk\">");
				html	+=	("					<div class=\"imjs-msg-list\">");
				html	+=	("						<div class=\"textalign-left imjs-msg-default\">");
				html	+=	("							<div class=\"webim-body-comtent-msg-left imjs-msg-content\">{content}<s>&nbsp;</s></div><span class=\"webim-times imjs-msg-time\">{time}</span>");
				html	+=	("						</div>");
				html	+=	("						<div class=\"textalign-right imjs-msg-default\">");
				html	+=	("							<div class=\"webim-body-comtent-msg-right imjs-msg-content\">{content}<s>&nbsp;</s></div><span class=\"webim-times imjs-msg-time\">{time}</span>");
				html	+=	("						</div>");
				html	+=	("					</div>");
				html	+=	("				</div>");
				html	+=	("				<div class=\"imjs-left-bottom\" >");
				html	+=	("					<div class=\"webim-body-content-tools\">");
				html	+=	("						<a class=\"icon-history\" style=\"display:none\" href=\"#\" target=\"_blank\">聊天记录</a>");
				html	+=	("						<span class=\"icon-quicktalk\" title=\"快捷回复\">&nbsp;</span>");
				html	+=	("						<div class=\"webim-quick-submit\" style=\"display:none;\">");
				html	+=	("							<a href=\"javascript:void(0)\">您好，房子还在吗？</a>");
				html	+=	("							<a href=\"javascript:void(0)\">我先看看，然后联系你</a>");
				html	+=	("							<a href=\"javascript:void(0)\">您好，现在有点事情，等下认真回复您~</a>");
				html	+=	("							<a href=\"javascript:void(0)\">您好，价格还能再优惠些吗？</a>");
				html	+=	("							<a href=\"javascript:void(0)\">您好，图片是真实的吗？</a><span class=\"webim-quick-submit-arrow\">&nbsp;</span>");
				html	+=	("						</div>");
				html	+=	("					</div>");
				html	+=	("					<div class=\"webim-body-content-textarea\">");
				html	+=	("						<textarea id=\"imjs-textarea\" rows=\"\" cols=\"\" name=\"\" class=\"webim-textarea\" placeholder=\"点击输入您想询问的问题...\"></textarea>");
				html	+=	("					</div>");
				html	+=	("				</div>");
				html	+=	("				<div class=\"webim-body-comtent-footer\"><a class=\"webim-body-comtent-submit\" >发送</a>");
				html	+=	("					<a target=\"_blank\" href=\"#\">WEBIM .  马上下载&gt;&gt;</a>");
				html	+=	("					<div id=\"imjs-empty-tip\" class=\"webim-body-footer-tips\" style=\"display:none\"><s>&nbsp;</s>发送内容不能为空哦</div>");
				html	+=	("					<div id=\"imjs-selectuser-tip\" class=\"webim-body-footer-tips\" style=\"display:none\"><s>&nbsp;</s>请您选择用户哦</div>");
				html	+=	("				</div>");
				html	+=	("			</div>");
				html	+=	("");
				html	+=	("			<div id=\"imjs-guide-page\" class=\"webim-body-content\">");
				html	+=	("				<div class=\"webim-body-client\">");
				html	+=	("					<div class=\"webim-body-client-co1\">嗨，这是 <span style=\"font-size:14px;color:#7aaf23\">IM网页版</span><br>");
				html	+=	("					您点击页面中“<span class=\"client-im\">&nbsp;</span>”按钮，<br>");
				html	+=	("					即可发起对话，及时与发布者沟通。<br>");
				html	+=	("					对方不在线也可以留言哦。<br>");
				html	+=	("					赶紧试一试吧，<span style=\"color:#7aaf23\">在线聊更靠谱！</span>");
				html	+=	("					</div>");
				html	+=	("				</div>");
				html	+=	("				<div class=\"webim-body-comtent-footer\">");
				html	+=	("					<a target=\"_blank\" href=\"#\">IM在线 , 成交快.  马上下载&gt;&gt;</a>");
				html	+=	("				</div>");
				html	+=	("			</div>	");
				html	+=	("		</div>");
				html	+=	("");
				html	+=	("		<div class=\"publ-consult\" style=\"display:none\">");
				html	+=	("			<div class=\"clearfix\"><em class=\"consult-close\"></em> </div> ");
				html	+=	("			<div class=\"consult-con\"> ");
				html	+=	("				<p class=\"st1\">亲，好房子来啦！</p>");
				html	+=	("				<p class=\"st2\">听说亲在关注<span class=\"fon-bold\">\" \"</span>，小驴会给您找来三个靠谱经纪人哦！</p>	   ");
				html	+=	("				<p class=\"b-s clearfix\"><em class=\"st3 fl\">在线聊，靠谱！</em><em class=\"fr\"> <input name=\"\" type=\"button\" class=\"c-btn-s\" value=\"一键查询\"></em></p>	 ");
				html	+=	("			</div>");
				html	+=	("			<div class=\"webim-demand\" style=\"display:none\"></div>");
				html	+=	("		</div>");
				html	+=	("");
				html	+=	("		<div id=\"imjs-temp-tag\" style=\"display:none\">12</div>");
				html	+=	("	</div>");

			return this.each(function(){
				var $this = $(this);
				id=$this.get(0).id;
				$('#'+id).html(html);
				//创建滚动条
				$("#imjs-body-content-talk").jonScrollbar({
					theme:"msg"
				});
				$("#imjs-user-list").jonScrollbar({
					theme:"msg"
				});

				$this.data({
					"uid":options.uid,
					"sendApi":options.sendApi,
					"pushApi":options.pushApi,
					"limitMid":options.limitMid,
					"thisMid":0
				});

				//当前是否缩展
				$this.data("thisFold",$this.jonWebim("isFold"));
				//当前用户
				$this.data("thisUserId",'imjs-main-0-0_0_0_0');
				
				$this.jonWebim("initialize");

			});
		},
		initialize:function(){
			var $this = $(this);

			//初始化窗口是否折叠
			if ($this.data("thisFold")=="1"){
				$this.jonWebim("min");
			}else{
				$this.jonWebim("max");
			}
			//设置
			$('.webim-icon-setting').click(function() {
				if ($('.webim-icon-setting-tips').is(":hidden")==true){
					$('.webim-icon-setting-tips').show();
				}
				return false;
			});
			//隐藏设置
			$(document).click(function (){
				if ($('.webim-icon-setting-tips').is(":visible")==true){
					$('.webim-icon-setting-tips').hide();
				}
				if ($('#imjs-textarea').val().length < 1){
					$('#imjs-textarea').attr('placeholder','点击输入您想询问的问题...');
				}
			});
			//自动收起
			$('.imjs-fold').click(function() {
				$this.jonWebim("isFold","1");
			});
			//自动展开
			$('.imjs-unfold').click(function() {
				$this.jonWebim("isFold","0");
			});
			//最小化
			$('.webim-icon-mini').click(function() {
				$this.jonWebim("min");
			});
			//关闭
			$('.webim-icon-close').click(function() {
				$(document).unbind('click');
				$this.remove();
				return false;
			});
			//点击联系人、最大化
			$('#imjs-lianxiren').click(function() {
				/* 从某Mid开始重新获取新数据 */
				if ($('.webim-body-comtent-header').is(':hidden')==true){
					$this.jonWebim("max");
					$this.jonWebim("tab",$this.data("thisUserId"));
				}
			});
			//发送
			$('.webim-body-comtent-submit').click(function() {
				$this.jonWebim("send_msg",$('#imjs-textarea').val());
			});

			//联系列表缩展
			$('#imjs-myfriends').click(function() {
				if ($('#imjs-main-contact-list').is(':visible')==true){
					$('#imjs-myfriends').attr('class','webim-myfriends c-li webim-myfriends-close');
					$('#imjs-main-contact-list').hide();
				}else{
					$('#imjs-myfriends').attr('class','webim-myfriends c-li');
					$('#imjs-main-contact-list').show();
				}
				$this.jonWebim("user_list_hight");
				$("#imjs-user-list").jonScrollbar('setSize');
			});

			// 点击系统信息 
			$('#imjs-main-0-0_0_0_0').click(function() {
				$this.jonWebim("tab",'imjs-main-0-0_0_0_0');
				return false;
			});

			//绑定一些事件
			$this.jonWebim("bing_user_list");

			//启动监听（建议使用加密后的用户ID）
			$this.jonWebim("get_push");
		},
		close:function(){
			var $this = $(this);
			$this.jonWebim("min");
		},
		max:function(){
			var $this = $(this);
			$this.data("thisFold","0");
			$('.webim-body-comtent-header').show();
			if ($this.data("thisUserId")=="imjs-main-0-0_0_0_0"){
				$('.webim-body-content').show();
			}else{
				$('.webim-body-content.imjs-body-content').show();
			}
			$('.webim-user-list').show();
			$this.jonWebim("user_list_hight");
			$('#imjs-user-list').jonScrollbar('setSize');
		},
		min:function(){
			var $this = $(this);
			$this.data("thisFold","1");
			$('.webim-body-comtent-header').hide();
			$('.webim-body-content').hide();
			$('.webim-user-list').hide();
		},
		//读取webim是否折叠
		isFold:function(value){
			if (value){
				if(window.localStorage){
					localStorage.setItem("jonWebim_isFold", value);
				}else{
					$.cookie("jonWebim_isFold", value);
				}
				$this.jonWebim("isFold");
			}else{
				if(window.localStorage){
					var value = localStorage.getItem("jonWebim_isFold");
				}else{
					var value = $.cookie("jonWebim_isFold");
				}
				if (value=="1"){
					$('.imjs-fold').addClass('active');
					$('.imjs-unfold').removeClass('active');
				}else{
					$('.imjs-fold').removeClass('active');
					$('.imjs-unfold').addClass('active');
				}
				$('.webim-icon-setting-tips').hide();
				return value;
			}
			return value;
		},
		/* 绑定用户列表事件 */
		bing_user_list:function(){
			$this = $(this);
			// 点击联系人，切换成和他对话
			$('#imjs-main-contact-list .c-li').unbind('click').click(function() {
				$this.jonWebim("tab",$(this).attr("id"));
				$("#imjs-body-content-talk").jonScrollbar('scrollTo','last');
			});

			//查看更多聊天记录
			$('.webim-record').unbind('click').click(function() {
				_id=$(this).parent().attr("id").replace("imjs-msg-list-","");
				$this.jonWebim("get_push",_id);
			});

			//删除联系人列表中的联系人
			$('.webim-close').unbind('click').click(function() {
				$this.jonWebim("del_user_list",$(this).parent().attr('id'));
			});
			// IE6兼容 删除按钮  
			$('.imjs-open .c-li').unbind('hover').hover(function() {
				$(this).find('.webim-close').show();
			}, function() {
				$(this).find('.webim-close').hide();
			});			
		},
		/* 增加用户到用户列表 */
		add_user_list:function(json){
			var $this = $(this);
			if (typeof(json)=="string"){
				var json = (new Function("return " + json))();
			}
			//这里需要对JSON进行验证（未完成）

			//初始化聊天会话的最小和最大MID
			$this.data(json.uid+"-minMid",0);
			$this.data(json.uid+"-maxMid",0);

			//用户列表的HTML内容
			var html =	'<div id="imjs-main-'+json.uid+'-0_0_0_0" class="c-li" style="cursor: pointer;" data-username="'+json.userName+'" data-userstatus="'+json.userStatus+'" data-posttitle="'+json.postTitle+'" data-posturl="'+json.postUrl+'">';
				html+=	'	<em title="删除" class="webim-close">&nbsp;</em>';
				html+=	'	<a style="display:none" title="删除" class="webim-close-enter">删除</a>';
				html+=	'	<em class="webim-status webim-username-online">&nbsp;</em>';
				html+=	'	<em class="webim-username-n">'+json.userName+'</em>';
				html+=	'	<em style="display:none" class="webim-msg-count">0</em>';
				html+=	'</div>';
			if ($('#imjs-main-'+json.uid+'-0_0_0_0').length == 0){
				//新增用户
				$("#imjs-main-contact-list").prepend(html);
			}else{
				//修改用户（采取移除后插入比较方便）
				$id=$("#imjs-main-"+json.uid+"-0_0_0_0");
				$id.html(html);
				$id.attr('data-username',json.userName);
				$id.attr('data-userstatus',json.userStatus);
				$id.attr('data-posttitle',json.postTitle);
				$id.attr('data-posturl',json.postUrl);
			}

			//判断聊天会话是否存在，否则新建,以便存放聊天内容
			if ($("#imjs-msg-list-"+json.uid).length == 0 ) {
				var html = '<div id="imjs-msg-list-'+json.uid+'" style="display:none; "><div class="webim-record"><span>查看以前记录</span></div></div>';
				$(".imjs-msg-list").prepend(html);
			}

			//是否在线的样式
			if (json.userStatus!="1"){
				$('#imjs-main-'+json.uid+'-0_0_0_0').find('.webim-status').attr('class','webim-status webim-username-offline');
			}else{
				$('#imjs-main-'+json.uid+'-0_0_0_0').find('.webim-status').attr('class','webim-status webim-username-online');
			}
			//绑定，更新在线人数
			$this.jonWebim("bing_user_list");
			$this.jonWebim("sum_user_number");

			//展开的情况下或者是从页面直接进来的需要立即响应的请求
			if (json.reply=="1"){
				if ($this.data("thisFold")=="1") $this.jonWebim("max");
			}
			if ($this.data("thisFold")=="0"){
				$this.jonWebim("tab",'imjs-main-'+json.uid+'-0_0_0_0');
				$this.jonWebim("user_list_hight");
				$("#imjs-user-list").jonScrollbar('scrollTo',0);
			}
		},
		/* 删除用户 */
		del_user_list:function(id){
			var $this = $(this);
			$('#'+id).remove();
			if ($this.data("thisUserId")==id) $this.data("thisUserId",'imjs-main-0-0_0_0_0');
			if ($this.data("thisFold")=="0"){
				$this.jonWebim("user_list_hight");
				$('#imjs-user-list').jonScrollbar('setSize');
				$this.jonWebim("tab",$this.data("thisUserId"));
			}
			$this.jonWebim("sum_user_number");
		},
		/* 统计用户 */
		sum_user_number:function(){
			var $this = $(this);
			var on=-1,off=0;
			$(".webim-username-offline").each(function(index){
				off++;
			});
			$(".webim-username-online").each(function(index){
				on++;
			});
			$('.fc-green').html(on);
			$('.imjs-lianxiren-count').html(off+on);
		},
		/* 处理用户列表高度 */
		user_list_hight:function(){
			if ($('#imjs-main-contact-list').is(':visible')==true){
				var _hight=$('#imjs-main-contact-list').outerHeight();
				if (_hight>313) _hight=313;
				$('#imjs-user-list').attr('style', 'height: '+_hight+'px;');
			}else{
				$('#imjs-user-list').attr('style', 'height: 0px;');
			}
		},
		/* tab切换 */
		tab:function(id){
			var $this = $(this);
			/* 已选tab不再处理，防止增加负载 */
			if ($('#'+id).hasClass('c-li-open')==false){
				$('#imjs-main-contact-list .c-li').removeClass('c-li-open'); 
				if (id=='imjs-main-0-0_0_0_0'){
					$('#imjs-main-0-0_0_0_0').addClass('c-li-open');
					if ($this.data("thisFold")=="0") $('#imjs-guide-page').show();
					$('.webim-body-comtent-header .imjs-username').html('<strong>系统消息</strong>');
				}else{
					$('#imjs-main-0-0_0_0_0').removeClass('c-li-open');
					$('#'+id).addClass('c-li-open');
					$('#imjs-guide-page').hide();
					$('.webim-body-comtent-header .imjs-username').html('<strong>'+$('#'+id).attr('data-username')+'</strong>');
					/* 来源 */
					$('.imjs-link').attr('href',$('#'+id).attr('data-posturl'));
					$('.imjs-link').attr('title',$('#'+id).attr('data-posttitle'));
					$('.imjs-link').text($('#'+id).attr('data-posttitle'));
				}
				//隐藏所有聊天会话,并显示当前ID的聊天会话
				$('[id^="imjs-msg-list-"]').hide();
				_id=id.replace("imjs-main-","").replace("-0_0_0_0","");
				$('#imjs-msg-list-'+_id).show();

				$this.jonWebim("user_list_hight");
				/* 加载本机历史数据 */

				/* 保存当前用户 */
				$this.data("thisUserId",id);
				/* 更新滚动条 */
				$("#imjs-body-content-talk").jonScrollbar('scrollTo','last');
			}
			return false;
		},
		/* 获取推送的数据(包括用户列表，用户状态，消息列表) */
		get_push:function(_id){
			$this = $(this);
			var uid=$this.data("uid");
			if (_id){
				mid=$this.data(_id+'-minMid')?-$this.data(_id+'-minMid'):-1;
			}else{
				var _id=0;
				mid=$this.data("thisMid");
			}
			$.getJSON($this.data("pushApi")+"c="+uid+"&m="+mid+"&to="+_id+"&callback=?", function(json){
				if (json!="request"){
					//先处理会员信息
					if (json.user.length>0){
						$.each(json.user,function(key,value){
							$this.jonWebim("add_user_list",value);
						});
					}
					//再处理聊天信息
					if (json.msg.length>0){
						$.each(json.msg,function(key,value){
							$this.jonWebim("add_msg_list",value);
						});
					}
				}
				//循环请求
				if (_id==0){
					$this.jonWebim("get_push");
				}
				$("#imjs-body-content-talk").jonScrollbar('scrollTo','0');
			});
		},
		/* 增加信息到列表 */
		add_msg_list:function(json){
			var $this = $(this);
			if (typeof(json)=="string"){
				var json = (new Function("return " + json))();
			}
			//json验证，未完成

			//给聊天会话加入的聊天信息内容	
			var html;
			if (json.reply==1){
				html	=	("<div class=\"textalign-left\" id='imjs-msg-id-"+json.mid+"'>");
				html	+=	("	<div class=\"webim-body-comtent-msg-left imjs-msg-content\">'"+json.con+"'<s>&nbsp;</s></div><span class=\"webim-times imjs-msg-time\">'"+json.time+"'</span>");
				html	+=	("</div>");
			}else{
				html	=	("<div class=\"textalign-right\" id='imjs-msg-id-"+json.mid+"'>");
				html	+=	("	<div class=\"webim-body-comtent-msg-right imjs-msg-content\">'"+json.con+"'<s>&nbsp;</s></div><span class=\"webim-times imjs-msg-time\">'"+json.time+"'</span>");
				html	+=	("</div>");
			}
			if ($('#imjs-msg-id-'+json.mid).length==0){
				$('#imjs-msg-list-'+json.uid).append(html);
				if ($this.data("thisFold")=="0"){
				}				
			}
			//修改聊天会话的最小和最大MID
			if ($this.data(json.uid+"-minMid")>json.mid || $this.data(json.uid+"-minMid")==0) $this.data(json.uid+"-minMid",json.mid);
			if ($this.data(json.uid+"-maxMid")<json.mid || $this.data(json.uid+"-maxMid")==0) $this.data(json.uid+"-maxMid",json.mid);
			//修改聊天会话的MID
			if ($this.data("thisMid")<json.mid) $this.data("thisMid",json.mid);
		},
		/* 发送信息 */
		send_msg:function(con){
			$this = $(this);
			if (con.length==0) alert('信息不能为空');
			//需要字符处理，SQL，XSS

			//异步发送
			var _id=$this.data("thisUserId").replace("imjs-main-","").replace("-0_0_0_0","");
			$.getJSON($this.data("sendApi")+"&uid="+_id+"&con="+con+"&callback=?", function(json){
				if (json=="1"){
					$('#imjs-textarea').val('');
					$('#imjs-textarea').attr('placeholder','发送成功');

				}else{
					alert("发送失败");
				}
			});
		},
		/* 封装保存数据的方法 */
		storage:function(key,value){
			if (value!=null){
				if(window.localStorage){
					localStorage.setItem(key, value);
				}else{
					$.cookie(key, value);
				}
			}else{
				if(window.localStorage){
					var value = localStorage.getItem(key);
				}else{
					var value = $.cookie(key);
				}
			}
			return value;
		}
	};

	/*plugin fn*/
	$.fn.jonWebim=function(method){
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
})(jQuery);