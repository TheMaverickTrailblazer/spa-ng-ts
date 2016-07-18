var Cricket;
(function (Cricket) {
    function headerDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'Components/Shared/header.html',
            scope: {},
            link: function (scope, element, attributes) {
                scope.title = 'Yorker';
            }
        };
    }
    angular.module('Cricket').directive('yorkerHeader', headerDirective);
})(Cricket || (Cricket = {}));
