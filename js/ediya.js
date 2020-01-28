$(function(){
   //language(드롭다운)
   $('.language>a').click(function (e) { 
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next().slideToggle();
   });

   //메뉴버튼 
   var btnFlag=true;
   $('#btn-menu').click(function(){
      $('body').toggleClass('open');
      // 메뉴버튼안의 텍스트를 menu 또는 close로 들어가도록 처리하기
      // 조건문 사용 
      // if($(this).find('i').text()=='menu'){
      //    $(this).find('i').text('close');
      // }else{
      //    $(this).find('i').text('menu');
      // }
      // if($('body').hasClass('open')){
      //    $(this).find('i').text('close');
      // }else{
      //    $(this).find('i').text('menu');
      // }
      // if($(this).is(':contains(menu)')){
      //    $(this).find('i').text('close');
      // }else{
      //    $(this).find('i').text('menu');
      // }
      if(btnFlag){
         btnFlag=false;
         $(this).find('i').text('close');
      }else{
         btnFlag=true;
         $(this).find('i').text('menu');
      }
   })

   // 화면의 사이즈가 변경될 때 gnb의 상태 초기화하기 
   $(window).resize(function(){
      // console.log('사이즈가 변경됨');
      $('.gnb>li').removeClass();
      var windowWidth=$(window).width();
      // console.log(windowWidth);
      if(windowWidth<=1100){//pc아님 ~1100px
         $('.gnb .sub').hide();
      }else{//pc임
         $('.gnb .sub').show();
      }
   })

   // gnb - 아코디언 방식
   $('.gnb i').click(function(e){
      e.preventDefault();
      if($(this).parents('li').hasClass('active')){
         $('.gnb > li').removeClass('active');
         $('.gnb .sub').slideUp();
      }else{
         $('.gnb > li').removeClass('active');
         $('.gnb .sub').slideUp();
         $(this).parents('li').addClass('active');
         $(this).parents('li').find('.sub').slideDown();
      }
   })

   //scroll
   $(window).scroll(function(){
      var scrollTop=$(window).scrollTop();
      // console.log('현재스크롤 y의 위치',scrollTop);
      
      if(scrollTop > 0){//스크롤을 함
         $('body').addClass('scroll');
      }else{//가장 위쪽에 스크롤이 있는 상태
         $('body').removeClass('scroll');
      }

      // main-culture, main-coffee-lab애니메이션 처리
      // 500정도를 빼주면 그 영역에 도달하기 전에 애니메이션 실행가능
      var cultureLab=$('.main-culture').offset().top-500;
      var coffeeLab=$('.main-coffee-lab').offset().top-500;
      // console.log('main-culture영역의 시작위치',cultureLab);
      if(scrollTop > cultureLab){
         // console.log('애니메이션 실행');
         var delay=0;
         $('.main-culture .fadeInUp').each(function(i,el){
            if(i==0){delay=500;}
            if(i==1){delay=0;}
            if(i==2){delay=1000;}                 
            setTimeout(function(){
               $(el).addClass('on');}
            ,delay)
            //화살표함수를 사용하여 각 요소에 접근해서 지연시간 후 on클래스 넣어주기 
            // setTimeout(()=>{$(this).addClass('on')},delay);
         })
      }else{
         $('.main-culture .fadeInUp').removeClass('on');
      }

      if(scrollTop > coffeeLab){
         var delay=0;
         $('.main-coffee-lab .fadeInUp').each(function(i,el){
            if(i==0){delay=0;}
            if(i==1){delay=1000;}              
            setTimeout(function(){
               $(el).addClass('on');}
            ,delay)
         })
      }else{
         $('.main-coffee-lab .fadeInUp').removeClass('on');
      }

   })

   //quick-event닫기 
   $('.quick-event button').click(function(){
      $('.quick-event').hide();
   })

   //메인 슬라이드
   var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      loop:true,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,         
      },
      autoplay: {
         delay: 2500,
         disableOnInteraction: false,
      },
   });
       
})