const { error } = require('console')
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
async function getRealurl(url) {
    if (!url) {
        return("[SPAPI-Wrapper: getRealurl()]: No URL provided.")
    } else {
    const fetched = await fetch(misc + `/realurl?url=${encodeURIComponent(url)}`)
    const realurl = await fetched.json()
    return (realurl.realurl)
    }
}
async function lengthenURL(url) {
    if (!url) {
        return("[SPAPI-Wrapper: lengthenURL()]: No URL provided.")
    } else {
    const fetched = await fetch(misc + `/lengthen?url=${encodeURIComponent(url)}`)
    const lgnt = await fetched.json()
    return (await lgnt.lengthened)
    }
}
async function getMock(text) {
    if (!text) {
        return("[SPAPI-Wrapper: getMock()]: No text provided.")
    } else {
    const fetched = await fetch(misc + `/mock?text=${encodeURIComponent(text)}`)
    const mock = await fetched.json()
    return (mock.mocked)
    }
}
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
async function getBinary(message) {
    if (!message) {
        return("[SPAPI-Wrapper: getBinary()]: No message provided.")
    } else {
    const fetched = await fetch(misc + `/binary?query=${encodeURIComponent(message)}`)
    const converted = await fetched.json()
    return (converted.converted)
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
async function getMeme() {
    const fetched = await fetch(fun + '/meme')
    return (await fetched.json())
}
async function owofy(text) {
    if (!text) {
        return("[SPAPI-Wrapper: owofy()]: No text provided.")
    } else {
    const fetched = await fetch(fun + `/owofy?text=${encodeURIComponent(text)}`)
    const owo = await fetched.json()
    return (owo.response)
    }
}
async function getAscii(text) {
    if (!text) {
        return("[SPAPI-Wrapper: getAscii()]: No text provided.")
    } else {
    const fetched = await fetch(fun + `/ascii?text=${encodeURIComponent(text)}`)
    const asc = await fetched.json()
    return (asc.ascii)
    }
}
async function chatbot(message, owner, botname, user) {
    if (!message && !owner && !botname && !user) {
        return("[SPAPI-Wrapper: chatbot()]: No message, owner, botname or user is provided. Make to provide all params.")
    } else {
    const fetched = await fetch(fun + `/chatbot?message=${encodeURIComponent(message)}&owner=${encodeURIComponent(owner)}&botname=${encodeURIComponent(botname)}&user=${encodeURIComponent(user)}`)
    const res = await fetched.json()
    return (res.response)
    }
}
async function getColor(hex) {
    if (!hex) {
        return("[SPAPI-Wrapper: getColor()]: No color hex provided.")
    } else {
    const fetched = await fetch(fun + `/color?hex=${encodeURIComponent(hex)}`)
    return (await fetched.json())
    }
}
async function define(word) {
    if (!word) {
        return("[SPAPI-Wrapper: define()]: No word provided.")
    } else {
    const fetched = await fetch(fun + `/define?word=${encodeURIComponent(word)}`)
    return (await fetched.json())
    }
}
async function getMovie(movie) {
    if (!movie) {
        return("[SPAPI-Wrapper: getMovie()]: No movie name provided.")
    } else {
    const fetched = await fetch(fun + `/movie?movname=${encodeURIComponent(movie)}`)
    return (await fetched.json())
    }
}
async function getMoviePoster(movie) {
    if (!movie) {
        return("[SPAPI-Wrapper: getMoviePoster()]: No movie name provided.")
    } else {
    const fetched = await fetch(fun + `/movposter/${encodeURIComponent(movie)}`)
    return (await fetched.json())
    }
}
async function getSongLyrics(song) {
    if (!song) {
        return("[SPAPI-Wrapper: getSongLyrics()]: No song name provided.")
    } else {
    const fetched = await fetch(fun + `/lyrics?songname=${encodeURIComponent(song)}`)
    const ly = await fetched.json()
    return (ly.lyrics)
    }
}
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
async function renderColor(hex) {
    if (!hex) {
        return("[SPAPI-Wrapper: renderColor()]: No hex provided.")
    } else {
    return (image + `/render?hex=${encodeURIComponent(hex)}`)
    }
}
async function getQR(text) {
    if (!text) {
        return("[SPAPI-Wrapper: getQR()]: No text provided.")
    } else {
        return (image + `/qrcode?text=${encodeURIComponent(text)}`)
    }
}
async function renderFlag(country) {
    if (!country) {
        return("[SPAPI-Wrapper: renderFlag()]: No country name provided.")
    } else {
        return (image + `/flag?country=${encodeURIComponent(country)}`)
    }
}
async function minecraftBlock(block) {
    if (!block) {
        return("[SPAPI-Wrapper: minecraftBlock()]: No block name provided.")
    } else {
        return (image + `/image/minecraftblock?block=${encodeURIComponent(block)}`)
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
    getAllAnime,
    getAnimeCharacter,
    getAnimeInfo,
    renderColor,
    getQR,
    renderFlag,
    minecraftBlock
}