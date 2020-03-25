import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

import logo from '../Images/Team/vikash.jpg';

const ContentWrapper = styled('div')`
    min-height: 70vh;
`;

const ImageWrapper=styled('img')`

    margin-right: 100px;
    border-radius: 10px;
    heigth:40px;
    width:40px;


`

const FirstWrapper =styled('div')`
    margin: 50px;
`

class AboutUs extends React.Component{

    render(){
        return(
           <ContentWrapper> 
              {/*  <Row>
                   <Col sm={6} xs={12}>  
                        <FirstWrapper>
                                <h4>Founder</h4>
                                <p>Vikash Dubey</p>
                            <ImageWrapper src={logo}></ImageWrapper>
                        </FirstWrapper>
                    </Col>
                    <Col sm={6} xs={12}> */}
                    <FirstWrapper>
                       <p>Hi Students,</p>
                        <p> Number of students graduate every year but they are left unemployed. They pay lot of money for education but lack in skills.</p>
                        <p>We are here to train students so that they can enhance their career. We will help students to explore their potential.</p>
                        <p>Students can enroll with our online and oflline class and our expert will be there taking the class. We will conduct doubts session.</p>
                        <h4>   Our mission:- </h4>
                        <h6>1) Unlock students potential.</h6>
                        <h6>2)Enhance there skills.'</h6>
                        <h6> 3)Teach them in a right way.</h6>
                        <h4>   Our Instructor:- </h4>
                        <p>Our Instructor are company expert.You will get a chance to explore your potential.We will help you get an internship
                            and job.
                        </p>
                        <p>School students will get a good chance to explore their potential and score good marks.They will get a chance to learn 
                            computer.</p>
                            <p>We will help them to build their career.</p>

                            <h4> What we Teach:- </h4>
                            <h5>Web Development</h5>
                            <p>Frontend Development(Html5,css3,Javascript,React)</p>
                            <p>Backend(using Nodejs,express)</p>
                            <p>Database(MongoDB,Postgresql)</p>
                            <p>FullStack web Development(MERN Stack)</p>
                            <h5>Programming</h5>
                              <p>C</p>
                              <p>C++</p>
                              <p>Java</p>
                              <p>Python</p>
                            <h5>Commmerce</h5>
                            <p>Accounts</p>
                            <p>BST</p>
                            <p>Economics</p>
                            <h5>School Subject</h5>
                             <p>9 and 10</p>
                
                        </FirstWrapper>
                 {/*    </Col>
                </Row>  */}          
           
           </ContentWrapper>

        );

    }

}
export default AboutUs;