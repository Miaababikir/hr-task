import { EducationLevel } from "@/shared/enums/education-level.enum";
import { WorkExperience } from "@/shared/interfaces/work-experience.interface";

export interface Profile {
  contacts?: number[];
  address?: string;
  educationLevel?: EducationLevel;
  workExperience?: WorkExperience[];
  technicalKnowledge: string[];
  cv: string;
}
