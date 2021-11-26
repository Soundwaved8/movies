import React, { useState } from "react";
import styled from "styled-components";
import NowPlaying from "../components/movies/NowPlaying";
import Popular from "../components/movies/Popular";
import TopRated from "../components/movies/TopRated";
import UpComing from "../components/movies/UpComing";
import LogedNav from "../components/nav/logedNav";
import UnLogedNav from "../components/nav/unLogedNav";

const Shop = () =>{
    const [stateOnglets, setStateOnglets] = useState(1);

    const goNp = () => {
      setStateOnglets(1);
    };
    const goUp = () => {
      setStateOnglets(2);
    };
    const goP = () => {
      setStateOnglets(3);
    };
    const goTr = () => {
      setStateOnglets(4);
    };

    const userId = localStorage.getItem('userId');
  
    return (
      <GlobalDiv>
        <OngletBtn>
          <OngletNp onClick={goNp} stateOnglets={stateOnglets}>
            Now Playing
          </OngletNp>
          <OngletUp onClick={goUp} stateOnglets={stateOnglets}>
            Upcoming
          </OngletUp>
          <OngletP onClick={goP} stateOnglets={stateOnglets}>
            Popular
          </OngletP>
          <OngletTr onClick={goTr} stateOnglets={stateOnglets}>
            Top Rated
          </OngletTr>
        </OngletBtn>
  
        <ShopDiv>
          {stateOnglets === 1 ? (
            <NowPlaying />
          ) : stateOnglets === 2 ? (
            <UpComing />
          ) : stateOnglets === 3 ? (
            <Popular />
          ) : (
            <TopRated />
          )}
        </ShopDiv>
      </GlobalDiv>
    );
}

export default Shop;

const GlobalDiv = styled.div`
background-color: #555454;
@media (min-width:40em) {
  
}
`;

const OngletBtn = styled.div`
  display: flex;
  margin-top:30px;
  @media (min-width:40em){
    justify-content: center;
  width: 80%;
  margin-left: 160px;
  margin-top:30px;
  }
  
`;
const OngletNp = styled.div`
  width: 100%;
  height: 50px;
  background: ${(props) => (props.stateOnglets === 1 ? "#58DD94" : "#3D3939")};
  color: ${(props) => (props.stateOnglets === 1 ? "#fff" : "#58DD94")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #333;
  
`;
const OngletUp = styled.div`
  width: 100%;
  height: 50px;
  background: ${(props) => (props.stateOnglets === 2 ? "#58DD94" : "#3D3939")};
  color: ${(props) => (props.stateOnglets === 2 ? "#fff" : "#58DD94")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #333;
`;
const OngletP = styled.div`
  width: 100%;
  height: 50px;
  background: ${(props) => (props.stateOnglets === 3 ? "#58DD94" : "#3D3939")};
  color: ${(props) => (props.stateOnglets === 3 ? "#fff" : "#58DD94")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #333;
`;
const OngletTr = styled.div`
  width: 100%;
  height: 50px;
  background: ${(props) => (props.stateOnglets === 4 ? "#58DD94" : "#3D3939")};
  color: ${(props) => (props.stateOnglets === 4 ? "#fff" : "#58DD94")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #333;
`;
const ShopDiv = styled.div`
  width: 100%;
  height: 600px;
  text-align: justify;
  border-top: none;
`;

const SDiv = styled.div`
  width:100%;
  height:50px;
  
`
