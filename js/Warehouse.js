/**
 * Created by Yana on 2/24/2016.
 */
var Warehouse = (function(parent) {
    function Warehouse (name) {
        parent.call(this, name);
    }

    Warehouse.prototype = Object.create(parent.prototype);
    Warehouse.prototype.constructor = Warehouse;


    Warehouse.prototype.deliver = function (facility, product, quantity) {
        if (this.checkQuantity(product) < 5) {
            parent.call(this, facility, product, quantity);
        }
    }

    return Warehouse;
})(Facility);