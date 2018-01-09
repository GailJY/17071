document.addEventListener('DOMContentLoaded',function(){


	var good = [{
		id:'b1',
		imgurl:'../img/m1.jpg',
		news:'限时抢￥1319',
		title:'The North Face乐斯菲斯专柜同款17秋冬新品女子冲锋衣NF0A364979M1',
		price:'￥1319',
		cos:'￥2398'
	},{
		id:'b2',
		imgurl:'../img/m2.jpg',
		news:'限时抢￥359',
		title:'The North Face乐斯菲斯 专柜同款17春夏新品男子抓绒/软壳衣NF0A2VEIJK31',
		price:'￥798',
		cos:'￥798'
	},
	{
		id:'b3',
		imgurl:'../img/m3.jpg',
		news:'限时抢￥894',
		title:'Timberland添柏岚 专柜同款17秋冬男子休闲鞋A1JHF',
		price:'￥894',
		cos:'￥1490'
	},
	{
		id:'b4',
		imgurl:'../img/m4.jpg',
		news:'限时抢￥599',
		title:'The North Face乐斯菲斯 专柜同款17秋冬新品女子徒步鞋NF0A364979M1',
		price:'￥599',
		cos:'￥1108'
	},{
		id:'b5',
		imgurl:'../img/xx1.jpg',
		news:'限时抢￥459',
		title:'NIKE耐克2017年新款女子W NIKE AIR MAX THEAULTRAFK复刻鞋881175-001',
		price:'￥459',
		cos:'￥999'
	},{
		id:'b6',
		imgurl:'../img/xx2.jpg',
		news:'限时抢￥647',
		title:'NIKE耐克2017年新款男子HYPERDUNK 2017 LOW EP篮球鞋897637-600',
		price:'￥647',
		cos:'￥999'
	},{
		id:'b7',
		imgurl:'../img/xx3.jpg',
		news:'限时抢￥440',
		title:'adidas neo阿迪休闲2018女子CF ADVANTAGECOURT系列休闲鞋DA9524',
		price:'￥440',
		cos:'￥620'
	},{
		id:'b8',
		imgurl:'../img/xx4.jpg',
		news:'限时抢￥494',
		title:'adidas阿迪达斯2017年新款女子清风系列跑步鞋BB1800',
		price:'￥494',
		cos:'￥800'
	},{
		id:'b9',
		imgurl:'../img/xx5.jpg',
		news:'限时抢￥398',
		title:'Belle/百丽2017秋黑色英伦时尚牛皮女单鞋99036CM7',
		price:'￥398',
		cos:'￥968'
	},
	{
		id:'b10',
		imgurl:'../img/xx6.jpg',
		news:'限时抢￥398',
		title:'Belle/百丽2017秋喵星人白/绿休闲时尚牛皮女小白鞋67810CM7',
		price:'￥398',
		cos:'￥998'
	},{
		id:'b11',
		imgurl:'../img/xx7.jpg',
		news:'限时抢￥398',
		title:'Belle/百丽2017秋喵星人白/绿休闲时尚牛皮女小白鞋67810CM7',
		price:'￥358',
		cos:'￥1190'
	},{
		id:'b12',
		imgurl:'../img/xx8.jpg',
		news:'限时抢￥328',
		title:'Belle/百丽专柜同款冬季牛皮男休闲鞋4PT01DM6',
		price:'￥328',
		cos:'￥1100'
	},{
		id:'b13',
		imgurl:'../img/t1.jpg',
		news:'限时抢￥368',
		title:'The North adidas阿迪三叶草2017新款婴童STAN SMITH CF I休闲鞋BZ0520',
		price:'￥368',
		cos:'￥529'
	},{
		id:'b14',
		imgurl:'../img/t2.jpg',
		news:'限时抢￥312',
		title:'adidas阿迪达斯2017新款小-大童RapidaRun wide K跑步鞋CQ1750',
		price:'￥312',
		cos:'￥499'
	},{
		id:'b15',
		imgurl:'../img/t3.jpg',
		news:'限时抢￥328',
		title:'Badidas阿迪达斯2017男大童YB T SJ TK TOP梭织茄克CF8462',
		price:'￥328',
		cos:'￥549'
	},{
		id:'b16',
		imgurl:'../img/t4.jpg',
		news:'限时抢￥218',
		title:'adidas阿迪达斯2017新款女小童LK ULTRA WBKR梭织茄克BS3274',
		price:'￥218',
		cos:'￥309'
	},{
		id:'b17',
		imgurl:'../img/t6.jpg',
		news:'限时抢￥698',
		title:'The North STACCATO/思加图2017年秋季专柜同款白色革单肩女皮包X1695CN7',
		price:'￥698',
		cos:'￥908'
	},{
		id:'b18',
		imgurl:'../img/t7.jpg',
		news:'限时抢￥198',
		title:'Teenmix/天美意秋季专柜同款红色人造革女包15C05CX5',
		price:'￥198',
		cos:'￥499'
	},{
		id:'b19',
		imgurl:'../img/t8.jpg',
		news:'限时抢￥399',
		title:'Ist belle/百丽箱包冬季专柜同款黑色人造革手提包Y3104DX6',
		price:'￥399',
		cos:'￥399'
	},{
		id:'b20',
		imgurl:'../img/t5.jpg',
		news:'限时抢￥238',
		title:'Teenmix/天美意冬季专柜同款黑色人造革女包X0940DX5',
		price:'￥238',
		cos:'￥699'
	},{
		id:'b21',
		imgurl:'../img/t1.jpg',
		news:'限时抢￥368',
		title:'The North adidas阿迪三叶草2017新款婴童STAN SMITH CF I休闲鞋BZ0520',
		price:'￥368',
		cos:'￥529'
	},{
		id:'b22',
		imgurl:'../img/t2.jpg',
		news:'限时抢￥312',
		title:'adidas阿迪达斯2017新款小-大童RapidaRun wide K跑步鞋CQ1750',
		price:'￥312',
		cos:'￥499'
	},{
		id:'b23',
		imgurl:'../img/t3.jpg',
		news:'限时抢￥328',
		title:'Badidas阿迪达斯2017男大童YB T SJ TK TOP梭织茄克CF8462',
		price:'￥328',
		cos:'￥549'
	},{
		id:'b24',
		imgurl:'../img/t4.jpg',
		news:'限时抢￥218',
		title:'adidas阿迪达斯2017新款女小童LK ULTRA WBKR梭织茄克BS3274',
		price:'￥218',
		cos:'￥309'
	},{
		id:'b25',
		imgurl:'../img/t6.jpg',
		news:'限时抢￥698',
		title:'The North STACCATO/思加图2017年秋季专柜同款白色革单肩女皮包X1695CN7',
		price:'￥698',
		cos:'￥908'
	},{
		id:'b26',
		imgurl:'../img/t7.jpg',
		news:'限时抢￥198',
		title:'Teenmix/天美意秋季专柜同款红色人造革女包15C05CX5',
		price:'￥198',
		cos:'￥499'
	},{
		id:'b27',
		imgurl:'../img/t8.jpg',
		news:'限时抢￥399',
		title:'Ist belle/百丽箱包冬季专柜同款黑色人造革手提包Y3104DX6',
		price:'￥399',
		cos:'￥399'
	},{
		id:'b28',
		imgurl:'../img/m1.jpg',
		news:'限时抢￥1319',
		title:'The North Face乐斯菲斯专柜同款17秋冬新品女子冲锋衣NF0A364979M1',
		price:'￥1319',
		cos:'￥2398'
	},{
		id:'b29',
		imgurl:'../img/m2.jpg',
		news:'限时抢￥359',
		title:'The North Face乐斯菲斯 专柜同款17春夏新品男子抓绒/软壳衣NF0A2VEIJK31',
		price:'￥798',
		cos:'￥798'
	},
	{
		id:'b30',
		imgurl:'../img/m3.jpg',
		news:'限时抢￥894',
		title:'Timberland添柏岚 专柜同款17秋冬男子休闲鞋A1JHF',
		price:'￥894',
		cos:'￥1490'
	},
	{
		id:'b31',
		imgurl:'../img/m4.jpg',
		news:'限时抢￥599',
		title:'The North Face乐斯菲斯 专柜同款17秋冬新品女子徒步鞋NF0A364979M1',
		price:'￥599',
		cos:'￥1108'
	},{
		id:'b32',
		imgurl:'../img/xx1.jpg',
		news:'限时抢￥459',
		title:'NIKE耐克2017年新款女子W NIKE AIR MAX THEAULTRAFK复刻鞋881175-001',
		price:'￥459',
		cos:'￥999'
	},{
		id:'b33',
		imgurl:'../img/xx2.jpg',
		news:'限时抢￥647',
		title:'NIKE耐克2017年新款男子HYPERDUNK 2017 LOW EP篮球鞋897637-600',
		price:'￥647',
		cos:'￥999'
	},{
		id:'b34',
		imgurl:'../img/xx3.jpg',
		news:'限时抢￥440',
		title:'adidas neo阿迪休闲2018女子CF ADVANTAGECOURT系列休闲鞋DA9524',
		price:'￥440',
		cos:'￥620'
	},{
		id:'b35',
		imgurl:'../img/t5.jpg',
		news:'限时抢￥238',
		title:'Teenmix/天美意冬季专柜同款黑色人造革女包X0940DX5',
		price:'￥238',
		cos:'￥699'
	},{
		id:'036',
		imgurl:'../img/t1.jpg',
		news:'限时抢￥368',
		title:'The North adidas阿迪三叶草2017新款婴童STAN SMITH CF I休闲鞋BZ0520',
		price:'￥368',
		cos:'￥529'
	},{
		id:'b37',
		imgurl:'../img/t2.jpg',
		news:'限时抢￥312',
		title:'adidas阿迪达斯2017新款小-大童RapidaRun wide K跑步鞋CQ1750',
		price:'￥312',
		cos:'￥499'
	},{
		id:'b38',
		imgurl:'../img/t3.jpg',
		news:'限时抢￥328',
		title:'Badidas阿迪达斯2017男大童YB T SJ TK TOP梭织茄克CF8462',
		price:'￥328',
		cos:'￥549'
	},{
		id:'b39',
		imgurl:'../img/t4.jpg',
		news:'限时抢￥218',
		title:'adidas阿迪达斯2017新款女小童LK ULTRA WBKR梭织茄克BS3274',
		price:'￥218',
		cos:'￥309'
	},{
		id:'b40',
		imgurl:'../img/m1.jpg',
		news:'限时抢￥1319',
		title:'The North Face乐斯菲斯专柜同款17秋冬新品女子冲锋衣NF0A364979M1',
		price:'￥1319',
		cos:'￥2398'
	}];


	var tabb = document.querySelector('.tabb');
	
	goodShow();

	// 封装将商品写入页面的函数
	function goodShow(){
			 // 初始化，获取对象信息，生成商品列表
			 var ul = document.createElement('ul');
				ul.innerHTML = good.map(function(item){
				return `
					<li date-id="${item.id}">
						<div class="img">
						<a href="#">
						<sup class="sale"><em class="sale1"><strong>${item.news}</strong></em></sup>
						<img class="lazy" data-original="${item.imgurl}" alt="" />
						</a>
						</div>
						<div class="cnt">
							<span><a href="#">${item.title}</a></span>
							<p class="price_sc">
								<em class="ygprc">${item.price}</em>
								<del>${item.cos}</del>
							</p>
						</div>
					</li>`;
			 }).join('');	
			 // 写入页面
				tabb.appendChild(ul);
			}


		// tabb.onclick = function(e){
		// 	var e = e || window.event;
		// 	var target = e.target || event.srcElement;

		// 	var classname = ['a','img','span','p','div'];
		// 	if(classname.indexOf(target.tagName.toLowerCase()) >= 0){
		// 		var params = '?';

		// 		var _id = target.parentNode.getAttribute('date-id');
		// 		for(var i=0;i<good.length;i++){
		// 			if(_id == good[i].id){
		// 				for(var attr in good[i]){
		// 					params += attr + '=' + encodeURI(good[i][attr]) + '&';
		// 				}
		// 				params = params.slice(0,-1);
		// 				locataion.href = 'index.html' + params;
		// 			}
		// 		}
		// 	}
		// }
		tabb.onclick = function(e){
				var e = e || window.event;
				var target = e.target || event.srcElement;
				//li的所有子元素为事件源对象
				var classname = ['p','span','div','label','img'];
				if(classname.indexOf(target.tagName.toLowerCase()) >= 0){
					var params = '?';
					//获取点击事件源对象的父元素（即）li的date-id
					var _id = target.parentNode.parentNode.parentNode.getAttribute('date-id');
					for(var i=0;i<good.length;i++){
						if( _id == good[i].id ){
							for(var attr in good[i]){
								params += attr +'='+ encodeURI(good[i][attr]) +'&';
							}
							params = params.slice(0,-1);
							location.href = 'detail.html' + params;
						}
					}
				}
			}









		// $(".fy").pagination({
  //           pageSizeOpt: [
  //               {'value': 5, 'text': '5/page', 'selected': true},
  //               {'value': 10, 'text': '10/page'},
  //               {'value': 15, 'text': '15/page'},
  //               {'value': 20, 'text': '20/page'}
  //           ],
  //           totalPage: 18,
  //           showPageNum: 5,
  //           firstPage: 'first',
  //           previousPage: 'previous',
  //           nextPage: 'next',
  //           lastPage: 'last',
  //           skip: 'skip',
  //           confirm: 'go',
  //           refresh: 'refresh',
  //           totalPageText: 'the total {} pages',
  //           isShowFL: true,
  //           isShowPageSizeOpt: true,
  //           isShowSkip: true,
  //           isShowRefresh: true,
  //           isShowTotalPage: true,
  //           isResetPage: false,
  //           callBack: function (currPage, pageSize) {
  //               console.log('currPage:' + currPage + '     pageSize:' + pageSize);
  //           }
    

	// (function(){

	// 	$('img.lazy').lazyload({effect:"fadeIn"});


	// })


		var fy = document.querySelector('.fy');
		console.log(fy)


		var pagenb = 1;

		var qty = 30;

		var xhr_fy = new XMLHttpRequest();

		xhr_fy.onload = function(){
			if(status.includes(xhr_fy.status)){
				var res = JSON.parse(xhr_fy.responseText);
				console.log(res);


				var ul = document.createElement('ul');
				ul.innerHTML = res.data.map(item=>{
					return `<li date-id="${item.id}">
						<div class="img">
						<a href="#">
						<sup class="sale"><em class="sale1"><strong>${item.news}</strong></em></sup>
						<img class="lazy" data-original="${item.imgurl}" alt="" />
						</a>
						</div>
						<div class="cnt">
							<span><a href="#">${item.title}</a></span>
							<p class="price_sc">
								<em class="ygprc">${item.price}</em>
								<del>${item.cos}</del>
							</p>
						</div>
					</li>`;
				}).join('');

				tabb.innerHTML = '';
				tabb.appendChild(ul);


				fy.innerHTML = '';
				var pageLen = Math.ceil(res.total/res.qty);
				for(var i=0;i<pageLen;i++){
					var span = document.createElement('span');
					span.innerHTML = i + 1;
					if(i===res.pagenb-1){
						span.className = 'active';
					}
					fy.appednChild(span);
				}

				}		
		}

		// xhr_fy.onreadystatechange = function(){
		// 	if(xhr_fy.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){

		// 		var res = JSON.parse(xhr.responseText);

		// 		var ul = document.createElement('ul');
		// 	}
		// }
		
		xhr_fy.open('post','../api/list.php',true);


		xhr_fy.setRequestHeader('content-type','application/x-www-form-unlencoded');
		xhr_fy.send('pagenb='+pagenb + '&qty='+qty);











		





	});		
		



	


	
	


