import { Theme as MUITheme, ThemeOptions as MUIThemeOptions} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme extends MUITheme {
        accent: {
            main: string;
            secondary: string;
        };

    }
    interface ThemeOptions extends MUIThemeOptions {
        accent?: {
            main?: string;
            secondary?: string;
        };
    }
    export function createTheme(options?: ThemeOptions): Theme;
}