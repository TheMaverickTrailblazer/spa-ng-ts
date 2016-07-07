declare module Cricket {
    interface ISummaryService {
        getScoreCard(): Model.Match;
    }
    class SummaryService implements ISummaryService {
        getScoreCard(): Model.Match;
    }
}
