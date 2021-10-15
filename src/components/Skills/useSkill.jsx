import React, { useContext } from "react";
import "./Skill.css";
import styled from "styled-components";
import { Tema } from "../../context/Context";

const useSkill = () => {
  const thema = useContext(Tema);
  const { claro } = thema;

  const Content = styled.div`
    position: relative;
    border-radius: 100%;
    margin: 40px 5%;
    width: 100px;
    height: 100px;
    background: ${(props) => props.centerColor};

    @media screen and (max-width: 410px) {
      margin: 30px 0;
    }
  `;
  const SemiCircle1 = styled.div`
    background-color: ${(props) => props.circleColor};
    top: 0;
    float: right;
    width: 50%;
    height: inherit;
    border-bottom-right-radius: 100px;
    border-top-right-radius: 100px;
    z-index: -1;
    position: relative;
    transform-origin: left center;
    animation-name: ${(props) => props.animation};
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-duration: ${(props) => props.newTime.toString() + "ms"};
    animation-delay: ${(props) => props.time.toString() + "ms"};
  `;

  const SemiCircle2 = styled.div`
    background-color: ${(props) => props.circleColor};
    width: 50%;
    height: inherit;
    border-bottom-left-radius: 100px;
    border-top-left-radius: 100px;
    z-index: 2;
    position: relative;
    transform-origin: right center;
    animation-name: anim2;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-duration: ${(props) => props.time.toString() + "ms"};

    @keyframes anim2 {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(180deg);
      }
    }
  `;
  const Centro = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    border-radius: 100px;
    background: ${(props) => props.centerColor};
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  `;

  const Square = styled.div`
    position: relative;
    border-bottom-left-radius: 100px;
    border-top-left-radius: 100px;
    width: 50%;
    height: 100%;
    top: -100%;
    left: 0;
    background: ${(props) => props.centerColor};
    z-index: 3;
  `;

  const Image = styled.img`
    width: 50%;
    height: auto;
  `;

  const Skill = (props) => {
    const { time, content, grades } = props;
    return (
      <Content centerColor={claro ? "#F5F5F5" : "#1D2028"}>
        <Centro centerColor={claro ? "#F5F5F5" : "#1D2028"}>
          {content ? <Image src={content} /> : null}
        </Centro>
        <SemiCircle1
          circleColor={"#01A4FF"}
          grades={grades + "deg"}
          newTime={(grades * time) / 180}
          time={time ? time : "500ms"}
          animation={`anim${grades}`.toString()}
        />
        <SemiCircle2 circleColor={"#01A4FF"} time={time ? time : "500ms"} />
        <Square centerColor={claro ? "#F5F5F5" : "#1D2028"} />
      </Content>
    );
  };
  return [Skill];
};

export default useSkill;
