import { EducationLevel } from "@/shared/enums/education-level.enum";

interface WorkExperience {
  company?: string;
  position?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

interface Value {
  value: string | number;
}
export interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  contacts: Value[];
  educationLevel: EducationLevel;
  workExperience: WorkExperience[];
  technicalKnowledge: Value[];
  cv: string;
}
