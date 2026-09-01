import styled from "styled-components";

export const Content = styled.article`
  width: 100%;
  max-width: 920px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.xxxxl};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.body};
  line-height: 1.7;

  code {
    font-family: monospace;
  }
`;

export const Updated = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.h4};
  line-height: 1.3;
`;

export const Paragraph = styled.p`
  max-width: 80ch;
`;

export const List = styled.ul`
  max-width: 80ch;
  padding-left: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.orange};
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: ${({ theme }) => theme.spacing.lg};
    border: 1px solid rgba(255, 255, 255, 0.12);
    vertical-align: top;
  }

  th {
    color: ${({ theme }) => theme.colors.orange};
    font-family: ${({ theme }) => theme.font.bold};
  }
`;
