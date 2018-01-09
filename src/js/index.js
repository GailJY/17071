document.addEventListener('DOMContentLoaded',function(){
	var count = $(".hot_wallwrap li").length - 1; /* 显示 6 个 li标签内容 */

	var interval = $(".hot_wallwrap li:first").width();

	var curIndex = 0;

	$('.scrollbutton').click(function(){

		if( $(this).hasClass('prev') ) return false;

		if ($(this).hasClass('next')) --curIndex;

		else --curIndex;

		if (curIndex == 0) $('.next').addClass('prev');

		if (curIndex == count-1) $('.next').addClass('prev');

		$(".hot_wallwrap ul").stop(false, true).animate({"margin-left" : +curIndex*interval + "px"}, 600);

	});	


	


	//轮播
	$(function() {
      $('.mainbanner').each(function() {
          var $_root = $(this);
          var $window_b = $_root.find('.mainbanner_window');
          var $list = $_root.find('.mainbanner_list');
          var $items = $list.children();
          var $window_ul = $window_b.find('#slideContainer');
          var count = $items.length;
          var item_size = 2000;
          var dur_ms = 1000;
          var autoplay_interval = 6000;
          var cur_idx = 0;
          var fix_idx = function(_idx) {
              if (_idx < 0)
                  return (count - 1);
              if (_idx >= count)
                  return 0;
              return _idx;
          }
          var goto = function(_idx) {
              var idx = fix_idx(_idx);
              $items.eq(idx).addClass('active').siblings().removeClass('active');
              if (cur_idx != idx) {
                  var offset_x = -idx * item_size;
                  $window_ul.stop().animate({
                      'left': offset_x
                  }, dur_ms);
                  cur_idx = idx;
              }
          }
          $items.each(function(index, element) {
              var $cur_item = $(this);
              var $cur_a = $cur_item.find('a');
              $cur_a.data('index', index);
              $cur_a.mouseover(function() {
                  var index = $(this).data('index');
                  goto(index);
                  return false;
              });
          });

          var autoplay_flag = true;

          window.setInterval(function() {
              if (autoplay_flag) {
                  goto(cur_idx + 1);
              }
          }, autoplay_interval);

          $_root.hover(function() {
              autoplay_flag = false;
          }, function() {
              autoplay_flag = true;
          });
          goto(0);
      });


      $('.nav_l .nav_ll').hover(function(){

      	$(this).addClass('active').find('s').hide();
      	$(this).find('.menu2').show();
      },function(){

      	$(this).removeClass('active').find('s').show();	
      	$(this).find('.menu2').hide();



    
      })


    




   
  })


	var good = [{
		id:'001',
		imgurl:'img/m1.jpg',
		news:'限时抢￥1319',
		title:'The North Face乐斯菲斯专柜同款17秋冬新品女子冲锋衣NF0A364979M1',
		price:'￥1319',
		cos:'￥2398'
	},{
		id:'002',
		imgurl:'img/m2.jpg',
		news:'限时抢￥359',
		title:'The North Face乐斯菲斯 专柜同款17春夏新品男子抓绒/软壳衣NF0A2VEIJK31',
		price:'￥798',
		cos:'￥798'
	},
	{
		id:'003',
		imgurl:'img/m3.jpg',
		news:'限时抢￥894',
		title:'Timberland添柏岚 专柜同款17秋冬男子休闲鞋A1JHF',
		price:'￥894',
		cos:'￥1490'
	},
	{
		id:'004',
		imgurl:'img/m4.jpg',
		news:'限时抢￥599',
		title:'The North Face乐斯菲斯 专柜同款17秋冬新品女子徒步鞋NF0A364979M1',
		price:'￥599',
		cos:'￥1108'
	},{
		id:'005',
		imgurl:'img/xx1.jpg',
		news:'限时抢￥459',
		title:'NIKE耐克2017年新款女子W NIKE AIR MAX THEAULTRAFK复刻鞋881175-001',
		price:'￥459',
		cos:'￥999'
	},{
		id:'006',
		imgurl:'img/xx2.jpg',
		news:'限时抢￥647',
		title:'NIKE耐克2017年新款男子HYPERDUNK 2017 LOW EP篮球鞋897637-600',
		price:'￥647',
		cos:'￥999'
	},{
		id:'007',
		imgurl:'img/xx3.jpg',
		news:'限时抢￥440',
		title:'adidas neo阿迪休闲2018女子CF ADVANTAGECOURT系列休闲鞋DA9524',
		price:'￥440',
		cos:'￥620'
	},{
		id:'008',
		imgurl:'img/xx4.jpg',
		news:'限时抢￥494',
		title:'adidas阿迪达斯2017年新款女子清风系列跑步鞋BB1800',
		price:'￥494',
		cos:'￥800'
	},{
		id:'009',
		imgurl:'img/xx5.jpg',
		news:'限时抢￥398',
		title:'Belle/百丽2017秋黑色英伦时尚牛皮女单鞋99036CM7',
		price:'￥398',
		cos:'￥968'
	},
	{
		id:'010',
		imgurl:'img/xx6.jpg',
		news:'限时抢￥398',
		title:'Belle/百丽2017秋喵星人白/绿休闲时尚牛皮女小白鞋67810CM7',
		price:'￥398',
		cos:'￥998'
	},{
		id:'011',
		imgurl:'img/xx7.jpg',
		news:'限时抢￥398',
		title:'Belle/百丽2017秋喵星人白/绿休闲时尚牛皮女小白鞋67810CM7',
		price:'￥358',
		cos:'￥1190'
	},{
		id:'012',
		imgurl:'img/xx8.jpg',
		news:'限时抢￥328',
		title:'Belle/百丽专柜同款冬季牛皮男休闲鞋4PT01DM6',
		price:'￥328',
		cos:'￥1100'
	},{
		id:'013',
		imgurl:'img/t1.jpg',
		news:'限时抢￥368',
		title:'The North adidas阿迪三叶草2017新款婴童STAN SMITH CF I休闲鞋BZ0520',
		price:'￥368',
		cos:'￥529'
	},{
		id:'014',
		imgurl:'img/t2.jpg',
		news:'限时抢￥312',
		title:'adidas阿迪达斯2017新款小-大童RapidaRun wide K跑步鞋CQ1750',
		price:'￥312',
		cos:'￥499'
	},{
		id:'015',
		imgurl:'img/t3.jpg',
		news:'限时抢￥328',
		title:'Badidas阿迪达斯2017男大童YB T SJ TK TOP梭织茄克CF8462',
		price:'￥328',
		cos:'￥549'
	},{
		id:'016',
		imgurl:'img/t4.jpg',
		news:'限时抢￥218',
		title:'adidas阿迪达斯2017新款女小童LK ULTRA WBKR梭织茄克BS3274',
		price:'￥218',
		cos:'￥309'
	},{
		id:'017',
		imgurl:'img/t6.jpg',
		news:'限时抢￥698',
		title:'The North STACCATO/思加图2017年秋季专柜同款白色革单肩女皮包X1695CN7',
		price:'￥698',
		cos:'￥908'
	},{
		id:'018',
		imgurl:'img/t7.jpg',
		news:'限时抢￥198',
		title:'Teenmix/天美意秋季专柜同款红色人造革女包15C05CX5',
		price:'￥198',
		cos:'￥499'
	},{
		id:'019',
		imgurl:'img/t8.jpg',
		news:'限时抢￥399',
		title:'Ist belle/百丽箱包冬季专柜同款黑色人造革手提包Y3104DX6',
		price:'￥399',
		cos:'￥399'
	},{
		id:'020',
		imgurl:'img/t5.jpg',
		news:'限时抢￥238',
		title:'Teenmix/天美意冬季专柜同款黑色人造革女包X0940DX5',
		price:'￥238',
		cos:'￥699'
	},{
		id:'021',
		imgurl:'img/t1.jpg',
		news:'限时抢￥368',
		title:'The North adidas阿迪三叶草2017新款婴童STAN SMITH CF I休闲鞋BZ0520',
		price:'￥368',
		cos:'￥529'
	},{
		id:'022',
		imgurl:'img/t2.jpg',
		news:'限时抢￥312',
		title:'adidas阿迪达斯2017新款小-大童RapidaRun wide K跑步鞋CQ1750',
		price:'￥312',
		cos:'￥499'
	},{
		id:'023',
		imgurl:'img/t3.jpg',
		news:'限时抢￥328',
		title:'Badidas阿迪达斯2017男大童YB T SJ TK TOP梭织茄克CF8462',
		price:'￥328',
		cos:'￥549'
	},{
		id:'024',
		imgurl:'img/t4.jpg',
		news:'限时抢￥218',
		title:'adidas阿迪达斯2017新款女小童LK ULTRA WBKR梭织茄克BS3274',
		price:'￥218',
		cos:'￥309'
	},{
		id:'025',
		imgurl:'img/t6.jpg',
		news:'限时抢￥698',
		title:'The North STACCATO/思加图2017年秋季专柜同款白色革单肩女皮包X1695CN7',
		price:'￥698',
		cos:'￥908'
	},{
		id:'026',
		imgurl:'img/t7.jpg',
		news:'限时抢￥198',
		title:'Teenmix/天美意秋季专柜同款红色人造革女包15C05CX5',
		price:'￥198',
		cos:'￥499'
	},{
		id:'027',
		imgurl:'img/t8.jpg',
		news:'限时抢￥399',
		title:'Ist belle/百丽箱包冬季专柜同款黑色人造革手提包Y3104DX6',
		price:'￥399',
		cos:'￥399'
	},{
		id:'028',
		imgurl:'img/m1.jpg',
		news:'限时抢￥1319',
		title:'The North Face乐斯菲斯专柜同款17秋冬新品女子冲锋衣NF0A364979M1',
		price:'￥1319',
		cos:'￥2398'
	},{
		id:'029',
		imgurl:'img/m2.jpg',
		news:'限时抢￥359',
		title:'The North Face乐斯菲斯 专柜同款17春夏新品男子抓绒/软壳衣NF0A2VEIJK31',
		price:'￥798',
		cos:'￥798'
	},
	{
		id:'030',
		imgurl:'img/m3.jpg',
		news:'限时抢￥894',
		title:'Timberland添柏岚 专柜同款17秋冬男子休闲鞋A1JHF',
		price:'￥894',
		cos:'￥1490'
	},
	{
		id:'031',
		imgurl:'img/m4.jpg',
		news:'限时抢￥599',
		title:'The North Face乐斯菲斯 专柜同款17秋冬新品女子徒步鞋NF0A364979M1',
		price:'￥599',
		cos:'￥1108'
	},{
		id:'032',
		imgurl:'img/xx1.jpg',
		news:'限时抢￥459',
		title:'NIKE耐克2017年新款女子W NIKE AIR MAX THEAULTRAFK复刻鞋881175-001',
		price:'￥459',
		cos:'￥999'
	},{
		id:'033',
		imgurl:'img/xx2.jpg',
		news:'限时抢￥647',
		title:'NIKE耐克2017年新款男子HYPERDUNK 2017 LOW EP篮球鞋897637-600',
		price:'￥647',
		cos:'￥999'
	},{
		id:'034',
		imgurl:'img/xx3.jpg',
		news:'限时抢￥440',
		title:'adidas neo阿迪休闲2018女子CF ADVANTAGECOURT系列休闲鞋DA9524',
		price:'￥440',
		cos:'￥620'
	},{
		id:'035',
		imgurl:'img/t5.jpg',
		news:'限时抢￥238',
		title:'Teenmix/天美意冬季专柜同款黑色人造革女包X0940DX5',
		price:'￥238',
		cos:'￥699'
	},{
		id:'036',
		imgurl:'img/t1.jpg',
		news:'限时抢￥368',
		title:'The North adidas阿迪三叶草2017新款婴童STAN SMITH CF I休闲鞋BZ0520',
		price:'￥368',
		cos:'￥529'
	},{
		id:'037',
		imgurl:'img/t2.jpg',
		news:'限时抢￥312',
		title:'adidas阿迪达斯2017新款小-大童RapidaRun wide K跑步鞋CQ1750',
		price:'￥312',
		cos:'￥499'
	},{
		id:'038',
		imgurl:'img/t3.jpg',
		news:'限时抢￥328',
		title:'Badidas阿迪达斯2017男大童YB T SJ TK TOP梭织茄克CF8462',
		price:'￥328',
		cos:'￥549'
	},{
		id:'039',
		imgurl:'img/t4.jpg',
		news:'限时抢￥218',
		title:'adidas阿迪达斯2017新款女小童LK ULTRA WBKR梭织茄克BS3274',
		price:'￥218',
		cos:'￥309'
	},{
		id:'040',
		imgurl:'img/m1.jpg',
		news:'限时抢￥1319',
		title:'The North Face乐斯菲斯专柜同款17秋冬新品女子冲锋衣NF0A364979M1',
		price:'￥1319',
		cos:'￥2398'
	}];

	var tab = document.querySelector('.tab');
	var tabb = document.getElementsByClassName('tabb');

	console.log(tabb)
	var ul = document.createElement('ul');
	var ul = '<ul>';
	for(var i=0;i<good.length;i++){
		 console.log(good[i])
		ul += `
			<li>
			<div class="img"><a href="#">
			<sup class="sale"><em class="sale1"><strong>${good[i].news}</strong></em></sup>
			<img src="${good[i].imgurl}" alt="" />
			</a>
			</div>
			<div class="cnt">
				<span><a>${good[i].title}</a></span>
				<p class="price_sc">
					<em class="ygprc">${good[i].price}</em>
					<del>${good[i].cos}</del>
				</p>
			</div>
			</li>
		`
	}
		ul +='</ul>';

		tabb.innerHTML = ul;

//侧边tab切换
	var li = tab.children; 

	console.log(li)
	var index = 0;
	for(var i=0;i<li.length;i++){

		if(i===index){
			li[i].className = 'on';
		}else{
			tabb[i].style.display = 'none';
		}

		li[i].onmouseover = function(){
			for(var i=0;i<li.length;i++){
				li[i].className = '';
				tabb[i].style.display = 'none';

				if(li[i] === this){
					index = i;
				}
			}
			li[index].className = 'on';

			tabb[index].style.display = 'block';
		}
	}


	
	// var tabb1 = document.querySelector('.tabb');
	// console.log(tabb1)
	// var xhr_g = new XMLHttpRequest();

	// xhr_g.onreadystatechange = function(){
	// 	if(xhr_g.readyState === 4){
	// 		var goodlist = JSON.parse(xhr_g.responseText);
	// 		var ul = document.createElement('ul');

	// 		ul.innerHTML = goodlist.map(function(item){
	// 			return`
	// 		<li>
	// 		<div class="img"><a href="#">
	// 		<sup class="sale"><em class="sale1"><strong>${item.news}</strong></em></sup>
	// 		<img src="${item.imgurl}" alt="" />
	// 		</a>
	// 		</div>
	// 		<div class="cnt">
	// 			<span><a>${item.title}</a></span>
	// 			<p class="price_sc">
	// 				<em class="ygprc">${item.price}</em>
	// 				<del>${item.cos}</del>
	// 			</p>
	// 		</div>
	// 		</li>
	// 			`
	// 		}).join('');

	// 		tabb1.appendChild(ul);
	// 	}
	// }
	// xhr_g.open('get','api/data/good.json',true);

	// xhr_g.send();
})


	
	


