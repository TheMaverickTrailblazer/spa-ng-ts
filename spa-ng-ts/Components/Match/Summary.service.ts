namespace Cricket {
    export interface ISummaryService {
        getScoreCard(): ng.IPromise<Model.Match>;
    }

    export class SummaryService implements ISummaryService {
        static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) {
        }
        public getScoreCard(): ng.IPromise<Model.Match> {
             return this.getMatchDetails();
        }

        private getMatchDetails(): ng.IPromise<any> {
            return this.$http.get("Store/Match.json").then((response) => response.data);
        }
    }
    angular.module("Cricket").service("SummaryService", SummaryService);
}