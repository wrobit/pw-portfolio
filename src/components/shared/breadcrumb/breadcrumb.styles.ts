import styled from "styled-components";

import { Link } from "@components/shared/Link/Link";
import { Typography } from "@components/shared/Typography/Typography";

const BreadcrumbNav = styled.nav`
  width: 100%;
`;

const BreadcrumbList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;

const BreadcrumbItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const BreadcrumbLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;

const BreadcrumbText = styled(Typography.Headers.H6).attrs({ as: "span" })<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.white : theme.colors.gray)};
  font-family: ${({ theme }) => theme.font.regular};
`;

const BreadcrumbSeparator = styled(Typography.Headers.H6).attrs({ as: "span" })`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.font.regular};
`;

export {
  BreadcrumbNav,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbText,
  BreadcrumbSeparator,
};
