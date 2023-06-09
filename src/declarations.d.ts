/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import { ThemeStyleSlice } from './features/themeSlice';


declare module 'styled-components' {
    export interface DefaultTheme extends Theme, ThemeStyleSlice {}
}

