module Cricket {

    class SummaryController {
        public match: Model.Match;

        static $inject = ["SummaryService"];

        constructor(private summaryService: ISummaryService) {
            this.populateView();
        }

        populateView() {
            this.match = this.summaryService.getScoreCard();
        }
        
    }
    angular.module('Cricket').controller('SummaryController', SummaryController);
}