import { ModalType } from "@/shared/enums/modal-type.enum";

export const ModalTitles = {
  // User
  [ModalType.ChangeUserPassword]: "Change Password",
  [ModalType.GrantAccess]: "Grant Access",

  // Candidates
  [ModalType.RequestInformation]: "Request more information",
  [ModalType.ExportCandidates]: "Export candidates data",
};
