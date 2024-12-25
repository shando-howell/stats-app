import { CSVFileReader } from "./CSVFileReader";

const reader = new CSVFileReader('football.csv');
reader.read();

// enum - enumeration
enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
};

let manUnitedWins = 0;

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Manchester United won ${manUnitedWins} games`);