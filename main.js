const zodiacs = [" Aries", " Taurus", " Gemini", " Cancer", " Leo", " Virgo", " Libra", " Scorpio", " Sagittarius", " Capricorn", " Aquarius", " Pisces"];
const zodiacProfiles = {
    Aries: {
        zodiacName: "Aries",
        start_month: 3,
        start_day: 21,
        end_month: 4,
        end_day: 19,
        dateRange: start_month + "/" + start_day + " - " + end_month + "/" + end_day
    },
    Taurus: {
        zodiacName: "Taurus",
        start_month: 4,
        start_day: 20,
        end_month: 5,
        end_day: 20,
        dateRange: start_month + "/" + start_day + " - " + end_month + "/" + end_day
    },
    Gemini: {
        zodiacName: "Gemini",
        start_month: 5,
        start_day: 21,
        end_month: 6,
        end_day: 20,
        dateRange: start_month + "/" + start_day + " - " + end_month + "/" + end_day
    },
    Cancer: {
        zodiacName: "Cancer",
        start_month: 6,
        start_day: 21,
        end_month: 7,
        end_day: 22,
        dateRange: start_month + "/" + start_day + " - " + end_month + "/" + end_day
    },
    Leo: {
        zodiacName: "Leo",
        start_month: 7,
        start_day: 23,
        end_month: 8,
        end_day: 22,
        dateRange: start_month + "/" + start_day + " - " + end_month + "/" + end_day
    },
    Virgo: {
        zodiacName: "Virgo",
        start_month: 8,
        start_day: 23,
        end_month: 9,
        end_day: 22,
        dateRange: start_month + "/" + start_day + " - " + end_month + "/" + end_day
    },
    Libra: {
        zodiacName: "Libra",
        start_month: 9,
        start_day: 23,
        end_month: 10,
        end_day: 22,
        dateRange: start_month + "/" + start_day + " - " + end_month + "/" + end_day
    },
    Scorpio: {
        zodiacName: "Scorpio",
        start_month: 10,
        start_day: 23,
        end_month: 11,
        end_day: 21,
        dateRange: start_month + "/" + start_day + " - " + end_month + "/" + end_day
    },
    Sagittarius: {
        zodiacName: "Sagittarius",
        start_month: 11,
        start_day: 22,
        end_month: 12,
        end_day: 21,
        dateRange: start_day + "/" + start_month + " - " + end_day + "/" + end_month
    },
    Capricorn: {
        zodiacName: "Capricorn",
        start_month: 12,
        start_day: 22,
        end_month: 1,
        end_day: 19,
        dateRange: start_day + "/" + start_month + " - " + end_day + "/" + end_month
    },
    Aquarius: {
        zodiacName: "Aquarius",
        start_month: 1,
        start_day: 20,
        end_month: 2,
        end_day: 18,
        dateRange: start_day + "/" + start_month + " - " + end_day + "/" + end_month
    },
    Pisces: {
        zodiacName: "Pisces",
        start_month: 2,
        start_day: 19,
        end_month: 3,
        end_day: 20,
        dateRange: start_day + "/" + start_month + " - " + end_day + "/" + end_month
    }
};
console.log(zodiacProfiles.Capricorn);
