/**
 * Created by Yana on 2/24/2016.
 */
var Shop = (function(parent) {
    function Shop (name) {
        parent.call(this, name)
    }

    Provider.prototype = Object.create(parent.prototype);
    Provider.prototype.constructor = Shop;

    return Shop;
})(Facility);