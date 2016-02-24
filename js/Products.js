/**
 * Created by Yana on 2/24/2016.
 */
var Products = (function(){
    function Products (name, type, count) {
        var _name = name;
        var _type = type;
        var _count = count;

        this.getName = function () {
            return _name;
        }

        this.getType = function () {
            return _type;
        }

        this.getCount = function () {
            return _count;
        }

        this.setCount = function (count) {
            _count += count;
        }
    }

    return Products;
})();