import { Column } from "@/components/table/types";
import { User } from "@/shared/interfaces/user.interface";
import {
  Link as ChakraLink,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { formatDatetime } from "@/shared/helpers/helpers";
import {
  FiEye,
  FiFileText,
  FiLock,
  FiMoreHorizontal,
  FiTrash,
  FiUserCheck,
} from "react-icons/fi";
import ToggleModal from "@/components/modals/toggle-modal";
import { ModalType } from "@/shared/enums/modal-type.enum";
import { DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Link from "next/link";

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
    id: "contact",
    title: "Contact",
    render: (item: User) => (
      <>{item.profile?.contacts ? item.profile?.contacts[0] : ""}</>
    ),
  },
  {
    id: "educationLevel",
    title: "Education Level",
    render: (item: User) => <>{item.profile?.educationLevel}</>,
  },
  {
    id: "cv",
    title: "CV",
    render: (item: User) => (
      <ChakraLink href={item.profile?.cv} isExternal color="purple.400">
        <DownloadIcon />
      </ChakraLink>
    ),
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
          <MenuItem
            as={Link}
            icon={<FiEye />}
            href={`/dashboard/candidates/${user.id}`}
          >
            View
          </MenuItem>

          <ToggleModal
            as={MenuItem}
            icon={<FiFileText />}
            modalType={ModalType.RequestInformation}
            payload={user}
          >
            Request more information
          </ToggleModal>
        </MenuList>
      </Menu>
    ),
  },
];
