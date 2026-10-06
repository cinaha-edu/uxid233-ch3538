const zodiacs = [" Aries", " Taurus", " Gemini", " Cancer", " Leo", " Virgo", " Libra", " Scorpio", " Sagittarius", " Capricorn", " Aquarius", " Pisces"];

const zodiacProfiles = {
    Aries: {
        zodiacName: "Aries",
        start_month: 3,
        start_day: 21,
        end_month: 4,
        end_day: 19,
        dateRange: zodiacProfiles.Aries.start_month + "/" + zodiacProfiles.Aries.start_day + " - " + zodiacProfiles.Aries.end_month + "/" + zodiacProfiles.Aries.end_day
    }
};
console.log(zodiacProfiles.Aries.dateRange);
