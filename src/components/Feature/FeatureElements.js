import styled from 'styled-components'
import FeaturePic from '../../Images/featured5.jpg';

export const FeatureContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,.7), rgba(0,0,0,.1)),url(${FeaturePic});
    height:100vh;
    max-height:500px;
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#fff;
    test-align:center;
    padding:0 1rem;

    h1{
        font-size:clamp(3rem,5vw,5rem);
    }
    p{
        margin-bottom:1rem;
        font-size:clamp(1rem,3vw,2rem)
    }
`;

export const FeatureButton = styled.button`
    font-size:1.4rem;
    padding:.6rem 3rem;
    border:none;
    background:#ffc500;
    transition:.2s ease-out;
    color:#000;

    &:hover{
        background:#e31837;
        transition:.2s ease-out;
        cursor:pointer;
        color:#fff;
    }

`;


