console.log('Loaded!');

//change the text of the main text div
var element=document.getelementbyid('main-text');

element.innerhtml="new value";

//move the image
var img=document.getelementbyid('img');
var marginleft=0;
function moveright(){
    marginleft=marginleft+10;
    img.style.marginleft= marginleft+'px';
}
img.onclick=function(){
    var interval= setinterval(moveright,100);
};