const surveys = [
    {
        id: 1,
        survey: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at auctor urna. Consequat semper viverra nam libero justo.",
        date:["2022/03/11", "2022/04/10"],
        percentage: [10, 40, 30],
        isOpen: false
    },
    {
        id: 2,
        survey: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at auctor urna. Consequat semper viverra nam libero justo.",
        date:["2022/03/12", "2022/04/10"],
        percentage: [20, 40, 30],
        isOpen: true
    },
    {
        id: 3,
        survey: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at auctor urna. Consequat semper viverra nam libero justo.",
        date:["2022/03/13", "2022/04/10"],
        percentage: [30, 40, 30],
        isOpen: true
    },
    {
        id: 4,
        survey: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at auctor urna. Consequat semper viverra nam libero justo.",
        date:["2022/03/14", "2022/04/10"],
        percentage: [40, 40, 30],
        isOpen: false
    },
    {
        id: 5,
        survey: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at auctor urna. Consequat semper viverra nam libero justo.",
        date:["2022/03/15", "2022/04/10"],
        percentage: [50, 40, 30],
        isOpen: false
    },
    {
        id: 6,
        survey: "6Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at auctor urna. Consequat semper viverra nam libero justo.",
        date:["2022/03/16", "2022/04/10"],
        percentage: [60, 40, 30],
        isOpen: true
    }
];

export function GetSurveys(surveysFilterModel){
    return surveys.filter(d => d.isOpen === surveysFilterModel)
}