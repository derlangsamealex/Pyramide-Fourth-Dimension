window.onload=function() {
    tA=document.getElementsByTagName("textarea")[0]; 
    btn=document.getElementsByTagName("button")[0]; 
    btn.onclick=function() {
        if(bool) {
            bool=false;
        }
        else {
            bool=true;
            calc();
        }
    }
    lPy.grow();
    lPo.grow();      
    calc();
    
}
function calc() {
    let sol=[];
    sol[0]=lPy.x+": ";
    while(sol.length<=9&&lPo.n<1000000) {
        if(lPo.points==lPy.points) {
            sol.push([sol.length+":"+lPo.points,lPy.h,lPo.n+" "]);
            lPo.grow();
            lPy.grow();
        }
        else
        {      
            if(lPo.points>lPy.points) {
                lPy.grow();
            }
            else {
                lPo.grow();
            }
        }
    }    
    lPo.edgesGrow();
    lPy.edgesGrow();
    bool?setTimeout(calc,50):void(0);
    tA.value+=sol+"\n";
    tA.scrollTop=tA.scrollHeight;
}