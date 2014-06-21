<?php
session_start(); 
$act=$_GET['act'];
$nameStr='陈,林,黄,张,李,王,吴,刘,蔡,杨,许,郑,谢,郭,洪,邱,曾,廖,赖,徐,周,叶,苏,庄,江,吕,何,罗,高,萧,潘,朱,简,钟,彭,游,詹,胡,施,沈,余,赵,卢,梁,颜,柯,孙,魏,翁,戴,范,宋,方,邓,杜,傅,侯,曹,温,薛,丁,马,蒋,唐,卓,蓝,冯,姚,石,董,纪,欧,程,连,古,汪,汤,姜,田,康,邹,白,涂,尤,巫,韩,龚,严,袁,钟,黎,金,阮,陆,倪,夏,童,邵,柳,钱';
$nameList=explode(',',$nameStr);
$nameNo=count($nameList);
		
switch ($act) {
	case 'push':
		/*
			m==0	:WEBIM加载后的第一次读取 ,取回当前所有的好友数据和前100条信息
			m>0		:读取m以后的聊天记录
			m<0		:表示获取_m以前的聊天记录
		*/
		$mid=$_GET['m']?$_GET['m']:0;
		if ($mid<0){
			$to=$_GET['to'];
			$data['user']='';
			for ($i=0; $i < 20; $i++) {
				$data['msg'][$i]=sim_msg($to);
			}
		}
		if ($mid==0){
			for ($i=0; $i < 20; $i++) {
				$data['user'][$i]=sim_user(1000 ,1020);
			}
			for ($i=0; $i < 20; $i++) {
				$data['msg'][$i]=sim_msg();
			}
		}
		if ($mid>0){
			for ($i=0; $i < 1; $i++) {
				$data['user'][$i]=sim_user(1010 ,1020);
			}
			for ($i=0; $i < 2; $i++) {
				$data['msg'][$i]=sim_msg();
			}
		}
		$result=$data;
		break;
	case 'send':
		$data['send']=1;
		$result=$data['send'];
		break;
	default :
		echo $_SESSION['mid'];
		exit;
}
echo $_GET['callback']."(".json_encode($result).")";


function sim_user($minId ,$maxId){
	global $nameList,$nameNo;
	$data['reply']=0;//这里是响应
	$data['uid']=intval(rand($minId,$maxId));
	$data['userName']=$nameList[intval(rand(0,$nameNo))].$nameList[intval(rand(0,$nameNo))].$nameList[intval(rand(0,$nameNo))];
	$data['userStatus']=intval(rand(0,1));
	$data['postTitle']=$nameList[intval(rand(0,$nameNo))].$nameList[intval(rand(0,$nameNo))].'和'.$nameList[intval(rand(0,$nameNo))].$nameList[intval(rand(0,$nameNo))].$nameList[intval(rand(0,$nameNo))].'打架，全国人民表示关注！';
	$data['postUrl']="http://www.baidu.com/#wd=".$data['user'][$i]['postTitle'];
	return $data;
}

function sim_msg($to){
	global $nameList,$nameNo;
	$_SESSION['mid']=$_SESSION['mid']?$_SESSION['mid']+1:1000;
	$data['mid']=$_SESSION['mid'];
	$data['con']=$nameList[intval(rand(0,$nameNo))].$nameList[intval(rand(0,$nameNo))].'和'.$nameList[intval(rand(0,$nameNo))].$nameList[intval(rand(0,$nameNo))].$nameList[intval(rand(0,$nameNo))].'打架，全国人民表示关注！';
	$data['time']=time();
	$data['uid']=$to?$to:intval(rand(1000,1020));
	$data['reply']=intval(rand(0,1));//这里是是否回复
	return $data;
}

?>