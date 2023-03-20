import classes from "./Card.module.css";
import { Button, CardTitle } from "../stylecomponent/CustomForCard";
const Card = (props) => {
  //! event hadaling
  const downloadButtonHandler = () => {
    console.log("Download Button Click");
  };
  const buyButtonHandler = () => [console.log("Buy Button Click")];

  //! jsx element
  return (
    <div className={classes.card}>
      <CardTitle margin="7px" h1color={props.cardTitleColor}>
        {props.CardTitle}
      </CardTitle>
      <div>
        <img src={props.imgUrl} alt="Photo" />
      </div>
      <Button onClick={downloadButtonHandler} bgColor="#312933" border="none">
        Download
      </Button>
      <Button
        onClick={buyButtonHandler}
        bgColor="transparent"
        border="solid 2px #312933"
      >
        Buy Print
      </Button>
    </div>
  );
};

export default Card;
