const fetch = require('node-fetch')
const baseurl = "https://apiv1.spapi.ga"
const misc = baseurl + "/misc"
const fun = baseurl + "/fun"
const anime = baseurl + "/anime"
const image = baseurl + "/image"
class SPAPIerror extends Error {
    constructor(endpoint, message) {
        super(`${endpoint}]: ${message}`);
        this.name = '[SPAPI-Wrapper: '
    }
}
// Misc Endpoints
async function genPassword() {
    try {
    const fetched = await fetch(misc + "/genpass")
    const pass = await fetched.json()
    return (pass.password)
    } catch(error) {
        throw new SPAPIerror("genPassword()", error)
    }
}
/**
 * 
 * @param {String} url 
 */
async function getRealurl(url) {
    if (!url) {
        throw new SPAPIerror("getRealurl()", "No url provided.")
    } else {
    try {
        const fetched = await fetch(misc + `/realurl?url=${encodeURIComponent(url)}`)
    const realurl = await fetched.json()
    return (realurl.realurl)
} catch(err) {
        throw new SPAPIerror("getRealurl()", err)
    }
    }
}
/**
 * 
 * @param {String} url 
 */
async function lengthenURL(url) {
    if (!url) {
        throw new SPAPIerror("lengthenURL()", "No url provided.")
    } else {
    try {const fetched = await fetch(misc + `/lengthen?url=${encodeURIComponent(url)}`)
    const lgnt = await fetched.json()
    return (await lgnt.lengthened)} catch(err) {
        throw new SPAPIerror("lengthenURL()", err)
    }
    }
}
/**
 * 
 * @param {String} text 
 */
async function getMock(text) {
    if (!text) {
        throw new SPAPIerror("getMock()", "No text provided.")
    } else {
    try {const fetched = await fetch(misc + `/mock?text=${encodeURIComponent(text)}`)
    const mock = await fetched.json()
    return (mock.mocked)} catch(err) {
        throw new SPAPIerror("getMock()", err)
    }
    }
}
/**
 * 
 * @param {String} countryname 
 */
async function getCovid(countryname) {
    if (!countryname) {
        throw new SPAPIerror("getCovid()", "No country name provided.")
    } else {
    try{const fetched = await fetch(misc + `/covidcountry?country=${encodeURIComponent(countryname)}`)
    return (await fetched.json())} catch(err) {
        throw new SPAPIerror("getCovid()", err)
    }
    }
}
async function getIp(ip) {
    if (!ip) {
        throw new SPAPIerror("getIp()", "No ip provided.")
    } else {
    try {const fetched = await fetch(misc + `/ipinfo?ip=${encodeURIComponent(ip)}`)
    return (await  fetched.json())} catch(err) {
        throw new SPAPIerror("getIp()", err)
    }
    }
}
/**
 * 
 * @param {String} method 
 * @param {String} message 
 * @returns 
 */
async function convertMorse(method, message) {
    try {
    if (!method) {
        throw new SPAPIerror("convertMorse()", "No method provided.")
    } else {
        if (method === "encode") {
            try {const fetched = await fetch(misc + `/morse/encode?message=${encodeURIComponent(message)}`)
            const en = await fetched.json()
            return (en.encoded)} catch(err) {
                throw new SPAPIerror("convertMorse()", err)
            }
        } else if (method === "decode") {
            try {const fetched = await fetch(misc + `/morse/decode?message=${encodeURIComponent(message)}`)
            const de = await fetched.json()
            return (de.decoded)} catch(err) {
                throw new SPAPIerror("convertMorse()", err)
            }
        } else {
           throw new SPAPIerror("convertMorse()", "Invalid method.")
        }
    }
} catch(error) {
    throw new SPAPIerror("convertMorse()", error)
}
}
/**
 * 
 * @param {String} message
 */
async function getBinary(message) {
    if (!message) {
        throw new SPAPIerror("getBinary()", "No message provided.")
    } else {
    try {const fetched = await fetch(misc + `/binary?query=${encodeURIComponent(message)}`)
    const converted = await fetched.json()
    return (converted.converted)} catch(err) {
        throw new SPAPIerror("getBinary()", err)
    }
    }
}
/**
 * 
 * @param {String} country 
 */
async function covidInfo(country) {
    if (!country) {
        throw new SPAPIerror("covidInfo()", "No country provided.")
    } else {
        try {const fetched = await fetch(misc + `/covidcountry?country=${encodeURIComponent(country)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("covidInfo()", err)
        }
    }
}
//end of misc endpoints

//Fun endpoints
async function getTod() {
    try {const fetched = await fetch(fun + '/truthordare')
    return (await fetched.json())} catch(err) {
        throw new SPAPIerror("getTod()", err)
    }
}
async function getAnifact() {
    try {const fetched = await fetch(fun + '/anifact')
    return (await fetched.json())} catch(err) {
        throw new SPAPIerror("getAnifact()", err)
    }
}
async function get8ball() {
    try {const fetched = await fetch(fun + '/8ball')
    const res = await fetched.json()
    return (res.response)} catch(err) {
        throw new SPAPIerror("get8ball()", err)
    }
}
async function getJoke() {
    try {
    const fetched = await fetch(fun + '/joke')
    const joke = await fetched.json()
    return (joke.joke)
    } catch(error) {
        throw new SPAPIerror("getJoke()", error)
    }
}
async function getQuestionoftheday() {
    try {const fetched = await fetch(fun + '/qotd')
    const qotd = await fetched.json()
    return (qotd.qotd)} catch(err) {
        throw new SPAPIerror("getQuestionoftheday()", err)
    }
}
async function getRandomFact() {
    try {const fetched = await fetch(fun + '/fact')
    const fact = await fetched.json()
    return (fact.fact)} catch(err) {
        throw new SPAPIerror("getRandomFact()", err)
    }
}
async function getRandomQuote() {
    try {const fetched = await fetch(fun + '/quote')
    return (await fetched.json())} catch(err) {
        throw new SPAPIerror("getRandomQuote()", err)
    }
}
/**
 * @param {String} subreddit (Optional)
 */
async function getMeme(subreddit) {
    try {const fetched = await fetch(fun + '/meme?sub=' + encodeURIComponent(subreddit))
    return (await fetched.json())} catch(err) {
        throw new SPAPIerror("getMeme()", err)
    }
}
/**
 * 
 * @param {String} text 
 */
async function owofy(text) {
    if (!text) {
        throw new SPAPIerror("owofy()", "No text provided.")
    } else {
    try {const fetched = await fetch(fun + `/owofy?text=${encodeURIComponent(text)}`)
    const owo = await fetched.json()
    return (owo.response)} catch(err) {
        throw new SPAPIerror("owofy()", err)
    }
}
}
/**
 * 
 * @param {String} text 
 */
async function getAscii(text) {
    if (!text) {
        throw new SPAPIerror("getAscii()", "No text provided.")
    } else {
    try {const fetched = await fetch(fun + `/ascii?text=${encodeURIComponent(text)}`)
    const asc = await fetched.json()
    return (asc.ascii)} catch(err) {
        throw new SPAPIerror("getAscii()", err)
    }
}
}
/**
 * 
 * @param {String} message 
 * @param {String} owner 
 * @param {String} botname 
 * @param {Number} user 
 */
async function chatbot(message, owner, botname, user) {
    if (!message && !owner && !botname && !user) {
        throw new SPAPIerror("chatbot()", "No message, owner, botname, or user provided. Make sure to provide all of them.")
    } else {
    try {const fetched = await fetch(fun + `/chatbot?message=${encodeURIComponent(message)}&owner=${encodeURIComponent(owner)}&botname=${encodeURIComponent(botname)}&user=${encodeURIComponent(user)}`)
    const res = await fetched.json()
    return (res.response)} catch(err) {
        throw new SPAPIerror("chatbot()", err)
    }
    }
}
/**
 * 
 * @param {String} hex 
 */
async function getColor(hex) {
    if (!hex) {
        throw new SPAPIerror("getColor()", "No hex provided.")
    } else {
    try {const fetched = await fetch(fun + `/color?hex=${encodeURIComponent(hex)}`)
    return (await fetched.json())} catch(err) {
        throw new SPAPIerror("getColor()", err)
    }
    }
}
/**
 * 
 * @param {String} word 
 */
async function define(word) {
    if (!word) {
        throw new SPAPIerror("define()", "No word provided.")
    } else {
    try {const fetched = await fetch(fun + `/define?word=${encodeURIComponent(word)}`)
    return (await fetched.json())} catch(err) {
        throw new SPAPIerror("define()", err)
    }
    }
}
/**
 * 
 * @param {String} movie 
 */
async function getMovie(movie) {
    if (!movie) {
        throw new SPAPIerror("getMovie()", "No movie provided.")
    } else {
    try {const fetched = await fetch(fun + `/movie?movname=${encodeURIComponent(movie)}`)
    return (await fetched.json())} catch(err) {
        throw new SPAPIerror("getMovie()", err)
    }
    }
}
/**
 * 
 * @param {String} movie 
 */
async function getMoviePoster(movie) {
    if (!movie) {
        throw new SPAPIerror("getMoviePoster()", "No movie provided.")
    } else {
    try {const fetched = await fetch(fun + `/movposter/${encodeURIComponent(movie)}`)
    return (await fetched.json())} catch(err) {
        throw new SPAPIerror("getMoviePoster()", err)
    }
    }
}
/**
 * 
 * @param {String} song 
 */
async function getSongLyrics(song) {
    if (!song) {
        throw new SPAPIerror("getSongLyrics()", "No song provided.")
    } else {
    try {const fetched = await fetch(fun + `/lyrics?songname=${encodeURIComponent(song)}`)
    const ly = await fetched.json()
    return ly} catch(err) {
        throw new SPAPIerror("getSongLyrics()", err)
    }
    }
}
/**
 * 
 * @param {String} app 
 */
async function googlePlay(app) {
    if (!app) {
        throw new SPAPIerror("googlePlay()", "No app provided.")
    } else {
        try {const fetched = await fetch(fun + `/playstore?app=${encodeURIComponent(app)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("googlePlay()", err)
        }
    }
}
/**
 * 
 * @param {String} app 
 */
async function appstore(app) {
    if (!app) {
        throw new SPAPIerror("appstore()", "No app provided.")
    } else {
        try {const fetched = await fetch(fun + `/appstore?app=${encodeURIComponent(app)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("appstore()", err)
        }
    }
}
/**
 * 
 * @param {String} package 
 */
async function getNPM(package) {
    if (!package) {
        throw new SPAPIerror("getNPM()", "No package provided.")
    } else {
        try {const fetched = await fetch(fun + `/npm?pkg=${encodeURIComponent(package)}`)
        return (await fetched.json())}catch(err) {
            throw new SPAPIerror("getNPM()", err)
        }
    }
}
/**
 * 
 * @param {String} url URL to shorten
 * @param {String} token Token from bit.ly
 */
async function bitlyShorten(url, token) {
    if (!url && !token) {
        throw new SPAPIerror("bitlyShorten()", "No url or token provided. Make sure to provide both.")
    } else {
        try {const fetched = await fetch(fun + `/shorten?url=${encodeURIComponent(url)}&token=${encodeURIComponent(token)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("bitlyShorten()", err)
        }
    }
}
/**
 * 
 * @param {String} url URL to shorten
 * @param {String} token Token from bit.ly
 */
async function bitlyExpand(url, token) {
    if (!url && !token) {
        throw new SPAPIerror("bitlyExpand()", "No url or token provided. Make sure to provide both.")
    } else {
        try {const fetched = await fetch(fun + `/expand?url=${encodeURIComponent(url)}&token=${encodeURIComponent(token)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("bitlyExpand()", err)
        }
    }
}
/**
 * 
 * @param {String} text 
 * @param {String} to 
 */
async function translate(text, to) {
    if (!text && !to) {
        throw new SPAPIerror("translate()", "No text or to language provided. Make sure to provide both.")
    } else {
        try {const fetched = await fetch(fun + `/translate?text=${encodeURIComponent(text)}&to=${encodeURIComponent(to)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("translate()", err)
        }
    }
}
/**
 * 
 * @param {String} place 
 */
async function getWeather(place) {
    if (!place) {
        throw new SPAPIerror("getWeather()", "No place provided.")
    } else {
        try {const fetched = await fetch(fun + `/weather?place=${encodeURIComponent(place)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("getWeather()", err)
        }
    }
}
/**
 * 
 * @param {Number} userid 
 */
async function getUserBanner(userid) {
    if (!userid) {
        throw new SPAPIerror("getUserBanner()", "No user id provided.")
    } else {
        try {const fetched = await fetch(fun + `/discord?userid=${encodeURIComponent(userid)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("getUserBanner()", err)
        }
    }
}
async function getPickupLine() {
    try {
        const fetched = await fetch(fun + '/pickup')
        const p = await fetched.json()
        return (p.pickup)
    } catch(error) {
        throw new SPAPIerror("getPickupLine()", error)
    }
}
/**
 * 
 * @param {String} channelName 
 */
async function youtubeChannel(channelName) {
    if (!channelName) {
        throw new SPAPIerror("youtubeChannel()", "No channel name provided.")
    } else {
        try {const fetched = await fetch(fun + `/ytchannel?channel=${encodeURIComponent(channelName)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("youtubeChannel()", err)
        }
    }
}
/**
 * 
 * @param {String} username 
 */
async function getGithubProfile(username) {
    if (!username) {
        throw new SPAPIerror("getGithubProfile()", "No username provided.")
    } else {
        try {const fetched = await fetch(fun + `/githubuser?user=${encodeURIComponent(username)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("getGithubProfile()", err)
        }
    }
}
/**
 * 
 * @param {String} country 
 */
async function getCountry(country) {
    if (!country) {
        throw new SPAPIerror("getCountry()", "No country provided.")
    } else {
        try {const fetched = await fetch(fun + `/countryinfo?name=${encodeURIComponent(country)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("getCountry()", err)
        }
    }
}
/**
 * 
 * @param {String} app 
 */
async function steamSearch(app) {
    if (!app) {
        throw new SPAPIerror("steamSearch()", "No app provided.")
    } else {
        try {const fetched = await fetch(fun + `/steam?game=${encodeURIComponent(app)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("steamSearch()", err)
        }
    }
}
/**
 * 
 * @param {String} code 
 */
async function discordInvite(code) {
    if (!code) {
        throw new SPAPIerror("discordInvite()", "No code provided.")
    } else {
        const no = ["https://", "discord.gg", "discord.com"]
        const link = no.some(boo => `${code}`.includes(boo))
        if (link === true) {
            throw new SPAPIerror("discordInvite()", "Param must contain only the code and not the link.")
        } else {
            try {const fetched = await fetch(fun + `/inviteinfo?code=${encodeURIComponent(code)}`)
            return (await fetched.json())} catch(err) {
                throw new SPAPIerror("discordInvite()", err)
            }
        }
    }
}
/**
 * 
 * @param {String} bookname 
 */
async function bookInfo(bookname) {
    if (!bookname) {
        throw new SPAPIerror("bookInfo()", "No book name provided.")
    } else {
        try {const fetched = await fetch(fun + `/bookinfo?book=${encodeURIComponent(bookname)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("bookInfo()", err)
        }
    }
}
// end of fun endpoints 

//anime endpoints
async function getAllAnime() {
    try {
        const fetched = await fetch(anime + '/all')
        return (await fetched.json())
    } catch(error) {
        throw new SPAPIerror("getAllAnime()", error)
    }
}
async function getAnimeCharacter(characterName) {
    if (!characterName) {
        throw new SPAPIerror("getAnimeCharacter()", "No character name provided.")
    } else {
        try {const fetched = await fetch(anime + `/animechar?char=${encodeURIComponent(characterName)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("getAnimeCharacter()", err)
        }
    }
}
async function getAnimeInfo(animename) {
    if (!animename) {
        throw new SPAPIerror("getAnimeInfo()", "No anime name provided.")
    } else {
        try {const fetched = await fetch(anime + `/info?anime=${encodeURIComponent(animename)}`)
        return (await fetched.json())} catch(err) {
            throw new SPAPIerror("getAnimeInfo()", err)
        }
    }
}
//end of anime endpoints

// Image endpoints
function renderColor(hex) {
    if (!hex) {
        throw new SPAPIerror("renderColor()", "No hex provided.")
    } else {
    return (image + `/render?hex=${encodeURIComponent(hex)}`)
    }
}
function getQR(text) {
    if (!text) {
        throw new SPAPIerror("getQR()", "No text provided.")
    } else {
        return (image + `/qrcode?text=${encodeURIComponent(text)}`)
    }
}
function renderFlag(country) {
    if (!country) {
        throw new SPAPIerror("renderFlag()", "No country provided.")
    } else {
        return (image + `/flag?country=${encodeURIComponent(country)}`)
    }
}
function minecraftBlock(block) {
    if (!block) {
        throw new SPAPIerror("minecraftBlock()", "No block provided.")
    } else {
        return (image + `/minecraftblock?block=${encodeURIComponent(block)}`)
    }
}
function screenshot(site) {
    if (!site) {
        throw new SPAPIerror("screenshot()", "No site provided.")
    } else {
        const yes = ["https://", "http://"]
        const must = yes.some(sh => `${site}`.includes(sh))
        if (must === false) {
            throw new SPAPIerror("screenshot()", "Site must be a link")
        } else {
            return (image + `/screenshot?site=${encodeURIComponent(site)}`)
        }
    }
}
// end of image endpoints
module.exports = {
    genPassword,
    getRealurl,
    lengthenURL,
    getMock,
    getCovid,
    getIp,
    convertMorse,
    getBinary,
    covidInfo,
    getTod,
    getAnifact,
    get8ball,
    getJoke,
    getQuestionoftheday,
    getRandomFact,
    getRandomQuote,
    getMeme,
    owofy,
    getAscii,
    chatbot,
    getColor,
    define,
    getMovie,
    getMoviePoster,
    getSongLyrics,
    googlePlay,
    appstore,
    getNPM,
    bitlyShorten,
    bitlyExpand,
    translate,
    getWeather,
    getUserBanner,
    getPickupLine,
    youtubeChannel,
    getGithubProfile,
    getCountry,
    steamSearch,
    discordInvite,
    bookInfo,
    getAllAnime,
    getAnimeCharacter,
    getAnimeInfo,
    renderColor,
    getQR,
    renderFlag,
    minecraftBlock,
    screenshot
}