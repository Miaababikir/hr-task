import { Column } from "@/components/table/types";
import { User } from "@/shared/interfaces/user.interface";
import {
  Badge,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { formatDatetime } from "@/shared/helpers/helpers";
import {
  FiEdit,
  FiEye,
  FiLock,
  FiMoreHorizontal,
  FiTrash,
  FiUserCheck,
} from "react-icons/fi";
import ToggleModal from "@/components/modals/toggle-modal";
import { ModalType } from "@/shared/enums/modal-type.enum";

export const columns: Column[] = [
  {
    id: "fullName",
    title: "Full name",
    render: (item: User) => <>{`${item.firstName} ${item.lastName}`}</>,
  },
  {
    id: "email",
    title: "Email",
  },
  {
    id: "role",
    title: "Role",
  },
  {
    id: "status",
    title: "Status",
    render: (item: User) => (
      <Badge colorScheme={item.isActive ? "green" : "red"}>Active</Badge>
    ),
  },
  {
    id: "createdAt",
    title: "Created At",
    render: (item: User) => <>{formatDatetime(item.createdAt)}</>,
  },
  {
    id: "actions",
    title: "",
    render: (user: User) => (
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FiMoreHorizontal />}
          variant="transparent"
        />
        <MenuList>
          <ToggleModal
            as={MenuItem}
            icon={<FiLock />}
            modalType={ModalType.ChangeUserPassword}
            payload={user}
          >
            Change password
          </ToggleModal>
          <ToggleModal
            as={MenuItem}
            icon={<FiUserCheck />}
            modalType={ModalType.GrantAccess}
            payload={user}
          >
            Grant access
          </ToggleModal>
          <ToggleModal
            as={MenuItem}
            icon={<FiTrash />}
            modalType={ModalType.DeleteUser}
            payload={user}
          >
            Delete
          </ToggleModal>
        </MenuList>
      </Menu>
    ),
  },
];
