"use client";

import { ModalType } from "@/shared/enums/modal-type.enum";
import ViewUser from "@/components/modals/users/view-user";
import ChangePassword from "@/components/modals/users/change-password";
import GrantAccess from "@/components/modals/users/grant-access";
import DeleteUser from "@/components/modals/users/delete-user";
import RequestInformation from "@/components/modals/candidates/request-information";
import DeleteProfile from "@/components/modals/candidates/delete-profile";

interface Props {
  modalType: ModalType;
  data: any;
}

const ModalFactory = ({ modalType, data }: Props) => {
  if (modalType === ModalType.ChangeUserPassword)
    return <ChangePassword data={data} />;

  if (modalType === ModalType.GrantAccess) return <GrantAccess data={data} />;

  if (modalType === ModalType.DeleteUser) return <DeleteUser data={data} />;

  if (modalType === ModalType.RequestInformation)
    return <RequestInformation data={data} />;

  if (modalType === ModalType.DeleteCandidateProfile)
    return <DeleteProfile data={data} />;
  return <div></div>;
};

export default ModalFactory;
