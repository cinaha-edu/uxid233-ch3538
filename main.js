const zodiacs = [" Aries", " Taurus", " Gemini", " Cancer", " Leo", " Virgo", " Libra", " Scorpio", " Sagittarius", " Capricorn", " Aquarius", " Pisces"];
const zodiacProfiles = {
    Aries: {
        zodiacName: "Aries",
        start_month: 3,
        start_day: 21,
        end_month: 4,
        end_day: 19,
        dateRange: Aries.start_month + "/" + Aries.start_day + " - " + Aries.end_month + "/" + Aries.end_day
    },
    Taurus: {
        zodiacName: "Taurus",
        start_month: 4,
        start_day: 20,
        end_month: 5,
        end_day: 20,
        dateRange: Taurus.start_month + "/" + Taurus.start_day + " - " + Taurus.end_month + "/" + Taurus.end_day
    },
    Gemini: {
        zodiacName: "Gemini",
        start_month: 5,
        start_day: 21,
        end_month: 6,
        end_day: 20,
        dateRange: Gemini.start_month + "/" + Gemini.start_day + " - " + Gemini.end_month + "/" + Gemini.end_day
    },
    Cancer: {
        zodiacName: "Cancer",
        start_month: 6,
        start_day: 21,
        end_month: 7,
        end_day: 22,
        dateRange: Cancer.start_month + "/" + Cancer.start_day + " - " + Cancer.end_month + "/" + Cancer.end_day
    },
    Leo: {
        zodiacName: "Leo",
        start_month: 7,
        start_day: 23,
        end_month: 8,
        end_day: 22,
        dateRange: Leo.start_month + "/" + Leo.start_day + " - " + Leo.end_month + "/" + Leo.end_day
    },
    Virgo: {
        zodiacName: "Virgo",
        start_month: 8,
        start_day: 23,
        end_month: 9,
        end_day: 22,
        dateRange: Virgo.start_month + "/" + Virgo.start_day + " - " + Virgo.end_month + "/" + Virgo.end_day
    },
    Libra: {
        zodiacName: "Libra",
        start_month: 9,
        start_day: 23,
        end_month: 10,
        end_day: 22,
        dateRange: Libra.start_month + "/" + Libra.start_day + " - " + Libra.end_month + "/" + Libra.end_day
    },
    Scorpio: {
        zodiacName: "Scorpio",
        start_month: 10,
        start_day: 23,
        end_month: 11,
        end_day: 21,
        dateRange: Scorpio.start_month + "/" + Scorpio.start_day + " - " + Scorpio.end_month + "/" + Scorpio.end_day
    },
    Sagittarius: {
        zodiacName: "Sagittarius",
        start_month: 11,
        start_day: 22,
        end_month: 12,
        end_day: 21,
        dateRange: Sagittarius.start_month + "/" + Sagittarius.start_day + " - " + Sagittarius.end_month + "/" + Sagittarius.end_day
    },
    Capricorn: {
        zodiacName: "Capricorn",
        start_month: 12,
        start_day: 22,
        end_month: 1,
        end_day: 19,
        dateRange: Capricorn.start_month + "/" + Capricorn.start_day + " - " + Capricorn.end_month + "/" + Capricorn.end_day
    },
    Aquarius: {
        zodiacName: "Aquarius",
        start_month: 1,
        start_day: 20,
        end_month: 2,
        end_day: 18,
        dateRange: Aquarius.start_month + "/" + Aquarius.start_day + " - " + Aquarius.end_month + "/" + Aquarius.end_day
    },
    Pisces: {
        zodiacName: "Pisces",
        start_month: 2,
        start_day: 19,
        end_month: 3,
        end_day: 20,
        dateRange: Pisces.start_month + "/" + Pisces.start_day + " - " + Pisces.end_month + "/" + Pisces.end_day
    }
};
console.log(zodiacProfiles.Aries);
