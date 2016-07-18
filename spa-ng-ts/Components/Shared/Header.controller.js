var Cricket;
(function (Cricket) {
    var HeaderController = (function () {
        function HeaderController() {
            this.title = "ABCD!!";
        }
        HeaderController.prototype.getHeader = function () {
        };
        return HeaderController;
    }());
    angular.module('Cricket').controller('HeaderController', HeaderController);
})(Cricket || (Cricket = {}));
