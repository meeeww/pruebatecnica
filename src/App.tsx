import { FC } from "react";

import Layout from "./modules/layout/Layout";
import MainPage from "./pages/MainPage";

const App: FC = () => {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
};

export default App;
