$(document).ready(function(){
    var user_your = $(".main_bookshelf .show_your_name  p span").text();
    function postHtml(val)
    {
        var html = '<div class="comment_your">'
        +               '<a class ="name_sk">' + user_your + '</a>'
        +               '<p>'
        +                   val
        +               '</p>'
        +           '</div>';
        $(".show_comment").prepend(html);
        $(".book_end .comment .write_comment .write_comment_in").text('');
    };
    $(".book_end .comment .send_comment .write_comment .post_comment").click(function(){
        var val = $(".book_end .comment .write_comment .write_comment_in ").text();
        if(val != ''){
            $.post('/', {name_fr:user_your, content_blog:val}, function(data){
                if(data)
                    postHtml(val);
            });
        }
    });
});