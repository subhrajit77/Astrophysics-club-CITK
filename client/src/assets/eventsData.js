import DebateCompetition from "./Events/Debate-Competition.jpg";
import Chandrayaan3 from "./Events/Chandrayaan3-Landing.png";
import EssayCompetition from "./Events/Essay-Competition-2023.png";
import AstrophysicsTalk from "./Events/Astrophysics-talk.png";
import AdvancesinAstrophysics from "./Events/Advances-in-Astrophysics.png";
import SpaceOTalk from "./Events/Space-O-Talk.png";

export const eventsData = [
    {
        id: 1,
        image: DebateCompetition,
        name: "DEBATE COMPETITION",
        description:
            "Witness the Clash of Intellect! 🚀 Chandrayaan Utsav ignites  a thrilling debate, where students battle it out over India's lunar triumph. Relive the passion, the arguments, and the sheer brilliance. See how our students are reaching for the stars",

        location: "BKB Seminar Hall",
        date: "15 Sept 2023",
    },
    {
        id: 2,
        image: Chandrayaan3,
        name: "CHANDRAYAAN LANDING",
        description:
            "Join us for a live viewing of the historic Chandrayaan-3 landing! Witness this momentous occasion as we broadcast the live feed, celebrating India's achievement in space exploration. Be part of history as we watch the culmination of this incredible mission together.",

        contactInfo: ["Vaishnavi Varkur : 8828090518"],
        location: "BKB Seminar HAll",
        date: "23 Aug 2023",
    },

    {
        id: 3,
        image: EssayCompetition,
        name: "ESSAY COMPETITION",
        description:
            "Express your thoughts and insights on the profound impact of the Chandrayaan mission! Participate in our essay competition and explore the scientific, technological, and societal significance of India's lunar achievement. Share your unique perspective and contribute to the celebration of this historic event.",
        rules: [
            "Essays must be submitted by [Date/Time].",
            "Essays should focus on the impact and significance of the Chandrayaan mission.",
            "Word limit: [Specify word limit].",
            "Essays will be judged on content, clarity, originality, and adherence to the theme.",
            "Submission format: [Specify format, e.g., PDF, DOC].",
            "Plagiarism will result in disqualification.",
        ],

        prizes: ["EXICITING PRIZES AND REWARDS"],
        team: "Individual",
        fees: "Free",
        contactInfo: [
            "Vedika Sangle : 9578907935",
            "Utkarsha Kesarkar : 7887440601",
        ],
        location: "BKB Seminar Hall",
        date: "20th FEB",
        note: [""],
    },

    {
        id: 4,
        image: AstrophysicsTalk,
        name: "ASTROPHYSICS TALK",
        description:
            "Join us for an enlightening Astrophysics Talk as part of our Chandrayaan Utsav! Explore the fascinating interplay between the Sun and Earth through the lens of solar wind plasma. Delve into the science behind coronal mass ejections, geomagnetic storms, and their impact on our planet. Gain insights from expert speakers and unravel the mysteries of our Sun-Earth connection.",

        contactInfo: [
            "Vedika Sangle: 9578907935",
            "Utkarsha Kesarkar: 7887440601",
        ],
        location: "BKB Seminar Hall",
        date: "11th Nov 2022",
        note: ["Seating is limited. Please arrive early."],
    },
    {
        id: 5,
        image: AdvancesinAstrophysics,
        name: "ADVANCES IN ASTROPHYSICS",
        description:
            "Explore the cutting edge of astrophysical research at our 'Advances in Astrophysics' symposium. Delve into the latest discoveries and theories shaping our understanding of the universe. Featuring expert speakers, this event will cover diverse topics from exoplanet exploration to the evolution of galaxies and the latest findings in solar physics. Join us for an engaging exploration of the cosmos.",

        contactInfo: [
            "Vedika Sangle: 9578907935",
            "Utkarsha Kesarkar: 7887440601",
        ],
        location: "BKB Seminar Hall",
        date: "14th Aug 2020",
        note: ["Seating is limited. Please arrive early."],
    },
    {
        id: 6,
        image: SpaceOTalk,
        name: "Space O Talk",
        description:
            "Join us for 'Space O Talk,' a dynamic series of conversations exploring the latest advancements and thought-provoking topics in space exploration and related fields. Engage with experts as they discuss everything from the future of lunar missions and deep space travel to the search for extraterrestrial life and the societal impact of space technology. Be part of an interactive dialogue that pushes the boundaries of our cosmic understanding",

        contactInfo: [
            "Vedika Sangle: 9578907935",
            "Utkarsha Kesarkar: 7887440601",
        ],
        location: "BKB Seminar Hall",
        date: "14th NOV 2019",
        note: ["Seating is limited. Please arrive early."],
    },
];
