/**
 * Created by wall on 2016/10/10.
 */
$(function () {

    /*鼠标经过二维码显示隐藏*/
    $('.mobile').hover(
        function () {
            // $('.wecgat-rq').slideToggle();
            $('.wecgat-rq').show();
        },function () {
            $('.wecgat-rq').hide();
    });

    // @ 给窗口加滚动条事件
    $(window).scroll(function() {
        // 获得窗口滚动上去的距离
        var ling = $(document).scrollTop();
        // 在标题栏显示滚动的距离
        /*document.title = ling;*/
        // 如果滚动距离大于出来
        if (ling > 50) {
            $('#rights').show(500);
        }

        if (ling < 50) {
            $('#rights').hide(500);
        }

    });



        $("#returnTop").click(function () {
        var speed=1000;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
        });


    /*信息披露*/
    $(document).ready(function () {
        $('.arg-show').hover(function () {
            $(".nav-hides").slideDown(200).css("opacity",'1');
            $(this).children('a:first').addClass("hov");
        }, function () {
            $(".nav-hides").slideUp(0).css("opacity",'0');;
            $(this).children('a:first').removeClass("hov");
        });


        $('.tea-show').hover(function () {
            $(".nav-teach").slideDown(200).css("opacity",'1');
            $(this).children('a:first').addClass("hov");
        }, function () {
            $(".nav-teach").slideUp(0).css("opacity",'0');;
            $(this).children('a:first').removeClass("hov");
        });

    });
});