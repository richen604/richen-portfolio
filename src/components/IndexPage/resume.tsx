import React from 'react';
import PageHeader from 'components/pages/PageHeader';
import { PageMain } from 'components/pages';
import resume from 'images/Richard Henninger Resume.svg';
import { TOutboundLinkText } from 'components/ThemedComponents';
import FadeInWhenVisable from 'components/FadeInWhenVisable';
import {
  SResumeHeaderContainer,
  SResumeHeaderH2,
  SResumeContainer,
  SResume,
  SAboutFooter,
  SAboutFooterText,
} from './styles';

function Resume() {
  return (
    <>
      <PageHeader id="resume">
        <FadeInWhenVisable>
          <SResumeHeaderContainer>
            <SResumeHeaderH2 variant="h2">Resume</SResumeHeaderH2>
            {/*           <SPrimaryButton
            href="../images/Richard Henninger Resume.pdf"
            download
          >
            Download PDF Version
          </SPrimaryButton> */}
          </SResumeHeaderContainer>
        </FadeInWhenVisable>
      </PageHeader>
      <PageMain>
        <FadeInWhenVisable>
          <SResumeContainer>
            <SResume src={resume} alt="Richard Henninger Resume" />
          </SResumeContainer>
        </FadeInWhenVisable>
        <SAboutFooter>
          <SAboutFooterText>Icons provided by </SAboutFooterText>
          <TOutboundLinkText
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
