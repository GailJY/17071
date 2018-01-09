document.addEventListener('DOMContentLoaded',function(){
	 var y_goodslist = [{
        id:'b1',
        imgurl:'../img/detail/big/01.jpg',
    },{
        id:'b2',
        imgurl:'../img/detail/big/02.jpg',
    },{
        id:'b3',
        imgurl:'../img/detail/big/03.jpg',
    },{
        id:'b4',
        imgurl:'../img/detail/big/04.jpg',
    },{
        id:'b5',
        imgurl:'../img/detail/big/05.jpg',
    },{
        id:'b6',
        imgurl:'../img/detail/big/06.jpg',
    },{
        id:'b7',
        imgurl:'../img/detail/big/07.jpg',
    }];


       //获取传递过来的url参数，把url参数转换成对象
    // location.search截取?及之后的参数
    var params = location.search;
    params = params.slice(1);
    params = params.split('&');
    
    var data = {};//空对象装拆分开的数据
    params.forEach(function(item){
        var arr = item.split('=');
        data[arr[0]] = decodeURI(arr[1]); 
    });
    console.log(data)
    // 商品标题,图片，价格插入显示
    var goodsName =document.querySelector('.goodsTitle');
    var goodsPhoto = document.querySelector('.databig_pic');//图片

    goodsName.innerText = data.input;
    goodsPhoto.src = data.imgurl;




    //
    var good_lct = document.querySelector('.good_lct');
    var good_lc_item = document.querySelectorAll('.good_lc_item');
    var a = good_lct.children;

  var index = 0;
  for(var i=0;i<a.length;i++){

    if(i===index){
      a[i].className = 'active';
    }else{
      good_lc_item[i].style.display = 'none';
    }

    a[i].onclick = function(){
      for(var i=0;i<a.length;i++){
        a[i].className = '';
        good_lc_item[i].style.display = 'none';

        if(a[i] === this){
          index = i;
        }
      }
      a[index].className = 'active';

      good_lc_item[index].style.display = 'block';
      stopDefault();
    }

  }







	 var oDataList_tab = document.getElementsByClassName('dataList_left')[0];
    var oTab_BigPic = oDataList_tab.getElementsByClassName('databig_pic')[0];
    var oTab_bigPic = oDataList_tab.getElementsByClassName('dataList_allPic')[0];
    var bigList = oTab_bigPic.getElementsByTagName('li');




    //商品展示图
    var datalp = document.getElementById('datalp');
    function detashow(){
        var deta = y_goodslist.map(function(item){
            return '<li date-id="+ item.id +" class="fl clearfix"><img src="'+item.imgurl+'" width="60" height="60" alt="" /></li>'
        });
        datalp.innerHTML = deta.join('');
    }  
    detashow();

 	oTab_bigPic.onmouseover = function(e){console.log(666)
        e = e || window.event;
        var target = e.target || e.src.Element;console.log(target.children[0])
        if(target.tagName.toLowerCase() === "img"){
            var Murl = target.getAttribute("src");console.log(Murl)
            oTab_BigPic.src = Murl;

         
        }
    }

  //阻止浏览器的默认行为 
function stopDefault( e ) { 
    //阻止默认浏览器动作(W3C) 
    if ( e && e.preventDefault ) 
        e.preventDefault(); 
    //IE中阻止函数器默认动作的方式 
    else 
        window.event.returnValue = false; 
    return false; 
}


  var dataList_right = document.getElementsByClassName('dataList_right')[0];

  console.log(dataList_right);
  var pro = document.querySelector('.prospec');
  var cm = pro.children;
  console.log(cm)
  dataList_right.onclick = function(e){
  	 var e = e || window.event;
  	 var target = e.target || e.srcElement;
  	 
  	 		 if(target.nodeName.toLowerCase() == 'a'){
  	 		 		
  	 		 	target.classList.toggle('select');
  	 		 	stopDefault();
  	 }
  	 	
  	
  }



    $(function(){
            $('.winSelector').gdsZoom();

            $('.w_pic_tab img').click(function(){
                $('.winSelector img').attr({
                    'src':this.src,
                    'data-big':$(this).attr('data-big') || this.src
                });
            })
        });
    var dataList_l_tab = document.querySelector('.dataList_l_tab');
    var big = document.getElementById('big');

    








})