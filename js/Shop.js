/**
 * Created by Yana on 2/24/2016.
 */
var Shop = (function(parent) {
    function Shop (name) {
        parent.call(this, name)
    }

    Shop.prototype = Object.create(parent.prototype);
    Shop.prototype.constructor = Shop;

    Shop.prototype.deliver = function (facility, product, quantity) {
        if (this.checkQuantity(product) < 5) {
            parent.call(this, facility, product, quantity);
        }
    }

    return Shop;
})(Facility);