import React from "react";
import {
  makeStyles,
  Theme,
  useTheme,
  createStyles
} from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { palette } from '@material-ui/system';
import './twemoji-awesome.css';

const theme = createTheme({
  palette: {
    primary: blue,
  },
});

const emojiSteps = ["twa-poop","twa-heart","twa-thumbsup","twa-fried_shrimp","twa-avocado","twa-unicorn","twa-jack-o-lantern","twa-ghost","twa-cookie","twa-ghost","twa-balloon","twa-kissing_heart","twa-joy","twa-laughing","twa-sailboat","twa-skull"];

const tutorialSteps = [
  {
    label: "g"
  },
  {
    label: "u"
  },
  {
    label: "k"
  },
  {
    label: "o"
  },
  {
    label: "b"
  },
  {
    label: "h"
  },
  {
    label: "e"
  },
  {
    label: "n"
  },
  {
    label: "ie"
  },
  {
    label: "r"
  },
  {
    label: "f"
  },
  {
    label: "l"
  },
  {
    label: "aa"
  },
  {
    label: "s"
  },
  {
    label: "ee"
  },
  {
    label: "oe"
  },
  {
    label: "a"
  },
  {
    label: "m"
  },
  {
    label: "t"
  },
  {
    label: "i"
  },
  {
    label: "ei"
  },
  {
    label: "uu"
  },
  {
    label: "oo"
  },
  {
    label: "j"
  },
  {
    label: "eu"
  },
  {
    label: "ou"
  },
  {
    label: "v"
  },
  {
    label: "au"
  },
  {
    label: "ij"
  },
  {
    label: "p"
  },
  {
    label: "z"
  },
  {
    label: "ui"
  },
  {
    label: "w"
  },
  {
    label: "sch"
  },
  {
    label: "ch"
  },
  {
    label: "nk"
  },
  {
    label: "ng"
  },
  {
    label: "d"
  },
  {
    label: "oor"
  },
  {
    label: "oei"
  },
  {
    label: "uw"
  },
  {
    label: "ooi"
  },
  {
    label: "eur"
  },
  {
    label: "ieuw"
  },
  {
    label: "aai"
  },
  {
    label: "eer"
  },
  {
    label: "eeuw"
  }
];

const shuffledSteps = tutorialSteps.sort((a, b) => 0.5 - Math.random());
var randomEmoji = emojiSteps.sort((a, b) => 0.5 - Math.random())[0];
randomEmoji = "twa twa-lg " + randomEmoji;

const colors = ["#FFADAD","#FFD6A5","#FDFFB6","#CAFFBF","#9BF6FF","#A0C4FF","#BDB2FF","#FFC6FF"];
const randomColor0 = colors.sort((a, b) => 0.5 - Math.random())[0];
const randomColor1 = colors.sort((a, b) => 0.5 - Math.random())[0];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
      flexGrow: 1
    },
    header: {
      display: "flex",
      alignItems: "center",
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: randomColor0
    },
    bottom: {
      backgroundColor: randomColor1
    },
    img: {
      height: 255,
      maxWidth: 400,
      overflow: "hidden",
      display: "block",
      width: "100%"
    }
  })
);


export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = shuffledSteps.length+1;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>Spreek de letter hardop uit en oefen de klanken</Typography>
      </Paper>
      <Box textAlign="center" >
        {activeStep === maxSteps - 1
          ? <Typography variant="h1" gutterBottom className={randomEmoji} />
          : <Typography variant="h1" gutterBottom>{shuffledSteps[activeStep].label}</Typography>
        }
      </Box>
      <MobileStepper
        className={classes.bottom}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="large"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Volgende
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Terug
          </Button>
        }
      />
    </div>
  );
}
