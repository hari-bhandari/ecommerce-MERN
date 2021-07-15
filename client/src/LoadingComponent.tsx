import React from 'react';
import styled from "styled-components";
const LoadingContainer=styled.div`
  margin-top: 20%;
  .loading-text {
    font-family: 'Oswald', sans-serif;
    font-weight: 200;
    font-size: 38px;
    text-align: center;
    color: #eee;
    margin-top: 150px;
  }

  .circle-1 {
    margin: 0 auto;
    width: 100px;
    height: 50px;
    border-radius: 100px 100px 0 0;
    border-top: 2px solid #DEA568;
    border-left: 2px solid #DEA568;
    border-right: 2px solid #DEA568;
    animation: 2s loader linear infinite;
    transform-origin: 50% 100%;
  }

  .circle-2 {
    width: 80px;
    height: 40px;
    margin: 50px auto;
    border-radius: 0 0 80px 80px;
    border-bottom: 4px solid #416A8A;
    border-left: 4px solid #416A8A;
    border-right: 4px solid #416A8A;
    animation: 2s loader-reverse linear infinite;
    transform-origin: 50% 0%;
  }

  .circle-3 {
    width: 60px;
    height: 30px;
    margin: 50px auto;
    border-radius: 0 0 80px 80px;
    border-bottom: 2px solid #7C2A6C;
    border-left: 2px solid #7C2A6C;
    border-right: 2px solid #7C2A6C;
    animation: 1s loader linear infinite;
    transform-origin: 50% 0%;
  }

  .circle-4 {
    width: 40px;
    height: 20px;
    margin: 50px auto;
    border-radius: 0 0 80px 80px;
    border-bottom: 5px solid #56916C;
    border-left: 5px solid #56916C;
    border-right: 5px solid #56916C;
    animation: 1.5s loader-reverse linear infinite;
    transform-origin: 50% 0%;
  }

  @keyframes loader {
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
  }

  @keyframes loader-reverse {
    from {transform: rotate(360deg)}
    to {transform: rotate(-360deg)}
  }

`

const LoadingComponent = () => {
    return (
        <LoadingContainer>
            <div>
                <div className="circle-1 circle">
                    <div className="circle-2 circle">
                        <div className="circle-3 circle">
                            <div className="circle-4 circle">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoadingContainer>
    );
};

export default LoadingComponent;