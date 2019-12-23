import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "../../Components/Message";
import UserContainer from "./UserContainerTable";
// import {SimpleTable} from "Routes/User/SimpleTable";

const Container=styled.div``;

const UserPresenter = ({loading, error}) => (
    <>
    {loading ? (
        <Loader />
    ) : (
        <Container>
            <UserContainer />


            <UserContainer />
            {error && <Message color="#e74c3c" text={error}></Message>}
        </Container>
    )}
    </>
)

UserPresenter.propTypes = {
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string
}

export default UserPresenter;