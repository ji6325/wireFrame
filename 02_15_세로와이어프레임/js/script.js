var $slideWrap = document.getElementsByClassName('slide-wrap');
        var $nextBtn = document.getElementsByClassName('next-btn');
        var $prevBtn = document.getElementsByClassName('prev-btn');

var imageslide = {
    init: function(){
    this.slide1Btn();

    },

    slide1Btn:function(){
        var a=0;
        

        function nextSlideFn(){
            a++;
            a > 3 ? a = 0 : a;
            $slideWrap[0].style = 'left:' + (-800*a) + 'px';
            
        }
        function prevSlideFn(){
            a--;
            a < 0 ? a=3 : a;
            $slideWrap[0].style = 'left:' + (-800*a) + 'px';
        }
        $nextBtn[0].addEventListener('click',function(e){
            e.preventDefault();
            nextSlideFn();
        },false);
        $prevBtn[0].addEventListener('click',function(e){
            e.preventDefault();
            prevSlideFn();
        },false);
    },
    
};
imageslide.init();