namespace Cricket {

    class SummaryController {
        public match: Model.Match;

        static $inject = ["SummaryService"];

        constructor(private summaryService: ISummaryService) {
            this.populateView();
        }

        populateView() {
            this.summaryService.getScoreCard().then((match: Model.Match) => {
                this.match = match;
            });
        }
        
    }
    angular.module('Cricket').controller('SummaryController', SummaryController);
}