var Cricket;
(function (Cricket) {
    var SummaryController = (function () {
        function SummaryController(summaryService) {
            this.summaryService = summaryService;
            this.populateView();
        }
        SummaryController.prototype.populateView = function () {
            this.match = this.summaryService.getScoreCard();
        };
        SummaryController.$inject = ["SummaryService"];
        return SummaryController;
    }());
    angular.module('Cricket').controller('SummaryController', SummaryController);
})(Cricket || (Cricket = {}));
//# sourceMappingURL=Summary.controller.js.map