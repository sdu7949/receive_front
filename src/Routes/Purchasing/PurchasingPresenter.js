import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "../../Components/Message";
// import Poster from "../../Components/Poster";

const Container = styled.div`
    padding : 20px;
`;

const PurchasingPresenter = ({ nowPlaying, loading, error }) => (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying && nowPlaying.length >0 && (
              <>
              {nowPlaying.map(movie => (
                  <>
                    {movie.id}
                  </>
              ))}
              </>

          )}
          
          {error && <Message color="#e74c3c" text={error} />}
        </Container>
      )}
    </>
  );


PurchasingPresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default PurchasingPresenter;

