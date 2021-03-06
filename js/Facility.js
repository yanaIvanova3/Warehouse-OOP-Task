/**
 * Created by Yana on 2/24/2016.
 */
function Facility (name) {
    var _name = name;

    var products = [];

    this.getProducts = function () {
        return products;
    }

    this.setProduct = function (product) {
        products.push(product);
    }
}

    Facility.prototype.checkQuantity = function (product) {
        var index = this.getProducts().indexOf(product);
        var wantedProduct = this.getProducts()[index].getCount();
        return wantedProduct;
    }

    Facility.prototype.deliver = function (facility, product, quantity) {
        var wantedIndex = facility.getProducts().indexOf(product);
        var wantedProduct = facility.getProducts()[wantedIndex];
        wantedProduct.setCount(quantity);
    }

