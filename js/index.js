
//创建header
function header(){
	$("#header").html('<div class="logo">小说阅读</div><div class="fun"><div class="search"></div><div class="user"></div></div>');
	$(function(){
		$(".search").click(function(){
			window.location.href = "search.html";
		})
		$(".user").click(function(){
			cookies = document.cookie;
			if(cookies == ''){
				window.location.href = "login.html";
			}else{
				window.location.href = "user.html";
			}
			
		})
	})
}
//创建header
/*function header() {

	let header = document.getElementById("header");
	let logo = document.createElement("div");
	let fun = document.createElement("div");
	let logot = document.createTextNode("小说阅读");
	logo.setAttribute("class", "logo")
	logo.appendChild(logot);
	fun.setAttribute("class", "fun")
	let search = document.createElement("div");
	search.onclick = function(){
		window.location.href = "search.php";
	}
	let user = document.createElement("div");
	search.setAttribute("class", "search")
	user.setAttribute("class", "user")
	fun.appendChild(search);
	fun.appendChild(user);
	header.appendChild(logo);
	header.appendChild(fun);

	//最后插入页面
	// document.body.appendChild(header);
}*/

//创建nev
function nev() {
	var nevHref = ["index.html", "category.html", "free.html", "bookcase.html"];
	$("#nev").html('<ul><li id="boutique_tab" class="cur">精选</li><li id="category_tab">分类</li><li id="recommend_tab">免费</li><li id="bookcase_tab">书架</li></ul>');
	$("#nev").find("li").each(function(index,element){
		$(this).click(function(){
			window.location.href = nevHref[index];
		});
	})
}
//创建nev
/*function nev() {

	var nevText = ["精选", "分类", "免费", "书架"]
	var nevHref = ["index.php", "category.php", "free.php", "bookcase.php"];
	let nev = document.getElementById("nev");
	nev.setAttribute("class", "nev");
	let ul = document.createElement("ul");
	for (let i = 0; i < 4; i++) {
		let li = document.createElement("li");
		for (let j = 0; j < 4; j++) {
			if (j == i) {
				let a = document.createElement("a");
				let at = document.createTextNode(nevText[j]);
				a.setAttribute("href", nevHref[j]);
				// alert(at);
				a.appendChild(at);
				li.appendChild(a);
			}
		}
		ul.appendChild(li);
	}
	nev.appendChild(ul);

	//最后插入页面
	// document.body.appendChild(nev);
}*/

//创建article

//创建article里select-nev的内容
function articleNev() {
	var artText = ["男生", "女生", "完结", "排行"];
	var imgSrc = ["img/23bf9f64bfc941939d077f4aa5358abb.png", "img/edd6d5f39d3544f2a799e50c59858f3c.png",
		"img/2a52bc621ad0411eb0b768f1f24997c7.png", "img/b6eaec072e58414c97252a0ca8f8f08c.png"
	];
	var art = document.getElementById("article");
	let sec = document.createElement("section");
	sec.setAttribute("class", "select-nev");
	let ul = document.createElement("ul");
	for (let i = 0; i < 4; i++) {
		let li = document.createElement("li");
		for (let j = 0; j < 4; j++) {
			if (j == i) {
				let img = document.createElement("img");
				img.setAttribute("src", imgSrc[j]);
				let p = document.createElement("p");
				let pt = document.createTextNode(artText[j]);
				p.appendChild(pt);
				li.appendChild(img);
				li.appendChild(p);
			}
		}
		ul.appendChild(li);
	}
	sec.appendChild(ul);
	art.appendChild(sec);
}

//创建article里select-text的内容
function articleText() {
	var art = document.getElementById("article");
	let ious1 = document.createElement("div");
	ious1.setAttribute("class", "ious");
	art.appendChild(ious1);
	$ajax({
		method: "post",
		url: "getBooks.php",
		success: function(resul) {
			var arr = JSON.parse(resul);
			// console.log(arr);
				for (let i = 0; i < arr.length; i++) {
					art.innerHTML += `<section class="select-text">
						<ul>
							<li>
								<img src=${arr[i].imgUrl} loading='lazy'>
								<div class='text'>
									<h2>
										<a href="booksIntroduce.html?id=${arr[i].id}">${arr[i].title}</a>
									</h2>
									<p>${arr[i].Introduction}</p>
								</div>
								<div class="idNone">${arr[i].id}</div>
							</li>
						</ul>
					</section>`;
					/*let sec = document.createElement("section");
					sec.setAttribute("class", "select-text")
					let ul = document.createElement("ul");
					let li = document.createElement("li");
					let img = document.createElement("img");
					let div = document.createElement("div");
					img.setAttribute("src", arr[i].imgUrl);
					img.setAttribute("loading", "lazy");
					div.setAttribute("class", "text")
					let h2 = document.createElement("h2");
					let p = document.createElement("p");
					let a = document.createElement("a");
					a.setAttribute("href","booksIntroduce.html"+"?id="+arr[i].id);
					let at = document.createTextNode(arr[i].title);
					let pt = document.createTextNode(arr[i].Introduction);
					a.appendChild(at);
					h2.appendChild(a);
					p.appendChild(pt);
					div.appendChild(h2);
					div.appendChild(p);
					li.appendChild(img);
					li.appendChild(div);
					ul.appendChild(li);
					sec.appendChild(ul);
					art.appendChild(sec);*/
					}
					},
		error: function(mag) {
			console.log(mag);
		}
	})
	
	// let ious2 = document.createElement("div");
	// ious2.setAttribute("class", "ious");
	// art.appendChild(ious2);
	//最后插入页面
	// document.body.appendChild(art);
}

//创建footer
function footer() {
	//footer-nev
	var footerText = ["精选", "分类", "免费", "男频", "女频"]
	var footerHref = ["index.html", "category.html", "free.html", "#"];
	let footer = document.getElementById("footer");
	let ul = document.createElement("ul");
	for (let i = 0; i < 5; i++) {
		let li = document.createElement("li");
		for (let j = 0; j < 5; j++) {
			if (j == i) {
				let a = document.createElement("a");
				let at = document.createTextNode(footerText[j]);
				a.setAttribute("href", footerHref[j]);
				a.appendChild(at);
				li.appendChild(a);
			}
		}
		ul.appendChild(li);
	}
	footer.appendChild(ul);


	//footer-版权
	var footerClass = ["copyright", "contri", "contact"];
	var footerPage = ["小说首页", "|", "服务声明"];
	let infos = document.createElement("div");
	infos.setAttribute("class", "infos");
	footer.appendChild(infos);
	for (let i = 0; i < 3; i++) {
		let div = document.createElement("div");
		div.setAttribute("class", footerClass[i]);
		if (i == 0) {
			let divt = document.createTextNode("Copyright © 2022 xxxxxx.com");
			div.appendChild(divt);
		} else if (i == 1) {
			for (let j = 0; j < 3; j++) {
				if (j == 1) {
					let divb = document.createElement("div");
					let divbt = document.createTextNode(footerPage[j]);
					divb.appendChild(divbt);
					div.appendChild(divb);
				} else {
					let a = document.createElement("a");
					let at = document.createTextNode(footerPage[j]);
					a.appendChild(at);
					div.appendChild(a);
				}
			}
		} else {
			let divt = document.createTextNode("客服电话  ");
			let a = document.createElement("a");
			let at = document.createTextNode("1234-12345678");
			let span = document.createElement("span");
			let spant = document.createTextNode("  ICP证：");
			let spana = document.createElement("a");
			let spanat = document.createTextNode("粤XX-12345678");
			div.appendChild(divt);
			a.appendChild(at);
			div.appendChild(a);
			span.appendChild(spant);
			spana.appendChild(spanat);
			span.appendChild(spana);
			div.appendChild(span);
		}
		infos.appendChild(div);

	}

	//最后插入页面
	// document.body.appendChild(footer);
}

//创建分类页
function section(Categories, secSrc, secTitle,secDesc) {

	var art = document.getElementById("article");
	let tit = document.createElement("div");
	let ul = document.createElement("ul");
	let category = document.createElement("div");
	category.setAttribute("class", "category");
	tit.setAttribute("class", "tit");
	let titt = document.createTextNode(Categories);
	tit.appendChild(titt);
	for (let i = 0; i <= secSrc.length - 1 ; i++) {
		let li = document.createElement("li");
		let img = document.createElement("img");
		img.setAttribute("src", secSrc[i]);
		let text = document.createElement("div");
		text.setAttribute("class", "text");
		let title = document.createElement("div");
		title.setAttribute("class", "title");
		let desc = document.createElement("div");
		desc.setAttribute("class", "desc");
		let desct = document.createTextNode(secDesc[i]);
		let titlet = document.createTextNode(secTitle[i]);
		
		title.appendChild(titlet);
		desc.appendChild(desct);
		text.appendChild(title);
		text.appendChild(desc);
		li.appendChild(img);
		li.appendChild(text);
		ul.appendChild(li);
	}
	category.appendChild(ul);
	// let ious1 = document.createElement("div");
	// ious1.setAttribute("class", "ious");
	art.appendChild(tit);
	art.appendChild(category);
	let tit1 = document.createElement("div");
	tit1.setAttribute("class", "tit");
	art.appendChild(tit1);
	// art.appendChild(ious1);
}

//头部按钮的点击事件
function button1() {
	$(".return").click(function() {
		window.history.go(-1);
	})
	$(".home").click(function() {
		window.location.href = "index.html";
	})
}

