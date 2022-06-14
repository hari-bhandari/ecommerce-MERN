import React, {useState} from 'react';
import styled from 'styled-components';
import {SEO} from "@/components/Others/seo";
import Accordion from 'components/accordion/accordion';
import Footer from "@/components/Layout/Footer/Footer";
import {StyledForm, StyledInput, StyledSearchButton} from "@/components/Layout/search-box/search-box.style";
import {SearchIcon} from "@/assets/icons/SearchIcon";
import {FAQ_DATA} from './help_data'


const Heading = styled.h3`
  font-size: 21px;
  font-weight: 700;
  color: #0d1136;
  line-height: 1.2;
  margin-bottom: 25px;
  width: 100%;
  text-align: center;
`;

const HelpPageWrapper = styled.div`
  background-color: #f7f7f7;
  position: relative;
  padding: 130px 0 60px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 989px) {
    padding-top: 70px;
  }
`;

export const HelpPageContainer = styled.div`
  background-color: transparent;
  padding: 0;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  @media (min-width: 990px) {
    width: 870px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 989px) {
    padding: 30px;
  }
`;

export default function () {
    const [data, setData] = useState(FAQ_DATA);
    const [search, setSearch] = useState('');
    const onClick = (e) => {
        e.preventDefault()
        //    if search text contains any value from data's question or answer filter and return it
        const filteredData = FAQ_DATA.filter(item => {
            return item.question.toLowerCase().includes(search.toLowerCase()) || item.answer.toLowerCase().includes(search.toLowerCase())
        })
        setData(filteredData)
    }
    return (
        <>

            <SEO title="F.A.Q - WiseCart" description="F.A.Q Details"/>
            <HelpPageWrapper>
                <HelpPageContainer>
                    <Heading>F.A.Q</Heading>
                    <StyledForm
                        minimal={true}
                        faq={true}
                    >
                        <StyledInput
                            type='search'
                            placeholder={'Describe your issue'}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <StyledSearchButton onClick={onClick}>
                            <SearchIcon style={{marginRight: 10}}/>
                        </StyledSearchButton>
                    </StyledForm>
                    {/*div with margin of 20px*/}
                    <div style={{marginTop: '20px'}}>
                        <Accordion items={data}/>
                    </div>
                </HelpPageContainer>

                <Footer/>
            </HelpPageWrapper>
        </>
    );
}
