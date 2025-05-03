const Match = class {
    constructor(UTCDate, homeTeam, awayTeam, homeLogo, awayLogo, status, competition) {
        this.UTCDate = UTCDate;
        this.Date = new Date(Date.parse(UTCDate));
        this.MontrealDateString = this.Date.toLocaleDateString("fr-CA", {weekday: 'long', month: 'long', day: 'numeric', timeZone: "America/New_York"});
        this.MontrealTimeString = this.Date.toLocaleTimeString("en-CA", {hour: '2-digit', minute: '2-digit',   hour12: false, timeZone: 'America/New_York' })
        this.MontrealISO = this.getLocalISOString();
        this.homeTeam = homeTeam === "Paris Saint Germain" ? "PSG" : homeTeam;
        this.awayTeam = awayTeam === "Paris Saint Germain" ? "PSG" : awayTeam;
        this.homeLogo = homeLogo;
        this.awayLogo = awayLogo;
        this.status = status;
        this.competition = competition
    }

    getLocalISOString = function() {
        const offset = this.Date.getTimezoneOffset()
        const offsetAbs = Math.abs(offset)
        const isoString = new Date(this.Date.getTime() - offset * 60 * 1000).toISOString()
        return `${isoString.slice(0, -1)}${offset > 0 ? '-' : '+'}${String(Math.floor(offsetAbs / 60)).padStart(2, '0')}:${String(offsetAbs % 60).padStart(2, '0')}`
    }


}

module.exports = Match;