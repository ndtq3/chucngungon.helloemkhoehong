const  butterfly  =  document.getElementById ( " butterfly " ) ;
const  cửa  =  tài liệu . getElementById ( "cửa" ) ;
const  texts  =  [
  văn bản1 ,  văn bản2 ,  văn bản3 ,  văn bản4 ,  văn bản5
] ;

let  currentText  =  0 ;

/* Hiển thị đoạn văn bản đầu tiên sau 3 giây */
setTimeout ( ( )  =>  showText ( 0 ) ,  3000 ) ;

hàm  showText ( i )  {
  văn bản.forEach ( t = > t.style.opacity = 0 ) ;​​​​    
  văn bản [ i ] . kiểu . độ mờ  =  1 ;
}

/* Tiếng click của bướm */
butterfly.addEventListener ( " click " , ( ) = > {   
  butterfly.classList.add ( " fly " ) ;​​
  door.classList.add ( " open " ) ;​​
  startGalaxy ( ) ;

  let  delay  =  2000 ;
  for  ( let  i  =  1 ;  i  <  texts . length ;  i ++ )  {
    setTimeout ( ( )  =>  showText ( i ) ,  delay ) ;
    độ trễ  ±  2500 ;
  }

  /* Hiển thị biểu tượng trái tim sau đoạn văn bản cuối cùng */
  setTimeout ( startHearts ,  delay  +  2000 ) ;
} ) ;

/* ===== HIỆU ỨNG THIÊN HÀ ===== */
const  gCanvas  =  document.getElementById ( " galaxy " ) ;
const  gCtx  =  gCanvas.getContext ( " 2d " ) ;
gCanvas . chiều rộng  =  chiều rộng bên trong ;
gCanvas.height = innerHeight ;​​  

let  stars  =  [ ] ;

hàm  startGalaxy ( )  {
  for  ( let  i  =  0 ;  i  <  200 ;  i ++ )  {
    sao . đẩy ( {
      x : Math . random ( )  *  gCanvas . width ,
      y : Math . random ( )  *  gCanvas . height ,
      r : Math . random ( )  *  2 ,
      v : Math . random ( )  *  0.6
    } ) ;
  }
  animateGalaxy ( ) ;
}

hàm  animateGalaxy ( )  {
  gCtx.clearRect ( 0 , 0 , gCanvas.width , gCanvas.height ) ;​​​​​​
  sao.forEach ( s = > {​  
    gCtx.beginPath ( ) ;​​
    gCtx.arc ( s.x , s.y , s.r , 0 , Math.PI * 2 ) ;​​​​​​​​​​      
    gCtx.fillStyle = "  rgba(255,255,255,0.8) " ; 
    gCtx.fill ( ) ;​​
    s . y  +=  s . v ;
    if  ( s . y  >  gCanvas . height )  s . y  =  0 ;
  } ) ;
  requestAnimationFrame ( animateGalaxy ) ;
}

/* ===== HIỆU ỨNG TIM ===== */
const  hCanvas  =  document.getElementById ( " heart " ) ;
const  hCtx  =  hCanvas.getContext ( " 2d " ) ;
hCanvas . chiều rộng  =  chiều rộng bên trong ;
hCanvas.height = innerHeight ;​​  

let  hearts  =  [ ] ;

hàm  startHearts ( )  {
  đặt khoảng thời gian ( ( )  =>  {
    trái tim . đẩy ( {
      t : 0 ,
      kích thước : Toán học.ngẫu nhiên ( )  *  12  +  8
    } ) ;
  } ,  150 ) ;
  animateHearts ( ) ;
}

hàm  heartX ( t )  {
  trả  về 16  *  Math.pow ( Math.sin ( t ) , 3 ) ;​​​ 
}

hàm  heartY ( t )  {
  trả về  - ( 13  *  Math . cos ( t )  -  5  *  Math . cos ( 2 * t )  -  2  *  Math . cos ( 3 * t )  -  Math . cos ( 4 * t ) ) ;
}

hàm  animateHearts ( )  {
  hCtx.clearRect ( 0 , 0 , hCanvas.width , hCanvas.height ) ;​​​​​​
  trái tim.forEach ( h = > {  
    h . t  ±  0,05 ;
    const  x  =  hCanvas.width / 2 + heartX ( h.t ) * h.size ;​​​​​​    
    const  y  =  hCanvas.height / 2 + heartY ( h.t ) * h.size ;​​​​​​    

    hCtx.fillStyle = "  rgba(255,182,193,0.8) " ; 
    hCtx.beginPath ( ) ;​​
    hCtx.arc ( x , y , 2 , 0 , Math.PI * 2 ) ;​​​​    
    hCtx.fill ( ) ;​​
  } ) ;
  requestAnimationFrame ( animateHearts ) ;
}
