import { createMuiTheme } from '@material-ui/core/styles';


const arcBlue = '#40ECFF';
const arcPink = '#FF4D6F';
const arcYellow = '#FFB733';
const arcWhite = '#FFFFFF';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      pink: `${arcPink}`,
      yellow: `${arcYellow}`,
      white: `${arcWhite}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcPink}`,
    },
    tertiary: {
      main: `${arcYellow}`,
    },
    quaternary: {
      main: `${arcWhite}`,
    },
  },
  typography: {
    tab: {
      fontFamily:"Raleway",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
      color: "#101735"
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white'
  },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
  }}
});
