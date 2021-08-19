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
      backgroundColor: theme.palette.background.default
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
  const maxSteps = shuffledSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>Oefen de klank</Typography>
      </Paper>
      <Box textAlign="center">
        <Typography variant="h1" component="h2" gutterBottom>
          {shuffledSteps[activeStep].label}
        </Typography>
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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
