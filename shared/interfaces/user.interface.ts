import { Profile } from "@/shared/interfaces/profile.interface";
import { UserRole } from "@/shared/enums/user-role.enum";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  isActive: boolean;
  profile?: Profile;
  createdAt: Date;
  updatedAt: Date;
}
