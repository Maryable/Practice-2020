$(function(){
    $(".logo").click(function(){
        alert("메인 페이지로 이동합니다")
    });
    
    //네비 메뉴 마우스 오버/마우스 아웃
    $("nav div").hover(function(){
        $(this).css({"cursor":"pointer", "backgroundColor":"white", "color":"black","fontWeight":"600"})
    })
    $("nav div").mouseout(function(){
        $(this).css({"backgroundColor":"transparent", "color":"white", "fontWeight":"200"})
    })

    $("header ul>li").css({"cursor":"pointer", "fontSize":"20px"});
    $("input").css({"fontWeight":"600", "color":"white","backgroundColor":"black","cursor":"pointer"})
    
    //마우스 오버시 그림 크기 커지게 하고싶었으나 안됨
    // $("imgBox").hover(function(){
    //     $("imgs").scale("1.1")
    // });

    //이미지 보이기, 가리기 
    $(".imgs").hide();
    $(".basic_img").show();

    $(".menu1").click(function(){
        $(".imgs").hide(); $("#imgs1").show();
    }) //메이크업 클릭

    $(".menu2").click(function(){
        $(".imgs").hide(); $("#imgs2").show();
    }) //스킨케어 클릭

    $(".menu3").click(function(){
        $(".imgs").hide(); $("#imgs3").show();
    }) //신제품 클릭

    $(".menu4").click(function(){
        $(".imgs").hide(); $("#imgs4").show();
    }) //베스트셀러 클릭

    $(".menu5").click(function(){
        $(".imgs").hide(); $("#imgs5").show();
    }) //브랜드 클릭

    $(".menu6").click(function(){
        $(".imgs").hide(); $("#imgs6").show();
    }) //스토리 클릭

    $(".menu7").click(function(){
        $(".imgs").hide(); $("#imgs7").show();
    }) //뷰티 서비스

    $(".menu8").click(function(){
        $(".imgs").hide(); $("#imgs8").show();
    }) //공식몰 단독 


    //버튼 누르면 기본 이미지 보이기, 가리기
    $(".btn_show").click(function() {
        $(".imgs").show();
    })
    $(".btn_hide").click(function() {
        $(".imgs").hide();
    })
});