import { createBrowserRouter, RouteObject } from "react-router";
import { PassportAuth } from "../pages/auth/Passport";
import { FaceIdAuth } from "../pages/auth/FaceId";
import { QuizPage } from "../pages/quiz/Quiz";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <PassportAuth />,
  },
  {
    path: "/face-id",
    element: <FaceIdAuth />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
];

export const router = createBrowserRouter(routes);
