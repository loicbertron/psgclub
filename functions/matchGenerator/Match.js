const moment = require('moment-timezone');
require('moment/locale/fr'); // Load French locale

const Match = class {
    constructor(UTCDate, homeTeam, awayTeam, homeLogo, awayLogo, status, competition) {
        this.UTCDate = UTCDate;
        const montrealDate = moment.tz(UTCDate, "America/New_York");
        montrealDate.locale('fr'); // Set locale to French
        this.Date = new Date(Date.parse(UTCDate)); // Keep this for expiryDate calculation for now
        this.MontrealDateString = montrealDate.format("dddd D MMMM");
        this.MontrealTimeString = montrealDate.format("HH:mm");
        this.MontrealISO = montrealDate.format(); // This will produce the correct ISO 8601 string with offset
        this.homeTeam = homeTeam === "Paris Saint Germain" ? "PSG" : homeTeam;
        this.awayTeam = awayTeam === "Paris Saint Germain" ? "PSG" : awayTeam;
        this.homeLogo = homeLogo;
        this.awayLogo = awayLogo;
        this.status = status;
        this.competition = competition
    }
}

module.exports = Match;