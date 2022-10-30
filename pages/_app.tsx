import { MainPageLayout } from "../components/MainPageLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MainPageLayout>
      <Component {...pageProps} />
    </MainPageLayout>
  );
}

export default MyApp;
