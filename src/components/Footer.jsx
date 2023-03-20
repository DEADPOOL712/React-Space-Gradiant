import { P } from "../stylecomponent/CustomForMain";
const footerStyle = {
  padding: "1rem 0rem",
};
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <P letterspacing="1px" opacity="0.6" font=".9rem">
        Develop by developer with Love :)
      </P>
    </footer>
  );
};

export default Footer;
