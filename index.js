const fetch = require('node-fetch')
const baseurl = "https://apiv1.spapi.ga"
const misc = baseurl + "/misc"
const fun = baseurl + "/fun"
const anime = baseurl + "/anime"
const image = baseurl + "/image"
// Misc Endpoints
async function genPassword() {
    try {
    const fetched = await fetch(misc + "/genpass")
    const pass = await fetched.json()
    return (pass.password)
    } catch(error) {
        return("[SPAPI-Wrapper: genPass()]: Something broke.")
    }
}
/**
 * 
 * @param {String} url 
 */
async function getRealurl(url) {
    if (!url) {
        return("[SPAPI-Wrapper: getRealurl()]: No URL provided.")
    } else {
    const fetched = await fetch(misc + `/realurl?url=${encodeURIComponent(url)}`)
    const realurl = await fetched.json()
    return (realurl.realurl)
    }
}
/**
 * 
 * @param {String} url 
 */
async function lengthenURL(url) {
    if (!url) {
        return("[SPAPI-Wrapper: lengthenURL()]: No URL provided.")
    } else {
    const fetched = await fetch(misc + `/lengthen?url=${encodeURIComponent(url)}`)
    const lgnt = await fetched.json()
    return (await lgnt.lengthened)
    }
}
/**
 * 
 * @param {String} text 
 */
async function getMock(text) {
    if (!text) {
        return("[SPAPI-Wrapper: getMock()]: No text provided.")
    } else {
    const fetched = await fetch(misc + `/mock?text=${encodeURIComponent(text)}`)
    const mock = await fetched.json()
    return (mock.mocked)
    }
}
/**
 * 
 * @param {String} countryname 
 */
async function getCovid(countryname) {
    if (!countryname) {
        return("[SPAPI-Wrapper: getCovid()]: No country name provided.")
    } else {
    const fetched = await fetch(misc + `/covidcountry?country=${encodeURIComponent(countryname)}`)
    return (await fetched.json())
    }
}
async function getIp(ip) {
    if (!ip) {
        return("[SPAPI-Wrapper: getIp()]: No ip provided.")
    } else {
    const fetched = await fetch(misc + `/ipinfo?ip=${encodeURIComponent(ip)}`)
    return (await  fetched.json())
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
        return("[SPAPI-Wrapper: convertMorse()]: No method provided.")
    } else {
        if (method === "encode") {
            const fetched = await fetch(misc + `/morse/encode?message=${encodeURIComponent(message)}`)
            const en = await fetched.json()
            return (en.encoded)
        } else if (method === "decode") {
            const fetched = await fetch(misc + `/morse/decode?message=${encodeURIComponent(message)}`)
            const de = await fetched.json()
            return (de.decoded)
        } else {
            return("[SPAPI-Wrapper: convertMorse()]: Invalid method provided.")
        }
    }
} catch(error) {
    return("[SPAPI-Wrapper: convertMorse()]: Something broke at converMorse()")
}
}
/**
 * 
 * @param {String} message
 */
async function getBinary(message) {
    if (!message) {
        return("[SPAPI-Wrapper: getBinary()]: No message provided.")
    } else {
    const fetched = await fetch(misc + `/binary?query=${encodeURIComponent(message)}`)
    const converted = await fetched.json()
    return (converted.converted)
    }
}
/**
 * 
 * @param {String} country 
 */
async function covidInfo(country) {
    if (!country) {
        return("[SPAPI-Wrapper: covidInfo()]: No country provided.")
    } else {
        const fetched = await fetch(misc + `/covidcountry?country=${encodeURIComponent(country)}`)
        return (await fetched.json())
    }
}
//end of misc endpoints

//Fun endpoints
async function getTod() {
    const fetched = await fetch(fun + '/truthordare')
    return (await fetched.json())
}
async function getAnifact() {
    const fetched = await fetch(fun + '/anifact')
    return (await fetched.json())
}
async function get8ball() {
    const fetched = await fetch(fun + '/8ball')
    const res = await fetched.json()
    return (res.response)
}
async function getJoke() {
    try {
    const fetched = await fetch(fun + '/joke')
    const joke = await fetched.json()
    return (joke.joke)
    } catch(error) {
        return("[SPAPI-Wrapper: getJoke()]: Something broke at getJoke()")
    }
}
async function getQuestionoftheday() {
    const fetched = await fetch(fun + '/qotd')
    const qotd = await fetched.json()
    return (qotd.qotd)
}
async function getRandomFact() {
    const fetched = await fetch(fun + '/fact')
    const fact = await fetched.json()
    return (fact.fact)
}
async function getRandomQuote() {
    const fetched = await fetch(fun + '/quote')
    return (await fetched.json())
}
/**
 * @param {String} subreddit (Optional)
 */
async function getMeme(subreddit) {
    const fetched = await fetch(fun + '/meme?sub=' + encodeURIComponent(subreddit))
    return (await fetched.json())
}
/**
 * 
 * @param {String} text 
 */
async function owofy(text) {
    if (!text) {
        return("[SPAPI-Wrapper: owofy()]: No text provided.")
    } else {
    const fetched = await fetch(fun + `/owofy?text=${encodeURIComponent(text)}`)
    const owo = await fetched.json()
    return (owo.response)
    }
}
/**
 * 
 * @param {String} text 
 */
async function getAscii(text) {
    if (!text) {
        return("[SPAPI-Wrapper: getAscii()]: No text provided.")
    } else {
    const fetched = await fetch(fun + `/ascii?text=${encodeURIComponent(text)}`)
    const asc = await fetched.json()
    return (asc.ascii)
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
        return("[SPAPI-Wrapper: chatbot()]: No message, owner, botname or user is provided. Make to provide all params.")
    } else {
    const fetched = await fetch(fun + `/chatbot?message=${encodeURIComponent(message)}&owner=${encodeURIComponent(owner)}&botname=${encodeURIComponent(botname)}&user=${encodeURIComponent(user)}`)
    const res = await fetched.json()
    return (res.response)
    }
}
/**
 * 
 * @param {String} hex 
 */
async function getColor(hex) {
    if (!hex) {
        return("[SPAPI-Wrapper: getColor()]: No color hex provided.")
    } else {
    const fetched = await fetch(fun + `/color?hex=${encodeURIComponent(hex)}`)
    return (await fetched.json())
    }
}
/**
 * 
 * @param {String} word 
 */
async function define(word) {
    if (!word) {
        return("[SPAPI-Wrapper: define()]: No word provided.")
    } else {
    const fetched = await fetch(fun + `/define?word=${encodeURIComponent(word)}`)
    return (await fetched.json())
    }
}
/**
 * 
 * @param {String} movie 
 */
async function getMovie(movie) {
    if (!movie) {
        return("[SPAPI-Wrapper: getMovie()]: No movie name provided.")
    } else {
    const fetched = await fetch(fun + `/movie?movname=${encodeURIComponent(movie)}`)
    return (await fetched.json())
    }
}
/**
 * 
 * @param {String} movie 
 */
async function getMoviePoster(movie) {
    if (!movie) {
        return("[SPAPI-Wrapper: getMoviePoster()]: No movie name provided.")
    } else {
    const fetched = await fetch(fun + `/movposter/${encodeURIComponent(movie)}`)
    return (await fetched.json())
    }
}
/**
 * 
 * @param {String} song 
 */
async function getSongLyrics(song) {
    if (!song) {
        return("[SPAPI-Wrapper: getSongLyrics()]: No song name provided.")
    } else {
    const fetched = await fetch(fun + `/lyrics?songname=${encodeURIComponent(song)}`)
    const ly = await fetched.json()
    return (ly.lyrics)
    }
}
/**
 * 
 * @param {String} app 
 */
async function googlePlay(app) {
    if (!app) {
        return("[SPAPI-Wrapper: googlePlay()]: No app name provided.")
    } else {
        const fetched = await fetch(fun + `/playstore?app=${encodeURIComponent(app)}`)
        return (await fetched.json())
    }
}
async function appstore(app) {
    if (!app) {
        return("[SPAPI-Wrapper: appstore()]: No app name provided.")
    } else {
        const fetched = await fetch(fun + `/appstore?app=${encodeURIComponent(app)}`)
        return (await fetched.json())
    }
}
async function getNPM(package) {
    if (!package) {
        return("[SPAPI-Wrapper: getNPM()]: No package name provided")
    } else {
        const fetched = await fetch(fun + `/npm?pkg=${encodeURIComponent(package)}`)
        return (await fetched.json())
    }
}
async function bitlyShorten(url, token) {
    if (!url && !token) {
        return("[SPAPI-Wrapper: bitlyShorten()]: No URL or token provided. Make sure to provide both params.")
    } else {
        const fetched = await fetch(fun + `/shorten?url=${encodeURIComponent(url)}&token=${encodeURIComponent(token)}`)
        return (await fetched.json())
    }
}
async function bitlyExpand(url, token) {
    if (!url && !token) {
        return("[SPAPI-Wrapper: bitlyExpand()]: No URL or token provided. Make sure to provide both params.")
    } else {
        const fetched = await fetch(fun + `/expand?url=${encodeURIComponent(url)}&token=${encodeURIComponent(token)}`)
        return (await fetched.json())
    }
}
async function translate(text, to) {
    if (!text && !to) {
        return("[SPAPI-Wrapper: translate()]: No text or 'to language' provided. Make sure to provide both.")
    } else {
        const fetched = await fetch(fun + `/translate?text=${encodeURIComponent(text)}&to=${encodeURIComponent(to)}`)
        return (await fetched.json())
    }
}
async function getWeather(place) {
    if (!place) {
        return("[SPAPI-Wrapper: getWeather()]: No place provided.")
    } else {
        const fetched = await fetch(fun + `/weather?place=${encodeURIComponent(place)}`)
        return (await fetched.json())
    }
}
/**
 * 
 * @param {Number} userid 
 */
async function getUserBanner(userid) {
    if (!userid) {
        return("[SPAPI-Wrapper: getUserBanner()]: No user id provided.")
    } else {
        const fetched = await fetch(fun + `/discord?userid=${encodeURIComponent(userid)}`)
        return (await fetched.json())
    }
}
async function getPickupLine() {
    try {
        const fetched = await fetch(fun + '/pickup')
        const p = await fetched.json()
        return (p.pickup)
    } catch(error) {
        return("[SPAPI-Wrapper: getPickupLine()]: Something Broke.")
    }
}
async function youtubeChannel(channelName) {
    if (!channelName) {
        return("[SPAPI-Wrapper: youtubeChannel()]: No channel name provided.")
    } else {
        const fetched = await fetch(fun + `/ytchannel?channel=${encodeURIComponent(channelName)}`)
        return (await fetched.json())
    }
}
async function getGithubProfile(username) {
    if (!username) {
        return("[SPAPI-Wrapper: getGithubProfile()]: No username provided")
    } else {
        const fetched = await fetch(fun + `/githubuser?user=${encodeURIComponent(username)}`)
        return (await fetched.json())
    }
}
async function getCountry(country) {
    if (!country) {
        return("[SPAPI-Wrapper: getCountry()]: No country name provided.")
    } else {
        const fetched = await fetch(fun + `/countryinfo?name=${encodeURIComponent(country)}`)
        return (await fetched.json())
    }
}
async function steamSearch(app) {
    if (!app) {
        return("[SPAPI-Wrapper: steamSearch()]: No app provided.")
    } else {
        const fetched = await fetch(fun + `/steam?game=${encodeURIComponent(app)}`)
        return (await fetched.json())
    }
}
async function discordInvite(code) {
    if (!code) {
        return("[SPAPI-Wrapper: discordInvite()]: No code provided")
    } else {
        const no = ["https://", "discord.gg", "discord.com"]
        const link = no.some(boo => `${code}`.includes(boo))
        if (link === true) {
            return("[SPAPI-Wrapper: discordInvite()]: Code must only include the invite code and no link.")
        } else {
            const fetched = await fetch(fun + `/inviteinfo?code=${encodeURIComponent(code)}`)
            return (await fetched.json())
        }
    }
}
async function bookInfo(bookname) {
    if (!bookname) {
        return("[SPAPI-Wrapper: bookInfo()]: No bookname given.")
    } else {
        const fetched = await fetch(fun + `/bookinfo?book=${encodeURIComponent(bookname)}`)
        return (await fetched.json())
    }
}
// end of fun endpoints 

//anime endpoints
async function getAllAnime() {
    try {
        const fetched = await fetch(anime + '/all')
        return (await fetched.json())
    } catch(error) {
        return("[SPAPI-Wrapper: getAllAnime()]: Something broke.")
    }
}
async function getAnimeCharacter(characterName) {
    if (!characterName) {
        return("[SPAPI-Wrapper: getAnimeCharacter()]: No character name provided.")
    } else {
        const fetched = await fetch(anime + `/animechar?char=${encodeURIComponent(characterName)}`)
        return (await fetched.json())
    }
}
async function getAnimeInfo(animename) {
    if (!animename) {
        return("[SPAPI-Wrapper: getAnimeInfo()]: No anime name provided.")
    } else {
        const fetched = await fetch(anime + `/info?anime=${encodeURIComponent(animename)}`)
        return (await fetched.json())
    }
}
//end of anime endpoints

// Image endpoints
function renderColor(hex) {
    if (!hex) {
        return("[SPAPI-Wrapper: renderColor()]: No hex provided.")
    } else {
    return (image + `/render?hex=${encodeURIComponent(hex)}`)
    }
}
function getQR(text) {
    if (!text) {
        return("[SPAPI-Wrapper: getQR()]: No text provided.")
    } else {
        return (image + `/qrcode?text=${encodeURIComponent(text)}`)
    }
}
function renderFlag(country) {
    if (!country) {
        return("[SPAPI-Wrapper: renderFlag()]: No country name provided.")
    } else {
        return (image + `/flag?country=${encodeURIComponent(country)}`)
    }
}
function minecraftBlock(block) {
    if (!block) {
        return("[SPAPI-Wrapper: minecraftBlock()]: No block name provided.")
    } else {
        return (image + `/minecraftblock?block=${encodeURIComponent(block)}`)
    }
}
function screenshot(site) {
    if (!site) {
        return("[SPAPI-Wrapper: screenshot()]: No site given.")
    } else {
        const yes = ["https://", "http://"]
        const must = yes.some(sh => `${site}`.includes(sh))
        if (must === false) {
            return ("[SPAPI-Wrapper: screenshot()]: Site must be an url.")
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