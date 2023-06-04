"use client";

import {
  Badge,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { Column, TableProps } from "@/components/table/types";

const Table = ({
  idProperty,
  columns,
  data,
  scrollable = false,
}: TableProps) => {
  const renderColumn = (column: Column, item: any) => {
    if (!column.render) {
      return <Td>{item[column.id]}</Td>;
    }

    return <Td>{column.render(item)}</Td>;
  };

  return (
    <TableContainer
      maxH={scrollable ? "80vh" : "auto"}
      overflowY={scrollable ? "scroll" : "auto"}
    >
      <ChakraTable size="sm">
        <Thead position="sticky" top={0} bg="white">
          <Tr>
            {columns.map((column) => (
              <Th>{column.title}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item[idProperty]}>
              {columns.map((column) => renderColumn(column, item))}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
