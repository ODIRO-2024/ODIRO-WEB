import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { mainColor } from "../color";

export const StyledCalendarContainer = styled.div`
  width: 80%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 2px 10px 0px rgba(0, 0, 0, 0.13);
  position: absolute;
  top: 50px;
  right: -10px;
  z-index: 3;
  .react-calendar {
    background-color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.7em;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border: none;
    padding: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  //nav
  .react-calendar__navigation button {
    color: ${mainColor};
    height: 30px;
    margin: 25px 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    position: relative;
  }
  //nav바 포커스
  .react-calendar__navigation button:enabled:focus {
    background-color: white;
    color: ${mainColor};
  }
  //nav바 커서 올렸을 때
  .react-calendar__navigation button:enabled:hover {
    background-color: ${mainColor};
    color: white;
  }
  .react-calendar__navigation button[disabled] {
    background-color: white;
    color: white;
  }
  //월화수목금토일 부분
  abbr[title] {
    text-decoration: none;
    color: ${mainColor};
    margin-top: 20px;
    display: block;
    font-size: 14px;
  }
  //오늘 타일
  .react-calendar__tile--now {
    background-color: white;
  }
  .react-calendar__tile--now:enabled:hover {
    background-color: #e6e6e6;
  }
  //타일 기본 설정
  .react-calendar__tile {
    border-radius: 50%;
  }
  //타일 주말 설정
  .react-calendar__month-view__days__day {
    color: black;
  }
  //날짜에 커서 올렸을 떄
  .react-calendar__tile:enabled:hover {
  }
  //날짜에 포커스 했을떄
  .react-calendar__tile:enabled:focus {
    background-color: ${mainColor};
    color: white;
  }
  //선택중인 타일에 커서 올렸을떄, 포커스 했을때
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${mainColor};
    color: white;
  }
  //선택중인 타일 사이
  .react-calendar--selectRange .react-calendar__tile--hover {
  }
  //선택된 타일들 사이
  .react-calendar__tile--range {
    background-color: #e6e6e6;
  }
  //선택된 타일 시작
  .react-calendar__tile--rangeStart {
    background-color: ${mainColor};
    color: white;
  }
  //선택된 타일 끝
  .react-calendar__tile--rangeEnd {
    background-color: ${mainColor};
    color: white;
  }
  .react-calendar__navigation button {
    &:nth-child(2) {
      pointer-events: none;
    }
  }
`;

//export const StyledCalendar = styled(Calendar)``;
