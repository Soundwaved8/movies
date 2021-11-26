import { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import {AiOutlineArrowLeft}from "react-icons/ai"
import {RiDislikeLine} from "react-icons/ri"
import LogedNav from "../nav/logedNav";
import UnLogedNav from "../nav/unLogedNav";
import Footer from "../footer";

const Details = (props) => {
  const param = useParams();
  const [detail, setDetail] = useState({});
  const img_500 = "https://image.tmdb.org/t/p/w1280";
  const FormatUS = Intl.NumberFormat("en");
  const history = useHistory();
  
  const userId = localStorage.getItem('userId');
  const [addToFav, setAddToFav] = useState(false)

  useEffect(
    ()=> {const currentFavorites = localStorage.getItem('wishlist')
      ? JSON.parse(localStorage.getItem('wishlist')) 
    : []
    const isFav = currentFavorites.some(fav => fav.id === detail.id)
    console.log(isFav)
    setAddToFav(isFav)
    },[detail]
  )


  const handleFavorite = movie => {
    const currentFavorites = localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist')) 
    : []
  const isPresent = currentFavorites.map(e => e.id).indexOf(detail.id)
  console.log(isPresent)
  if(isPresent === -1){
    currentFavorites.push(movie)
    localStorage.setItem('wishlist', JSON.stringify(currentFavorites))
    setAddToFav(true)
  } else {
    const filteredMovies = currentFavorites.filter(
      detail => detail.id !== movie.id
    )
    localStorage.setItem('wishlist', JSON.stringify(filteredMovies))
    setAddToFav(false)
    console.log(filteredMovies)
    console.log(addToFav)
  }
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=934780721e54373dbb92f5d1dc942560&language=en-US`
      )
      .then((response) => {
        setDetail(response.data);
        console.log(response.data);
      });
  }, [param.id]);

  return (
    <StyledB>
      <SDiv>
          {userId != null ? <UnLogedNav/>:<LogedNav/>}
      </SDiv>
      <ContainerD>
        <ReturnBut onClick={()=> history.goBack()}><AiOutlineArrowLeft color="#58dd94" size="2rem"/></ReturnBut>
        <Wrapper>
          <WrapContentImg>
            <StyledImg
              src={`${img_500}/${detail.poster_path}`}
              alt="img"
            ></StyledImg>
          </WrapContentImg>
          <WrapContent>
            <StyledH1>{detail.title}</StyledH1>
            <StyledHr />
            <StyledH2>Storyline</StyledH2>
            <StyledP>{detail.overview}</StyledP>
            <StyledHr />
            <StyledUl>
              <StyledLi>Release Date : {detail.release_date}</StyledLi>
              <StyledLi>Budget : {FormatUS.format(detail.budget)} $</StyledLi>
              <StyledLi>Revenue : {FormatUS.format(detail.revenue)} $</StyledLi>
              <StyledLi>Duration : {detail.runtime} min</StyledLi>
              <StyledLi>Public vote : {detail.vote_average}/10</StyledLi>
            </StyledUl>
            <ButtonBox>
              {addToFav ? <SButton onClick={() => handleFavorite({ id: detail.id, title: detail.title, image:detail.poster_path})}>
                <FDiv>
                  <StyledBP>Remove</StyledBP> 
                </FDiv>
                <RiDislikeLine size="20" color="white" />
              </SButton>
              : <SButton onClick={() => handleFavorite({ id: detail.id, title: detail.title, image:detail.poster_path })}>
                <FDiv>
                  <StyledBP>Add to favorite</StyledBP>
                </FDiv>
                <MdOutlineFavoriteBorder size="20" color="white" />
                </SButton>
              }
              <SButton>
                <StyledBP>Add to cart</StyledBP>
                <BsCartCheck size="20" color="white" />
              </SButton>
            </ButtonBox>
          </WrapContent>
        </Wrapper>
      </ContainerD>
      <Footer/>
    </StyledB>
  );
};
export default Details;

/*Styled Components*/

const FDiv = styled.div`

`
const StyledB = styled.div`
  background-color: #555454;
  height: 100%;
  @media (min-width: 40em) {
    height: 100vh;
    width: 100%;
  }
`;

const ContainerD = styled.div`
  padding: 3rem 0;
  margin-inline: auto;
  width: min(90%, 80rem);
`;
const ReturnBut = styled.button`
display: none;
@media (min-width: 40em) {
display: block;
background:none;
border:none;

}

`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 40em) {
    display: flex;
    flex-direction: row;
    * {
      flex-basis: 100vh;
    }
    * {
      margin-left: 2em;
    }
  }
`;

const WrapContentImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 40em) {
    display: block;
    justify-content: center;
    align-items: center;
  }
`;
const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 40em) {
    display: block;
    justify-content: center;
    align-items: center;
  }
`;

const StyledImg = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 15px;
  @media (min-width: 40em) {
    display: block;
  max-width: 70%;
  border-radius: 15px;
  margin-left:140px;
  }
`;

const StyledH1 = styled.h1`
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 20px;
  max-width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b6b6b6;

  @media (min-width: 40em) {
    text-transform: uppercase;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    font-size: 25px;
    display: flex;
    margin: 0 0 10px 20px;
    justify-content: center;
    color: #b6b6b6;
    padding-top: 30px;
    max-width: 40rem;
  }
`;
const StyledH2 = styled.h2`
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  color: #b6b6b6;
  margin-bottom: -5px;

  @media (min-width: 40em) {
    margin-bottom: -30px;
    margin-left:60px;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #b6b6b6;
  }
`;
const StyledP = styled.p`
  font-size: 10px;
  font-family: Open Sans;
  color: #b6b6b6;
  justify-content: center;
  @media (min-width: 40em) {
    font-size: 15px;
    font-family: Open Sans;
    color: #b6b6b6;
    justify-content: center;
    padding: 30px 30px 15px 30px;
  }
`;

const StyledHr = styled.hr`
  width: 80%;
  height: 0.5px;
  background-color: #fff;
  margin-right: 40px;
  @media(min-width: 40em){
    width: 80%;
  height: 1px;
  background-color: #fff;
  margin: 0 0px 0px 60px;
  }
`;
const StyledUl = styled.ul`
  padding: 0;
`;
const StyledLi = styled.li`
  line-height: 1.5rem;
  list-style: none;
  font-size: 10px;
  font-family: Open Sans;
  color: #b6b6b6;
  @media (min-width: 40em) {
    line-height: 1.5rem;
    font-size: 15px;
    font-family: Open Sans;
    color: #b6b6b6;
    width: 90%;
    justify-content: center;}
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media (min-width: 40em) {
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 80%;
    margin-top: 140px;
  }
`;
const SButton = styled.button`
  background-color: #58dd94;
  border: none;
  border-radius: 10px;
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  @media (min-width: 40em) {
    display: flex;
    border: none;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
  }
`;
const StyledBP = styled.p`
  font-size: 10px;
  font-family: Open Sans;
  color: #fff;
  justify-content: center;
  @media (min-width: 40em) {
    font-size: 12px;
    font-family: Open Sans;
    color: #fff;
    justify-content: center;
    margin-right: -60px;
  }
`;

const SDiv = styled.div`
  width:100%;
  height:50px;
  
`
