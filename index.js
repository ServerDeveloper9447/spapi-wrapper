const { error } = require('console')
const fetch = require('node-fetch')
const baseurl = "https://api.spapi.ga"
const misc = baseurl + "/misc"
const fun = baseurl + "/fun"
const anime = baseurl + "/anime"
// Misc Endpoints
async function genPassword() {
    try {
    const fetched = await fetch(misc + "/genpass")
    return (await fetched.json())
    } catch(error) {
        console.log("[SPAPI-Wrapper: genPass()]: Something broke.")
    }
}
async function getRealurl(url) {
    if (!url) {
        console.log("[SPAPI-Wrapper: getRealurl()]: No URL provided.")
    } else {
    const fetched = await fetch(misc + `/realurl?url=${encodeURIcomponent(url)}`)
    return (await fetched.json())
    }
}
async function lengthenURL(url) {
    if (!url) {
        console.log("[SPAPI-Wrapper: lengthenURL()]: No URL provided.")
    } else {
    const fetched = await fetch(misc + `/lengthen?url=${encodeURIcomponent(url)}`)
    return (await fetched.json())
    }
}
async function getMock(text) {
    if (!text) {
        console.log("[SPAPI-Wrapper: getMock()]: No text provided.")
    } else {
    const fetched = await fetch(misc + `/mock?text=${encodeURIcomponent(text)}`)
    return (await fetched.json())
    }
}
async function getCovid(countryname) {
    if (!countryname) {
        console.log("[SPAPI-Wrapper: getCovid()]: No country name provided.")
    } else {
    const fetched = await fetch(misc + `/covidcountry?country=${encodeURIcomponent(countryname)}`)
    return (await fetched.json())
    }
}
async function getIp(ip) {
    if (!ip) {
        console.log("[SPAPI-Wrapper: getIp()]: No ip provided.")
    } else {
    const fetched = await fetch(misc + `/ipinfo?ip=${encodeURIcomponent(ip)}`)
    return (await  fetched.json())
    }
}
async function convertMorse(method, message) {
    try {
    if (!method) {
        console.log("[SPAPI-Wrapper: convertMorse()]: No method provided.")
    } else {
        if (method === "encode") {
            const fetched = await fetch(misc + `/morse/encode?message=${encodeURIcomponent(message)}`)
            return (await fetched.json())
        } else if (method === "decode") {
            const fetched = await fetch(misc + `/morse/decode?message=${encodeURIComponent(message)}`)
            return (await fetched.json())
        } else {
            console.log("[SPAPI-Wrapper: convertMorse()]: Invalid method provided.")
        }
    }
} catch(error) {
    console.log("[SPAPI-Wrapper: convertMorse()]: Something broke at converMorse()")
}
}
async function getBinary(message) {
    if (!message) {
        console.log("[SPAPI-Wrapper: getBinary()]: No message provided.")
    } else {
    const fetched = await fetch(misc + `/binary?query=${encodeURIComponent(message)}`)
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
    return (await fetched.json())
}
async function getJoke() {
    try {
    const fetched = await fetch(fun + '/joke')
    return (await fetched.json())
    } catch(error) {
        console.log("[SPAPI-Wrapper: getJoke()]: Something broke at getJoke()")
    }
}
async function getQuestionoftheday() {
    const fetched = await fetch(fun + '/qotd')
    return (await fetched.json())
}
async function getRandomFact() {
    const fetched = await fetch(fun + '/fact')
    return (await fetched.json())
}
async function getRandomQuote() {
    const fetched = await fetch(fun + '/quote')
    return (await fetched.json())
}
async function getMeme() {
    const fetched = await fetch(fun + '/meme')
    return (await fetched.json())
}
async function owofy(text) {
    if (!text) {
        console.log("[SPAPI-Wrapper: owofy()]: No text provided.")
    } else {
    const fetched = await fetch(fun + `/owofy?text=${encodeURIComponent(text)}`)
    return (await fetched.json())
    }
}
async function getAscii(text) {
    if (!text) {
        console.log("[SPAPI-Wrapper: getAscii()]: No text provided.")
    } else {
    const fetched = await fetch(fun + `/ascii?text=${encodeURIComponent(text)}`)
    return (await fetched.json())
    }
}
async function chatbot(message, owner, botname, user) {
    if (!message && !owner && !botname && !user) {
        console.log("[SPAPI-Wrapper: chatbot()]: No message, owner, botname or user is provided. Make to provide all params.")
    } else {
    const fetched = await fetch(fun + `/chatbot?message=${encodeURIComponent(message)}&owner=${encodeURIComponent(owner)}&botname=${encodeURIComponent(botname)}&user=${encodeURIComponent(user)}`)
    return (await fetched.json())
    }
}
async function getColor(hex) {
    if (!hex) {
        console.log("[SPAPI-Wrapper: getColor()]: No color hex provided.")
    } else {
    const fetched = await fetch(fun + `/color?hex=${encodeURIComponent(hex)}`)
    return (await fetched.json())
    }
}
async function define(word) {
    if (!word) {
        console.log("[SPAPI-Wrapper: define()]: No word provided.")
    } else {
    const fetched = await fetch(fun + `/define?word=${encodeURIComponent(word)}`)
    return (await fetched.json())
    }
}
async function getMovie(movie) {
    if (!movie) {
        console.log("[SPAPI-Wrapper: getMovie()]: No movie name provided.")
    } else {
    const fetched = await fetch(fun + `/movie?movname=${encodeURIComponent(movie)}`)
    return (await fetched.json())
    }
}
async function getMoviePoster(movie) {
    if (!movie) {
        console.log("[SPAPI-Wrapper: getMoviePoster()]: No movie name provided.")
    } else {
    const fetched = await fetch(fun + `/movposter/${encodeURIComponent(movie)}`)
    return (await fetched.json())
    }
}
async function getSongLyrics(song) {
    if (!song) {
        console.log("[SPAPI-Wrapper: getSongLyrics()]: No song name provided.")
    } else {
    const fetched = await fetch(fun + `/lyrics?songname=${encodeURIComponent(song)}`)
    return (await fetched.json())
    }
}
async function googlePlay(app) {
    if (!app) {
        console.log("[SPAPI-Wrapper: googlePlay()]: No app name provided.")
    } else {
        const fetched = await fetch(fun + `/playstore?app=${encodeURIComponent(app)}`)
        return (await fetched.json())
    }
}
async function appstore(app) {
    if (!app) {
        console.log("[SPAPI-Wrapper: appstore()]: No app name provided.")
    } else {
        const fetched = await fetch(fun + `/appstore?app=${encodeURIComponent(app)}`)
        return (await fetched.json())
    }
}
async function getNPM(package) {
    if (!package) {
        console.log("[SPAPI-Wrapper: getNPM()]: No package name provided")
    } else {
        const fetched = await fetch(fun + `/npm?pkg=${encodeURIComponent(package)}`)
        return (await fetched.json())
    }
}
async function bitlyShorten(url, token) {
    if (!url && !token) {
        console.log("[SPAPI-Wrapper: bitlyShorten()]: No URL or token provided. Make sure to provide both params.")
    } else {
        const fetched = await fetch(fun + `/shorten?url=${encodeURIComponent(url)}&token=${encodeURIComponent(token)}`)
        return (await fetched.json())
    }
}
async function bitlyExpand(url, token) {
    if (!url && !token) {
        console.log("[SPAPI-Wrapper: bitlyExpand()]: No URL or token provided. Make sure to provide both params.")
    } else {
        const fetched = await fetch(fun + `/expand?url=${encodeURIComponent(url)}&token=${encodeURIComponent(token)}`)
        return (await fetched.json())
    }
}
async function translate(text, to) {
    if (!text && !to) {
        console.log("[SPAPI-Wrapper: translate()]: No text or 'to language' provided. Make sure to provide both.")
    } else {
        const fetched = await fetch(fun + `/translate?text=${encodeURIComponent(text)}&to=${encodeURIComponent(to)}`)
        return (await fetched.json())
    }
}
async function getWeather(place) {
    if (!place) {
        console.log("[SPAPI-Wrapper: getWeather()]: No place provided.")
    } else {
        const fetched = await fetch(fun + `/weather?place=${encodeURIComponent(place)}`)
        return (await fetched.json())
    }
}
async function getUserBanner(userid) {
    if (!userid) {
        console.log("[SPAPI-Wrapper: getUserBanner()]: No user id provided.")
    } else {
        const fetched = await fetch(fun + `/discord?userid=${encodeURIComponent(userid)}`)
        return (await fetched.json())
    }
}
async function getPickupLine() {
    try {
        const fetched = await fetch(fun + '/pickup')
        return (await fetched.json())
    } catch(error) {
        console.log("[SPAPI-Wrapper: getPickupLine()]: Something Broke.")
    }
}
async function youtubeChannel(channelName) {
    if (!channelName) {
        console.log("[SPAPI-Wrapper: youtubeChannel()]: No channel name provided.")
    } else {
        const fetched = await fetch(fun + `/ytchannel?channel=${encodeURIComponent(channelName)}`)
        return (await fetched.json())
    }
}
async function getGithubProfile(username) {
    if (!username) {
        console.log("[SPAPI-Wrapper: getGithubProfile()]: No username provided")
    } else {
        const fetched = await fetch(fun + `/githubuser?user=${encodeURIComponent(username)}`)
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
        console.log("[SPAPI-Wrapper: getAllAnime()]: Something broke.")
    }
}
async function getAnimeCharacter(characterName) {
    if (!characterName) {
        console.log("[SPAPI-Wrapper: getAnimeCharacter()]: No character name provided.")
    } else {
        const fetched = await fetch(anime + `/animechar?char=${encodeURIComponent(characterName)}`)
        return (await fetched.json())
    }
}
async function getAnimeInfo(animename) {
    if (!animename) {
        console.log("[SPAPI-Wrapper: getAnimeInfo()]: No anime name provided.")
    } else {
        const fetched = await fetch(anime + `/info?anime=${encodeURIComponent(animename)}`)
        return (await fetched.json())
    }
}
//end of anime endpoints
module.exports = {
    genPassword,
    getRealurl,
    lengthenURL,
    getMock,
    getCovid,
    getIp,
    convertMorse,
    getBinary,
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
    getAllAnime,
    getAnimeCharacter,
    getAnimeInfo
}