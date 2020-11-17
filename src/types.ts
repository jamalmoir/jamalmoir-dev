export interface Project {
    title: string;
    description: string;
    imageURI: string;
	liveURL?: string;
	gitHubURL?: string;
    technologies: string[];
}

export interface Experience {
    company: string;
    jobTitle: string;
    website: string;
    description: string;
    responsibilities: string[];
    skills: string[];
}