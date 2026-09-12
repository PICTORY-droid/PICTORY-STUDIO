const PROJECTS = [
  {
    slug: "promptlab", size: "large", kind: "web", status: "LIVE", accent: "#263fbe",
    category: "Web Product · AI Safety", title: "PromptLab", subtitle: "AI 입력 전 보안 점검 워크스페이스",
    desc: "생성형 AI에 입력하기 전 민감정보와 업무 보안 위험을 확인하는 웹 서비스입니다. 원문을 최소화하면서 위험 요소를 점검하고, 검사 기록을 남길 수 있도록 설계했습니다.",
    features: ["SafeCheck 기반 입력 전 위험 점검", "검사 기록 저장과 재확인 흐름", "원문 최소화와 안전 안내 중심 UX", "실제 도메인에서 운영 중"],
    tags: ["AI Safety", "Web App", "Product UX"], linkLabel: "라이브 사이트", link: "https://promptlab.io.kr/", image: "images/promptlab.webp"
  },
  {
    slug: "gongsujob", size: "feature", kind: "web", status: "LIVE", accent: "#e36a24",
    category: "Web Product · Marketplace", title: "공수잡", subtitle: "건설 현장 일자리 플랫폼",
    desc: "건설 현장에서 사람을 찾는 과정과 일할 곳을 찾는 과정을 한 화면에 연결한 구인구직 서비스입니다. 직종과 지역을 중심으로 공고를 찾고, 현장과 인력이 빠르게 연결되는 흐름을 시각화했습니다.",
    features: ["직종·지역 중심의 공고 탐색", "구인·구직 흐름을 단순화한 정보 구조", "현장형 서비스에 맞춘 빠른 CTA", "모바일 중심 반응형 UI"],
    tags: ["Marketplace", "Responsive", "Service Design"], linkLabel: "라이브 사이트", link: "https://gongsujob-phgb.vercel.app/", image: "images/gongsujob.webp"
  },
  {
    slug: "insurance-crm", size: "large", kind: "notion", status: "NOTION", accent: "#2b2f36",
    category: "Notion System · CRM", title: "보험설계사 TOP 1% CRM", subtitle: "고객관리 · 영업관리 · 계약관리 · 리마인드",
    desc: "보험설계사의 반복 업무를 고객 DB, 영업 파이프라인, 상담 DB, 계약 DB, 활동 DB, 리마인드 DB로 분리하고 서로 연결한 올인원 CRM입니다.",
    features: ["리드 → 상담 → 제안 → 계약 파이프라인", "VIP·핵심·잠재·신규·휴면 고객 분류", "상담·계약·활동 기록 연결", "다음 연락일 기반 리마인드 운영"],
    tags: ["Notion", "Sales CRM", "Database Design"], linkLabel: "노션 원본", link: "https://phrygian-building-31e.notion.site/TOP-1-CRM-342d597ef70780998ab6e9c3adfcaa37?source=copy_link", image: "images/insurance-crm.webp"
  },
  {
    slug: "creator-home", size: "regular", kind: "notion", status: "NOTION", accent: "#24262a",
    category: "Notion Template · Portfolio", title: "1인 크리에이터 포트폴리오", subtitle: "작업물, 프로필, 문의를 한 페이지에",
    desc: "디자이너·개발자·음악가 등 1인 크리에이터가 빠르게 자신의 작업을 정리할 수 있도록 만든 노션 포트폴리오 템플릿입니다. 프로필, Works DB, Tools DB, Category DB, 문의 페이지가 연결됩니다.",
    features: ["Works DB 기반 작업물 갤러리", "프로필과 About 정보 구조", "도구·카테고리 데이터베이스", "문의 페이지와 활동 통계 구성"],
    tags: ["Notion", "Portfolio", "Creator"], linkLabel: "노션 원본", link: "https://phrygian-building-31e.notion.site/1-341d597ef70780adb899c21257212013?source=copy_link", image: "images/creator-home.webp"
  },
  {
    slug: "nbos", size: "regular", kind: "notion", status: "NOTION", accent: "#333b4d",
    category: "Notion System · Operations", title: "NBOS — 노비스 비즈니스 운영 시스템", subtitle: "영업·활동·프로젝트·대시보드를 하나로",
    desc: "기준정보를 중심으로 영업관리, 활동관리, 프로젝트관리, 대시보드와 테스트 영역을 연결한 비즈니스 운영 워크스페이스입니다. 업무가 커져도 구조를 잃지 않도록 모듈 단위로 설계했습니다.",
    features: ["기준정보를 중심으로 한 데이터 구조", "영업·활동·프로젝트 모듈 분리", "대시보드 기반 운영 현황 확인", "통합테스트·시스템 영역까지 확장 가능한 구조"],
    tags: ["Notion", "Operations", "System Design"], linkLabel: "노션 원본", link: "https://phrygian-building-31e.notion.site/3d8d597ef70780aba92efe0bd3cd0f5f?source=copy_link", image: "images/nbos.webp"
  },
  {
    slug: "youtube-downloader", size: "small", kind: "web", status: "LIVE", accent: "#6f47db",
    category: "Web Tool · Media", title: "YouTube Downloader", subtitle: "링크를 넣고 원하는 형식으로 저장",
    desc: "영상 URL을 입력해 다운로드 흐름을 단순화한 웹 도구입니다. 어두운 인터페이스와 보라색 포인트를 사용해 기능 중심의 빠른 사용성을 강조했습니다.",
    features: ["URL 중심의 단일 입력 흐름", "다운로드 상태를 직관적으로 표시", "다크 UI 기반 도구형 인터페이스", "데스크톱·모바일 반응형 구성"],
    tags: ["Web Tool", "Utility", "Dark UI"], linkLabel: "라이브 사이트", link: "https://ytdownloader-tgeq.vercel.app/", image: "images/ytdownloader.webp"
  },
  {
    slug: "dh-on", size: "regular", kind: "code", status: "GITHUB", accent: "#2d64ff",
    category: "Android App · Field Ops", title: "DH On", subtitle: "건설 현장 관리자용 업무·번역 앱",
    desc: "종이 일보 관리의 비효율과 다국어 소통 문제를 함께 해결하기 위한 Android 앱입니다. 출력 일보와 기타 서류를 관리하고, 한국어↔베트남어·중국어 음성 번역과 국적별 공지 발송을 지원합니다.",
    features: ["PDF·Word·Excel 출력 일보 및 서류 관리", "한국어↔베트남어·중국어 실시간 음성 번역", "Google 번역 API / ML Kit 자동 전환", "카카오톡·Zalo·WeChat 국적별 공지 공유"],
    tags: ["Kotlin", "Android", "ML Kit"], linkLabel: "GitHub 저장소", link: "https://github.com/PICTORY-droid/dhon-app", image: "images/dhon-app.svg"
  },
  {
    slug: "sqld-study", size: "regular", kind: "code", status: "GITHUB", accent: "#5147b8",
    category: "Automation · Notion API", title: "SQLD 노션 학습 시스템", subtitle: "비전공자를 위한 학습 DB 자동화",
    desc: "SQLD 자격증 학습을 위해 이론, SQL 실습, 복습, 문제풀이, 오답, 학습 계획을 각각 DB로 만들고 Python 스크립트로 노션에 자동 구성하는 프로젝트입니다.",
    features: ["6개 학습용 Notion DB 자동 생성", "에빙하우스 망각곡선 기반 복습 일정 계산", "환경변수 기반 Notion API 연결", "학습·실습·오답 흐름을 하나의 시스템으로 구성"],
    tags: ["Python", "Notion API", "Automation"], linkLabel: "GitHub 저장소", link: "https://github.com/PICTORY-droid/sqld-notion-study", image: "images/sqld-study.svg"
  },
  {
    slug: "cheonmyeong-ilju", size: "small", kind: "lab", status: "WIP", accent: "#bb7b2b",
    category: "Lab · Work in Progress", title: "천명일주", subtitle: "공개 준비 중인 실험 프로젝트",
    desc: "현재 공개 GitHub 저장소에는 파일이 없는 초기 단계입니다. 포트폴리오에서는 기능을 임의로 추정하지 않고 WIP 프로젝트로 표시했으며, 저장소가 공개되면 상세 내용을 업데이트할 수 있도록 연결해두었습니다.",
    features: ["공개 GitHub 저장소 연결", "현재 기능 명세는 공개 전", "프로젝트 상태를 WIP로 명확히 표시", "향후 저장소 내용 기준으로 상세 정보 확장"],
    tags: ["WIP", "Lab", "GitHub"], linkLabel: "GitHub 저장소", link: "https://github.com/PICTORY-droid/cheonmyeong-ilju", image: "images/cheonmyeong.svg"
  }
];

const FILTERS = [
  {key:"all", label:"전체"}, {key:"notion", label:"Notion"}, {key:"web", label:"Web"}, {key:"code", label:"App & Automation"}, {key:"lab", label:"Lab"}
];
