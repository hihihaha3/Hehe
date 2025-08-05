$(function() {
    $('#yes').click(function(event) {
        modal('Anh biết ngay là em sẽ đồng ý mà~(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('Người quang minh chính đại không nói lời mờ ám!', A);
    });
});

function A() {
    modal('Anh yêu em!', B);
}

function B() {
    modal('Anh biết em đang đợi câu này của anh', C);
}

function C() {
    modal('Em đừng từ chối anh mà~', D);
}

function D() {
    modal('Từ chối anh à, không có chuyện đó đâu', E);
}

function E() {
    modal('Cả đời này cũng không thể để em rời xa anh đâu!!!', F);
}

function F() {
    modal('Đi theo anh nhé em~', G);
}

function G() {
    modal('Sổ đỏ ghi tên em', H);
}

function H() {
    modal('Anh biết nấu cơm', I);
}
 function I() {
    modal('Anh sẽ mua rất nhiều đồ cho em', J)
}
function I() {
    modal('Sẽ yêu thương em thật nhiều', J)
}
function I() {
    modal('Sẽ dỗ em ngủ', J)
}
function I() {
    modal('Sẽ hát cho em nghe', J)
}
function I() {
    modal('Yêu em. Moa moa!', J)
}

function J() {
    /* Đã chú thích (comment) lại đoạn này theo yêu cầu */
    // modal('Được, chúng ta đến cục dân chính đăng ký thôi', function() {
    //     fireworks();
    // });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
