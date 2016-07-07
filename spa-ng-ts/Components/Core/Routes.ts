module Cricket {
    class RouteConfig {
        constructor(private $stateProvider: ng.ui.IStateProvider, private $urlRouterProvider: ng.ui.IUrlRouterProvider) {

            $urlRouterProvider.otherwise("/Summary");

            this.$stateProvider.state("Summary", <ng.ui.IState>{
                url: "/Summary",
                templateUrl: "Components/Match/Summary.html",
                controller: "SummaryController as vm"
            });
        }
    }

    angular.module("Cricket", ['ui.router']).config(["$stateProvider", "$urlRouterProvider",
        ($stateProvider, $urlRouterProvider) => {
            return new RouteConfig($stateProvider, $urlRouterProvider);
        }
    ]);
}