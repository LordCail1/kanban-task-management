import { createGlobalStyle } from "styled-components"

export const theme: Theme = {
	colors: {
		black: "#000112",
		dark_grey: "#2B2C37",
		light_grey: "#F4F7FD",
		lines_dark: "#3E3F4E",
		lines_light: "#E4EBFA",
		main_purple_hover: "#A8A4FF",
		main_purple: "#635FC7",
		medium_grey: "#828FA3",
		red_hover: "#FF9898",
		red: "#EA5555",
		very_dark_grey: "#20212C",
		white: "#FFFFFF",
		main_purple_hover2: "#635fc71a",
	},
	mediaQueries: {
		desktop: "1440px",
		tablet: "768px",
		mobile: "375px",
	},
	transitionTimes: {
		slow: "300ms",
		medium: "200ms",
		fast: "100ms",
	},
	standards: {
		sidebarWidth: "300px",
	},
}

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        width: 100vw;
        
    }
    div[id=root]{
        width: 100vw;
        display: flex;
        font-family: 'Plus Jakarta Sans', sans-serif;
    }
	::-webkit-scrollbar {
  		width: 8px;
		height: 8px;
	}

	::-webkit-scrollbar-track {
  		background-color: ${theme.colors.dark_grey};
	}

	::-webkit-scrollbar-thumb {
  		background-color: ${theme.colors.white};
  		border-radius: 20px;
  		width: 9px;
	}
	
`
