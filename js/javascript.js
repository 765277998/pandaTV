function alert1(s){
	alert(s);
}
function checkfom(s){
	var account=document.getElementById('account');
	var pass = document.getElementById('pass');
	if(account.value==''||pass.value==''){
		alert('账号或密码不能为空');
		return false;
	}else{
		if(account.value=='123'&&pass.value=='123'){
			return true;
		}else{
			alert('账号或密码错误');
			return false;
		}
	}
	
	
}