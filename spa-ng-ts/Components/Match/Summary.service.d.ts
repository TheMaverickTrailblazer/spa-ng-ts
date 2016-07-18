declare namespace Cricket {
    interface ISummaryService {
        getScoreCard(): ng.IPromise<Model.Match>;
    }
    class SummaryService implements ISummaryService {
        private $http;
        static $inject: string[];
        constructor($http: ng.IHttpService);
        getScoreCard(): ng.IPromise<Model.Match>;
        private getMatchDetails();
    }
}
