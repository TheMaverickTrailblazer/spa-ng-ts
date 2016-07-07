declare module Cricket.Model {
    interface Match {
        Avenue: string;
        Date: string;
        Format: MatchFormat;
        Result: string;
        Team1Id: number;
        Team1Name: string;
        Team2Id: number;
        Team2Name: string;
        FirstInnings: Innings;
        SecondInnings: Innings;
    }
    interface Innings {
        Batting: Batting[];
        Bowling: Bowling[];
    }
    interface Batting {
        Player: Player;
        Runs: number;
        Balls: number;
        OutBy?: Player;
        Fours: number;
        Sixes: number;
        StrikeRate: number;
        Position: number;
    }
    interface Bowling {
        Player: Player;
        BallsBolwed: number;
        OversBowled: number;
        RunsConceeded: number;
        Economy: number;
    }
    interface Player {
        Name: string;
        Id: number;
        Role: PlayerRole;
    }
    enum PlayerRole {
        Batsmen = 0,
        Bowler = 1,
        Wicketkeeper = 2,
        AllRounder = 3,
    }
    enum MatchFormat {
        ODI = 0,
        Test = 1,
        T20 = 2,
    }
}
