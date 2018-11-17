export default{
    head:"http://localhost:999/",
    get:function(dom){
        if(dom.substring(0,1)==="#"){
            return document.querySelector(dom)
        }else{
            return document.querySelectorAll(dom)
        }
        
    }
}
