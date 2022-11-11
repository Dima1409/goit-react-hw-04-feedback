import styled from 'styled-components';

export const FeedbackList = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: left;
    list-style: none;
    margin-bottom: 40px;
`
export const FeedbackItem = styled.button`
   margin: 0 10px;
   border: none;
   padding: 4px 10px;
   border-radius: 4px;
   color: #000000;
   background-color: rgb(187, 185, 185);
   text-transform: capitalize;
   font-weight: 700;
   font-size: 18px;
   transition: 0.3s;
   &:hover {
    box-shadow: 0 0 6px #000000;
    cursor: pointer;
   }
   &:first-child {
    margin-left: 0;
   }
`