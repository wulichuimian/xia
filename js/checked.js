function checked(inp){
	// let inp = document.querySelectorAll("input[type='checkbox']");
	inp[0].onclick = function(){
		for(let i=1;i<inp.length;i++){
			inp[i].checked = this.checked
		}
	}
	for(let i=1;i<inp.length;i++){
		inp[i].onclick = function(){
			
		}
	}
}
