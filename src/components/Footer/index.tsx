import { Grid } from "@mui/material";
import FooterFacebook from "../../assets/icon-facebook.png";
import FooterTwiter from "../../assets/icon-twitter.png";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <div className="flex flex-row justify-between items-center md:px-36 md:gap-1 md:p-3 ">
            <h1 className="font-bold text-vermelho-100 ml-10 md:text-2xl ">
              ch.dc
            </h1>
            <div className="flex flex-row gap-2 px-10 md:gap-7">
              <img
                src={FooterFacebook}
                alt="Footer-Facebook"
                className="w-5 h-5 md:w-8 md:h-8"
              />
              <img
                src={FooterTwiter}
                alt="Footer-Twiter"
                className="w-5 h-5 md:w-8 md:h-8"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};
