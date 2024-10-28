export type BlogPostType = {
  title: string;
  description: string;
  date: string;
  blogPostUrl: string;
  featured: boolean;
};

export type ProjectType = {
  title: string;
  imageSrc: string;
  startDate: string;
  endDate: string;
  projectUrl: string;
};

export type WorkExperienceType = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  descriptionItems: string[];
  skills: string[];
  companyUrl: string;
};

export type EducationType = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  schoolUrl: string;
};

export type SocialType = {
  name: string;
  url: string;
};
