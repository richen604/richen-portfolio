import { PageMain } from 'components/pages';
import PageHeader from 'components/pages/PageHeader';
import { TOutboundLinkText } from 'components/ThemedComponents';
import resume from 'images/Richard Henninger Resume.svg';
import React from 'react';
import {
  SAboutFooter,
  SAboutFooterText,
  SResume,
  SResumeContainer,
  SResumeHeaderContainer,
  SResumeHeaderH2,
} from './styles';

function Resume() {
  return (
    <>
      <PageHeader id="resume">
        <SResumeHeaderContainer>
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

        <SAboutFooter>
          <p>© {new Date().getFullYear()} Richard Henninger</p>

          <SAboutFooterText>Icons provided by </SAboutFooterText>
          <TOutboundLinkText
            target="_blank"
            eventLabel="outbound-icons8"
            to="https://icons8.com/"
          >
            icons8.com
          </TOutboundLinkText>
        </SAboutFooter>
      </PageMain>
    </>
  );
}

export default Resume;
