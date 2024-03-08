import './App.css';
import { useState, useEffect, useRef } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import pon from "./image/pon.png"
import mon from "./image/monpalette.png"
import dream from "./image/inadream.gif"
import ptf from "./image/ptf.png"
import copy from "./image/copyright.png"
import github from "./image/github.png"
import notion from "./image/notion.jpg"
import velog from "./image/velog.jpg"
import gmail from "./image/gmail.png"

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


function App() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const navRef = useRef(null)
  const SkillsRef = useRef(null)
  const ProjectRef = useRef(null)

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    }
  }, [])

  useEffect(() => {
    const aboutElement = document.querySelector('.about')

    const handleAnimationEnd = () => {
      setTimeout(() => {
        setShowButton(true)
      }, 1000)
    }

    aboutElement.addEventListener('animationend', handleAnimationEnd)

    return () => {
      aboutElement.removeEventListener('animationend', handleAnimationEnd)
    }
  }, [])

  const showMore = () => {
    window.scrollTo({
      top: window.innerHeight - navRef.current.offsetHeight,
      behavior: "smooth"
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSkills = () => {
    window.scrollTo({
      top: SkillsRef.current.offsetTop - navRef.current.offsetHeight,
      behavior: 'smooth'
    })
  }

  const scrollToProjects = () => {
    window.scrollTo({
      top: ProjectRef.current.offsetTop - navRef.current.offsetHeight,
      behavior: 'smooth'
    })
  }




  return (
    <div className="main">

      <div className={scrollPosition < 100 ? "origin-nav" : "change-nav"} ref={navRef}>
        <div className="nav-menu">
          <div className={`nav-me ${scrollPosition < 100 ? "" : "change"}`} onClick={() => scrollToTop()}>SWAN`s Portfolio</div>
          <div className={`nav-etc ${scrollPosition < 100 ? "" : "change"}`}>
            <p onClick={() => showMore()}>About me</p>
            <p onClick={() => scrollToSkills()}>Skills</p>
            <p onClick={() => scrollToProjects()}>Projects</p>
          </div>
        </div>
      </div>

      <div className="portfolio">
        <div className="title">
          <h1 className="about">프론트엔드 개발자 Bong`s 포트폴리오 입니다 :)</h1>
          <div className={`more-button ${showButton ? "show" : ""}`} onClick={() => showMore()}><KeyboardDoubleArrowDownIcon sx={{ fontSize : 50 }}/></div>
        </div>
      </div>

      <div className="introduce">
        <div className="introduce-title">About me</div>
        <br />
        <div className="introduce-self">
          <div className="self-1">
          <PersonIcon sx={{ fontSize: 40 }} />
            <div>
              <div>이름</div>
              <span>정수완</span>
            </div>
          </div>
          <div className="self-1">
          <CalendarTodayIcon sx={{ fontSize: 40 }} />
            <div>
              <div>생년월일</div>
              <span>97.10.14</span>
            </div>
          </div>
          <div className="self-1">
          <LocationOnIcon sx={{ fontSize: 40 }} />
            <div>
              <div>주소</div>
              <span>인천광역시 미추홀구</span>
            </div>
          </div>
          <div className="self-1">
          <PhoneIcon sx={{ fontSize: 40 }} />
            <div>
              <div>전화번호</div>
              <span>010 2659 5557</span>
            </div>
          </div>
          <div className="self-1">
          <EmailIcon sx={{ fontSize: 40 }} />
            <div>
              <div>이메일</div>
              <span>wjdtndhks1212@gmail.com</span>
            </div>
          </div>
          <div className="self-1">
          <SchoolIcon sx={{ fontSize: 40 }} />
            <div>
              <div>교육이수</div>
              <span>SSAFY 9기</span>
            </div>
          </div>
        </div>
      </div>

      <div className="skills" ref={SkillsRef}>
        <div className="skills-title">Skills</div>
        <div className="skills-etc">
          <div className="skills-set">
            <div>
              <div className="skills-set-title">Language</div>
              <div className="skills-badge">
                <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=white" alt="python" />
                <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="java" />
                <img src="https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=Dart&logoColor=white" alt="dart" />
              </div>
            </div>
          </div>

          <div className="skills-set">
            <div>
              <div className="skills-set-title">Communication</div>
              <div className="skills-badge">
                <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" alt="jira" />
                <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white" alt="notion" />
                <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white" alt="figma" />
              </div>
            </div>
          </div>

          <div className="skills-set">
            <div>
              <div className="skills-set-title">Version Control</div>
              <div className="skills-badge">
                <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white" alt="git" />
                <img src="https://img.shields.io/badge/Gerrit-EEEEEE?style=for-the-badge&logo=Gerrit&logoColor=white" alt="gerrit" />
                <img src="https://img.shields.io/badge/Gitlab-FC6D26?style=for-the-badge&logo=Gitlab&logoColor=white" alt="gitlab" />
                <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white" alt="github" />
              </div>
            </div>
          </div>

          <div className="skills-set">
            <div>
              <div className="skills-set-title">Frontend</div>
              <div className="skills-badge">
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" alt="html5" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" alt="css3" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" alt="javascript" />
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" alt="react" />
                <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white" alt="Redux" />
                <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript" />
                <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=Recoil&logoColor=white" alt="Recoil" />
                <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white" alt="React Query" />
                <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white" alt="Bootstrap" />
                <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" alt="styledcomponents" />
              </div>
            </div>
          </div>

          <div className="skills-set">
            <div>
              <div className="skills-set-title">Tools</div>
              <div className="skills-badge">
                <img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visual studio code&logoColor=white" alt="visual studio code" />
                <img src="https://img.shields.io/badge/androidstudio-3DDC84?style=for-the-badge&logo=androidstudio&logoColor=white" alt="androidstudio" />
                <img src="https://img.shields.io/badge/Eclipse IDE-2C2255?style=for-the-badge&logo=Eclipse IDE&logoColor=white" alt="Eclipse IDE" />
              </div>
            </div>
          </div>

          <div className="skills-set">
            <div>
              <div className="skills-set-title">Mobile</div>
              <div className="skills-badge">
                <img src="https://img.shields.io/badge/flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="flutter" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects" ref={ProjectRef}>
        <div className="projects-title">Projects</div>
        <div className="projects-main">
          <p className="project-main-title">
            약속 및 일정 관리 어플 P:ON
            <div>(2023.10.10 ~ 2023.11.17) - 6주</div>
          </p>
          <div className="project-explain">
            <div className="img-container"> 
              <img src={pon} alt="" />
              <button className="git-btn" onClick={() => {window.open("https://github.com/SWan9710/SSAFY_3_P_ON")}}>Github 확인하기</button>
            </div>

            <div className="project-explain-text">
              <div>약속 과 일정을 생성하며 관리하는 모바일 애플리케이션 서비스</div>
              <div><span>약속방</span> 정보(약속방 이름, 참여자, 약속 날짜, 시간, 장소)를 입력받아 약속방을 생성합니다. 약속방 생성시 입력되지 않은 정보는 <span>투표</span>를 통해 결정할 수 있습니다.</div>
              <br />
              <div>핑키 아이콘을 통해 <span>챗봇</span>의 이용방법을 확인할 수 있으며 자신의 일정을 생성하거나 확인할 수 있습니다. 또한 일정에 대한 정보(날짜, 장소, 일정 이름)을 입력받아 일정을 생성합니다.</div>

              <div>약속이 확정되며, 종료 시 <span>추억보관</span>으로 이동 됩니다. 종료된 약속은 추억 탭을 통해 회상할 수 있습니다.</div>
              <br />
              <div><span>FCM을 사용하여 사용자의 휴대폰에 푸시알림을 제공합니다.</span> 약속방에 대한 알림이 실시간으로 전송되며 친구에 대한 알림이 실시간으로 전송됩니다.</div>
              <div>
                확인한 알림과 확인하지 않은 알림을 구분할 수 있으며 읽은 알림 삭제와 전체 읽기 기능을 제공합니다.
              </div>
            </div>  
          </div>

          <div className="project-explain-tech">
            <div>주요기능</div>
            <div>약속방 생성, 투표, 채팅, 챗봇, 일정, 추억, 알림, 팔로우,</div>
            <div>Frontend</div>
            <div>Flutter, Dart, Next.js, TypeScript, Figma</div>
            <div>Backend</div>
            <div>Spring Boot, Spring Security, Json Web Token, FastAPI, MySQL, MongDB, Redis</div>
            <div>deployment</div>
            <div>Nginx, Apache Kafka, Docker, Jenkins, Linux</div>
          </div>
        </div>

        <div className="projects-main">
          <p className="project-main-title">
            꿈 거래 플랫폼 IN A DREAM
            <div>(2023.08.21 ~ 2023.10.06) - 7주</div>
          </p>
          <div className="project-explain">
            <div className="img-container"> 
              <img src={dream} alt="" />
              <button className="git-btn" onClick={() => {window.open("https://github.com/SWan9710/SSAFY9-2InADream")}}>Github 확인하기</button>
            </div>

            <div className="project-explain-text">
              <div>꿈일기를 작성하고 거래하며, 다른사람의 일기를 <br />감상할 수 있는 플랫폼 입니다.</div><br />
              <div>로그인시 꿈을 꾸는 느낌을 주기위해 인트로 부터 로그인까지의 과정에 <span>ThreeJs</span> 를 사용하여 몰입감을 선사합니다.</div>
              <br />
              <div>
                꿈 내용을 통해 <span>자동으로 일기와 비슷한 그림이 생성</span>되며 내용을 분석하여 <span>감정코인</span>을 지급합니다. <br /><br />
                또, 다른 사람의 꿈을 감정코인을 통해 사고 팔며, 사용자가 작성하거나 구매한 꿈일기에 대한<span> 통계</span>를 제공합니다.
              </div>

              <div>사용자가 구매하거나 작성한 일기의 통계와 로그데이터를 분석하여 <span>사용자에게 맞는 꿈일기를 추천</span>해 줍니다.</div>
              <br />
              <div>사이트만의 특색을 강조하기 위해 <span>마우스 커서를 커스텀</span> 하여 디자인 하였고, <span>다양한 피드백 효과</span>를 사용하여 사이트이용에 몰입감을 제공합니다.</div>
            </div>    
          </div>

          <div className="project-explain-tech">
            <div>주요기능</div>
            <div>꿈일기 작성, 거래, 통계, 추천, 검색</div>
            <div>Frontend</div>
            <div>Styled Component, TypeScript, ThreeJs, React Query, Redux, Karlo, Node js</div>
            <div>Backend</div>
            <div>Spring Boot, Spring Security, Json Web Token, Elastic Search, Logstash, Hadoop, Spark</div>
            <div>deployment</div>
            <div>Docker, Jenkins, Amazon EC2</div>
          </div>
        </div>

        <div className="projects-main">
          <p className="project-main-title">
            퍼스널컬러 진단 및 화장품 추천 플랫폼 Mon, Palette
            <div>(2023.07.10 ~ 2023.08.18) - 6주</div>          
          </p>
          <div className="project-explain">
            <div className="img-container"> 
              <img src={mon} alt="" />
              <button className="git-btn" onClick={() => {window.open("https://github.com/SWan9710/SSAFY-9-2-Mon-Palette")}}>Github 확인하기</button>
            </div>

            <div className="project-explain-text">
              <div><span>퍼스널 컬러 측정</span>을 토대로 맞춤형 화장품 제공 및<br /> 피드작성이 가능한 뷰티 플랫폼 입니다.</div><br />
              <div>본인의 퍼스널 컬러 진단을 통해 나에게 맞는 화장품을 구매할 수 있도록 <span>상점기능</span>을 제공합니다.</div>
              <br />
              <div>또 나와 퍼스널컬러가 같은 인물의 화장법을 알수 있는 <span>소셜미디어 서비스</span>를 제공합니다.</div><br />

              <div>사진과 동영상이 구분되며, <span>검색기능과 마이페이지 기능</span>을 제공하여 소셜미디어 서비스를 관리 가능하도록 하였습니다.</div><br />

              <div>피드와 챌린지 영상, 화장품 모두 <span>태그 기능</span>을 활용하여 본인이 필요로 하는 정보들만 구분하여 확인할 수 있으며 <span>무한스크롤 기능</span>을 활용하여 새로운 정보를 불러올수 있습니다. </div>
            </div>    
          </div>
          <div className="project-explain-tech">
            <div>주요기능</div>
            <div>퍼스널컬러 진단, 미디어 작성, 수정, 삭제, 조회, 상점, 검색, 구매, 마이페이지</div>
            <div>Frontend</div>
            <div>React, JavsScript, Axios, Recoil, Flutter, Dart, NPM, Amazon S3</div>
            <div>Backend</div>
            <div>Spring Boot, Spring Security, Json Web Token, MySQL, Redis, Scikit-Learn, Dlib, OpenCV, Django, Nginx</div>
            <div>deployment</div>
            <div>Amazon EC2, Docker</div>
          </div>
        </div>

        <div className="projects-main">

          <p className="project-main-title">포트폴리오 사이트
            <div>(2024.02.26 ~ 2024. 03. 07) - 2주</div>
          </p>

          <div className="project-explain">
            <div className="img-container">
              <img src={ptf} alt="" />
              <button className="git-btn" onClick={() => {window.open("https://github.com/SWan9710/protfolio")}}>Github 확인하기</button>
            </div>

            <div className="project-explain-text">
              <div>백엔드없이 React 와 JavsScript 만을 이용하여 만든 <br /> 포트폴리오 정리용 사이트 입니다.</div><br />
              <div>초기 화면과, 소개글, 스킬들, 프로젝트 설명, footer 등을 작성하였습니다.</div>
              <br />
              <div>프로젝트의 이미지를 클릭하면 정리된 Github로 이동이 가능합니다.</div>

              <div>순수 CSS 만을 이용하여 다양한 기능을 구현하였습니다.</div>
              <div>React 와 바닐라자바스크립트를 활용하여 기능을 구현하였습니다.</div>
            </div>    
          </div>

          <div className="project-explain-tech">
            <div>주요기능</div>
            <div>인트로, 스크롤 이벤트, 호버 이벤트</div>
            <div>Frontend</div>
            <div>React, CSS3, JavaScript</div>
            <div>deployment</div>
            <div>Vercel</div>
          </div>
        </div>


      </div>



      <footer>
        <div className="footer-imgbox">
          <img className="copyright" src={github} alt="Github" onClick={() => {window.open("https://github.com/SWan9710")}} />
          <img src={notion} alt="Velog" onClick={() => {window.open("https://wholesale-spoonbill-d91.notion.site/1ae4d7f6e5bd4dc1945df8f44d134681")}} />
          <img src={velog} alt="Notion" onClick={() => {window.open("https://velog.io/@swan/posts")}} />
          <img className="gmail" src={gmail} alt="" onClick={() => {window.open("mailto:wjdtndhks1212@gmail.com")}} />

        </div>
        <br />
        <div>Copyright <span><img className="copyright" src={copy} alt="copyright" /> Jeong Soo Wan</span></div>
      </footer>

      <button className={scrollPosition < 100 ? "hidden-up" : "up"} onClick={() => scrollToTop()}><KeyboardDoubleArrowUpIcon/></button>

    </div>
  );
}

export default App;
