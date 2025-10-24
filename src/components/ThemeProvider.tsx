import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "blackwhite";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme") as Theme;
      return stored || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all possible theme classes first
    root.classList.remove("light", "dark", "blackwhite");

    // Add the current theme as a class to <html>
    root.classList.add(theme);

    // Save preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to switch between themes in a loop
  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "blackwhite";
      return "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
