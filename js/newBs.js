var inSection=true;
var curEve;
//document.getElementsByTagName("body").setActive();
console.log(document.activeElement);
//var article=document.getElementsByTagName("article");
//document.getElementById("sec").className="bespoke-active bespoke-slide"
var mySwipeIt = new SwipeIt('.box');
var list = document.getElementsByTagName("section");
list[3].className="bespoke-active bespoke-slide";
var cur=3;
for(var i=cur+1;i<list.length;i++)
{
  list[i].className="bespoke-inactive bespoke-after bespoke-after-"+(i-cur)+" bespoke-slide";
}
for(var i=0;i<cur;i++)
{
      list[i].className="bespoke-slide bespoke-inactive bespoke-before bespoke-before-"+(cur-i);
}
function leftSec()
{
  if(cur<list.length-1 && inSection==true)
  {
    cur=cur+1;
    for(var i=0;i<cur;i++)
    {
      list[i].className="bespoke-slide bespoke-inactive bespoke-before bespoke-before-"+(cur-i);
    }
    for(var i=cur;i<list.length;i++)
    {
      list[i].className="bespoke-slide bespoke-inactive bespoke-before bespoke-after-"+(i-cur);
    }
    list[cur].className="bespoke-active bespoke-slide";
  }
}
function rightSec() {
  if(cur>0 && inSection==true)
  {
    cur=cur-1;
    for(var i=0;i<cur;i++)
    {
      list[i].className="bespoke-slide bespoke-inactive bespoke-before bespoke-before-"+(cur-i);
    }
    for(var i=cur;i<list.length;i++)
    {
      list[i].className="bespoke-slide bespoke-inactive bespoke-before bespoke-after-"+(i-cur);
    }
    list[cur].className="bespoke-active bespoke-slide";
  }
}

mySwipeIt
.on('swipeLeft',function(e){
  leftSec();
})
.on('swipeRight',function(e){
  rightSec();
})
.on('swipeUp',function(e){
  for(var i=0;i<list.length;i++)
  {
    if(i==cur)
    {
      console.log("swipe up event");
      list[i].style.width="100%";
      list[i].style.height="100%";
      list[i].style.top="0%";
      list[i].style.left="0%";
      list[i].style.borderRadius="0px";

    }
    else{
      list[i].style.display="none";
    }
  }

  inSection=false;
});
document.addEventListener('keydown', function(e) {
  var key = e.which;
  if(key==39 && cur<list.length&&inSection==true)
  {
    leftSec();
  }
  if(key==37&&cur>0&&inSection==true)
  {
    rightSec();
  }
  if(key==27)
  {
    for(var i=0;i<list.length;i++)
    {
      if(i==cur)
      {
        inSection=true;
        list[i].style.width="60%";
        list[i].style.height="80%";
        list[i].style.top="10%";
        list[i].style.left="20%";
        list[i].style.borderRadius="30px";

      }
      list[i].style.display="block";
    }
  }
  if(key==38)
  {
    for(var i=0;i<list.length;i++)
    {
      if(i==cur)
      {
        console.log("swipe up event");
        list[i].style.width="100%";
        list[i].style.height="100%";
        list[i].style.top="0%";
        list[i].style.left="0%";
        list[i].style.borderRadius="0px";

      }
      else{
        list[i].style.display="none";
      }
    }
    inSection=false;
  }
});
function showEvents(str)
{
  //console.log("clicked");
  curEve=str;
  //console.log(document.activeElement);
  /*for(var i=1;i<gameAll.length;i++)
  {
    gameAll[i].style.display="inline";
  }*/
  console.log("showing game??");
  //document.getElementById(str).style.top = "20%";
  /*document.getElementById(str+"_Details").style.opacity="1";
  if(document.getElementById(str+"_Inter")!=null)
  document.getElementById(str+"_Inter").style.display="inline";
  if(document.getElementById(str+"_Eve")!=null)
    document.getElementById(str+"_Eve").style.opacity="1";
  /*change the parameters to desired*/

}
function back(){
  for(var i=0;i<list.length;i++)
    {
      if(i==cur)
      {
        inSection=true;
        list[i].style.width="60%";
        list[i].style.height="80%";
        list[i].style.top="10%";
        list[i].style.left="20%";
        list[i].style.borderRadius="30px";

      }
      list[i].style.display="block";
    }
}
function showSec(){
  for(var i=0;i<list.length;i++)
    {
      if(i==cur)
      {
        console.log("swipe up event");
        list[i].style.width="100%";
        list[i].style.height="100%";
        list[i].style.top="0%";
        list[i].style.left="0%";
        list[i].style.borderRadius="0px";

      }
      else{
        list[i].style.display="none";
      }
    }
    inSection=false;
}