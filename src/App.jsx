
import ContextCartProvider from "./context/CartContext"
import ThemeContextProvider from "./context/ThemeContext"


import AppRouter from "./router/router"

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ContextCartProvider>
          <AppRouter />
        </ContextCartProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App
