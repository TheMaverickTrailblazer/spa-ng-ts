var Cricket;
(function (Cricket) {
    var Model;
    (function (Model) {
        (function (PlayerRole) {
            PlayerRole[PlayerRole["Batsmen"] = 0] = "Batsmen";
            PlayerRole[PlayerRole["Bowler"] = 1] = "Bowler";
            PlayerRole[PlayerRole["Wicketkeeper"] = 2] = "Wicketkeeper";
            PlayerRole[PlayerRole["AllRounder"] = 3] = "AllRounder";
        })(Model.PlayerRole || (Model.PlayerRole = {}));
        var PlayerRole = Model.PlayerRole;
        (function (MatchFormat) {
            MatchFormat[MatchFormat["ODI"] = 0] = "ODI";
            MatchFormat[MatchFormat["Test"] = 1] = "Test";
            MatchFormat[MatchFormat["T20"] = 2] = "T20";
        })(Model.MatchFormat || (Model.MatchFormat = {}));
        var MatchFormat = Model.MatchFormat;
    })(Model = Cricket.Model || (Cricket.Model = {}));
})(Cricket || (Cricket = {}));
