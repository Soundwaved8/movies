import React, { useState } from "react";
import UnLogedNav from "../components/nav/unLogedNav";
import LogedNav from "../components/nav/logedNav";
import Footer from "../components/footer";
import styled from "styled-components";
import { useHistory } from "react-router";

const Wishlist = () => {
  const [wish, setWish] = useState(
    JSON.parse(localStorage.getItem("wishlist"))
  );
  const userId = localStorage.getItem("userId");
  const img_500 = "https://image.tmdb.org/t/p/w1280";
  console.log(wish);
  const history = useHistory();
  const handleClick = (key) => {
    history.push(`/details/${key}`);
  };
  return (
    <PageContainer>
      <SDiv>{userId != null ? <UnLogedNav /> : <LogedNav />}</SDiv>
      <WrapContent>
        <Grille>
          {wish.map((movie) => (
            <StyledDiv2
              key={movie.id}
              onClick={() => {
                handleClick(movie.id);
              }}
            >
              <StyledImg src={`${img_500}/${movie.image}`}></StyledImg>
              <StyledDiv>
                <StyledH5>{movie.title}</StyledH5>
              </StyledDiv>
            </StyledDiv2>
          ))}
        </Grille>
      </WrapContent>
      <Footer></Footer>
    </PageContainer>
  );
};

export default Wishlist;

const SDiv = styled.div`
height:50px;
width:100%;
`
 const Grille = styled.div`
  max-width: auto;
  width: 100%;
  height: auto;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  grid-gap: 10px;
`;

 const StyledImg = styled.img`
  max-width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: auto;
`;

 const StyledH5 = styled.h5`
  font-family: "Roboto";
  color: #ffffff;
  font-size: 14px;
  text-align: center;
`;

 const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #555454;
`;

 const WrapContent = styled.div``;

 const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

 const StyledDiv2 = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #3d3939;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  &:hover {
    transform: scale(1.12);
    box-shadow: 8px 8px 8px black;

    z-index: 2;
  }
`;
