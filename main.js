const signs = {
    Princess_Mononoke: {
        name: "Princess Mononoke", // Fearless, strong-headed
        start_month: "March",
        start_day: 21,
        end_month: "April",
        end_day: 19,
    },
    
    Totoro: {
        name: "My Neighbor Totoro", // elegant, homebody
        start_month: "April",
        start_day: 20,
        end_month: "May",
        end_day: 20,
    },

    Porco_Rosso: {
        name: "Porco Rosso", // flirty, talkative, extroverted
        start_month: "May",
        start_day: 21,
        end_month: "June",
        end_day: 20,
    },

    Ponyo: {
        name: "Ponyo", // The Best Month
        start_month: "June",
        start_day: 21,
        end_month: "July",
        end_day: 22,
    },

    Whisper_Heart: {
        name: "Whisper of the Heart", // warmth/creativity, slightly vain
        start_month: "July",
        start_day: 23,
        end_month: "August",
        end_day: 22,
    },

    Arrietty: {
        name: "The Secret World of Arrietty",
        start_month: "August",
        start_day: 23,
        end_month: "September",
        end_day: 22,
    },

    Kiki: {
        name: "Kiki's Delivery Service", // good aesthetics, conflict avoidant, prone to fantasy
        start_month: "September",
        start_day: 23,
        end_month: "October",
        end_day: 22,
    },

    Princess_Kaguya: {
        name: "Princess Kaguya",
        start_month: "October",
        start_day: 23,
        end_month: "November",
        end_day: 21,
    },

    Howl: {
        name: "Howl's Moving Castle",
        start_month: "November",
        start_day: 22,
        end_month: "December",
        end_day: 21,
    },

    Poppy: {
        name: "From Up on Poppy Hill",
        start_month: "December",
        start_day: 22,
        end_month: "January",
        end_day: 19,
    },

    Spirited: {
        name: "Spirited Away",
        start_month: "January",
        start_day: 20,
        end_month: "February",
        end_day: 18,
    },

    Heron: {
        name: "The Boy and the Heron",
        start_month: "February",
        start_day: 19,
        end_month: "March",
        end_day: 20,
    }

};

function isHowlMovingCastle(month, day) {
    return month == signs.Howl.start_month && day >= signs.Howl.start_day || month == signs.Howl.end_month && day <= signs.Howl.end_day;
}

const user = {
    birthday: ["March", 5] // March 5th
};

console.log(isHowlMovingCastle(user.birthday[0], user.birthday[1]));