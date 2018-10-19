import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  root: {
    flexGrow: 1,
    background: "white",
    padding: "50px 20px",
    color: "black"
  },
  grow: {
    flexGrow: 1
  }
};

const percentToDecimal = decimal => {
  return Math.floor(decimal * 100) + "%";
};

const calcScanProgress = (total, scanCount) => {
  return percentToDecimal(scanCount / total);
};

function MainDash(props) {
  const { classes, onHandCount, scannedCount } = props;

  return (
    <div
      className={classes.root}
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div>
        <Typography variant="h3" align="center" color="textPrimary">
          {onHandCount}
        </Typography>
        <Typography variant="body2" align="center" color="textPrimary">
          On Hand
        </Typography>
      </div>
      <div>
        <Typography variant="h3" align="center" color="textPrimary">
          {calcScanProgress(onHandCount, scannedCount)}
        </Typography>

        <Typography variant="body2" align="center" color="textPrimary">
          Scanned
        </Typography>

        <Typography variant="body2" align="center" color="textPrimary">
          {scannedCount} Items
        </Typography>
      </div>
    </div>
  );
}

MainDash.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainDash);
