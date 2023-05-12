import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        height: 100vh;
        width: 100vw;
        
    }
    div[id=root]{
        height: 100vh;
        width: 100vw;
        display: flex;
        font-family: 'Plus Jakarta Sans', sans-serif;
    }
`

export const theme: Theme = {
	colors: {
		main_purple: "#635FC7",
		main_purple_hover: "#A8A4FF",
        main_purple_hover2: "#635fc71a",
		red: "#EA5555",
		red_hover: "#FF9898",
		black: "#000112",
		white: "#FFFFFF",
		medium_grey: "#828FA3",
		dark_grey: "#2B2C37",
		very_dark_grey: "#20212C",
		lines_light: "#E4EBFA",
		light_grey: "#F4F7FD",
		lines_dark: "#3E3F4E",
	},
    mediaQueries: {
        desktop: '1440px',
        tablet: '768px',
        mobile: '375px',
    }
}
