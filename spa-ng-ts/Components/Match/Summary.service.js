var Cricket;
(function (Cricket) {
    var SummaryService = (function () {
        function SummaryService($http) {
            this.$http = $http;
        }
        SummaryService.prototype.getScoreCard = function () {
            return this.getMatchDetails();
        };
        SummaryService.prototype.getMatchDetails = function () {
            return this.$http.get("Store/Match.json").then(function (response) { return response.data; });
        };
        SummaryService.$inject = ["$http"];
        return SummaryService;
    }());
    Cricket.SummaryService = SummaryService;
    angular.module("Cricket").service("SummaryService", SummaryService);
})(Cricket || (Cricket = {}));
