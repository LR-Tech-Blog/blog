export function toggleDarkMode(): string {
    const theme = getCurrentThemeMode()

    const newTheme = theme === "light" ? "dark" : "light"
    const isDarkMode = newTheme === "dark"
    if(isDarkMode) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", newTheme)

    return newTheme
}

export function getCurrentThemeMode(): string {
    if(typeof localStorage === "undefined") {
        return "light"
    }
    
    const theme = localStorage.getItem("theme")
    if (theme === 'dark') {
        return "dark"
    }
    return "light"
}