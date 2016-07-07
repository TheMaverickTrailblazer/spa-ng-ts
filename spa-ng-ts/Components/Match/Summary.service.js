var Cricket;
(function (Cricket) {
    var SummaryService = (function () {
        function SummaryService() {
        }
        SummaryService.prototype.getScoreCard = function () {
            var match = {};
            match.Avenue = "Chennai";
            match.Date = "07/01/2016";
            match.Format = Cricket.Model.MatchFormat.ODI;
            match.Team1Name = "India";
            match.Team2Name = "Australia";
            return match;
        };
        return SummaryService;
    }());
    Cricket.SummaryService = SummaryService;
    angular.module("Cricket").service("SummaryService", SummaryService);
})(Cricket || (Cricket = {}));
//# sourceMappingURL=Summary.service.js.map