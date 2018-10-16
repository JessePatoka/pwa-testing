import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  root: {
    flexGrow: 1,
    background: "lightgrey",
    padding: "0 20px",
    color: "white"
  },
  grow: {
    flexGrow: 1
  }
};

function HeaderBar(props) {
  const { classes } = props,
    state = {
      storeNumber: "9999",
      storeName: "Menomonee Falls",
      effectiveDate: "July 27th"
    };
  return (
    <div
      className={classes.root}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <Typography variant="body2" align="left" color="textSecondary">
          {state.storeNumber}
        </Typography>
        <Typography variant="body2" align="left" color="textSecondary">
          {state.storeName}
        </Typography>
      </div>
      <div>
        <Typography variant="body2" align="left" color="textSecondary">
          Effective
        </Typography>

        <Typography variant="body2" align="left" color="textSecondary">
          {state.effectiveDate}
        </Typography>
      </div>
    </div>
  );
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderBar);
