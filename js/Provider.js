/**
 * Created by Yana on 2/24/2016.
 */

var Provider = (function(parent) {
    function Provider (name) {
        parent.call(this, name);
    }

    Provider.prototype = Object.create(parent.prototype);
    Provider.prototype.constructor = Provider;


    return Provider;
})(Facility);