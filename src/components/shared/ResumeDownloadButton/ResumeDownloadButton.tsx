import resumePdf from "@assets/piotrwrobel_cv.pdf";
import { Typography } from "@components/shared/Typography/Typography";

import * as Styled from "./ResumeDownloadButton.styles";

type ResumeDownloadButtonProps = {
  label?: string;
};

export const ResumeDownloadButton = ({ label = "Download resume" }: ResumeDownloadButtonProps) => {
  return (
    <Styled.Link href={resumePdf} download="piotr-wrobel-resume.pdf" aria-label="Download resume">
      <Typography.Buttons.Small color="inherit">{label}</Typography.Buttons.Small>
    </Styled.Link>
  );
};
