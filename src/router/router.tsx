import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PassportAuth } from "../pages/auth/ui/Passport";
import { FaceIdAuth } from "../pages/auth/ui/FaceId";
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
