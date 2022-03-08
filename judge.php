<?php
	header("content-type:text/html;charset=utf-8");
	//统一返回格式
	$responseData = array("code"=> 0,"message"=>"");
	$username = $_POST['username'];
	$bookId = $_POST['id'];
	$link = mysqli_connect("localhost","root","");
	if(!$link){
		$responseData['code'] = 1;
		$responseData['message'] = "数据库连接失败";
		echo json_encode($responseData);
		exit;
	}
	//设置字符集
	mysqli_set_charset($link,"utf8");
	//选择数据库
	mysqli_select_db($link,"xiashuo");
	//准备sql语句
	//查询这个id是否存在
	$sql = "select * from a{$username} where id like '{$bookId}'";
	$res = mysqli_query($link,$sql);
	$row = mysqli_fetch_assoc($res);
	if($row){
		$responseData['code'] = 2;
		$responseData['message'] = "已加书架";
		echo json_encode($responseData);
		exit;
	}else{
		$responseData['message'] = "加入书架";
		echo json_encode($responseData);
	}
	//关闭数据库
	mysqli_close($link);
?>