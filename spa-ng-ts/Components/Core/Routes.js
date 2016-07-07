var Cricket;
(function (Cricket) {
    var RouteConfig = (function () {
        function RouteConfig($stateProvider, $urlRouterProvider) {
            this.$stateProvider = $stateProvider;
            this.$urlRouterProvider = $urlRouterProvider;
            $urlRouterProvider.otherwise("/Summary");
            this.$stateProvider.state("Summary", {
                url: "/Summary",
                templateUrl: "Components/Match/Summary.html",
                controller: "SummaryController as vm"
            });
        }
        return RouteConfig;
    }());
    angular.module("Cricket", ['ui.router']).config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            return new RouteConfig($stateProvider, $urlRouterProvider);
        }
    ]);
})(Cricket || (Cricket = {}));
//# sourceMappingURL=Routes.js.map