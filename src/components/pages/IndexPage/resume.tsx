import React from 'react';
import PageHeader from 'components/pages/PageHeader';
import { PageMain } from 'components/pages';
import resume from 'images/Richard Henninger Resume.svg';
import {
  SResumeHeaderContainer,
  SResumeHeaderH2,
  SResumeContainer,
  SResume,
} from './styles';

function Resume() {
  return (
    <>
      <PageHeader>
        <SResumeHeaderContainer id="resume">
          <SResumeHeaderH2 variant="h2">Resume</SResumeHeaderH2>
          {/*           <SPrimaryButton
            href="../images/Richard Henninger Resume.pdf"
            download
          >
            Download PDF Version
          </SPrimaryButton> */}
        </SResumeHeaderContainer>
      </PageHeader>
      <PageMain>
        <SResumeContainer>
          <SResume src={resume} alt="Richard Henninger Resume" />
        </SResumeContainer>
      </PageMain>
    </>
  );
}

export default Resume;
