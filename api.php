<?php
    $conn = mysqli_connect("localhost","root","");
    mysqli_select_db($conn,"1712b");
    mysqli_query($conn,"set names utf8");
    $action=empty($_REQUEST['action'])?"null":$_REQUEST['action'];
    $responseArr=array(
	"code"=>200,
	"data"=>null,
	"msg"=>"数据获取成功"
	);
switch ($action){
	case $action:
		$sql="select * from ".$action;
		$result = mysqli_query($conn,$sql);
		if ( mysqli_num_rows($result)>0) {
			$studentlist=array();
			while ($row = mysqli_fetch_assoc($result)){
				$studentlist[]=$row;
			}
			// var_dump($studentlist);
			$responseArr["data"]=$studentlist;
		}else{
			$responseArr["msg"]="暂无记录";
			$responseArr["code"]=207;
		}
		die(json_encode($responseArr));
	break;
	default:
	echo "请输入正确的参数";
	break;
}
 // 关闭数据库
mysqli_close($conn);
?>
