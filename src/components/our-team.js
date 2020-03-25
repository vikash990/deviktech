import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import ReactPlayer from "react-player";

import logo_vikash from '../Images/Team/vikash.jpg';
import logo_anup from '../Images/Team/anup.jpg';
import logo_ashish from '../Images/Team/ashish.jpg';
import logo_mirtunjay from '../Images/Team/mritunjay.jpg';
import logo_abhishek_pandey from '../Images/Team/abhishek_pandey.jpg';


const ColWrapper = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:20px;
`;

const TeamImageWrapper=styled('img')`
    border-radius: 10px;
    margin: 30px;
    heigth:225px;
    width:225px;
    @media(max-width: 767px) {
        margin: 5px;
    }
`

const TextWrapper=styled('p')`

`

const our_team = [
    {
        image: logo_vikash,
        name:"Vikash Dubey",
        position:"Web Developer",
        description:"He is a Web Developer and a competitive programmer.He has worked with many company.He has a more than 4 year of experience in teaching.He has completed many exicting projects.",
        review_link:"https://www.youtube.com/embed/fwbFdo0adHQ?list=RDfwbFdo0adHQ" ,
    },
    {
        
        image: logo_anup,
        name:"Anup Triphati",
        position:"Mentor",
        description:"He has worked with many company.He has a more than 3 years of experience in teaching.",
        review_link:"https://www.youtube.com/embed/J6aSJBRf3vQ?list=RDfwbFdo0adHQ",
    },
    {         
        image: logo_ashish,
        name:"Ashish Shah",
        position:"Machine Learning Expert",
        description:"He is expert in Machine Learning.He has worked with many company.He has worked.He has completed many exiciting project.",
        review_link:"https://www.youtube.com/embed/M6QOVINEovk?list=RDfwbFdo0adHQ",
    },
    {      
        image: logo_mirtunjay,
        name:"Mritunjay",
        position:"Head of sales",
        description:"Mritunjay is  expert in sale. He has worked with several company.He has more than 3 years of experience in sales and  marketing ",
        review_link:"https://www.youtube.com/embed/RKioDWlajvo?list=RDfwbFdo0adHQ",
    },
    {     
        image: logo_abhishek_pandey,
        name:"Abhishek Pandey",
        position:"head of marketing",
        description:"Abhishek Pandey has been associated with the Software industry for more than 2 years & is considered an expert in the EdTech space. He has worked on multiple large scale applications and has piloted several Startups.",
        review_link:"https://www.youtube.com/embed/YrUqw7uspKg?list=RDfwbFdo0adHQ",  
    },

];


class OurTeam extends React.Component{


    render(){
        return(
          <div>
               
                    {our_team.map(our_team => (
                        <Row>
                            <ColWrapper col>
                                <TeamImageWrapper src={our_team.image}/>
                                <h5>{our_team.name}</h5> 
                                <p>{our_team.position}</p>                                            
                          </ColWrapper>
                          <ColWrapper col={4}>
                          <TextWrapper>{our_team.description}</TextWrapper>
                          <ReactPlayer
                            url={our_team.review_link}
                           />
                           <p>Learn More....</p>
                          </ColWrapper>
                        </Row>
                    ))}
                
           </div>

        );

    }

}
export default OurTeam;