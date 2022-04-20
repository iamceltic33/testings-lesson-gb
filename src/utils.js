/**
 * 
 * @param {(Date|string)} date  
 * @returns {string}
 */


const transformDate = (date) => {
    if (typeof (date) === "string") {
        date = new Date(date)
        if (date.toString() === "Invalid Date") return null
    } else
        if (!(date instanceof Date)) {
            return null
        }
    let dateStr = `${date.getDate()} `
    switch (date.getMonth()) {
        case 0: dateStr += "января"; break;
        case 1: dateStr += "февраля"; break;
        case 2: dateStr += "марта"; break;
        case 3: dateStr += "апреля"; break;
        case 4: dateStr += "мая"; break;
        case 5: dateStr += "июня"; break;
        case 6: dateStr += "июля"; break;
        case 7: dateStr += "августа"; break;
        case 8: dateStr += "сентября"; break;
        case 9: dateStr += "октября"; break;
        case 10: dateStr += "ноября"; break;
        case 11: dateStr += "декабря"; break;
    }
    dateStr += ` ${date.getFullYear()} года`
    return dateStr;
}

const fetchData = async () => {
    const response = await fetch("https://reqres.in/api/users")
    return response;
}
module.exports = { transformDate, fetchData };