const signs = [
    {
        name: "Aries",
        start_month: "March",
        start_day: 21,
        end_month: "April",
        end_day: 19,
    },
    
    {
        name: "Taurus",
        start_month: "April",
        start_day: 20,
        end_month: "May",
        end_day: 20,
    },

    {
        name: "Gemini",
        start_month: "May",
        start_day: 21,
        end_month: "June",
        end_day: 20,
    },

    {
        name: "Cancer",
        start_month: "June",
        start_day: 21,
        end_month: "July",
        end_day: 22,
    },

    {
        name: "Leo",
        start_month: "July",
        start_day: 23,
        end_month: "August",
        end_day: 22,
    },

    {
        name: "Virgo",
        start_month: "August",
        start_day: 23,
        end_month: "September",
        end_day: 22,
    },

    {
        name: "Libra",
        start_month: "September",
        start_day: 23,
        end_month: "October",
        end_day: 22,
    },

    {
        name: "Scorpio",
        start_month: "October",
        start_day: 23,
        end_month: "November",
        end_day: 21,
    },

    {
        name: "Sagittarius",
        start_month: "November",
        start_day: 22,
        end_month: "December",
        end_day: 21,
    },

    {
        name: "Capricorn",
        start_month: "December",
        start_day: 22,
        end_month: "January",
        end_day: 19,
    },

    {
        name: "Aquarius",
        start_month: "January",
        start_day: 20,
        end_month: "February",
        end_day: 18,
    },

    {
        name: "Pisces",
        start_month: "February",
        start_day: 19,
        end_month: "March",
        end_day: 20,
    }

];

function is_Aquarius(month, day) {
    return month == signs["Pisces"].start_month && day >= signs["Pisces"].start_day || month == signs["Pisces"].end_month && day <= signs["Pisces"].end_day;
}

const user = {
    birthday: ["March", 5] // March 5th
};

console.log(is_Aquarius(user.birthday[0], user.birthday[1]));