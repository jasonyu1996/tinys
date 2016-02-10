(function(){
    window.TNode = function(raw){
        this.raw = raw;
        window.TNode.prototype.attr = function(attrName, val){
            if(!attrName)
                return undefined;
            if(val)
                this.raw.setAttribute(attrName, val.toString());
            else{
                var res = this.raw.getAttribute(attrName);
                if(res)
                    return res;
                else
                    return undefined;
            }
        };
    };
    window.$ = function(sel){
        var res;
        if(sel.charAt(0) == '#')
            res = document.getElementById(sel.substr(1, sel.length));
        else if(sel.charAt(0) == '.')
            res = document.getElementsByClassName(sel.substr(1, sel.length));
        else
            res = document.getElementsByTagName(sel);
        if(res && res instanceof HTMLCollection){
            if(res.length == 0)
                res = null;
            else if(res.length == 1)
                res = res[0];
        }
        if(res){
            if(res instanceof HTMLCollection){
                var tmp = [];
                for(var i = 0; i < res.length;i ++)
                    tmp[i] = new window.TNode(res[i]);
                res = tmp;
            } else
                res = new window.TNode(res);
        }
        return res;
    };
})();

