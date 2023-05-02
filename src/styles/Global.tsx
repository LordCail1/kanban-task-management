import { createGlobalStyle } from "styled-components"
import { Theme } from "./types"

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    body {
        height: 100vh;
        width: 100vw;
        
    }
    div[id=root]{
        height: 100vh;
        width: 100vw;
    }
`

export const theme: Theme = {
    colors: {
        main_purple: '#635FC7',
        main_purple_hover: '#A8A4FF',
        black: '#000112',
        very_dark_grey: '#20212C',
        dark_grey: '#2B2C37',
        lines_dark: '#3E3F4E',
        lines_light: '#E4EBFA',
        medium_grey: '#828FA3',
        light_grey: '#F4F7FD',
        white: '#FFFFFF',
        red: '#EA5555',
        red_hover: '#FF9898'
    }
}


