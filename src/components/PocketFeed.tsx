import React from 'react';
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';
import styled from 'styled-components';
import usePocketFeed from '../hooks/usePocketFeed';
import { instanceOfArticles } from '../utils/types';
import { timeConverter } from '../utils/functions';

// TODO Create a maxChar prop for primary and secondary

// TODO Handle colors via props for later theming

// TODO create minimalism component with MDB and Flicking vertical display

// TODO create onclick for toggling between minimalism and not

const SListBorder = styled.div`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #424242;
  padding: 8px 0;
  margin: 10px;
`;

const SList = styled(MDBListGroup)`
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 600px;
  border-radius: 8px;
  background-color: #424242;
  overflow-y: scroll;
`;

const SListItem = styled(MDBListGroupItem)`
  width: 100%;
  min-height: 150px;
  max-height: 220px;
  display: flex;
  background-color: #424242;
  color: #424242;
  margin-right: 10px;
  border: none;
  border-radius: 10px !important;
  cursor: pointer;
  &:hover {
    background-color: #313131;
  }
`;

const SListIcon = styled.img`
  margin-right: 15px;
  max-width: 100px;
  max-height: 100px;
  min-width: 100px;
  min-height: 100px;
  object-fit: cover;
  color: white;
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    height: 50px;
    width: 50px;
    background-image: url('./richen-portfolio-logo-512.png');
  }
`;

const SListRightContainer = styled.div`
  width: 100%;
  margin-right: 10px;
  padding: 0;
  background-color: transparent;
  color: #424242;
  display: flex;
  flex-direction: column;
`;

const SListPrimaryText = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const SPrimaryTextTitle = styled.strong`
  max-width: 400px;
  text-align: left;
  margin-left: 10px;
`;

const SListSecondaryText = styled(MDBTypography)`
  display: flex;
  flex-direction: column;
  color: #c4b9b9;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  text-align: left;
`;

const SLink = styled(MDBNavbarLink)`
  color: lightblue;
  text-decoration: none;
  padding: 0;
  margin: 0;
  margin-left: 10px;
  display: block;
  text-align: left;
`;

const SDivider = styled.div`
  height: 3px;
  width: 97%;
  background-color: #313131;
  margin: 10px;
`;

const PocketFeed = () => {
  const [articles] = usePocketFeed();

  const handleClick = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string
  ) => {
    evt.preventDefault();
    window.location.href = url;
  };

  if (instanceOfArticles(articles))
    return (
      <SListBorder>
        <SList horizontal>
          {articles &&
            articles.map(article => {
              let logo: string | undefined;

              if (!article.domain_metadata && !article.top_image_url) {
                logo = '/richen-portfolio-logo-512.png';
              } else if (!article.domain_metadata) {
                logo = article.top_image_url;
              } else if (article.domain_metadata) {
                logo = article.domain_metadata.logo;
              }
              return (
                <div key={article.item_id}>
                  <SListItem
                    tag="button"
                    onClick={evt => handleClick(evt, article.given_url)}
                  >
                    <SListIcon
                      onError={e => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/richen-portfolio-logo-512.png';
                      }}
                      alt={`${article.resolved_title}`}
                      src={logo}
                    />
                    <SListRightContainer>
                      <SListPrimaryText>
                        <SPrimaryTextTitle>
                          {article.given_title}
                        </SPrimaryTextTitle>
                        <div>{timeConverter(article.time_added)}</div>
                      </SListPrimaryText>
                      <>
                        <SLink to={article.given_url}>
                          {article.given_url}
                        </SLink>
                        <SListSecondaryText variant="body2">
                          {article.excerpt}
                        </SListSecondaryText>
                      </>
                    </SListRightContainer>
                  </SListItem>

                  <SDivider />
                </div>
              );
            })}
        </SList>
      </SListBorder>
    );

  return <div>Error with fetching articles</div>;
};

export default PocketFeed;
