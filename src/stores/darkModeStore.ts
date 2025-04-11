import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore("darkMode", {
  state: () => ({
    isDark: false as boolean
  }),

  actions: {
    initDarkMode() {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        this.setDark(true);
      } else {
        this.setDark(false);
      }
    },

    toggleDarkMode() {
      this.setDark(!this.isDark);
    },

    setDark(value: boolean) {
      this.isDark = value;
      if (value) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }
})
