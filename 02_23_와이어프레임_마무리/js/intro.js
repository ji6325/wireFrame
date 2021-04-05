;(function($){
    obj = {
        init:function(){
            var that = this;

            that.navFn();
            that.slideFn();
            that.noticeFn();
            that.galleryFn();
            that.bannerFn();
            that.familySiteFn();            
        },
        navFn:function(){
            $mainBtn = $('#nav .main-btn');
            $sub = $('#nav .sub');
            $navUl = $('#nav  > ul');

            $mainBtn.on({
                mouseenter:function(){
                    $mainBtn.removeClass('on');
                    $(this).addClass('on');
                    $sub.removeClass('on');
                    $(this).next().addClass('on');
                }
            });
            $navUl.on({
                mouseleave:function(){
                    $mainBtn.removeClass('on');
                    $sub.removeClass('on');
                }
            });

        },
        slideFn:function(){
            $slideWrap = $('#section1 .slide-wrap');
            $prevBtn = $('#section1 .prev-btn');
            $nextBtn = $('#section1 .next-btn');
            var cnt = 0;

            function slideFn(){
                $slideWrap.stop().animate({left:-800*cnt},600 , function(){
                    if(cnt>3) cnt=0;
                    if(cnt<0) cnt=3;
                    $slideWrap.stop().animate({left:-800*cnt},0);
                });
            }

            function nextSlideCountFn(){
                cnt++;
                slideFn();
            }
            //2-1. 이전 슬라이드 카운트 함수 생성
            function prevSlideCountFn(){
                cnt--;
                slideFn();
            }
            $nextBtn.on({
                click:function(){
                    if( !$slideWrap.is(':animated' )){
                        nextSlideCountFn();
                }
            }
            });
            $prevBtn.on({
                click:function(){
                    if( !$slideWrap.is(':animated' )){
                        prevSlideCountFn();
                }
            }
            });

        },
        noticeFn:    function(){

            var $modal = $('#modal');
            var $noticeBtn = $('#section2 .notice-btn');
            var $noticeText = $('#modal .notice-text')
            var $conTent = $('#modal .content')


            $noticeBtn.on({
                click:function(e){
                    e.preventDefault();
                    var tit= $(this).attr('title');


                    $modal.show();
                    $noticeText.text(tit);
                }
            });

            $modal.on({
                click:function(e){
                    e.stopPropagation();

                    
                    $(this).hide();
                }
            });
            $conTent.on({
                click:function(e){
                    e.stopPropagation();
                }
            })

        },
        galleryFn:   function(){


            var $modalGallery = $('#modalGallery');
            var $galleryBtn = $('#section2 .gallery-btn');
            var $content = $('#modalGallery .content-gallery')
            var n = 0;
            var a = [
                'url(./img/gallery0.jpg)', 
                'url(./img/gallery1.jpg)',
                'url(./img/gallery2.jpg)',
                'url(./img/gallery3.jpg)'
                    ]
                    var len = a.length; 
            
            $galleryBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        n=idx;
                        $modalGallery.stop().fadeIn(600);
                        contentFn();  
                    }
                });
            });


            function contentFn(){
                $content.stop().fadeOut(0).css({'background-image' : a[n]}).fadeIn(300);
            }

            //모달창 닫기
            $modalGallery.on({
                click:function(){
                    $modalGallery.stop().fadeOut(600); 
                }
            });

            $content.on({
                click:function(e){
                    e.stopPropagation();
                    n++;
                    if(n>len-1) n=0 
                    contentFn(); 
                    
                
                }
            });


        },
        bannerFn:    function(){

        },
        familySiteFn:function(){
            var $family = $('#footer #family');
        $family.on({
            change:function(){
                var x = $(this).val();

            location.href = x;
            }
        })
            
        }
    };

    obj.init();
})(jQuery);


function goFamily(z){
    location.href =z;
}

function goUrl(z){
 
    switch(z){
        case 'noticeMore':
            location.href = 'https://m.hanatour.com/com/cuc/CHPC0CUC0004M100';
            break;

        case 'main1':
            location.href = './main1';
            break;
        case 'main1-1':
            location.href = './main1-1';
            break;
        case 'main1-2':
            location.href = './main1-2';
            break;
        case 'main1-3':
            location.href = './main1-3';
            break;
        case 'main1-4':
            location.href = './main1-4';
            break;




        case 'main2':
            location.href = './main2';
            break;
        case 'main2-1':
            location.href = './main2-1';
            break;
        case 'main2-2':
            location.href = './main2-2';
            break;
        case 'main2-3':
            location.href = './main2-3';
            break;
        case 'main2-4':
            location.href = './main2-4';
            break;



        case 'main3':
            location.href = './main3';
            break;
        case 'main3-1':
            location.href = './main3-1';
            break;
        case 'main3-2':
            location.href = './main3-2';
            break;
        case 'main3-3':
            location.href = './main3-3';
            break;
        case 'main3-4':
            location.href = './main3-4';
            break;



        case 'main4':
            location.href = './main4';
            break;
        case 'main4-1':
            location.href = './main4-1';
            break;
        case 'main4-2':
            location.href = './main4-2';
            break;
        case 'main4-3':
            location.href = './main4-3';
            break;
        case 'main4-4':
            location.href = './main4-4';
            break;

        case 'bannerMore':
            location.href = 'https://www.hotelscombined.co.kr/horizon/sem/hotels/general?lang=ko&skipapp=true&destination=c68442&kw=-1&gclid=CjwKCAiAyc2BBhAaEiwA44-wWzHyYOIdz9W-KRQokHUlv_BpLOPDgkLFXjf4mTd5y48J3I-NH4iL7RoCqtYQAvD_BwE';
            break;
        case 'banner1':
            location.href = 'https://www.hotelscombined.co.kr/hotels/%EC%8D%AC%EB%B0%B8%EB%A6%AC-%ED%98%B8%ED%85%94,%EC%97%AC%EC%A3%BC-c68442-h2020554-details/2021-02-23/2021-02-24/2adults?sid=HaEEMpvhSw';
            break;
        case 'banner2':
            location.href = 'https://www.hotelscombined.co.kr/hotels/%EC%9D%BC%EC%84%B1-%EB%82%A8%ED%95%9C%EA%B0%95-%EB%A6%AC%EC%A1%B0%ED%8A%B8,%EC%97%AC%EC%A3%BC-c68442-h794342-details/2021-02-23/2021-02-24/2adults?sid=HaEEMpvhSw';
            break;
        case 'banner3':
            location.href = 'https://www.hotelscombined.co.kr/hotels/%EC%97%AC%EC%A3%BC-%ED%95%98%EB%8A%98%EC%9D%B4-%EC%97%B4%EB%A6%AC%EB%8A%94-%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B8%8C%EC%9D%B8-%EB%AC%B4%EC%9D%B8%ED%85%94,%EC%97%AC%EC%A3%BC-c68442-h4819199-details/2021-02-23/2021-02-24/2adults?sid=HaEEMpvhSw';
            break;
        case 'sns1':
            location.href = 'https://www.instagram.com/';
            break;
        case 'sns2':
            location.href = 'https://m.facebook.com/';
            break;
        case 'sns3':
            location.href = 'https://www.kakaocorp.com/';
            break;
        case 'sns4':
            location.href = 'https://www.youtube.com/';
            break;




        default:
            alert('잘못된접근')
        }
    }