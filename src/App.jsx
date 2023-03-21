import classes from "./App.module.css";
import { Flex, H1, P, HR } from "./stylecomponent/CustomForMain";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className={classes.App}>
        <Flex padding="4rem 0rem" fdirection="column">
          <P letterspacing=".7rem">SPACE</P>
          <H1 font="5.635rem" width="50rem">
            Beyond the Gradient
          </H1>
          <HR />
          <P letterspacing="1px" opacity="0.6">
            Space inspired wallpaper series at high resolution with retro colors
            and a subtle texture.
          </P>
        </Flex>
        <Flex padding="4rem 0rem" gap="2.5rem" width="65rem">
          <Card
            cardTitleColor="#DE6E31"
            CardTitle="Heat."
            imgUrl="https://space.workbymark.nl/assets/images/image01.jpg?v=7e026bc7"
          />
          <Card
            cardTitleColor="#B8636B"
            CardTitle="Halo."
            imgUrl="https://space.workbymark.nl/assets/images/image02.jpg?v=7e026bc7"
          />
          <Card
            cardTitleColor="#879C91"
            CardTitle="Gaint."
            imgUrl="https://space.workbymark.nl/assets/images/image03.jpg?v=7e026bc7"
          />
        </Flex>
        <Footer />
      </div>
    </>
  );
}

export default App;
