import resumePdf from "@assets/piotrwrobel-cv.pdf";
import { Button } from "@components/shared";

type ResumeDownloadButtonProps = {
  label?: string;
};

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = resumePdf;
  link.download = "piotr-wrobel-resume.pdf";
  link.rel = "noreferrer";
  link.click();
};

export const ResumeDownloadButton = ({ label = "Download resume" }: ResumeDownloadButtonProps) => {
  return (
    <Button type="button" onClick={downloadResume}>
      {label}
    </Button>
  );
};
