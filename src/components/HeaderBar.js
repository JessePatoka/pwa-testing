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
  const { classes, storeNumber, storeName, effectiveDate } = props;
  return (
    <div
      className={classes.root}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <Typography variant="body2" align="left" color="textSecondary">
          {storeNumber}
        </Typography>
        <Typography variant="body2" align="left" color="textSecondary">
          {storeName}
        </Typography>
      </div>
      <div>
        <Typography variant="body2" align="left" color="textSecondary">
          Effective
        </Typography>

        <Typography variant="body2" align="left" color="textSecondary">
          {effectiveDate.getMonth() + 1}/{effectiveDate.getDate()}/
          {effectiveDate.getFullYear()}
        </Typography>
      </div>
    </div>
  );
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired,
  storeName: PropTypes.string.isRequired,
  storeNumber: PropTypes.number.isRequired,
  effectiveDate: PropTypes.instanceOf(Date).isRequired
};

export default withStyles(styles)(HeaderBar);
