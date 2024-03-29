import React from "react";
import styled from "styled-components";
import PartnerImage from "./PartnerImage";

const Partners = () => {
  return (
    <Background>
      <Container>
        <h1>Our Partners</h1>
        <p>
          Project Keila strides to work with many companies who resonate with
          our mission and want to make significant world changing progression
          towards offsetting carbon emmissions. This includes nonprofits and
          for-profits, large and small, religious and secular, sharing a common
          goal of fighting climate change and being part of the solution toward
          a clean energy, low carbon future.
        </p>
        <PartnerList>
          <PartnerImage
            src="./partners/universities.png"
            title="Universities"
          />
          <PartnerImage src="./partners/farmers.png" title="Farmers" />
          <PartnerImage src="./partners/businesses.png" title="Businesses" />
          <PartnerImage src="./partners/factories.png" title="Factories" />
          <PartnerImage
            src="./partners/env-groups.png"
            title="Environmental Groups"
          />
          <PartnerImage src="./partners/daos.png" title="DAOs" />
          <PartnerImage src="./partners/churches.png" title="Churches" />
          <PartnerImage src="./partners/non-profits.png" title="Non Profits" />
          <PartnerImage src="./partners/governments.png" title="Governments" />
        </PartnerList>
        <h2>
          Want to partner with us? Send us an email now:{" "}
          <MailLink href="mailto:projectkeila@gmail.com">
            projectkeila@gmail.com
          </MailLink>
        </h2>
      </Container>
    </Background>
  );
};

export default Partners;

const Background = styled.div`
  background-image: url("./partners/partners-banner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
`;

const Container = styled.div`
  background: white;
  padding: 10vh;
  margin: 10vh;
  opacity: 0.8;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  h1 {
    color: #ffb000;
    text-align: center;
  }
  p {
    text-align: center;
    padding: 4vw;
  }
  h2 {
    font-family: Assistant;
    font-style: normal;
    font-weight: 400;
    text-align: center;
  }
`;

const Banner = styled.img`
  width: 100vw;
`;

const PartnerList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

const MailLink = styled.a`
  color: #148eff;
`;
