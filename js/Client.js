/**
 * Created by Yana on 2/24/2016.
 */
var Client = (function (){
    function  Client () {

    }

    Client.prototype.buy = function (warehouse, shop) {
        var quantity = Math.floor((Math.random()*4)+1);
        var randomItem = shop.getProducts()[Math.floor(Math.random()*10)];

        if (shop.checkQuantity(randomItem) > 5) {
            randomItem.setCount(-quantity);
            console.log(quantity + ' ' + randomItem.getName() + ' bought');
        } else {
            warehouse.deliver(shop, randomItem, 5);
        }
    }
    return Client;
})();