/**
 * @fileoverview 
 * @author 飞长<feichang.wyl@taobao.com>
 * @module HashX
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class HashX
     * @constructor
     * @extends Base
     */
    function HashX(comConfig) {
        var self = this;
        //调用父类构造函数
        HashX.superclass.constructor.call(self, comConfig);
    }
    S.extend(HashX, Base, /** @lends HashX.prototype*/{

        /**
         * hash("name", "value") 用于存储值对；
         * hash("name") 用于获取值；
         * hash("name", null) 用于删除值对；
         */
        hash: function(key, val){
            if (!S.isString(key) || key == "") {
                return;
            }
            var clearReg = new RegExp("(&" + key + "=[^&]*)|(\\b" + key + "=[^&]*&)|(\\b" + key + "=[^&]*)", "ig");
            var getReg   = new RegExp("&*\\b" + key + "=[^&]*", "i");

            //get hash value base on key
            if (typeof val == "undefined") {
                var result = location.hash.match(getReg);
                return result ? decodeURIComponent(S.trim(result[0].split("=")[1])) : null;
            }
            //clear hash base on key
            else if (val === null) {
                location.hash = location.hash.replace(clearReg, "");
            }
            //set hash base on key and value
            else {
                val = val + "";
                var temp = location.hash.replace(clearReg, "");
                temp += ((temp.indexOf("=") != -1) ? "&" : "") + key + "=" + encodeURIComponent(val);
                location.hash = temp;
            }
        }

    }, {ATTRS : /** @lends HashX*/{

    }});
    return HashX;
}, {requires:['node', 'base']});



