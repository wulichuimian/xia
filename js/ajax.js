function querysting(obj) {
	var str = "";
	for (let attr in obj) {
		str += attr + "=" + obj[attr] + "&";
	}
	return str.substring(0, str.length - 1);
}

function $ajax({
	method = "get",
	url,
	data,
	success,
	error
}) {
	var xhr = null;
	try {
		xhr = new XMLHttpRequest();
	} catch (e) {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	/*
	1.请求方式
	2.url
	3.是否异步
	*/
	if (data) {
		data = querysting(data);
	}
	if (method == "get" && data) {
		xhr.open(method, url + "?" + data, true);
		xhr.send();
	} else {
		xhr.open(method, url, true);
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhr.send(data);
	}
	//发送请求
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				if (success) {
					success(xhr.responseText);
				}
			} else {
				if (error) {
					error("Error" + xhr.status);
				}
			}

		}
	}


}
