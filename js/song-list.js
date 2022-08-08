// <!-- js 包括轮播之类的动画样式-->
window.onload=function(){
    var box=document.getElementById('box');
    var list=document.getElementById('list');
    var autoplay=document.getElementById('autoplay');
    var left=document.getElementById('left');
    var right=document.getElementById('right');
    var publishing=document.getElementById('xiudong-publishing');
    var coverleft=document.getElementById('cover-left');
    var coverright=document.getElementById('cover-right');
    var hotsong=document.getElementById('hot-song');
    var newsong=document.getElementById('new-song');
    var featuredvideos=document.getElementById('featured-videos');
    var left1=document.getElementById('left1');
    var right1=document.getElementById('right1');
    var left2=document.getElementById('left2');
    var right2=document.getElementById('right2');
    var left3=document.getElementById('left3');
    var right3=document.getElementById('right3');
    var boximg=document.getElementById('boximg');
    var timer;
    var num=0;
    function fun(){
    timer=setInterval(function(){
    num++;
    if(num==7){
        num=0;
    }
    box.style.transform='translateX('+-num*1200+'px)';
    },1500)
    }
    fun();
    //左右箭头切换图片
    //点击右边
    right.onclick=function(){
    num++;
    if(num==7){
        num=0;
    }
    box.style.transform='translateX('+-num*1200+'px)';
    }
    
    //点击左边
    left.onclick=function(){
    num--;
    if(num==-1){
        num=6;
    }
    box.style.transform='translateX('+-num*1200+'px)';
    }
    //鼠标移入移出div
    autoplay.onmouseenter=function(){
    clearInterval(timer);
    left.style.opacity=1;
    right.style.opacity=1;
    }
    //鼠标移出
    autoplay.onmouseleave=function(){
    fun();
    left.style.opacity=0;
    right.style.opacity=0;
    }

    publishing.onmouseenter=function(){
        coverleft.style.opacity=1;
        coverright.style.opacity=1;
    }
    publishing.onmouseleave=function(){
        coverleft.style.opacity=0;
        coverright.style.opacity=0;
    }
    hotsong.onmouseenter=function(){
        left1.style.opacity=1;
        right1.style.opacity=1;
    }
    hotsong.onmouseleave=function(){
        left1.style.opacity=0;
        right1.style.opacity=0;
    }

    newsong.onmouseenter=function(){
        left2.style.opacity=1;
        right2.style.opacity=1;
    }
    newsong.onmouseleave=function(){
        left2.style.opacity=0;
        right2.style.opacity=0;
    }

    featuredvideos.onmouseenter=function(){
        left3.style.opacity=1;
        right3.style.opacity=1;
    }
    featuredvideos.onmouseleave=function(){
        left3.style.opacity=0;
        right3.style.opacity=0;
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


        //秀动发行
        var box2=document.getElementById('box2');
        var list2=document.getElementById('box3').children;
        var num1=0;
        for(var i=0;i<list2.length;i++){
            list2[i].setAttribute('index',i);
            list2[i].onclick=function(){
                num1=this.getAttribute('index');
                console.log(num1)
                for(var t=0;t<list2.length;t++){
                    list2[t].removeAttribute('class','current');
                }
                box2.style.transform='translateX('+-num1*1200+'px)'
                box4.style.transition='all 1s'
                this.setAttribute('class','current')
            }
        }
        
        
            coverright.onclick=function(){
                num1++;
                if(num1==i){
                    num1=0;
                }
                box2.style.transform='translateX('+-num1*1200+'px)';
                box2.style.transition='all 1s'
                for(var t=0;t<list2.length;t++){
                    list2[t].removeAttribute('class')
                }
                list2[num1].setAttribute('class','current')
            }
            coverleft.onclick=function(){
                num1--;
                if(num1==-1){
                    num1=1;
                }
                box2.style.transform='translateX('+-num1*1200+'px)';
                box2.style.transition='all 1s'
                for(var t=0;t<list2.length;t++){
                    list2[t].removeAttribute('class')
                }
                list2[num1].setAttribute('class','current')
            }

            //热门歌单
            var list3=document.getElementById('box5').children;
            var box4=document.getElementById('box4');
            var num2=0;
        for(var i=0;i<list3.length;i++){
            list3[i].setAttribute('index',i);
            list3[i].onclick=function(){
                num2=this.getAttribute('index');
                console.log(num2)
                for(var t=0;t<list3.length;t++){
                    list3[t].removeAttribute('class','current1');
                }
                box4.style.transform='translateX('+-num2*1200+'px)'
                box4.style.transition='all 1s'
                this.setAttribute('class','current1')
            }
        }
        
        
            right1.onclick=function(){
                num2++;
                if(num2==i){
                    num2=0;
                }
                box4.style.transform='translateX('+-num2*1200+'px)';
                box4.style.transition='all 1s'
                for(var t=0;t<list3.length;t++){
                    list3[t].removeAttribute('class')
                }
                list3[num2].setAttribute('class','current1')
            }
            left1.onclick=function(){
                num2--;
                if(num2==-1){
                    num2=1;
                }
                box4.style.transform='translateX('+-num2*1200+'px)';
                box4.style.transition='all 1s'
                for(var t=0;t<list3.length;t++){
                    list3[t].removeAttribute('class')
                }
                list3[num2].setAttribute('class','current1')
            }

        // //新歌推荐
        // var list4=document.getElementById('box7').children;
        //     var box6=document.getElementById('box6');
        //     var num3=0;
        // for(var i=0;i<list4.length;i++){
        //     list4[i].setAttribute('index',i);
        //     list4[i].onclick=function(){
        //         num3=this.getAttribute('index');
        //         console.log(num3)
        //         for(var t=0;t<list4.length;t++){
        //             list4[t].removeAttribute('class','current2');
        //         }
        //         box6.style.transform='translateX('+-num3*1200+'px)'
        //         box6.style.transition='all 1s'
        //         this.setAttribute('class','current2')
        //     }
        // }
        
        
        //     right2.onclick=function(){
        //         num3++;
        //         if(num3==i){
        //             num3=0;
        //         }
        //         box6.style.transform='translateX('+-num3*1200+'px)';
        //         box6.style.transition='all 1s'
        //         for(var t=0;t<list4.length;t++){
        //             list4[t].removeAttribute('class')
        //         }
        //         list4[num3].setAttribute('class','current2')
        //     }
        //     left2.onclick=function(){
        //         num3--;
        //         if(num3==-1){
        //             num3=1;
        //         }
        //         box6.style.transform='translateX('+-num3*1200+'px)';
        //         box6.style.transition='all 1s'
        //         for(var t=0;t<list4.length;t++){
        //             list4[t].removeAttribute('class')
        //         }
        //         list4[num3].setAttribute('class','current2')
        //     }


            //精选视频
        var list5=document.getElementById('box9').children;
        var box8=document.getElementById('box8');
        var num4=0;
    for(var i=0;i<list5.length;i++){
        list5[i].setAttribute('index',i);
        list5[i].onclick=function(){
            num4=this.getAttribute('index');
            console.log(num4)
            for(var t=0;t<list5.length;t++){
                list5[t].removeAttribute('class','current3');
            }
            box8.style.transform='translateX('+-num4*1200+'px)'
            box8.style.transition='all 1s'
            this.setAttribute('class','current3')
        }
    }
    
    
        right3.onclick=function(){
            num4++;
            if(num4==i){
                num4=0;
            }
            box8.style.transform='translateX('+-num4*1200+'px)';
            box8.style.transition='all 1s'
            for(var t=0;t<list5.length;t++){
                list5[t].removeAttribute('class')
            }
            list5[num4].setAttribute('class','current3')
        }
        left3.onclick=function(){
            num4--;
            if(num4==-1){
                num4=1;
            }
            box8.style.transform='translateX('+-num4*1200+'px)';
            box8.style.transition='all 1s'
            for(var t=0;t<list5.length;t++){
                list5[t].removeAttribute('class')
            }
            list5[num4].setAttribute('class','current3')
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

   