const signs = {
    Aries: {
        name: "Aries",
        start_month: "March",
        start_day: 21,
        end_month: "April",
        end_day: 19,
    },
    
    Taurus: {
        name: "Taurus",
        start_month: "April",
        start_day: 20,
        end_month: "May",
        end_day: 20,
    },

    Gemini: {
        name: "Gemini",
        start_month: "May",
        start_day: 21,
        end_month: "June",
        end_day: 20,
    },

    Cancer: {
        name: "Cancer",
        start_month: "June",
        start_day: 21,
        end_month: "July",
        end_day: 22,
    },

    Leo: {
        name: "Leo",
        start_month: "July",
        start_day: 23,
        end_month: "August",
        end_day: 22,
    },

    Virgo: {
        name: "Virgo",
        start_month: "August",
        start_day: 23,
        end_month: "September",
        end_day: 22,
    },

    Libra: {
        name: "Libra",
        start_month: "September",
        start_day: 23,
        end_month: "October",
        end_day: 22,
    },

    Scorpio: {
        name: "Scorpio",
        start_month: "October",
        start_day: 23,
        end_month: "November",
        end_day: 21,
    },

    Sagittarius: {
        name: "Sagittarius",
        start_month: "November",
        start_day: 22,
        end_month: "December",
        end_day: 21,
    },

    Capricorn: {
        name: "Capricorn",
        start_month: "December",
        start_day: 22,
        end_month: "January",
        end_day: 19,
    },

    Aquarius: {
        name: "Aquarius",
        start_month: "January",
        start_day: 20,
        end_month: "February",
        end_day: 18,
    },

    Pisces: {
        name: "Pisces",
        start_month: "February",
        start_day: 19,
        end_month: "March",
        end_day: 20,
    }

};

function isAquarius(month, day) {
    return month == signs.Aquarius.start_month && day >= signs.Aquarius.start_day || month == signs.Aquarius.end_month && day <= signs.Aquarius.end_day;
}

const user = {
    birthday: ["March", 5] // March 5th
};

console.log(isAquarius(user.birthday[0], user.birthday[1]));