import './App.css';
import { useState, useEffect, useRef } from 'react';

// mui-icons
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import StarIcon from '@mui/icons-material/StarRounded';


// 이미지
import pon from "./image/pon.png"
import mon from "./image/monpalette.png"
import dream from "./image/inadream.gif"
import ptf from "./image/ptf.png"
import copy from "./image/copyright.png"
import github from "./image/github.png"
import notion from "./image/notion.jpg"
import velog from "./image/velog.jpg"
import gmail from "./image/gmail.png"
import profile from "./image/profile.jpg"


function App() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const navRef = useRef(null)
  const SkillsRef = useRef(null)
  const ProjectRef = useRef(null)
  const EducationRef = useRef(null)

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

  const scrollToEducation = () => {
    window.scrollTo({
      top: EducationRef.current.offsetTop - navRef.current.offsetHeight,
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
            <p onClick={() => scrollToEducation()}>Education</p>
            <p onClick={() => scrollToSkills()}>Skills</p>
            <p onClick={() => scrollToProjects()}>Projects</p>
          </div>
        </div>
      </div>

      <div className="portfolio">
        <div className="title">
          <h1 className="about">프론트엔드 개발자 SWAN`s 포트폴리오 입니다 :)</h1>
          <div className={`more-button ${showButton ? "show" : ""}`} onClick={() => showMore()}><KeyboardDoubleArrowDownIcon sx={{ fontSize : 50 }}/></div>
        </div>
      </div>

      <div className="introduce">
        <div className="introduce-title">About me</div>
        <div className="introduce-myself">안되면 될때까지 노력하는 개발자 정수완 입니다.</div>
        <br />
        <div className="introduce-self">

          <img src={profile} alt="" />

          <div>
            <div className="self-1">
            <PersonIcon sx={{ fontSize: 40 }} />
              <div>
                <div>이름</div>
                <span>정수완</span>
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
          </div>
          
        </div>
      </div>

      <div className="Education" ref={EducationRef}>
        <div className="education-title">Education</div>

        <div className="education-container">
          <div className="container-1">삼성 청년 소프트웨어 아카데미</div>
          <div className="container-2">
            <div>2023. 01 ~ 2023. 12</div>
            <div>파이썬 비전공자반</div>
            <div>특화프로젝트 우수상 수상</div>
          </div>
        </div>

        <div className="education-container">
          <div className="container-1">경상국립대학교</div>
          <div className="container-2">
            <div>2016 ~ 2022</div>
            <div>경영정보학과</div>
            <div>3.83 / 4.5</div>
          </div>
        </div>

      </div>

      <div className="skills" ref={SkillsRef}>
        <div className="skills-title">Skills</div>
        
        <div className="skills-container">
          <div className="level-box">
            <StarIcon className="filled-star"/>
            <StarIcon className="filled-star"/>
            <StarIcon className="filled-star"/>
            <StarIcon className="filled-star"/>
            <StarIcon className="outline-star"/>
          </div>

          <div className="level-explain">
            알고리즘 구현 및 함수 구현이 가능하며 다양한 기능을 적재적소에 사용할 수 있습니다.
          </div>

          <div className="skills-badge">
            <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=white" alt="python" />
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" alt="html5" />
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" alt="css3" />
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" alt="javascript" />
            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" alt="react" />
          </div>
        </div>

        <div className="skills-container">
          <div className="level-box">
            <StarIcon className="filled-star"/>
            <StarIcon className="filled-star"/>
            <StarIcon className="filled-star"/>
            <StarIcon className="outline-star"/>
            <StarIcon className="outline-star"/>
          </div>

          <div className="level-explain">
            프로젝트 진행에 사용해 보았고, 필수기능 외의 것들을 사용목적에 맞게 구현가능합니다.
          </div>

          <div className="skills-badge">
            <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white" alt="Redux" />
            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript" />
            <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=Recoil&logoColor=white" alt="Recoil" />
            <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white" alt="React Query" />
            <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white" alt="Bootstrap" />
            <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" alt="styledcomponents" />
            <img src="https://img.shields.io/badge/flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="flutter" />
            <img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visual studio code&logoColor=white" alt="visual studio code" />
          </div>
        </div>

        <div className="skills-container">
          <div className="level-box">
            <StarIcon className="filled-star"/>
            <StarIcon className="filled-star"/>
            <StarIcon className="outline-star"/>
            <StarIcon className="outline-star"/>
            <StarIcon className="outline-star"/>
          </div>

          <div className="level-explain">
            기본 기능들을 사용가능하며, 아직 공부중에 있습니다.
          </div>

          <div className="skills-badge">
            <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="java" />
            <img src="https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=Dart&logoColor=white" alt="dart" />
            <img src="https://img.shields.io/badge/androidstudio-3DDC84?style=for-the-badge&logo=androidstudio&logoColor=white" alt="androidstudio" />
            <img src="https://img.shields.io/badge/Eclipse IDE-2C2255?style=for-the-badge&logo=Eclipse IDE&logoColor=white" alt="Eclipse IDE" />
          </div>
        </div>

        <div className="skills-container">
          <div className="level-explain">
            그 외 협업툴 및 버전관리 에 사용한 기술들 입니다.
          </div>

          <div className="skills-badge">
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white" alt="git" />
            <img src="https://img.shields.io/badge/Gerrit-aaffaa?style=for-the-badge&logo=Gerrit&logoColor=white" alt="gerrit" />
            <img src="https://img.shields.io/badge/Gitlab-FC6D26?style=for-the-badge&logo=Gitlab&logoColor=white" alt="gitlab" />
            <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white" alt="github" />
            <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" alt="jira" />
            <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white" alt="notion" />
            <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white" alt="figma" />
          </div>
        </div>   
      </div>

      <div className="projects" ref={ProjectRef}>
        <div className="projects-title">Projects</div>
        <div className="projects-main">

          <p onClick={() => {window.open("https://github.com/SWan9710/SSAFY_3_P_ON")}} className="project-main-title">약속 및 일정 관리 어플 P:ON </p>

          <div className="project-explain">
            <div className="img-container"> 
              <img src={pon} alt="" />
              <button className="git-btn" onClick={() => {window.open("https://github.com/SWan9710/SSAFY_3_P_ON")}}>Github 확인하기</button>
            </div>
            
            <div className="project-main-text">
              <p>📆 프로젝트 기간</p>
              <div className="project-period">2023.10.10 ~ 2023.11.17 - 6주</div>

              <p>🔥 주요기능</p>
              <div className="project-main-function">
                <div className="function">약속생성</div>
                <div className="function">투표생성</div>
                <div className="function">일정생성</div>
                <div className="function">챗봇</div>
                <div className="function">채팅</div>
                <div className="function">추억</div>
              </div>
              

              <p>🛠️ 사용기술</p>
              <div className="project-main-skill">
                <div className="skill">Flutter</div>
                <div className="skill">Dart</div>
                <div className="skill">NextJS</div>
                <div className="skill">React</div>
              </div>

              <p>✅ 맡은부분</p>
              <div className="project-main-function">
                <span className="function">피그마 작성 및 와이어 프레임 구상</span>
                <span className="function">약속방 생성화면 구현</span>
                <span className="function">약속방 생성화면 구현</span>
                <span className="function">네이버 지도 구현</span>
                <span className="function">투표기능 구현</span>
                <span className="function">채팅방 구현</span>
                <span className="function">홈화면 구현</span>
                <span className="function">챗봇 화면 구현</span>
                <span className="function">챗봇 도움말 기능 구현</span>
              </div>

            </div>
          </div>

          <div className="project-learned">
            <p>💡 이번 프로젝트를 통해 알게된 점</p>
            <ol>
              <li><span>Flutter & Dart</span> 를 이용한 <span>크로스플랫폼 코드 작성법</span>을 배울 수 있었습니다.</li>
              <li>Flutter 코드의 모바일 작업 효율성에 대해 알게되엇습니다.</li>
              <li>플러터 프로젝트를 진행하며 재사용성이 높은 코드를 작성하기 위해 <span>컴포넌트 구조</span> 로 분할하여 코드를 작성하였습니다.</li>
              <li>플러터의 다양한 라이브러리의 사용법을 알 수 있었습니다.</li>
            </ol>
          </div>
        </div>

        <div className="projects-main">

          <p onClick={() => {window.open("https://github.com/SWan9710/SSAFY9-2InADream")}} className="project-main-title">
            꿈 거래 플랫폼 IN A DREAM
            <div>🏆프로젝트 우수상 수상🏆</div>
          </p>

          <div className="project-explain">
            <div className="img-container"> 
              <img src={dream} alt="" />
              <button className="git-btn" onClick={() => {window.open("https://github.com/SWan9710/SSAFY9-2InADream")}}>Github 확인하기</button>
            </div>
            
            <div className="project-main-text">
              <p>📆 프로젝트 기간</p>
              <div className="project-period">2023.08.21 ~ 2023.10.06 - 7주</div>

              <p>🔥 주요기능</p>
              <div className="project-main-function">
                <div className="function">꿈일기 작성</div>
                <div className="function">꿈일기 거래</div>
                <div className="function">꿈일기 통계</div>
                <div className="function">꿈일기 추천</div>
                <div className="function">검색</div>
              </div>

              <p>🛠️ 사용기술</p>
              <div className="project-main-skill">
                <div className="skill">TypeScript</div>
                <div className="skill">ThreeJS</div>
                <div className="skill">React</div>
                <div className="skill">ReactQuery</div>
                <div className="skill">Redux</div>
              </div>

              <p>✅ 맡은부분</p>
              <div className="project-main-function">
                <div className="function">피그마 작성 및 와이어 프레임 구상</div>
                <div className="function">페이지 라우팅 기능</div>
                <div className="function">일기관련 CR 기능 구현</div>
                <div className="function">로그인 페이지 구현</div>
                <div className="function">회원가입 페이지 구현</div>
                <div className="function">통꼐 페이지 구현</div>
                <div className="function">반응형 웹페이지 구현</div>
                <div className="function">이외 전반적인 페이지 개발</div>
              </div>
            </div>
          </div>

          <div className="project-learned">
            <p>이번 프로젝트를 통해 알게된 점</p>
            <ol>
              <li><span>반응형 웹페이지</span>를 구현하며 CSS의 동적기능들을 활용할 수 있었습니다.</li>
              <li><span>객체지향적 프로그래밍</span>을 통해 반복가능하고 재사용성이 높은 코드를 컴포넌트로 분할하여 <br />짧은 시간에 여러 페이지를 만들 수 있었습니다.</li>
              <li><span>사용자 피드백 이벤트</span>를 다양하게 활용하여 UX 적 만족도가 높은 페이지를 제작할 수 있었습니다.</li>
              <li>협업을 통해 각자의 진행상황을 공유하며 개발을 진행할 수 있었습니다.</li>
              <li>자세한 <span>코드 컨벤션</span>을 통해 통일성 있는 코드 작성을 할 수 있었습니다.</li>
            </ol>
          </div>
        </div>

        <div className="projects-main">

          <p onClick={() => {window.open("https://github.com/SWan9710/SSAFY-9-2-Mon-Palette")}} className="project-main-title">퍼스널컬러 진단 및 화장품 추천 플랫폼 Mon, Palette</p>

          <div className="project-explain">
            <div className="img-container"> 
              <img src={mon} alt="" />
              <button className="git-btn" onClick={() => {window.open("https://github.com/SWan9710/SSAFY-9-2-Mon-Palette")}}>Github 확인하기</button>
            </div>
            
            <div className="project-main-text">
            <p>📆 프로젝트 기간</p>
              <div className="project-period">2023.07.10 ~ 2023.08.18 - 6주</div>

              <p>🔥 주요기능</p>
              <div className="project-main-function">
                <div className="function">퍼스널 컬러 진단</div>
                <div className="function">미디어 작성, 수정, 삭제, 조회</div>
                <div className="function">화장품 거래</div>
                <div className="function">검색</div>
                <div className="function">마이페이지</div>
                <div className="function">팔로잉, 팔로우</div>
              </div>

              <p>🛠️ 사용기술</p>
              <div className="project-main-skill">
                <div className="skill">React</div>
                <div className="skill">JavaScript</div>
                <div className="skill">Recoil</div>
                <div className="skill">AWS S3</div>
                <div className="skill">Flutter</div>
              </div>

              <p>✅ 맡은부분</p>
              <div className="project-main-function">
                <div className="function">피그마 작성 및 와이어 프레임 구상</div>
                <div className="function">페이지 라우팅 기능 및 라우터 보안 구현</div>
                <div className="function">피드와 챌린지 부분의 CRUD 구현</div>
                <div className="function">쇼핑몰 카테고리 기능 구현</div>
                <div className="function">쇼핑몰 메인페이지 제작</div>
                <div className="function">해시태그 기능 구현</div>
                <div className="function">장바구니 페이지 제작</div>
                <div className="function">AWS S3를 활용한 파일 업로드 및 불러오기 기능 구현</div>
                <div className="function">Flutter를 활용한 모바일 APK 파일 빌드</div>
              </div>
            </div>
          </div>

          <div className="project-learned">
            <p>이번 프로젝트를 통해 알게된 점</p>
            <ol>
              <li>React로 처음 개발을 진행하며 다양한 기능들을 사용하고 함수형 컴포넌트를 만들 수 있었습니다.</li>
              <li><span>Git과 Jira</span> 협업툴을 사용하여 각자의 진행상황을 공유하는 협업의 방법을 배울 수 있었습니다.</li>
              <li><span>AWS S3</span>를 이용하여 프론트에서 외부 api의 연동 과 파일 업로드 및 다운로드 방법을 배울 수 있었습니다.</li>
              <li>플러터를 이용하여 <span>모바일 Apk 파일 빌드</span> 방법을 배울 수 있었습니다.</li>
            </ol>
          </div>
        </div>

        <div className="projects-main">

          <p onClick={() => {window.open("https://github.com/SWan9710/protfolio")}} className="project-main-title">포트폴리오 사이트</p>

          <div className="project-explain">
            <div className="img-container"> 
              <img src={ptf} alt="" />
              <button className="git-btn" onClick={() => {window.open("https://github.com/SWan9710/protfolio")}}>Github 확인하기</button>
            </div>
            
            <div className="project-main-text">
            <p>📆 프로젝트 기간</p>
              <div className="project-period">2024.02.26 ~ 2024. 03. 07 - 2주</div>

              <p>🔥 주요기능</p>
              <div className="project-main-function">
                <div className="function">포트폴리오 설명</div>
              </div>

              <p>🛠️ 사용기술</p>
              <div className="project-main-skill">
                <div className="skill">React</div>
                <div className="skill">JavaScript</div>
                <div className="skill">HTML/CSS</div>
                <div className="skill">Vercel</div>
              </div>

              <p>✅ 맡은부분</p>
              <div className="project-main-function">
              <div className="function">전체 페이지 제작</div>
              </div>
            </div>
          </div>

          <div className="project-learned">
            <p>이번 프로젝트를 통해 알게된 점</p>
            <ol>
              <li>처음 스스로 배포까지 진행한 사이트이며, 배포과정을 알 수 있었습니다.</li>
              <li>바닐라 자바스크립트를 이용한 다양한 함수들을 구현해 볼 수 있었습니다.</li>
              <li>다양한 피드백 효과들을 구현해 볼 수 있었습니다.</li>
              
            </ol>
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
