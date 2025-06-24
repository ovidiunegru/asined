import { HelmetProvider } from "react-helmet-async"
import AppNavigation from "./navigation/Navigation"
import AboutUsMain from './pages/AboutUsMain';

function App() {

  return (
    <>
      <HelmetProvider>
        <AppNavigation />
      </HelmetProvider>
    </>
  )
}

export default App