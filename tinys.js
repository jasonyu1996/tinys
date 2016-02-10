(function(){
    window.$ = function(sel){
        var res;
        if(sel.charAt(0) == '#')
            res = document.getElementById(sel.substr(1, sel.length));
        else if(sel.charAt(0) == '.')
            res = document.getElementsByClassName(sel.substr(1, sel.length));
        else
            res = document.getElementsByTagName(sel);
        if(res && res.isArray){
            if(res.length == 0)
                res = null;
            else if(res.length == 1)
                res = res[0];
        }
        return res;
    }
})();

