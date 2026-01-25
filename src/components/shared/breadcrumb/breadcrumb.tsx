import { useNavigate } from "react-router-dom";

import * as Styled from "./breadcrumb.styles";
import { BreadcrumbProps } from "./breadcrumb.types";

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const navigate = useNavigate();

  return (
    <Styled.BreadcrumbNav aria-label="Breadcrumb">
      <Styled.BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <Styled.BreadcrumbItem key={`${item.label}-${index}`}>
              {item.href && !isLast ? (
                <Styled.BreadcrumbLink onClick={() => item?.href && navigate(item.href)}>
                  <Styled.BreadcrumbText>{item.label}</Styled.BreadcrumbText>
                </Styled.BreadcrumbLink>
              ) : (
                <Styled.BreadcrumbText $isActive>{item.label}</Styled.BreadcrumbText>
              )}
              {!isLast && <Styled.BreadcrumbSeparator>/</Styled.BreadcrumbSeparator>}
            </Styled.BreadcrumbItem>
          );
        })}
      </Styled.BreadcrumbList>
    </Styled.BreadcrumbNav>
  );
};
