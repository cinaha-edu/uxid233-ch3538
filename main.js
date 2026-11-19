const movies = {
  Princess_Mononoke: {
    title: "Princess Mononoke", // Fearless, strong-headed
    zodiac: "Aries",
    startMonth: 3,
    startDay: 21,
    endStartMonthDay: 31,
    endMonth: 4,
    endDay: 19,
    text: "Fearless & Strong-headed",
    pic: "images/mononoke.jpg",
    audio: "audio/mononoke.mp3",
  },
  Totoro: {
    title: "My Neighbor Totoro", // elegant, homebody
    zodiac: "Taurus",
    startMonth: 4,
    endStartMonthDay: 30,
    startDay: 20,
    endMonth: 5,
    endDay: 20,
    text: "Homebody & Steady",
    pic: "images/totoros.jpg",
    audio: "audio/totoro.mp3",
  },
  Porco_Rosso: {
    title: "Porco Rosso", // flirty, talkative, extroverted
    zodiac: "Gemini",
    startMonth: 5,
    startDay: 21,
    endStartMonthDay: 31,
    endMonth: 6,
    endDay: 20,
    text: "Flirty & Lively",
    pic: "images/porco.jpg",
  },
  Ponyo: {
    title: "Ponyo on the Cliff by the Sea", // The Best Month
    zodiac: "Cancer",
    startMonth: 6,
    startDay: 21,
    endStartMonthDay: 30,
    endMonth: 7,
    endDay: 22,
    text: "Dependable & Loyal",
    pic: "images/ponyos.jpg",
  },
  Whisper_Heart: {
    title: "Whisper of the Heart", // warmth/creativity, slightly vain
    zodiac: "Leo",
    startMonth: 7,
    startDay: 23,
    endStartMonthDay: 31,
    endMonth: 8,
    endDay: 22,
    text: "Creative & Vain",
    pic: "images/whisper.jpg",
  },
  Arrietty: {
    title: "The Secret World of Arrietty",
    zodiac: "Virgo",
    startMonth: 8,
    endStartMonthDay: 31,
    startDay: 23,
    endMonth: 9,
    endDay: 22,
    text: "Extroverted & Indecisive",
    pic: "images/arrietyworld.jpg",
  },
  Kiki: {
    title: "Kiki's Delivery Service", // good aesthetics, conflict avoidant, prone to fantasy
    zodiac: "Libra",
    startMonth: 9,
    startDay: 23,
    endStartMonthDay: 30,
    endMonth: 10,
    endDay: 22,
    text: "Aesthetic & Daydreamer",
    pic: "images/kikiproj.jpg",
  },
  Princess_Kaguya: {
    title: "The Tale of Princess Kaguya",
    zodiac: "Scorpio",
    startMonth: 10,
    startDay: 23,
    endStartMonthDay: 31,
    endMonth: 11,
    endDay: 21,
    text: "Calculated & Cautious",
    pic: "images/kaguya.jpg",
  },
  Howl: {
    title: "Howl's Moving Castle",
    zodiac: "Sagittarius",
    startMonth: 11,
    startDay: 22,
    endStartMonthDay: 30,
    endMonth: 12,
    endDay: 21,
    text: "Loving & Disciplined",
    pic: "images/howls.jpg",
  },
  Poppy: {
    title: "From Up on Poppy Hill",
    zodiac: "Capricorn",
    startMonth: 12,
    startDay: 22,
    endStartMonthDay: 31,
    endMonth: 1,
    endDay: 19,
    text: "Mature & Driven",
    pic: "images/poppyhill.jpg",
  },
  Spirited: {
    title: "Spirited Away",
    zodiac: "Aquarius",
    startMonth: 1,
    startDay: 20,
    endStartMonthDay: 31,
    endMonth: 2,
    endDay: 18,
    text: "Esoteric & Independent",
    pic: "images/spiritedaway.jpg",
  },
  Heron: {
    title: "The Boy and the Heron",
    zodiac: "Pisces",
    startMonth: 2,
    startDay: 19,
    endStartMonthDay: 29,
    endMonth: 3,
    endDay: 20,
    text: "Romantic & Superstitious",
    pic: "images/boyandheron.jpg",
  },
};

const submitButton = document.querySelector("#getMovie");
const output = document.querySelector("#output");
const picOutput = document.querySelector("#signPicOutput");
const dateInput = document.querySelector("#birthday");
const zodiac_buttons = document.querySelector("#zodiac_buttons_container");
let currentAudio = null; // Google Search AI ("How to make my "currentAudio" variable work in the "stop_all_sounds" function)

function getMovieTitle(month, day) {
  for (const movie in movies) {
    const mov = movies[movie];
    const startMonthDay =
      month === mov.startMonth &&
      day >= mov.startDay &&
      day <= mov.endStartMonthDay;
    const endMonthDay = month === mov.endMonth && day <= mov.endDay;
    if (startMonthDay || endMonthDay) return mov;
  }
}

function stop_all_sounds() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

function create_Zodiac_Button() {
  for (const movie in movies) {
    const mov = movies[movie];
    const abc = document.createElement("button");
    abc.textContent = mov.zodiac;
    zodiac_buttons.appendChild(abc);
    abc.addEventListener("click", () => {
      const myParagraph = document.createElement("p");
      const myImage = document.createElement("img");
      myImage.src = mov.pic;
      myParagraph.textContent = `You're a ${mov.zodiac}. Your movie is ${mov.title}. You are ${mov.text}.`;
      output.replaceChildren(myParagraph, myImage);
      stop_all_sounds();
      if (mov.audio) {
        currentAudio = new Audio(mov.audio);
        currentAudio.play();
      }
    });
  }
}

submitButton.addEventListener("click", () => {
  if (dateInput.value === "") {
    // https://www.w3schools.com/tags/att_input_type_date.asp
    const error = document.createElement("p");
    error.textContent = "Error: Please enter a birthday.";
    output.replaceChildren(error); // https://www.w3schools.com/jsref/met_node_replacechild.asp
    picOutput.replaceChildren();
  } else {
    const selectedDate = new Date(dateInput.value);
    const [year, month, day] = dateInput.value.split("-").map(Number);
    const moviePull = getMovieTitle(month, day);
    const myParagraph = document.createElement("p");
    const myImage = document.createElement("img");
    myImage.src = moviePull.pic;
    myParagraph.textContent = `Your movie is ${moviePull.title}. You are ${moviePull.text}.`;
    output.replaceChildren(myParagraph, myImage);
    stop_all_sounds();

    if (moviePull.audio) {
      currentAudio = new Audio(moviePull.audio);
      currentAudio.play();
    }
  }
});

create_Zodiac_Button();
