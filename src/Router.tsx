import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { CardWithDrop } from "./components/Cards/CardWithDrop";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/"
          element={
            <>
              <h1>Home</h1>

              <CardWithDrop>
                <h1>Card</h1>
              </CardWithDrop>
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div className="h-[100rem]">
              <h1>Dashboard</h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};
