$(function () {
    var setImg = '.slide';
    var fadeSpeed = 2000;
    var switchDelay = 3000;

    $(setImg).children('img').css({ opacity: '0' });
    $(setImg + ' img:first').stop().animate({ opacity: '1', zIndex: '20' }, fadeSpeed);

    setInterval(function () {
        $(setImg + ' :first-child').animate({ opacity: '0' }, fadeSpeed).next('img').animate({ opacity: '1' }, fadeSpeed).end().appendTo(setImg);
    }, switchDelay);
});
document.getElementById('shop').addEventListener('mouseover', () => {//マウスかざしたら
   document.getElementById('submenu1').style.display='block';
})
document.getElementById('shop').addEventListener('mouseout', () => {//マウス離したら
    document.getElementById('submenu1').style.display='none';
})

document.getElementById('gongcha').addEventListener('mouseover', () => {//マウスかざしたら
    document.getElementById('submenu2').style.display='block';
 })
 document.getElementById('gongcha').addEventListener('mouseout', () => {//マウス離したら
     document.getElementById('submenu2').style.display='none';
 })

 document.getElementById('company').addEventListener('mouseover', () => {//マウスかざしたら
    document.getElementById('submenu3').style.display='block';
 })
 document.getElementById('company').addEventListener('mouseout', () => {//マウス離したら
     document.getElementById('submenu3').style.display='none';
 })
 
 

