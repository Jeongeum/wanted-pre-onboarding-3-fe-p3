import { createBrowserRouter, Router } from "react-router-dom";
import GeneralLayout from "./layout/GeneralLayout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import PageA from "./pages/PageA.jsx";
import PageB from "./pages/PageB.jsx";
import PageC from "./pages/PageC.jsx";

// interface RouterElement {
//   id: number // 페이지 아이디 (반복문용 고유값)
//   path: string // 페이지 경로
//   label: string // 사이드바에 표시할 페이지 이름
//   element: React.ReactNode // 페이지 엘리먼트
//   withAuth?: boolean // 인증이 필요한 페이지 여부
// }

const routerData = [
  // TODO 3-1: 로그인 페이지 라우터 등록하기 ('login', withAuth: false)

  // TODO 3-2: page a, b, c 등록하기
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <Home />,
    withAuth: false,
  },

  //todo 3-1 부분
  {
    id: 1,
    path: "/login",
    label: "로그인",
    element: <Login />,
    withAuth: false,
  },

  // Todo 3-2 부분 페이지 추가하기
  {
    id: 2,
    path: "/page-a",
    label: "페이지a",
    element: <PageA />,
    withAuth: false,
  },

  {
    id: 3,
    path: "/page-b",
    label: "페이지b",
    element: <PageB />,
    withAuth: false,
  },

  {
    id: 4,
    path: "/page-c",
    label: "페이지c",
    element: <PageC />,
    withAuth: false,
  },
];

// TODO 3-1: 인증이 필요한 페이지는 GeneralLayout으로 감싸서 라우터에 전달
// GeneralLayou에는 페이지 컴포넌트를 children으로 전달
export const routers = createBrowserRouter(
  routerData.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: <GeneralLayout>{router.element}</GeneralLayout>,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  })
);

// TODO 3-2: 라우터 객체에서 인증이 필요한 페이지만 필터링해 사이드바에 전달
// id, path, label을 전달하여 Sidebar에서 사용
export const SidebarContent = routerData.reduce((prev, router) => {
  if (!router.withAuth) return prev;
  return [
    ...prev,
    {
      id: router.id,
      path: router.path,
      label: router.label,
    },
  ];
}, []);
