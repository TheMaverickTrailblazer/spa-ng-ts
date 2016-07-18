var Cricket;
(function (Cricket) {
    var SummaryController = (function () {
        function SummaryController(summaryService) {
            this.summaryService = summaryService;
            this.populateView();
        }
        SummaryController.prototype.populateView = function () {
            var _this = this;
            this.summaryService.getScoreCard().then(function (match) {
                _this.match = match;
            });
        };
        SummaryController.$inject = ["SummaryService"];
        return SummaryController;
    }());
    angular.module('Cricket').controller('SummaryController', SummaryController);
})(Cricket || (Cricket = {}));
