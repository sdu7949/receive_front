import React from "react";
import styled from "styled-components";

const Container=styled.div`
    margin-top : 100px;
`;

const Item=styled.h1`
    font-size: 30px;
`;

const Detail= ({location}) =>{
   
   if(location.state.investment){
       return(
           
           <Container>
               <Item>닉네임: {location.state.nickname}</Item>
               <Item>식별번호: {location.state.id}</Item>
               <Item>지갑주소: {location.state.walletAddress}</Item>
               <Item>투자금액: {location.state.investment}</Item>
               <Item>보유 KeepIn: {location.state.keepIn}</Item>
               <Item>만기일: {location.state.dueDate}</Item>
           </Container>
           
       )

   }else if(location.state.purchasingCost){
       return(
           <Container>
               <Item>닉네임: {location.state.nickname}</Item>
               <Item>식별번호: {location.state.id}</Item>
               <Item>지갑주소: {location.state.walletAddress}</Item>
               <Item>구매 신청 금액 : {location.state.purchasingCost}</Item>
               <Item>전송 예정 코인 : {location.state.transmitCoin}</Item>
               <Item>승인하기 : {location.state.approval}</Item>
           </Container>
       )
   }else{
       return(
            <Container>
               <Item>닉네임: {location.state.nickname}</Item>
               <Item>식별번호: {location.state.id}</Item>
               <Item>환전 신청 코인: {location.state.exchangeCoin}</Item>
               <Item>송금 여부 : {location.state.sendMoney}</Item>
               <Item>은행 : {location.state.bank}</Item>
               <Item>계좌번호 : {location.state.accountNumber}</Item>
               <Item>출금 예정 금액 : {location.state.withdrawMoney}</Item>
               <Item>환전 승인 : {location.state.exchangeApproval}</Item>
           </Container>
       )
   }
};

export default Detail;
