module Cricket {
    export interface ISummaryService {
        getScoreCard(): Model.Match;
    }

    export class SummaryService implements ISummaryService {
        public getScoreCard(): Model.Match {
            var match = <Model.Match>{};
            match.Avenue = "Chennai";
            match.Date = "07/01/2016";
            match.Format = Model.MatchFormat.ODI;
            match.Team1Name = "India";
            match.Team2Name = "Australia";

            return match;
        }
    }
    angular.module("Cricket").service("SummaryService", SummaryService);
}