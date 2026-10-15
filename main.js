const movies = {
    Princess_Mononoke: {
        name: "Princess Mononoke", // Fearless, strong-headed
        start_month: "March",
        start_day: 21,
        end_month: "April",
        end_day: 19,
        sound: audio/princess_mononoke.mp3,
        image: image/princess_mononoke.jpg,
        text: "Fearless & Strong-headed"

    },
    
    Totoro: {
        name: "My Neighbor Totoro", // elegant, homebody
        start_month: "April",
        start_day: 20,
        end_month: "May",
        end_day: 20,
        sound: audio/totoro.mp3,
        image: image/totoro.jpg,
        text: "Homebody & Steady"
    },

    Porco_Rosso: {
        name: "Porco Rosso", // flirty, talkative, extroverted
        start_month: "May",
        start_day: 21,
        end_month: "June",
        end_day: 20,
        sound: audio/proco_rosso.mp3,
        image: image/proco_rosso.jpg,
        text: "Flirty & Lively"

    },

    Ponyo: {
        name: "Ponyo", // The Best Month
        start_month: "June",
        start_day: 21,
        end_month: "July",
        end_day: 22,
        sound: audio/ponyo.mp3,
        image: image/ponyo.jpg,
        text: "Dependable & Loyal"
    },

    Whisper_Heart: {
        name: "Whisper of the Heart", // warmth/creativity, slightly vain
        start_month: "July",
        start_day: 23,
        end_month: "August",
        end_day: 22,
        sound: audio/whisper_heart.mp3,
        image: image/whisper_heart.jpg,
        text: "Creative & Vain"
    },

    Arrietty: {
        name: "The Secret World of Arrietty",
        start_month: "August",
        start_day: 23,
        end_month: "September",
        end_day: 22,
        sound: audio/arrietty.mp3,
        image: image/arrietty.jpg,
        text: "Extroverted & Indecisive"
    },
    Kiki: {
        name: "Kiki's Delivery Service", // good aesthetics, conflict avoidant, prone to fantasy
        start_month: "September",
        start_day: 23,
        end_month: "October",
        end_day: 22,
        sound: audio/kiki.mp3,
        image: image/kiki.jpg,
        text: "Aesthetic & Daydreamer"
    },

    Princess_Kaguya: {
        name: "Princess Kaguya",
        start_month: "October",
        start_day: 23,
        end_month: "November",
        end_day: 21,
        sound: audio/princess_kaguya.mp3,
        image: image/princess_kaguya.jpg,
        text: "Calculated & Cautious"
    },

    Howl: {
        name: "Howl's Moving Castle",
        start_month: "November",
        start_day: 22,
        end_month: "December",
        end_day: 21,
        sound: audio/howl.mp3,
        image: image/howl.jpg,
        text: "Loving & Disciplined"
    },

    Poppy: {
        name: "From Up on Poppy Hill",
        start_month: "December",
        start_day: 22,
        end_month: "January",
        end_day: 19,
        sound: audio/poppy.mp3,
        image: image/poppy.jpg,
        text: "Mature & Driven"        
    },

    Spirited: {
        name: "Spirited Away",
        start_month: "January",
        start_day: 20,
        end_month: "February",
        end_day: 18,
        sound: audio/spirited.mp3,
        image: image/spirited.jpg,
        text: "Esoteric & Independent"        
    },

    Heron: {
        name: "The Boy and the Heron",
        start_month: "February",
        start_day: 19,
        end_month: "March",
        end_day: 20,
        sound: audio/heron.mp3,
        image: image/heron.jpg,
        text: "Romantic & Superstitious"
    }

};

function grabBirthday() {
    console.log("grabBirthday: grabs birthday from input")
}

function movieCheck() {
    console.log("movieCheck: checks which movie you are depending on birthday")
}

function movieDisplay() {
    console.log("movieDisplay: display the movie based on your birthday")
}

function playSound() {
    console.log("playSound: plays the selected audio clip");
}

function imageDisplay(){
    console.log("imageDisplay: displays image of movie")
}
