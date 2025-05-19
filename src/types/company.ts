export interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

export interface CompanyMilestone {
  year: number;
  title: string;
  description: string;
}

export interface Company {
    name: string;
    tagline: string;
    founded: number;
    description: string;
    mission: string;
    vision: string;
    values: CompanyValue[];
    milestones: CompanyMilestone[];
    serviceArea: string[];
    teamSize: number;
    projectsCompleted: number;
    awards: string[];
  }
  
export const COMPANY: Company = {
    name: "Yardscapes",
    tagline: "Transforming Outdoor Spaces in Northern California",
    founded: 2015,
    description: "Yardscapes is a licensed landscaping contractor based in Willows, CA, offering a range of services including retaining walls, pergolas, decks, and chain link fences. With a commitment to quality and customer satisfaction, we transform outdoor spaces to meet our clients' needs.",
    mission: "To provide reliable and high-quality landscaping services that enhance the beauty and functionality of our clients' outdoor spaces.",
    vision: "To be recognized as a trusted landscaping contractor in Northern California, known for our craftsmanship and customer service.",
    values: [
      {
        title: "Quality",
        description: "Delivering high-quality workmanship in every project.",
        icon: "hammer"
      },
      {
        title: "Integrity",
        description: "Conducting business with honesty and transparency.",
        icon: "shield"
      },
      {
        title: "Customer Satisfaction",
        description: "Prioritizing our clients' needs and ensuring their satisfaction.",
        icon: "smile"
      }
    ],
    milestones: [
      {
        year: 2015,
        title: "Company Founded",
        description: "Yardscapes was established in Willows, CA, by Dean Milton Martin."
      },
      {
        year: 2023,
        title: "BBB File Opened",
        description: "Yardscapes' business profile was added to the Better Business Bureau."
      }
    ],
    serviceArea: [
      "Willows, CA",
      "Glenn County, CA",
      "Surrounding areas in Northern California"
    ],
    teamSize: 1,
    projectsCompleted: 100,
    awards: []
  };
  