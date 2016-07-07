var Cricket;
(function (Cricket) {
    var SummaryController = (function () {
        function SummaryController() {
            this.match = this.getScoreCard();
        }
        SummaryController.prototype.getScoreCard = function () {
            var match = {};
            match.Avenue = "Chennai",
                match.Date = "02/14/2016";
            match.Format = Cricket.Model.MatchFormat.ODI;
            match.Team1Name = "India";
            match.Team2Name = "Australia";
            return match;
        };
        return SummaryController;
    })();
    angular.module('Cricket').controller('SummaryController', SummaryController);
})(Cricket || (Cricket = {}));
//# sourceMappingURL=SummaryController.js.map