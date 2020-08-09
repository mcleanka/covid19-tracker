import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";

function InfoBox({ title, cases, isRed, active, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`App__infoBox ${active && "App__infoBox--selected"} ${
        isRed && "App__infoBox--red"
      }`}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            className={`App__infoBox__cases ${!isRed && "App__infoBox__green"}`}
            variant="h5"
            component="h2"
          >
            {cases}
          </Typography>
          <Typography
            className="App__infoBox__total"
            variant="body2"
            component="p"
          >
            {total} Total
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InfoBox;
