function startMove(obj, json, fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for(var attr in json){
            var iCur = 0;
            if(attr == "opacity"){
                iCur = parseInt(parseFloat(getStyle(obj,attr)*100));
            }else{
                iCur = parseInt(getStyle(obj,attr));
            }

            var iSpeed =(json[attr] - iCur)/5;
            iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

            if(iCur !=json[attr]){
                flag = false;
            }
           
            iCur += iSpeed;
            if(attr == "opacity"){
                obj.style.opacity = iCur/100;
                obj.style.filter = "alpha(opacity="+iCur+")";
            }else{
                obj.style[attr] = iCur+'px';
            }
        }
		
         if(flag){
            clearInterval(obj.timer);
            fn && fn();
        }
        
    },30)
}
function  getStyle(el,attr){
    return el.currentStyle?el.currentStyle[attr]:getComputedStyle(el,null)[attr];
}