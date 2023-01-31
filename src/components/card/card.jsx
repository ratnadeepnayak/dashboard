import "./card.scss";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const CardSales = ({ productName }) => {
  return (
    <>
      <div className="column">
        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/images/download.jpg"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {productName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productName} provides a good analytic on wide variety of
                analytical data
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Contact our Sales Team</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};
