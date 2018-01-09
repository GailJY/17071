document.addEventListener('DOMContentLoaded',function(){


var aData = [{"imgUrl":"../img/t1.jpg","title":"adidas阿迪三叶草2017新款婴童休闲鞋","Price":"398","Comm":"18"},
			 {"imgUrl":"../img/t2.jpg","title":"adidas阿迪达斯新款小-大童跑步鞋","Price":"29","Comm":"1.4"},
			 {"imgUrl":"../img/t3.jpg","title":"adidas阿迪达斯男大童梭织茄克","Price":"248","Comm":"4.2"},
			 {"imgUrl":"../img/t4.jpg","title":"adidas阿迪达斯新款女小童梭织茄克","Price":"225","Comm":"3.6"},
			];
		var oBox = document.getElementById("box");
		var oCar = document.getElementById("car");
		var oUl = document.getElementsByTagName("ul")[0];
		for(var i=0; i<aData.length; i++){
			var oLi = document.createElement("li");
			var data = aData[i];
			oLi.innerHTML += '<div class="_img"><img src="'+data["imgUrl"]+'" width="150" height="150"></div>';
			oLi.innerHTML += '<h3 class="_name"><a href="#">'+data["title"]+'</a></h3>';
			oLi.innerHTML += '<p class="_price">'+data["Price"]+'元</p>';
			oLi.innerHTML += '<p class="_rank">'+data["Comm"]+'万人评价</p>';
			oLi.innerHTML += '<div class="add_btn">加入购物车</div>';
			oUl.appendChild(oLi);
		}
		var aBtn = getClass(oBox,"add_btn");
		for(var i=0; i<aBtn.length; i++){
			aBtn[i].index = i;
			aBtn[i].onclick = function(){
				var oDiv = document.createElement("div");
				var data = aData[this.index];
				oDiv.className = "row hid";
				oDiv.innerHTML += '<div class="img left"><img src="'+data["imgUrl"]+'" width="80" height="80"></div>';
				oDiv.innerHTML += '<div class="name left"><span>'+data["title"]+'</span></div>';
				oDiv.innerHTML += '<div class="price left"><span>'+data["Price"]+'元</span></div>';
				oDiv.innerHTML += '<div class="ctrl left"><a href="javascript:;">×</a></div>';
				oCar.appendChild(oDiv);
				var delBtn = oDiv.lastChild.getElementsByTagName("a")[0];
				delBtn.onclick=function(){
					oCar.removeChild(oDiv);
				}
			}
		}
		function getClass(oBox,tagname){
			var aTag = oBox.getElementsByTagName("*");
			var aBox = [];
			for(var i=0; i<aTag.length; i++){
				if(aTag[i].className == tagname){
					aBox.push(aTag[i]);
				}
			}
			return aBox;
		}



})