import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./styles/global";
import {defaultTheme} from "./styles/themes/default";
import {TransactionsProvider} from "./contexts/TransactionsContext.tsx";
import {Transactions} from "./pages/Transactions";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

      <TransactionsProvider>
        <Transactions/>
      </TransactionsProvider>
    </ThemeProvider>
  )
}
