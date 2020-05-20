$(document).ready(function(){
    // show 
    $(".book_end .comment .send_comment .send2").click(function(){
        $(".add_sign_blog").css("top","0");
    });
    // close
    $(".add_sign_blog .main_add_blog .icon_close i").click(function(){
        $(".add_sign_blog").css("top","-110vh");
    });
    // load data to bog
    $(".body_status .left_status .content_status .st1").load('vonglap.txt');
    $(".body_status .left_status .content_status .st2").load('bongo.txt');
    $(".body_status .left_status .content_status .st3").load('aly.txt');
    $(".body_status .left_status .content_status .st4").load('mql.txt');
    $(".body_status .left_status .content_status .st5").load('kien_thuc.txt');
    $(".body_status .left_status .content_status .st6").load('linux.txt');
    $(".body_status .left_status .content_status .st7").load('the_dog.txt');
    $(".body_status .left_status .content_status .st7").load('the_dog.txt');
    $(".body_status .left_status .content_status .st8").load('thresh.txt');
    // ....................... intro
    $(".body_book .left_book_in .main_content_in .intro1").load('intro1.txt');
    $(".body_book .left_book_in .main_content_in .intro2").load('intro2.txt');
    $(".body_book .left_book_in .main_content_in .intro3").load('intro3.txt');
    $(".body_book .left_book_in .main_content_in .intro4").load('intro4.txt');
    $(".body_book .left_book_in .main_content_in .intro5").load('intro5.txt');
});