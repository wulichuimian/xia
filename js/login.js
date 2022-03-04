function button1() {
	$(".return").click(function() {
		window.history.go(-1);
	})
	$(".home").click(function() {
		window.location.href = "index.html";
	})
}

function login() {
	$(".login").click(function() {
		var username = $(".username").val()
		var passwd = $(".passwd").val()
		var prompt = $(".prompt")
		$ajax({
			method: "post",
			url: "login.php",
			data: {
				username: username,
				passwd: passwd
			},
			success: function(resul) {
				var obj = JSON.parse(resul);
				if(obj.code == 0){
					if(prompt.removeClass("failure")){
						prompt.removeClass("failure")
					}
					prompt.addClass("successful");
					setCookie(username,passwd,{});
					window.location.href = "index.html";
				}else{
					if(prompt.removeClass("successful")){
						prompt.removeClass("successful")
					}
					prompt.addClass("failure");
				}
				prompt.text(obj.message);
			},
			error: function(mag) {
				console.log(mag);
			}
		})
	})
	$(".login").siblings("div").eq(1).click(function() {
		window.location.href = "registered.html";
	})
	
}
function registered(){
	$(".registered").click(function() {
		var username = $(".username").val();
		var passwd = $(".passwd").val();
		var prompt = $(".prompt")
		$ajax({
			method: "post",
			url: "registered.php",
			data: {
				username: username,
				passwd: passwd
			},
			success: function(resul) {
				var obj = JSON.parse(resul);
				if(obj.code == 0){
					if(prompt.removeClass("failure")){
						prompt.removeClass("failure")
					}
					prompt.addClass("successful");
				}else{
					if(prompt.removeClass("successful")){
						prompt.removeClass("successful")
					}
					prompt.addClass("failure");
				}
				prompt.text(obj.message);
				// console.log(obj);
			},
			error: function(mag) {
				console.log(mag);
			}
		})
	})
	$(".registered").siblings("div").eq(1).click(function() {
		window.location.href = "login.html";
	})
}
