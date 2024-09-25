import ContextCartProvider from "./context/CartContext"
import ThemeContextProvider from "./context/ThemeContext"
import UserContextprovider from "./context/UserContext"
import AppRouter from "./router/router"

function App() {
  return (
    <>
      <ThemeContextProvider>
        <UserContextprovider>
          <ContextCartProvider>
            <AppRouter />
          </ContextCartProvider>
        </UserContextprovider>
      </ThemeContextProvider>
    </>
  )
}

export default App
