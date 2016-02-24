/**
 * Created by Yana on 2/24/2016.
 */
var Warehouse = (function(parent) {
    function Warehouse (name) {
        parent.call(this, name);
    }

    Warehouse.prototype = Object.create(parent.prototype);
    Warehouse.prototype.constructor = Warehouse;

    Warehouse.prototype.checkQuantity = function (product) {
        var index = this.getProducts().indexOf(product);
        var wantedProduct = this.getProducts()[index].getCount();
        return wantedProduct;
    }

    Warehouse.prototype.productDelivery = function (product, provider) {
        if (this.checkQuantity(product) < 5) {
            provider.deliver(Warehouse, product);
        }
    }

    //Warehouse.prototype.deliver = function (facility, product, quantity) {
    //    if ()
    //}

    return Warehouse;
})(Facility);