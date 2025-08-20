// NE SURTOUT PAS SE CONNECTER DIRECTEMENT A FOOTBALLAPI, UTILISER RAPIDAPI AVEC COMPTE GOOGLE @gmail.com

const Match = require('./Match')
const Generator = require('./generator')
const moment = require('moment');

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", process.env.RAPIDAPI_KEY);
myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',

};


const getUpcomingGames = function () {
    return new Promise( (resolve, reject) => {
        const url = new URL('https://api-football-v1.p.rapidapi.com/v3/fixtures')
        const now = moment();
        const today = now.format('YYYY-MM-DD');
        const three_months_from_now = now.add(3, 'months').format('YYYY-MM-DD');
        const params = {season:2025, team:85, from:today, to:three_months_from_now}
        url.search = new URLSearchParams(params).toString();

        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => resolve(result))
            .catch(error => reject(error));
    })
}
const main = async function () {
    // const result = '{"get":"fixtures","parameters":{"season":"2023","team":"85","from":"2024-03-21","to":"2024-07-21"},"errors":[],"results":11,"paging":{"current":1,"total":1},"response":[{"fixture":{"id":1045116,"referee":null,"timezone":"UTC","date":"2024-03-31T18:45:00+00:00","timestamp":1711910700,"periods":{"first":null,"second":null},"venue":{"id":667,"name":"Orange V\u00e9lodrome","city":"Marseille"},"status":{"long":"Not Started","short":"NS","elapsed":null}},"league":{"id":61,"name":"Ligue 1","country":"France","logo":"https:\/\/media.api-sports.io\/football\/leagues\/61.png","flag":"https:\/\/media.api-sports.io\/flags\/fr.svg","season":2023,"round":"Regular Season - 27"},"teams":{"home":{"id":81,"name":"Marseille","logo":"https:\/\/media.api-sports.io\/football\/teams\/81.png","winner":null},"away":{"id":85,"name":"Paris Saint Germain","logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1045124,"referee":null,"timezone":"UTC","date":"2024-04-06T19:00:00+00:00","timestamp":1712430000,"periods":{"first":null,"second":null},"venue":{"id":671,"name":"Parc des Princes","city":"Paris"},"status":{"long":"Not Started","short":"NS","elapsed":null}},"league":{"id":61,"name":"Ligue 1","country":"France","logo":"https:\/\/media.api-sports.io\/football\/leagues\/61.png","flag":"https:\/\/media.api-sports.io\/flags\/fr.svg","season":2023,"round":"Regular Season - 28"},"teams":{"home":{"id":85,"name":"Paris Saint Germain","logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png","winner":null},"away":{"id":99,"name":"Clermont Foot","logo":"https:\/\/media.api-sports.io\/football\/teams\/99.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1045136,"referee":null,"timezone":"UTC","date":"2024-04-14T00:00:00+00:00","timestamp":1713052800,"periods":{"first":null,"second":null},"venue":{"id":656,"name":"Stade Yves Allainmat - Le Moustoir","city":"Lorient"},"status":{"long":"Time to be defined","short":"TBD","elapsed":null}},"league":{"id":61,"name":"Ligue 1","country":"France","logo":"https:\/\/media.api-sports.io\/football\/leagues\/61.png","flag":"https:\/\/media.api-sports.io\/flags\/fr.svg","season":2023,"round":"Regular Season - 29"},"teams":{"home":{"id":97,"name":"Lorient","logo":"https:\/\/media.api-sports.io\/football\/teams\/97.png","winner":null},"away":{"id":85,"name":"Paris Saint Germain","logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1045142,"referee":null,"timezone":"UTC","date":"2024-04-21T00:00:00+00:00","timestamp":1713657600,"periods":{"first":null,"second":null},"venue":{"id":671,"name":"Parc des Princes","city":"Paris"},"status":{"long":"Time to be defined","short":"TBD","elapsed":null}},"league":{"id":61,"name":"Ligue 1","country":"France","logo":"https:\/\/media.api-sports.io\/football\/leagues\/61.png","flag":"https:\/\/media.api-sports.io\/flags\/fr.svg","season":2023,"round":"Regular Season - 30"},"teams":{"home":{"id":85,"name":"Paris Saint Germain","logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png","winner":null},"away":{"id":80,"name":"Lyon","logo":"https:\/\/media.api-sports.io\/football\/teams\/80.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1045151,"referee":null,"timezone":"UTC","date":"2024-04-28T00:00:00+00:00","timestamp":1714262400,"periods":{"first":null,"second":null},"venue":{"id":671,"name":"Parc des Princes","city":"Paris"},"status":{"long":"Time to be defined","short":"TBD","elapsed":null}},"league":{"id":61,"name":"Ligue 1","country":"France","logo":"https:\/\/media.api-sports.io\/football\/leagues\/61.png","flag":"https:\/\/media.api-sports.io\/flags\/fr.svg","season":2023,"round":"Regular Season - 31"},"teams":{"home":{"id":85,"name":"Paris Saint Germain","logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png","winner":null},"away":{"id":111,"name":"LE Havre","logo":"https:\/\/media.api-sports.io\/football\/teams\/111.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1045163,"referee":null,"timezone":"UTC","date":"2024-05-03T00:00:00+00:00","timestamp":1714694400,"periods":{"first":null,"second":null},"venue":{"id":663,"name":"Allianz Riviera","city":"Nice"},"status":{"long":"Time to be defined","short":"TBD","elapsed":null}},"league":{"id":61,"name":"Ligue 1","country":"France","logo":"https:\/\/media.api-sports.io\/football\/leagues\/61.png","flag":"https:\/\/media.api-sports.io\/flags\/fr.svg","season":2023,"round":"Regular Season - 32"},"teams":{"home":{"id":84,"name":"Nice","logo":"https:\/\/media.api-sports.io\/football\/teams\/84.png","winner":null},"away":{"id":85,"name":"Paris Saint Germain","logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1045169,"referee":null,"timezone":"UTC","date":"2024-05-11T19:00:00+00:00","timestamp":1715454000,"periods":{"first":null,"second":null},"venue":{"id":671,"name":"Parc des Princes","city":"Paris"},"status":{"long":"Not Started","short":"NS","elapsed":null}},"league":{"id":61,"name":"Ligue 1","country":"France","logo":"https:\/\/media.api-sports.io\/football\/leagues\/61.png","flag":"https:\/\/media.api-sports.io\/flags\/fr.svg","season":2023,"round":"Regular Season - 33"},"teams":{"home":{"id":85,"name":"Paris Saint Germain","logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png","winner":null},"away":{"id":96,"name":"Toulouse","logo":"https:\/\/media.api-sports.io\/football\/teams\/96.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1045186,"referee":null,"timezone":"UTC","date":"2024-05-18T19:00:00+00:00","timestamp":1716058800,"periods":{"first":null,"second":null},"venue":{"id":658,"name":"Stade Saint-Symphorien","city":"Longeville-l\u00e8s-Metz"},"status":{"long":"Not Started","short":"NS","elapsed":null}},"league":{"id":61,"name":"Ligue 1","country":"France","logo":"https:\/\/media.api-sports.io\/football\/leagues\/61.png","flag":"https:\/\/media.api-sports.io\/flags\/fr.svg","season":2023,"round":"Regular Season - 34"},"teams":{"home":{"id":112,"name":"Metz","logo":"https:\/\/media.api-sports.io\/football\/teams\/112.png","winner":null},"away":{"id":85,"name":"Paris Saint Germain","logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1184698,"referee":null,"timezone":"UTC","date":"2024-04-03T19:10:00+00:00","timestamp":1712171400,"periods":{"first":null,"second":null},"venue":{"id":671,"name":"Parc des Princes","city":"Paris"},"status":{"long":"Not Started","short":"NS","elapsed":null}},"league":{"id":66,"name":"Coupe de France","country":"France","logo":"https:\/\/media.api-sports.io\/football\/leagues\/66.png","flag":"https:\/\/media.api-sports.io\/flags\/fr.svg","season":2023,"round":"Semi-finals"},"teams":{"home":{"id":85,"name":"Paris Saint Germain","logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png","winner":null},"away":{"id":94,"name":"Rennes","logo":"https:\/\/media.api-sports.io\/football\/teams\/94.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1184783,"referee":null,"timezone":"UTC","date":"2024-04-10T19:00:00+00:00","timestamp":1712775600,"periods":{"first":null,"second":null},"venue":{"id":671,"name":"Parc des Princes","city":"Paris"},"status":{"long":"Not Started","short":"NS","elapsed":null}},"league":{"id":2,"name":"UEFA Champions League","country":"World","logo":"https:\/\/media.api-sports.io\/football\/leagues\/2.png","flag":null,"season":2023,"round":"Quarter-finals"},"teams":{"home":{"id":85,"name":"Paris Saint Germain","logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png","winner":null},"away":{"id":529,"name":"Barcelona","logo":"https:\/\/media.api-sports.io\/football\/teams\/529.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}},{"fixture":{"id":1184784,"referee":null,"timezone":"UTC","date":"2024-04-16T19:00:00+00:00","timestamp":1713294000,"periods":{"first":null,"second":null},"venue":{"id":19939,"name":"Estadi Ol\u00edmpic Llu\u00eds Companys","city":"Barcelona"},"status":{"long":"Not Started","short":"NS","elapsed":null}},"league":{"id":2,"name":"UEFA Champions League","country":"World","logo":"https:\/\/media.api-sports.io\/football\/leagues\/2.png","flag":null,"season":2023,"round":"Quarter-finals"},"teams":{"home":{"id":529,"name":"Barcelona","logo":"https:\/\/media.api-sports.io\/football\/teams\/529.png","winner":null},"away":{"id":85,"name":"Paris Saint Germain","logo":"https:\/\/media.api-sports.io\/football\/teams\/85.png","winner":null}},"goals":{"home":null,"away":null},"score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}}]}'
    const result = await getUpcomingGames();
    console.log(result)
    const resultJSON = JSON.parse(result);
    for (const x of resultJSON.response) {
        const UTCDate = x.fixture.date;
        const homeTeam = x.teams.home.name;
        const homeLogo = x.teams.home.logo;
        const awayTeam = x.teams.away.name;
        const awayLogo = x.teams.away.logo;
        const status = x.fixture.status.short;
        const competition = x.league.name;
        console.log(x)
        const m = new Match(UTCDate, homeTeam, awayTeam, homeLogo, awayLogo, status, competition)
        console.log(m)
        if (m.status !== 'TBD')
        {
            console.log("Starting processing "+ m.homeTeam + '-' + m.awayTeam);
            await Generator.main(m)
        }


    }
}


main()


