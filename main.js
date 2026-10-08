const zodiacs = [" Aries", " Taurus", " Gemini", " Cancer", " Leo", " Virgo", " Libra", " Scorpio", " Sagittarius", " Capricorn", " Aquarius", " Pisces"];
let start_month = "";
let start_day = 0;
let end_month = "";
let end_day = 0;

const zodiacProfiles = {
    Aries: {
        zodiacName: "Aries",
        start_month: "March",
        start_day: 21,
        end_month: "April",
        end_day: 19,
    },
    
    Taurus: {
        zodiacName: "Taurus",
        start_month: "April",
        start_day: 20,
        end_month: "May",
        end_day: 20,
    },

    Gemini: {
        zodiacName: "Gemini",
        start_month: "May",
        start_day: 21,
        end_month: "June",
        end_day: 20,
    },

    Cancer: {
        zodiacName: "Cancer",
        start_month: "June",
        start_day: 21,
        end_month: "July",
        end_day: 22,
    },

    Leo: {
        zodiacName: "Leo",
        start_month: "July",
        start_day: 23,
        end_month: "August",
        end_day: 22,
    },

    Virgo: {
        zodiacName: "Virgo",
        start_month: "August",
        start_day: 23,
        end_month: "September",
        end_day: 22,
    },

    Libra: {
        zodiacName: "Libra",
        start_month: "September",
        start_day: 23,
        end_month: "October",
        end_day: 22,
    },

    Scorpio: {
        zodiacName: "Scorpio",
        start_month: "October",
        start_day: 23,
        end_month: "November",
        end_day: 21,
    },

    Sagittarius: {
        zodiacName: "Sagittarius",
        start_month: "November",
        start_day: 22,
        end_month: "December",
        end_day: 21,
    },

    Capricorn: {
        zodiacName: "Capricorn",
        start_month: "December",
        start_day: 22,
        end_month: "January",
        end_day: 19,
    },

    Aquarius: {
        zodiacName: "Aquarius",
        start_month: "January",
        start_day: 20,
        end_month: "February",
        end_day: 18,
    },

    Pisces: {
        zodiacName: "Pisces",
        start_month: "February",
        start_day: 19,
        end_month: "March",
        end_day: 20,
    }

};

const is_Aquarius = (month, day) => {
return month == zodiacProfiles.Aquarius.start_month && day >= zodiacProfiles.Aquarius.start_day || month == zodiacProfiles.Aquarius.end_month && day <= zodiacProfiles.Aquarius.end_day;
};

const user = {
    birthday: ["March", 5] // March 5th
};

console.log(is_Aquarius(user.birthday[0], user.birthday[1]));