import { ThemeProvider } from "@/components/ui/theme-provider";
import StoreProvider from "./StoreProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
};

export default Provider;
