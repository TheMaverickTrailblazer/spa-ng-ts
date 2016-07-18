namespace Cricket.Model {
    export interface Match {
        Avenue: string;
        Date: string;
        Format: MatchFormat;
        Result: string;
        Team1Id: number;
        Team1Name: string
        Team2Id: number;
        Team2Name: string;
        FirstInnings: Innings;
        SecondInnings: Innings;
    }

    export interface Innings {
        Batting: Batting[];
        Bowling: Bowling[];
    }

    export interface Batting {
        Player: Player;
        Runs: number;
        Balls: number;
        OutBy?: Player;
        Fours: number;
        Sixes: number;
        StrikeRate: number; // computed
        Position: number;
    }
    export interface Bowling {
        Player: Player;
        BallsBolwed: number;
        OversBowled: number;// computed
        RunsConceeded: number;
        Economy: number;// computed
    }
    export interface Player {
        Name: string;
        Id: number;
        Role: PlayerRole;
    }

    export enum PlayerRole { Batsmen, Bowler, Wicketkeeper, AllRounder }
    export enum MatchFormat { ODI, Test, T20 }
}