window.onload=function(){
    var list=document.getElementById('box').children;
    var underplay=document.getElementById('under-play');
    var cover=document.getElementById('cover');
    var lione=document.getElementById('li-one');
    var litwo=document.getElementById('li-two');
    var songbox=document.getElementById('song-box');
    // for(var i=0;i<list.length;i++){
    //     list[i].setAttribute('index',i);
    //     list[i].onclick=function(){
    //         num=this.getAttribute('index');
    //         console.log(num)
    //         for(var t=0;t<list.length;t++){
    //             list[t].removeAttribute('class');
    //         }
    //         list[num].setAttribute('class','li-one');
    //     }  
        
    // }


    lione.onclick=function(){
        underplay.style.display='block';
        songbox.style.height='2210px';
        cover.style.display='none';
        lione.setAttribute('class','li-one');
        litwo.removeAttribute('class','li-one')
    }
    litwo.onclick=function(){
        underplay.style.display='none';
        cover.style.display='block';
        songbox.style.height='900px';
        lione.removeAttribute('class','li-one');
        litwo.setAttribute('class','li-one')
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


        var more=document.getElementById('more');
        var spread=document.getElementById('spread');
        var close=document.getElementById('name-right');
        more.onclick=function(){
            spread.style.display='block';
            document.body.style.overflow='hidden';
            spread.style.overflow='auto'
        }
       close.onclick=function(){
        spread.style.display='none';
        document.body.style.overflow='auto';
       }
       spread.onclick=function(){
        spread.style.display='none';
        document.body.style.overflow='auto';
       }
    

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


}   