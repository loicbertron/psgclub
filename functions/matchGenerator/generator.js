const fs = require('fs');
const Match = require('./Match');
const nodeHtmlToImage = require('node-html-to-image')
const client = require('https');

const folders = {
    eventImages: "../../assets/images/event/",
    eventPost: {
        fr: "../../content/fr/event/",
        en: "../../content/en/event/"
    },
    teamsLogo: "../../assets/images/teams/"
}

async function main(m) {
    const htmlInsta = await getTemplate()
    const htmlFacebook = await getTemplate("facebook")
    await generateInstagramImage(htmlInsta,m)
    const mdFiles = await generateMarkdown(m)
    if (mdFiles["en"]) await exportFile("en", m, mdFiles["en"])
    if (mdFiles["fr"]) await exportFile("fr", m, mdFiles["fr"])
    await downloadImage(m.homeLogo, folders.teamsLogo + m.homeTeam+'.png')
    await downloadImage(m.awayLogo, folders.teamsLogo + m.awayTeam+'.png')
    await generateFacebookImage(htmlFacebook,m)


}

const exportFile = function (lang, m, content) {
    let filename = m.competition + "-" + m.homeTeam + "-" + m.awayTeam
    filename = filename.replace(/[^a-zA-Z0-9]/g,'-');
    console.log("Exporting to " + folders.eventPost[lang] + filename + ".md");
    return new Promise((resolve, reject) => {
        fs.writeFile(folders.eventPost[lang] + filename + ".md", content, err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

const downloadImage = function (url, filepath) {
    return new Promise((resolve, reject) => {
        client.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                // Consume response data to free up memory
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));

            }
        });
    });
}

const getBackgroundImage = function (competition = "Ligue1", network = "instagram") {
    let templateImg = './Template.png';
    if (competition === "UEFA Champions League") {
        templateImg = './Template UCL.png'
    }
    if (network === "facebook") {
        templateImg = './Template FB.png'
    }

    const image = fs.readFileSync(templateImg);
    const base64Image = new Buffer.from(image).toString('base64');
    return 'data:image/jpeg;base64,' + base64Image;
}

const getTemplate = async function (network ="instagram") {
    return new Promise((resolve) => {
        const stream = fs.createReadStream(network +'.html');
        let data = '';
        stream.on('data', (chunk) => {
            data += chunk.toString();
        });
        stream.on('end', () => {
            resolve(data)
        })
    });
}

const generateInstagramImage = async function (htmlTemplate, m) {
    return new Promise( (resolve) => {
        const path = folders.eventImages + m.homeTeam + "-" + m.awayTeam + "-"+m.MontrealISO.substring(0, 10)+"-Insta.png";

        nodeHtmlToImage({
            output: path,
            html: htmlTemplate,
            content: { backgroundImage: getBackgroundImage(m.competition), homeTeam: m.homeTeam, homeLogo: m.homeLogo, awayTeam: m.awayTeam, awayLogo: m.awayLogo, date: m.MontrealDateString, time: m.MontrealTimeString }
        })
            .then(() => {
                console.log('The image was created successfully!')
                resolve();
            })
    })
}

const generateFacebookImage = async function (htmlTemplate, m) {
    return new Promise( (resolve) => {
        const path = folders.eventImages + m.homeTeam + "-" + m.awayTeam +"-"+m.MontrealISO.substring(0, 10)+"-FB.png";
        nodeHtmlToImage({
            output: path,
            html: htmlTemplate,
            content: { backgroundImage: getBackgroundImage(m.competition, "facebook"), homeTeam: m.homeTeam, homeLogo: m.homeLogo, awayTeam: m.awayTeam, awayLogo: m.awayLogo, date: m.MontrealDateString, time: m.MontrealTimeString },
            puppeteerArgs
        })
            .then(() => {
                console.log('The image was created successfully!')
                resolve();
            })
    })
}

const generateMarkdown = function (m) {
    let currentTime = m.Date.getTime();
    let expiryTime = new Date(currentTime + 12 * 60 * 60 * 1000);

    const head = "---\n" +
        "title: "+ m.homeTeam + " - " + m.awayTeam + "\n" +
        "date: "+ m.MontrealISO +"\n" +
        "publishdate: 2024-01-01T12:00:00.000-04:00\n" +
        "expiryDate: "+ expiryTime.toISOString() +"\n" +
        "featureImage: images/event/"+m.homeTeam + '-' + m.awayTeam +"-"+m.MontrealISO.substring(0, 10)+"-Insta.png\n" +
        "definitiveDate: true\n" +
        "categories: Match\n" +
        "eventType: match\n" +
        "shortDescription: "+ m.competition+"\n" +
        "homeLogo: /images/teams/"+m.homeTeam+".png\n" +
        "awayLogo: /images/teams/"+m.awayTeam+".png\n" +
        "homeTeam: "+m.homeTeam+"\n" +
        "awayTeam: "+m.awayTeam+"\n" +
        "location: Maison France de Montréal\n" +
        "link: https://facebook.com/psgclubmontreal/events\n" +
        "---\n" +
        "\n";

    const en = head + "Come and experience the PSG match at the French House with the PSG Club Montreal.\n\n" +
        "In addition to the match on the big screen and our bar offer, you will have the chance to win PSG and PSG Club Montreal prizes by participating in the organized games, and you will be able to immerse yourself in the atmosphere of the PSG Club Montreal, singing and supporting PSG with us!\n"

    const fr = head + "Venez vivre le match du PSG à la Maison France avec le PSG Club Montréal.\n\n" +
        "En plus du match sur grand écran et notre offre de bar, vous courrez la chance de gagner des lots PSG et PSG Club Montréal en participant au jeux organisés, et vous pourrez vous immerger dans l'ambiance du PSG Club Montréal, en chantant et supportant le PSG avec nous !\n"

    // console.log(fr);
    return new Promise( (resolve) => {
        resolve({
            fr: fr,
            en: en
        })
    })
}

module.exports = {
    main
}