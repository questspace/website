import createTheme from 'styled-components-theme'
import config from '../config'

export const defaultColors = {
  main: '#000000',
  dark: '#000000',
  light: '#ffffff',
  accent: '#000000'
}

const colors = Object.keys(config.theme ? config.theme.colors : defaultColors)
const enhancedColors = createTheme(...colors)

const theme = { ...config.theme, colors: enhancedColors }

export default theme
