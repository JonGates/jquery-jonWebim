/*
== jon jquery webim plugin == 
version: 0.0.0.1 
author: Jon Gates (http://blog.jongates.org) 
plugin home: https://github.com/JonGates/jquery-jonWebim
*/

;(function($){
	/*methods | 方法*/
	var methods={
		init:function(options){
			var defaults={
				theme			: 'light'
			},
			options=$.extend({},defaults,options);
			var html	=	("	<div class=\"imjs-open\">");
				html	+=	("		<div class=\"webim-body\">");
				html	+=	("			<div class=\"webim-body-msg-count\"><span style=\"display:none\" class=\"webim-msg-count\">0</span></div>");
				html	+=	("			<div class=\"webim-body-comtent-header\" style=\"display: block;\">");
				html	+=	("				<div class=\"webim-icon-setting-tips\" style=\"display:none\">");
				html	+=	("					<a href=\"javascript:;\" class=\"active\">自动收起</a><a class=\"imjs-unfold\" href=\"javascript:;\">保持展开</a>");
				html	+=	("				</div>");
				html	+=	("				<span class=\"webim-header-minibar\"><em class=\"webim-icon-setting\" title=\"设置\">&nbsp;</em><em class=\"webim-icon-mini\" title=\"最小化\">&nbsp;</em><em class=\"webim-icon-close\" title=\"关闭\">&nbsp;</em></span>");
				html	+=	("				<em class=\"imjs-userstatus webim-username-online\">&nbsp;</em><em class=\"imjs-username\"><strong>谢军</strong></em>");
				html	+=	("			</div>");
				html	+=	("			<div id=\"imjs-lianxiren\" class=\"webim-lianxiren\">");
				html	+=	("				<!--<span class=\"imjs-allnewmsg-count\">0</span>-->");
				html	+=	("				<span class=\"imjs-lianxiren-tip\" style=\"display: inline;\">联系人[ <span class=\"fc-green\">3</span> / <em class=\"imjs-lianxiren-count\">3</em> ]</span>");
				html	+=	("				<span class=\"imjs-newmsgcount-tip\" style=\"display: none;\">您有<em class=\"imjs-newmsg-count\">0</em>条新消息</span>");
				html	+=	("				<span class=\"imjs-talk-tip\" style=\"display: none;\"><em class=\"imjs-username\">谢军</em>-对话中</span>");
				html	+=	("			</div>");
				html	+=	("			");
				html	+=	("			<div class=\"webim-user-list\" style=\"display: block;\">");
				html	+=	("				<div>");
				html	+=	("					<div id=\"imjs-myfriends\" class=\"webim-myfriends c-li\">我的联系人</div>");
				html	+=	("				</div>");
				html	+=	("				<div class=\"webim-username\" id=\"imjs-user-list\" style=\"height: 46px;\">");
				html	+=	("					<div id=\"imjs-main-contact-list\" style=\"display: block;\">");
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
				html	+=	("			<div class=\"webim-body-content imjs-body-content\" style=\"display: block;\">");
				html	+=	("				<div class=\"webim-body-comtent-talk-tips\">");
				html	+=	("					&nbsp;&nbsp;来源：<a style=\"\" class=\"imjs-link\" href=\"#\" target=\"_blank\" title=\"小谢推荐，东安小两房\">小谢推荐，东安小两房</a><a></a>");
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
				html	+=	("				<div class=\"imjs-left-bottom\" style=\"display: block;\">");
				html	+=	("					<div class=\"webim-body-content-tools\">");
				html	+=	("						<a class=\"icon-history\" style=\"display:none\" href=\"http://www.ganji.com/vip/my_message_list.php\" target=\"_blank\">聊天记录</a>");
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
				html	+=	("				<div class=\"webim-body-comtent-footer\"><a class=\"webim-body-comtent-submit\" style=\"display: block;\">发送</a>");
				html	+=	("					<a target=\"_blank\" href=\"#\">WEBIM .  马上下载&gt;&gt;</a>");
				html	+=	("					<div id=\"imjs-empty-tip\" class=\"webim-body-footer-tips\" style=\"display:none\"><s>&nbsp;</s>发送内容不能为空哦</div>");
				html	+=	("					<div id=\"imjs-selectuser-tip\" class=\"webim-body-footer-tips\" style=\"display:none\"><s>&nbsp;</s>请您选择用户哦</div>");
				html	+=	("				</div>");
				html	+=	("			</div>");
				html	+=	("");
				html	+=	("			<div id=\"imjs-guide-page\" class=\"webim-body-content\" style=\"display: none;\">");
				html	+=	("				<div class=\"webim-body-client\">");
				html	+=	("					<div class=\"webim-body-client-co1\">嗨，这是 <span style=\"font-size:14px;color:#7aaf23\">叮咚网页版</span><br>");
				html	+=	("					您点击页面中“<span class=\"client-im\">&nbsp;</span>”按钮，<br>");
				html	+=	("					即可发起对话，及时与发布者沟通。<br>");
				html	+=	("					对方不在线也可以留言哦。<br>");
				html	+=	("					赶紧试一试吧，<span style=\"color:#7aaf23\">在线聊更靠谱！</span>");
				html	+=	("					</div>");
				html	+=	("				</div>");
				html	+=	("				<div class=\"webim-body-comtent-footer\">");
				html	+=	("					<a target=\"_blank\" href=\"http://dingdong.ganji.com\">叮咚在线 , 成交快.  马上下载&gt;&gt;</a>");
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

			var html	=	("");
				html	+=	("	<div id=\"webim2\" class=\"imjs-open\">");
				html	+=	("		<div class=\"webim-body\">");
				html	+=	("			<div class=\"webim-body-msg-count\"><span style=\"display:none\" class=\"webim-msg-count\">0</span></div>");
				html	+=	("			<div class=\"webim-body-comtent-header\" style=\"display: block;\">");
				html	+=	("				<div class=\"webim-icon-setting-tips\" style=\"display:none\">");
				html	+=	("					<a href=\"javascript:;\" class=\"active\">自动收起</a><a class=\"imjs-unfold\" href=\"javascript:;\">保持展开</a>");
				html	+=	("				</div>");
				html	+=	("				<span class=\"webim-header-minibar\"><em class=\"webim-icon-setting\" title=\"设置\">&nbsp;</em><em class=\"webim-icon-mini\" title=\"最小化\">&nbsp;</em><em class=\"webim-icon-close\" title=\"关闭\">&nbsp;</em></span>");
				html	+=	("				<em class=\"imjs-userstatus webim-username-online\">&nbsp;</em><em class=\"imjs-username\"><strong>谢军</strong></em>");
				html	+=	("			</div>");
				html	+=	("			<div id=\"imjs-lianxiren\" class=\"webim-lianxiren\">");
				html	+=	("				<!--<span class=\"imjs-allnewmsg-count\">0</span>-->");
				html	+=	("				<span class=\"imjs-lianxiren-tip\" style=\"display: inline;\">联系人[ <span class=\"fc-green\">3</span> / <em class=\"imjs-lianxiren-count\">3</em> ]</span>");
				html	+=	("				<span class=\"imjs-newmsgcount-tip\" style=\"display: none;\">您有<em class=\"imjs-newmsg-count\">0</em>条新消息</span>");
				html	+=	("				<span class=\"imjs-talk-tip\" style=\"display: none;\"><em class=\"imjs-username\">谢军</em>-对话中</span>");
				html	+=	("			</div>");
				html	+=	("			");
				html	+=	("			<div class=\"webim-user-list\" style=\"display: block;\">");
				html	+=	("				<div>");
				html	+=	("					<div id=\"imjs-myfriends\" class=\"webim-myfriends c-li\">我的联系人</div>");
				html	+=	("				</div>");
				html	+=	("				<div class=\"webim-username\" id=\"imjs-user-list\" style=\"height: 0px;\">");
				html	+=	("					<div id=\"imjs-main-contact-list\" style=\"display: block;\">");
				html	+=	("						<div id=\"imjs-main-206952533-0_0_0_0\" class=\"c-li c-li-open\" style=\"cursor: pointer;\" data-username=\"谢军\" data-userstatus=\"1\" data-postid=\"62038840_5_1002_1003\" data-posttitle=\"小谢推荐，东安小两房\" data-posturl=\"http://sanming.ganji.com/fang5/tuiguang-62038840.htm\">");
				html	+=	("							<em title=\"删除\" class=\"webim-close\">&nbsp;</em>");
				html	+=	("							<a style=\"display:none\" title=\"删除\" class=\"webim-close-enter\">删除</a>");
				html	+=	("							<em class=\"webim-status webim-username-online\">&nbsp;</em>");
				html	+=	("							<em class=\"webim-username-n\">谢军</em>");
				html	+=	("							<em style=\"display:none\" class=\"webim-msg-count\">0</em>");
				html	+=	("						</div>");
				html	+=	("						<div id=\"imjs-main-2959095-0_0_0_0\" class=\"c-li\" style=\"cursor: pointer;\" data-username=\"陈德树\" data-userstatus=\"1\" data-postid=\"60845355_5_1002_1003\" data-posttitle=\"红岩新村73万 71平米 2房 普通装修 南北,好房不等人\" data-posturl=\"http://sanming.ganji.com/fang5/tuiguang-60845355.htm\">");
				html	+=	("							<em title=\"删除\" class=\"webim-close\">&nbsp;</em>");
				html	+=	("							<a style=\"display:none\" title=\"删除\" class=\"webim-close-enter\">删除</a>");
				html	+=	("							<em class=\"webim-status webim-username-online\">&nbsp;</em>");
				html	+=	("							<em class=\"webim-username-n\">陈德树</em>");
				html	+=	("							<em style=\"display:none\" class=\"webim-msg-count\">0</em>");
				html	+=	("						</div>");
				html	+=	("						<div id=\"imjs-main-2160518131-0_0_0_0\" class=\"c-li\" style=\"cursor: pointer;\" data-username=\"许东秀\" data-userstatus=\"1\" data-postid=\"43830903_5_1002_1003\" data-posttitle=\"水厂附近，2房1厅优惠出售\" data-posturl=\"http://sanming.ganji.com/fang5/tuiguang-43830903.htm\">");
				html	+=	("							<em title=\"删除\" class=\"webim-close\">&nbsp;</em>");
				html	+=	("							<a style=\"display:none\" title=\"删除\" class=\"webim-close-enter\">删除</a>");
				html	+=	("							<em class=\"webim-status webim-username-online\">&nbsp;</em>");
				html	+=	("							<em class=\"webim-username-n\">许东秀1</em>");
				html	+=	("							<em style=\"display:none\" class=\"webim-msg-count\">0</em>");
				html	+=	("						</div>");
				html	+=	("						<div id=\"imjs-main-2160518132-0_0_0_0\" class=\"c-li\" style=\"cursor: pointer;\" data-username=\"许东秀\" data-userstatus=\"1\" data-postid=\"43830903_5_1002_1003\" data-posttitle=\"水厂附近，2房1厅优惠出售\" data-posturl=\"http://sanming.ganji.com/fang5/tuiguang-43830903.htm\">");
				html	+=	("							<em title=\"删除\" class=\"webim-close\">&nbsp;</em>");
				html	+=	("							<a style=\"display:none\" title=\"删除\" class=\"webim-close-enter\">删除</a>");
				html	+=	("							<em class=\"webim-status webim-username-online\">&nbsp;</em>");
				html	+=	("							<em class=\"webim-username-n\">许东秀2</em>");
				html	+=	("							<em style=\"display:none\" class=\"webim-msg-count\">0</em>");
				html	+=	("						</div>");
				html	+=	("						<div id=\"imjs-main-2160518133-0_0_0_0\" class=\"c-li\" style=\"cursor: pointer;\" data-username=\"许东秀\" data-userstatus=\"1\" data-postid=\"43830903_5_1002_1003\" data-posttitle=\"水厂附近，2房1厅优惠出售\" data-posturl=\"http://sanming.ganji.com/fang5/tuiguang-43830903.htm\">");
				html	+=	("							<em title=\"删除\" class=\"webim-close\">&nbsp;</em>");
				html	+=	("							<a style=\"display:none\" title=\"删除\" class=\"webim-close-enter\">删除</a>");
				html	+=	("							<em class=\"webim-status webim-username-online\">&nbsp;</em>");
				html	+=	("							<em class=\"webim-username-n\">许东秀3</em>");
				html	+=	("							<em style=\"display:none\" class=\"webim-msg-count\">0</em>");
				html	+=	("						</div>");
				html	+=	("						<div id=\"imjs-main-2160518134-0_0_0_0\" class=\"c-li\" style=\"cursor: pointer;\" data-username=\"许东秀\" data-userstatus=\"1\" data-postid=\"43830903_5_1002_1003\" data-posttitle=\"水厂附近，2房1厅优惠出售\" data-posturl=\"http://sanming.ganji.com/fang5/tuiguang-43830903.htm\">");
				html	+=	("							<em title=\"删除\" class=\"webim-close\">&nbsp;</em>");
				html	+=	("							<a style=\"display:none\" title=\"删除\" class=\"webim-close-enter\">删除</a>");
				html	+=	("							<em class=\"webim-status webim-username-online\">&nbsp;</em>");
				html	+=	("							<em class=\"webim-username-n\">许东秀4</em>");
				html	+=	("							<em style=\"display:none\" class=\"webim-msg-count\">0</em>");
				html	+=	("						</div>");
				html	+=	("						<div id=\"imjs-main-2160518135-0_0_0_0\" class=\"c-li\" style=\"cursor: pointer;\" data-username=\"许东秀\" data-userstatus=\"1\" data-postid=\"43830903_5_1002_1003\" data-posttitle=\"水厂附近，2房1厅优惠出售\" data-posturl=\"http://sanming.ganji.com/fang5/tuiguang-43830903.htm\">");
				html	+=	("							<em title=\"删除\" class=\"webim-close\">&nbsp;</em>");
				html	+=	("							<a style=\"display:none\" title=\"删除\" class=\"webim-close-enter\">删除</a>");
				html	+=	("							<em class=\"webim-status webim-username-online\">&nbsp;</em>");
				html	+=	("							<em class=\"webim-username-n\">许东秀5</em>");
				html	+=	("							<em style=\"display:none\" class=\"webim-msg-count\">0</em>");
				html	+=	("						</div>");
				html	+=	("						<div id=\"imjs-main-2160518136-0_0_0_0\" class=\"c-li\" style=\"cursor: pointer;\" data-username=\"许东秀\" data-userstatus=\"1\" data-postid=\"43830903_5_1002_1003\" data-posttitle=\"水厂附近，2房1厅优惠出售\" data-posturl=\"http://sanming.ganji.com/fang5/tuiguang-43830903.htm\">");
				html	+=	("							<em title=\"删除\" class=\"webim-close\">&nbsp;</em>");
				html	+=	("							<a style=\"display:none\" title=\"删除\" class=\"webim-close-enter\">删除</a>");
				html	+=	("							<em class=\"webim-status webim-username-online\">&nbsp;</em>");
				html	+=	("							<em class=\"webim-username-n\">许东秀6</em>");
				html	+=	("							<em style=\"display:none\" class=\"webim-msg-count\">0</em>");
				html	+=	("						</div>");
				html	+=	("						<div id=\"imjs-main-2160518137-0_0_0_0\" class=\"c-li\" style=\"cursor: pointer;\" data-username=\"许东秀\" data-userstatus=\"1\" data-postid=\"43830903_5_1002_1003\" data-posttitle=\"水厂附近，2房1厅优惠出售\" data-posturl=\"http://sanming.ganji.com/fang5/tuiguang-43830903.htm\">");
				html	+=	("							<em title=\"删除\" class=\"webim-close\">&nbsp;</em>");
				html	+=	("							<a style=\"display:none\" title=\"删除\" class=\"webim-close-enter\">删除</a>");
				html	+=	("							<em class=\"webim-status webim-username-online\">&nbsp;</em>");
				html	+=	("							<em class=\"webim-username-n\">许东秀7</em>");
				html	+=	("							<em style=\"display:none\" class=\"webim-msg-count\">0</em>");
				html	+=	("						</div>");
				html	+=	("						<div id=\"imjs-main-2160518138-0_0_0_0\" class=\"c-li\" style=\"cursor: pointer;\" data-username=\"许东秀\" data-userstatus=\"1\" data-postid=\"43830903_5_1002_1003\" data-posttitle=\"水厂附近，2房1厅优惠出售\" data-posturl=\"http://sanming.ganji.com/fang5/tuiguang-43830903.htm\">");
				html	+=	("							<em title=\"删除\" class=\"webim-close\">&nbsp;</em>");
				html	+=	("							<a style=\"display:none\" title=\"删除\" class=\"webim-close-enter\">删除</a>");
				html	+=	("							<em class=\"webim-status webim-username-online\">&nbsp;</em>");
				html	+=	("							<em class=\"webim-username-n\">许东秀8</em>");
				html	+=	("							<em style=\"display:none\" class=\"webim-msg-count\">0</em>");
				html	+=	("						</div>");
				html	+=	("						<div id=\"imjs-main-2160518139-0_0_0_0\" class=\"c-li\" style=\"cursor: pointer;\" data-username=\"许东秀\" data-userstatus=\"1\" data-postid=\"43830903_5_1002_1003\" data-posttitle=\"水厂附近，2房1厅优惠出售\" data-posturl=\"http://sanming.ganji.com/fang5/tuiguang-43830903.htm\">");
				html	+=	("							<em title=\"删除\" class=\"webim-close\">&nbsp;</em>");
				html	+=	("							<a style=\"display:none\" title=\"删除\" class=\"webim-close-enter\">删除</a>");
				html	+=	("							<em class=\"webim-status webim-username-online\">&nbsp;</em>");
				html	+=	("							<em class=\"webim-username-n\">许东秀9</em>");
				html	+=	("							<em style=\"display:none\" class=\"webim-msg-count\">0</em>");
				html	+=	("						</div>");
				html	+=	("						<div id=\"imjs-main-2160518110-0_0_0_0\" class=\"c-li\" style=\"cursor: pointer;\" data-username=\"许东秀\" data-userstatus=\"1\" data-postid=\"43830903_5_1002_1003\" data-posttitle=\"水厂附近，2房1厅优惠出售\" data-posturl=\"http://sanming.ganji.com/fang5/tuiguang-43830903.htm\">");
				html	+=	("							<em title=\"删除\" class=\"webim-close\">&nbsp;</em>");
				html	+=	("							<a style=\"display:none\" title=\"删除\" class=\"webim-close-enter\">删除</a>");
				html	+=	("							<em class=\"webim-status webim-username-online\">&nbsp;</em>");
				html	+=	("							<em class=\"webim-username-n\">许东秀10</em>");
				html	+=	("							<em style=\"display:none\" class=\"webim-msg-count\">0</em>");
				html	+=	("						</div>");
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
				html	+=	("			<!--左侧聊天窗口 -->");
				html	+=	("			<div class=\"webim-body-content imjs-body-content\" style=\"display: block;\">");
				html	+=	("				<div class=\"webim-body-comtent-talk-tips\">");
				html	+=	("					&nbsp;&nbsp;来源：<a style=\"\" class=\"imjs-link\" href=\"http://sanming.ganji.com/fang5/tuiguang-62038840.htm\" target=\"_blank\" title=\"小谢推荐，东安小两房\">小谢推荐，东安小两房</a><a></a>");
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
				html	+=	("");
				html	+=	("						<div class=\"textalign-left\" id=\"msg_587279233\">");
				html	+=	("							<div class=\"webim-body-comtent-msg-left imjs-msg-content\"><div id=\"msgcontent2_587279233\"><span id=\"msgcontent_587279233\"></span>明珠房产小谢，竭诚为您服务 电话180 6579 4975</div><s>&nbsp;</s></div><span class=\"webim-times imjs-msg-time\">06-06 19:18</span>");
				html	+=	("						</div>");
				html	+=	("										<div class=\"textalign-left\" id=\"msg_587279233\">");
				html	+=	("							<div class=\"webim-body-comtent-msg-left imjs-msg-content\"><div id=\"msgcontent2_587279233\"><span id=\"msgcontent_587279233\"></span>明珠房产小谢，竭诚为您服务 电话180 6579 4975</div><s>&nbsp;</s></div><span class=\"webim-times imjs-msg-time\">06-06 19:18</span>");
				html	+=	("						</div>");
				html	+=	("										<div class=\"textalign-left\" id=\"msg_587279233\">");
				html	+=	("							<div class=\"webim-body-comtent-msg-left imjs-msg-content\"><div id=\"msgcontent2_587279233\"><span id=\"msgcontent_587279233\"></span>明珠房产小谢，竭诚为您服务 电话180 6579 4975</div><s>&nbsp;</s></div><span class=\"webim-times imjs-msg-time\">06-06 19:18</span>");
				html	+=	("						</div>");
				html	+=	("										<div class=\"textalign-left\" id=\"msg_587279233\">");
				html	+=	("							<div class=\"webim-body-comtent-msg-left imjs-msg-content\"><div id=\"msgcontent2_587279233\"><span id=\"msgcontent_587279233\"></span>明珠房产小谢，竭诚为您服务 电话180 6579 4975</div><s>&nbsp;</s></div><span class=\"webim-times imjs-msg-time\">06-06 19:18</span>");
				html	+=	("						</div>");
				html	+=	("										<div class=\"textalign-left\" id=\"msg_587279233\">");
				html	+=	("							<div class=\"webim-body-comtent-msg-left imjs-msg-content\"><div id=\"msgcontent2_587279233\"><span id=\"msgcontent_587279233\"></span>明珠房产小谢，竭诚为您服务 电话180 6579 4975</div><s>&nbsp;</s></div><span class=\"webim-times imjs-msg-time\">06-06 19:18</span>");
				html	+=	("						</div>");
				html	+=	("										<div class=\"textalign-left\" id=\"msg_587279233\">");
				html	+=	("							<div class=\"webim-body-comtent-msg-left imjs-msg-content\"><div id=\"msgcontent2_587279233\"><span id=\"msgcontent_587279233\"></span>明珠房产小谢，竭诚为您服务 电话180 6579 4975</div><s>&nbsp;</s></div><span class=\"webim-times imjs-msg-time\">06-06 19:18</span>");
				html	+=	("						</div>");
				html	+=	("						");
				html	+=	("						<div class=\"textalign-right\" id=\"msg_1402038540602\">");
				html	+=	("							<div class=\"webim-body-comtent-msg-right imjs-msg-content\">");
				html	+=	("								<div id=\"msgcontent1_1402038540602\">12</div><s>&nbsp;</s>");
				html	+=	("							</div><span class=\"webim-times imjs-msg-time\">15:09</span>");
				html	+=	("						</div>");
				html	+=	("					</div>");
				html	+=	("				</div>");
				html	+=	("				<div class=\"imjs-left-bottom\" style=\"display: block;\">");
				html	+=	("					<div class=\"webim-body-content-tools\">");
				html	+=	("						<a class=\"icon-history\" style=\"display:none\" href=\"http://www.ganji.com/vip/my_message_list.php\" target=\"_blank\">聊天记录</a>");
				html	+=	("						<span class=\"icon-emotions\" title=\"选择表情\">&nbsp;</span>");
				html	+=	("						<span class=\"icon-quicktalk\" title=\"快捷回复\">&nbsp;</span>");
				html	+=	("						<!--<span class=\"icon-images\" title=\"发送图片\">&nbsp;</span>--> ");
				html	+=	("						<!--表情开始 -->");
				html	+=	("						<!--表情结束 -->");
				html	+=	("						<div class=\"webim-quick-submit\" style=\"display:none;\">");
				html	+=	("							<a href=\"javascript:void(0)\">您好，房子还在吗？</a>");
				html	+=	("							<a href=\"javascript:void(0)\">我先看看，然后联系你</a>");
				html	+=	("							<a href=\"javascript:void(0)\">您好，现在有点事情，等下认真回复您~</a>");
				html	+=	("							<a href=\"javascript:void(0)\">您好，价格还能再优惠些吗？</a>");
				html	+=	("							<a href=\"javascript:void(0)\">您好，图片是真实的吗？</a><span class=\"webim-quick-submit-arrow\">&nbsp;</span>");
				html	+=	("						</div>");
				html	+=	("						<div id=\"imjs-emotion\" class=\"ePanel\" style=\"display:none\">");
				html	+=	("							<div class=\"ePdefault\" style=\"left: 3px; right: auto;\">");
				html	+=	("								<img src=\"http://sta.ganjistatic1.com/src/tool/webim/image/emotions/79.gif\"><span>强</span>");
				html	+=	("							</div>");
				html	+=	("							<ul node-type=\"hotFace\" class=\"eDefault\">");
				html	+=	("								<div class=\"ePanelarea page1\" style=\"display:block\">");
				html	+=	("									<li><a emotionid=\"0\" href=\"javascript:;\"><div class=\"icon eDefault_0\" emotionid=\"0\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"1\" href=\"javascript:;\"><div class=\"icon eDefault_1\" emotionid=\"1\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"2\" href=\"javascript:;\"><div class=\"icon eDefault_2\" emotionid=\"2\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"3\" href=\"javascript:;\"><div class=\"icon eDefault_3\" emotionid=\"3\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"4\" href=\"javascript:;\"><div class=\"icon eDefault_4\" emotionid=\"4\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"5\" href=\"javascript:;\"><div class=\"icon eDefault_5\" emotionid=\"5\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"6\" href=\"javascript:;\"><div class=\"icon eDefault_6\" emotionid=\"6\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"7\" href=\"javascript:;\"><div class=\"icon eDefault_7\" emotionid=\"7\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"8\" href=\"javascript:;\"><div class=\"icon eDefault_8\" emotionid=\"8\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"9\" href=\"javascript:;\"><div class=\"icon eDefault_9\" emotionid=\"9\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"10\" href=\"javascript:;\"><div class=\"icon eDefault_10\" emotionid=\"10\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"11\" href=\"javascript:;\"><div class=\"icon eDefault_11\" emotionid=\"11\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"12\" href=\"javascript:;\"><div class=\"icon eDefault_12\" emotionid=\"12\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"13\" href=\"javascript:;\"><div class=\"icon eDefault_13\" emotionid=\"13\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"14\" href=\"javascript:;\"><div class=\"icon eDefault_14\" emotionid=\"14\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"15\" href=\"javascript:;\"><div class=\"icon eDefault_15\" emotionid=\"15\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"16\" href=\"javascript:;\"><div class=\"icon eDefault_16\" emotionid=\"16\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"17\" href=\"javascript:;\"><div class=\"icon eDefault_17\" emotionid=\"17\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"18\" href=\"javascript:;\"><div class=\"icon eDefault_18\" emotionid=\"18\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"19\" href=\"javascript:;\"><div class=\"icon eDefault_19\" emotionid=\"19\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"20\" href=\"javascript:;\"><div class=\"icon eDefault_20\" emotionid=\"20\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"21\" href=\"javascript:;\"><div class=\"icon eDefault_21\" emotionid=\"21\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"22\" href=\"javascript:;\"><div class=\"icon eDefault_22\" emotionid=\"22\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"23\" href=\"javascript:;\"><div class=\"icon eDefault_23\" emotionid=\"23\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"24\" href=\"javascript:;\"><div class=\"icon eDefault_24\" emotionid=\"24\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"25\" href=\"javascript:;\"><div class=\"icon eDefault_25\" emotionid=\"25\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"26\" href=\"javascript:;\"><div class=\"icon eDefault_26\" emotionid=\"26\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"27\" href=\"javascript:;\"><div class=\"icon eDefault_27\" emotionid=\"27\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"28\" href=\"javascript:;\"><div class=\"icon eDefault_28\" emotionid=\"28\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"29\" href=\"javascript:;\"><div class=\"icon eDefault_29\" emotionid=\"29\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"30\" href=\"javascript:;\"><div class=\"icon eDefault_30\" emotionid=\"30\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"31\" href=\"javascript:;\"><div class=\"icon eDefault_31\" emotionid=\"31\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"32\" href=\"javascript:;\"><div class=\"icon eDefault_32\" emotionid=\"32\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"33\" href=\"javascript:;\"><div class=\"icon eDefault_33\" emotionid=\"33\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"34\" href=\"javascript:;\"><div class=\"icon eDefault_34\" emotionid=\"34\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"35\" href=\"javascript:;\"><div class=\"icon eDefault_35\" emotionid=\"35\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"36\" href=\"javascript:;\"><div class=\"icon eDefault_36\" emotionid=\"36\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"37\" href=\"javascript:;\"><div class=\"icon eDefault_37\" emotionid=\"37\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"38\" href=\"javascript:;\"><div class=\"icon eDefault_38\" emotionid=\"38\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"39\" href=\"javascript:;\"><div class=\"icon eDefault_39\" emotionid=\"39\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"40\" href=\"javascript:;\"><div class=\"icon eDefault_40\" emotionid=\"40\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"41\" href=\"javascript:;\"><div class=\"icon eDefault_41\" emotionid=\"41\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"42\" href=\"javascript:;\"><div class=\"icon eDefault_42\" emotionid=\"42\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"43\" href=\"javascript:;\"><div class=\"icon eDefault_43\" emotionid=\"43\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"44\" href=\"javascript:;\"><div class=\"icon eDefault_44\" emotionid=\"44\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"45\" href=\"javascript:;\"><div class=\"icon eDefault_45\" emotionid=\"45\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"46\" href=\"javascript:;\"><div class=\"icon eDefault_46\" emotionid=\"46\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"47\" href=\"javascript:;\"><div class=\"icon eDefault_47\" emotionid=\"47\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"48\" href=\"javascript:;\"><div class=\"icon eDefault_48\" emotionid=\"48\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"49\" href=\"javascript:;\"><div class=\"icon eDefault_49\" emotionid=\"49\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"50\" href=\"javascript:;\"><div class=\"icon eDefault_50\" emotionid=\"50\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"51\" href=\"javascript:;\"><div class=\"icon eDefault_51\" emotionid=\"51\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"52\" href=\"javascript:;\"><div class=\"icon eDefault_52\" emotionid=\"52\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"53\" href=\"javascript:;\"><div class=\"icon eDefault_53\" emotionid=\"53\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"54\" href=\"javascript:;\"><div class=\"icon eDefault_54\" emotionid=\"54\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"55\" href=\"javascript:;\"><div class=\"icon eDefault_55\" emotionid=\"55\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"56\" href=\"javascript:;\"><div class=\"icon eDefault_56\" emotionid=\"56\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"57\" href=\"javascript:;\"><div class=\"icon eDefault_57\" emotionid=\"57\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"58\" href=\"javascript:;\"><div class=\"icon eDefault_58\" emotionid=\"58\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"59\" href=\"javascript:;\"><div class=\"icon eDefault_59\" emotionid=\"59\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"60\" href=\"javascript:;\"><div class=\"icon eDefault_60\" emotionid=\"60\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"61\" href=\"javascript:;\"><div class=\"icon eDefault_61\" emotionid=\"61\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"62\" href=\"javascript:;\"><div class=\"icon eDefault_62\" emotionid=\"62\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"63\" href=\"javascript:;\"><div class=\"icon eDefault_63\" emotionid=\"63\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"64\" href=\"javascript:;\"><div class=\"icon eDefault_64\" emotionid=\"64\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"65\" href=\"javascript:;\"><div class=\"icon eDefault_65\" emotionid=\"65\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"66\" href=\"javascript:;\"><div class=\"icon eDefault_66\" emotionid=\"66\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"67\" href=\"javascript:;\"><div class=\"icon eDefault_67\" emotionid=\"67\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"68\" href=\"javascript:;\"><div class=\"icon eDefault_68\" emotionid=\"68\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"69\" href=\"javascript:;\"><div class=\"icon eDefault_69\" emotionid=\"69\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"70\" href=\"javascript:;\"><div class=\"icon eDefault_70\" emotionid=\"70\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"71\" href=\"javascript:;\"><div class=\"icon eDefault_71\" emotionid=\"71\"></div></a></li>");
				html	+=	("								</div>");
				html	+=	("								<div class=\"ePanelarea page2\">");
				html	+=	("									<li><a emotionid=\"72\" href=\"javascript:;\"><div class=\"icon eDefault_72\" emotionid=\"72\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"73\" href=\"javascript:;\"><div class=\"icon eDefault_73\" emotionid=\"73\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"74\" href=\"javascript:;\"><div class=\"icon eDefault_74\" emotionid=\"74\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"75\" href=\"javascript:;\"><div class=\"icon eDefault_75\" emotionid=\"75\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"76\" href=\"javascript:;\"><div class=\"icon eDefault_76\" emotionid=\"76\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"77\" href=\"javascript:;\"><div class=\"icon eDefault_77\" emotionid=\"77\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"78\" href=\"javascript:;\"><div class=\"icon eDefault_78\" emotionid=\"78\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"79\" href=\"javascript:;\"><div class=\"icon eDefault_79\" emotionid=\"79\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"80\" href=\"javascript:;\"><div class=\"icon eDefault_80\" emotionid=\"80\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"81\" href=\"javascript:;\"><div class=\"icon eDefault_81\" emotionid=\"81\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"82\" href=\"javascript:;\"><div class=\"icon eDefault_82\" emotionid=\"82\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"83\" href=\"javascript:;\"><div class=\"icon eDefault_83\" emotionid=\"83\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"84\" href=\"javascript:;\"><div class=\"icon eDefault_84\" emotionid=\"84\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"85\" href=\"javascript:;\"><div class=\"icon eDefault_85\" emotionid=\"85\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"86\" href=\"javascript:;\"><div class=\"icon eDefault_86\" emotionid=\"86\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"87\" href=\"javascript:;\"><div class=\"icon eDefault_87\" emotionid=\"87\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"88\" href=\"javascript:;\"><div class=\"icon eDefault_88\" emotionid=\"88\"></div></a></li>");
				html	+=	("									<li><a emotionid=\"89\" href=\"javascript:;\"><div class=\"icon eDefault_89\" emotionid=\"89\"></div></a></li>");
				html	+=	("									<li><!--<a emotionid=\"90\"><div class=\"icon eDefault_90\" emotionid=\"90\"></div></a>--></li>");
				html	+=	("									<li></li><li></li><li></li><li></li><li></li>");
				html	+=	("								</div>");
				html	+=	("							</ul>");
				html	+=	("							<div class=\"ePanelt\">");
				html	+=	("								<ul class=\"detail-more-link-tabs\">");
				html	+=	("									<li class=\"link-tabs\">");
				html	+=	("										<span class=\"fr\">");
				html	+=	("										<a class=\"left-arrow-no\" title=\"上一页\" href=\"javascript:void(0);\">&nbsp;</a>");
				html	+=	("										<a class=\"right-arrow\" title=\"下一页\" href=\"javascript:void(0);\">&nbsp;</a></span>");
				html	+=	("										<span> <a class=\"normal\">默认表情</a></span>");
				html	+=	("									</li>");
				html	+=	("								</ul>");
				html	+=	("							</div>");
				html	+=	("							<div class=\"eArr\"></div>");
				html	+=	("						</div>");
				html	+=	("					</div>");
				html	+=	("					<div class=\"webim-body-content-textarea\">");
				html	+=	("						<textarea id=\"imjs-textarea\" rows=\"\" cols=\"\" name=\"\" class=\"webim-textarea\" placeholder=\"点击输入您想询问的问题...\"></textarea>");
				html	+=	("					</div>");
				html	+=	("				</div>");
				html	+=	("				<div class=\"webim-body-comtent-footer\"><a class=\"webim-body-comtent-submit\" style=\"display: block;\">发送</a>");
				html	+=	("					<a target=\"_blank\" href=\"#\">WEBIM .  马上下载&gt;&gt;</a>");
				html	+=	("					<div id=\"imjs-empty-tip\" class=\"webim-body-footer-tips\" style=\"display:none\"><s>&nbsp;</s>发送内容不能为空哦</div>");
				html	+=	("					<div id=\"imjs-selectuser-tip\" class=\"webim-body-footer-tips\" style=\"display:none\"><s>&nbsp;</s>请您选择用户哦</div>");
				html	+=	("				</div>");
				html	+=	("			</div>");
				html	+=	("			<!--左侧聊天窗口end -->");
				html	+=	("");
				html	+=	("			<div id=\"imjs-guide-page\" class=\"webim-body-content\" style=\"display: none;\">");
				html	+=	("				<div class=\"webim-body-client\">");
				html	+=	("					<div class=\"webim-body-client-co1\">嗨，这是 <span style=\"font-size:14px;color:#7aaf23\">叮咚网页版</span><br>");
				html	+=	("					您点击页面中“<span class=\"client-im\">&nbsp;</span>”按钮，<br>");
				html	+=	("					即可发起对话，及时与发布者沟通。<br>");
				html	+=	("					对方不在线也可以留言哦。<br>");
				html	+=	("					赶紧试一试吧，<span style=\"color:#7aaf23\">在线聊更靠谱！</span>");
				html	+=	("					</div>");
				html	+=	("				</div>");
				html	+=	("				<div class=\"webim-body-comtent-footer\">");
				html	+=	("					<a target=\"_blank\" href=\"http://dingdong.ganji.com\">叮咚在线 , 成交快.  马上下载&gt;&gt;</a>");
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
				var $this		= $(this);
				id=$this.get(0).id;
				$('#'+id).html(html);
				$this.jonWebim("initialize");
			});
		},
		initialize:function(){
			var $this		= $(this);
			// 批量绑定父页面的用户聊天按钮 
			$("span[id^=imjs-embed-user-]").click(function() {
				var json=decodeURIComponent($(this).attr('data'));
				$this.jonWebim("add_user_list",json);
			});

			//设置
			$('.webim-icon-setting').click(function() {
				//$('.webim-icon-setting-tips').show();
			});

			//最小化
			$('.webim-icon-mini').click(function() {
				$this.jonWebim("min");
			});

			//关闭
			$('.webim-icon-close').click(function() {
				$this.jonWebim("close");
			});

			//点击联系人，最大化
			$('#imjs-lianxiren').click(function() {
				$this.jonWebim("max");
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
			});

			// 点击系统信息 
			$('#imjs-main-0-0_0_0_0').click(function() {
				$this.jonWebim("tab",$(this).attr("id"));
				return false;
			});


			//删除联系人列表中的联系人
			$('.webim-close').click(function() {
				alert('del '+$(this).parent().attr("id"));
				$(this).parent().find('.webim-status').attr('class','webim-status webim-username-offline');
				return false;
			});

			$this.jonWebim("user_list_hight");
			$this.jonWebim("bing_user_list");

			$("#imjs-body-content-talk").jonScrollbar({
				theme:"msg"
			});
			$("#imjs-user-list").jonScrollbar({
				theme:"msg"
			});
			$("#imjs-body-content-talk").jonScrollbar('scrollTo','last');
		},
		close:function(){
			var $this = $(this);
			if ($('.webim-body-comtent-header').is(':visible')==true){
				$('.webim-body-comtent-header').hide();
				$('.webim-body-content').hide();
				$('.webim-user-list').hide();
			}
		},
		max:function(){
			var $this = $(this);
			if ($('.webim-body-comtent-header').is(':visible')==false){
				$('.webim-body-comtent-header').show();
				$('.webim-body-content').show();
				$('.webim-user-list').show();
				$this.jonWebim("tab",'imjs-main-206952533-0_0_0_0');
			}
		},
		min:function(){
			if ($('.webim-body-comtent-header').is(':visible')==true){
				$('.webim-body-comtent-header').hide();
				$('.webim-body-content').hide();
				$('.webim-user-list').hide();
			}
		},
		/* 绑定用户列表事件 */
		bing_user_list:function(){
			$this = $(this);
			// 点击联系人，切换成和他对话
			$('#imjs-main-contact-list .c-li').click(function() {
				$this.jonWebim("tab",$(this).attr("id"));
				$(this).find('.webim-status').attr('class','webim-status webim-username-online');
				return false;
			});
			// IE6兼容 删除按钮  
			$('.imjs-open .c-li').hover(function() {
				$(this).find('.webim-close').show();
			}, function() {
				$(this).find('.webim-close').hide();
			});			
		},
		/* 增加用户到用户列表 */
		add_user_list:function(json){
			var $this = $(this);
			var json = (new Function("return " + json))(); 
			if ($('#imjs-main-'+json.userId+'-0_0_0_0').length == 0){
				var html =	'<div id="imjs-main-'+json.userId+'-0_0_0_0" class="c-li" style="cursor: pointer;" data-username="'+json.userName+'" data-userstatus="'+json.channel+'" data-postid="'+json.postId+'" data-posttitle="'+json.postTitle+'" data-posturl="'+json.postUrl+'">';
					html+=	'		<em title="删除" class="webim-close">&nbsp;</em>';
					html+=	'		<a style="display:none" title="删除" class="webim-close-enter">删除</a>';
					html+=	'		<em class="webim-status webim-username-online">&nbsp;</em>';
					html+=	'		<em class="webim-username-n">'+json.userName+'</em>';
					html+=	'		<em style="display:none" class="webim-msg-count">0</em>';
					html+=	'	</div>';
				$("#imjs-main-contact-list").prepend(html);
				$this.jonWebim("user_list_hight");
				$this.jonWebim("bing_user_list");
				$("#imjs-user-list").jonScrollbar('scrollTo',0);
				//绑定
			}
			$this.jonWebim("tab",'imjs-main-'+json.userId+'-0_0_0_0');
		},
		/* 处理用户列表高度 */
		user_list_hight:function(){
			if ($('#imjs-main-contact-list').is(':visible')==true){
				var _hight=$('#imjs-main-contact-list').outerHeight();
				if (_hight>313) _hight=313;
				$('#imjs-user-list').attr('style', 'height: '+_hight+'px;');
				$('#imjs-user-list .jonScrollBox_substance').attr('style', 'height: '+_hight+'px;');
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
					$('#imjs-guide-page').show();
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
				$this.jonWebim("user_list_hight");
				/* 清空列表 */
				$('.imjs-msg-list').empty();
				/* 重新加载聊天记录 */
				//alert(id);

				/* 更新滚动条 */
				$('#imjs-body-content-talk').jonScrollbar('setSize');
			}else{
				return false;
			}
		},
		/* 获取用户列表数据 */
		get_user_list:function(){
			if ($('#imjs-main-contact-list').is(':visible')==true){
				var _hight=$('#imjs-main-contact-list').outerHeight();
				if (_hight>200) _hight=200;
				$('#imjs-user-list').attr('style', 'height: '+_hight+'px;');
			}else{
				$('#imjs-user-list').attr('style', 'height: 0px;');
			}
		},
		/* 获取聊天数据 */
		get_msg_list:function(){
			if ($('#imjs-main-contact-list').is(':visible')==true){
				$('#imjs-user-list').attr('style', 'height: '+$('#imjs-main-contact-list').outerHeight()+'px;');
			}else{
				$('#imjs-user-list').attr('style', 'height: 0px;');
			}
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