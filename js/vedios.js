 window.onload=function(){
        //登录注册
 var login=document.getElementById('header-login');
 var loginsign=document.getElementById('login-sign')
 var login1=document.getElementById('login1');
 var sign=document.getElementById('sign');
 var usephone=document.getElementById('use-phone');
 var useaccount=document.getElementById('use-account');
 var close=document.getElementById('login-right-p');
 var close1=document.getElementById('sign-right-p');
 
     login.onclick=function(){
         loginsign.style.display='block';
         login1.style.display='block';
         sign.style.display='none';
         document.body.style.overflow='hidden';
     }
     usephone.onclick=function(){
         loginsign.style.display='block';
         login1.style.display='block';
         sign.style.display='none';
         document.body.style.overflow='hidden';
     }

     useaccount.onclick=function(){
         loginsign.style.display='block';
         login1.style.display='none';
         sign.style.display='block';
         document.body.style.overflow='hidden';
     }
 close.onclick=function(){
     loginsign.style.display='none';
     document.body.style.overflow='auto';
 }
 close1.onclick=function(){
     loginsign.style.display='none';
     document.body.style.overflow='auto';
 }


 var listimg=document.getElementById('boximg').children;
    for(var i=0;i<listimg.length;i++){
        listimg[i].onmouseenter=function(){
            if(this.children.length!=0){
                this.children[0].children[1].style.display='inline-block';
            }
        }
        listimg[i].onmouseleave=function(){
            if(this.children.length!=0){
                this.children[0].children[1].style.display='none';
            }
        }
    }

        var listimg1 =document.getElementById('boximg1').children;
        for(var i=0;i<listimg1.length;i++){
            listimg1[i].onmouseenter=function(){
                if(this.children.length!=0){
                    this.children[0].children[2].style.display='inline-block';
                }
            }
            listimg1[i].onmouseleave=function(){
                if(this.children.length!=0){
                    this.children[0].children[2].style.display='none';
                }
            }
        }
 }
 