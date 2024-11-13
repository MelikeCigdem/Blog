import { ThemeProvider } from "@/context/ThemeContext";
import { GlobalStyle } from "../styles/globalStyles";
import { UserProvider } from "@/context/UserContext";

// benim en dış katmandan başlayarak ilerleyen sarmalım.
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <UserProvider>
          <ThemeProvider>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </UserProvider>
       
      </body>
    </html>
  );
}
