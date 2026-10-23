const movies = {
    Princess_Mononoke: {
        title: "Princess Mononoke", // Fearless, strong-headed
        startMonth: 3,
        startDay: 21,
        endStartMonthDay: 31,
        endMonth: 4,
        endDay: 19,
        text: "Fearless & Strong-headed"
    },
    Totoro: {
        title: "My Neighbor Totoro", // elegant, homebody
        startMonth: 4,
        endStartMonthDay: 30,
        startday: 20,
        endMonth: 5,
        endDay: 20,
        text: "Homebody & Steady"
    },
    Porco_Rosso: {
        title: "Porco Rosso", // flirty, talkative, extroverted
        startMonth: 5,
        startDay: 21,
        endStartMonthDay: 31,
        endMonth: 6,
        endDay: 20,
        text: "Flirty & Lively"
    },
    Ponyo: {
        title: "Ponyo", // The Best Month
        startMonth: 6,
        startDay: 21,
        endStartMonthDay: 30,
        endMonth: 7,
        endDay: 22,
        text: "Dependable & Loyal"
    },
    Whisper_Heart: {
        title: "Whisper of the Heart", // warmth/creativity, slightly vain
        startMonth: 7,
        startDay: 23,
        endStartMonthDay: 31,
        endMonth: 8,
        endDay: 22,
        text: "Creative & Vain"
    },
    Arrietty: {
        title: "The Secret World of Arrietty",
        startMonth: 8,
        endStartMonthDay: 31,
        startDay: 23,
        endMonth: 9,
        endDay: 22,
        text: "Extroverted & Indecisive"
    },
    Kiki: {
        title: "Kiki's Delivery Service", // good aesthetics, conflict avoidant, prone to fantasy
        startMonth: 9,
        startDay: 23,
        endStartMonthDay: 30,
        endMonth: 10,
        endDay: 22,
        text: "Aesthetic & Daydreamer"
    },
    Princess_Kaguya: {
        title: "Princess Kaguya",
        startMonth: 10,
        startDay: 23,
        endStartMonthDay: 31,
        endMonth: 11,
        endDay: 21,
        text: "Calculated & Cautious"
    },
    Howl: {
        title: "Howl's Moving Castle",
        startMonth: 11,
        startDay: 22,
        
        endMonth: 12,
        endDay: 21,
        text: "Loving & Disciplined"
    },
    Poppy: {
        title: "From Up on Poppy Hill",
        startMonth: 12,
        startDay: 22,
        endMonth: 1,
        endDay: 19,
        text: "Mature & Driven"        
    },
    Spirited: {
        title: "Spirited Away",
        startMonth: 1,
        startDay: 20,
        endStartMonthDay: 31,
        endMonth: 2,
        endDay: 18,
        text: "Esoteric & Independent"        
    },
    Heron: {
        title: "The Boy and the Heron",
        startMonth: 2,
        startDay: 19,
        endStartMonthDay: 29,
        endMonth: 3,
        endDay: 20,
        text: "Romantic & Superstitious"
    }
};

function getMovieTitle(month, day) {
    for (const movie in movies) {
        const mov = movies[movie];
        const startMonthDay = (month == mov.startMonth && day >= mov.startDay && day <= mov.endStartMonthDay);
        const endMonthDay = (month == mov.endMonth && day <= mov.endDay);
        const wraps = mov.startDay > mov.endDay;
        if (startMonthDay || endMonthDay)
            return(mov.title);
        }
    return("Impossible birthdate. Please input a proper birthdate.");
}

console.log(getMovieTitle(2, 19)); 
console.log(getMovieTitle(3, 1)); 
console.log(getMovieTitle(42, 2)); 
console.log(getMovieTitle(1, 1)); 
console.log(getMovieTitle(12, 32)); 

