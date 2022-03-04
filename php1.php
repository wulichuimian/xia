<?php
	header("content-type:text/html;charset=utf-8");
	$link = mysqli_connect("localhost","root","");
	if(!$link){
		echo "链接失败";
		exit;
	}
	//设置字符集
	mysqli_set_charset($link,"utf8");
	//选择数据库
	mysqli_select_db($link,"xiashuo");
	//准备sql语句
	$sql = "select * from user";
	//发送sql语句
	$arr = array();
	$res = mysqli_query($link,$sql);
	// var_dump ($res);
	//处理结果
	// $row = mysqli_fetch_assoc($res);
	while($row = mysqli_fetch_assoc($res)){
		array_push($arr,$row);
	}
	echo json_encode($arr);
	//关闭数据库
	mysqli_close($link);
?>