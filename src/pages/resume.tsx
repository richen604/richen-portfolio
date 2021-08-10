import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import Image from 'next/image';
import styled from 'styled-components';
import SEO from '../components/Seo';
import PageHeader from '../components/Page/PageHeader';
import { PageMain } from '../components/Page';
import { TTextPrimary } from '../components/ThemedComponents';
import resume from '../images/Richard Henninger Resume.svg';

const SResumeHeaderContainer = styled(MDBContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SResumeHeaderH2 = styled(TTextPrimary)``;

const SResumeContainer = styled.div`
  object-fit: contain;
  margin: 50px 100px;
  min-width: 300px;
  max-width: 1000px;
  margin-bottom: 200px;
`;

const SResume = styled(Image)``;

function Resume() {
  return (
    <>
      <SEO title="Resume" />
      <PageHeader>
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
      </PageMain>
    </>
  );
}

export default Resume;
