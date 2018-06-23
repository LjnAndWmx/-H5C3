$(function(){
    $(".heima").fullpage({
        navigation:true,//是否显示项目导航
        sectionsColor:["#f9dd67", "#84a2d4", "#ef674d", "#ffeedd", "#cf4759", "#85d9ed", "#6faa85", "#84d9ed"],
        afterLoad:function(a,index){
            //进入当前屏时，清楚其他css样式,结束动画效果
            $(".section>div img,.section>div div").attr("style","");
            $(".section>div img,.section>div div").stop();

            //进入当前屏时，清楚其他屏动画效果
            $(".section").removeClass("animation").eq(index-1).addClass("animation");


            //当屏幕是2时
            if(index==2){
                $(".a2 .search01").animate({
                    marginLeft: -111
             },1000,"easeOutBack",function(){
                    $(".a2 .search01").hide();
                    $(".a2 .search02").show().delay(500).animate({marginLeft: 170,
                        bottom: 450,
                        width: 100,
                        height: 25},1000);
                    $(".a2 .sofas").show().delay(1500).animate({
                            height:218
                        },1000)
                    });   
            }
            //第四屏
            if (index==4) {
                 $('.carball').animate(
                     {
                         marginLeft:1000
                     },2000,'easeInElastic',function () { 
                         $('.address').fadeIn(1000);
                      }
                 )
             }
            //第六屏
            if(index==6){
                $('.a6 .street').animate({
                    left:-1500
                },7000,function(){
                    $('.a6 .man').animate({
                        height:120,
                        bottom:0
                    },500,function(){
                        $('.a6 .man').animate({
                            right:-200
                        },1000,function(){
                            $('.a6 .door').show();
                            setTimeout(function(){
                                $('.a6 .women').show();
                            },500);
                        })
                    })
                })
            }
            //第八屏
            if (index==8) {
                //获取浏览器窗口的高度
                var winHight = $(window).height();
                // console.log(winHight);
                $('.a8').mousemove(function(event){
                    //获取鼠标的X，Y坐标
                     var x = event.pageX;
                     var y = event.pageY;
                    //  console.log(x+'|'+y);
                    //获取手的bottom值
                    var left = x - 75;
                    var bottom =(winHight - y) - 449;
                    if (bottom>0) bottom=0;
                    // console.log(left+'|'+bottom);
                    $('.hand').css({left:left,bottom:bottom});
 
                })
                $('.a8 .again').click(function(){
                    $.fn.fullpage.moveTo(1);
                })
            }
        }
    });
});