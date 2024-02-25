import backgroundMain from "../../../assets/background-home.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Hero = () => {
  return (
    <section
      className="bg-center bg-cover text-white h-64 md:h-1/3"
      style={{ backgroundImage: `url(${backgroundMain})` }}
    >
      <div className="flex flex-col w-full items-center p-9 h-56 md:h-auto md:gap-7 md:p-10">
        <h1 className="font-bold text-xl md:text-4xl ">Encurte seus links.</h1>
        <div>
          <p className="text-[0.7rem]  text-center md:text-xl md:text-center">
            Links são longos. Encurte os links que você deseja compartilhar,
          </p>
          <p className="text-[0.7rem] text-center  md:text-xl md:text-center ">
            e acompanhe enquanto viajam através da internet.
          </p>
        </div>

        <div className="flex flex-row p-2 justify-center items-center md: gap-2">
          <TextField
            id="standard-basic"
            label="Cole o seu link aqui"
            variant="standard"
            size="small"
            fullWidth
            color="warning"
            sx={{
              "& label.Mui-focused": {
                color: "#FF6C00", // Define a cor quando o campo está focado
              },
              "& label": {
                color: "#FF6C00", // Define a cor padrão do label
              },
              "& .css-w8lmpe-MuiInputBase-root-MuiInput-root::before": {
                borderBottom: "1px solid #FF6C00",
              },
              "@media (min-width: 768px)": {
                // Mude para o tamanho desejado no breakpoint md (768px)
                width: "300px", // Por exemplo, altera a largura para 300px
                fontSize: "1rem", // Define o tamanho da fonte para 1rem (ou outro tamanho desejado)
              },
            }}
          />
          <Button
            variant="contained"
            size="small"
            color="warning"
            sx={{
              width: "100px",
              height: "30px",
              fontSize: "0.75rem",
              padding: "0",
              marginTop: "0.85rem",
            }}
          >
            ENCURTAR
          </Button>
        </div>
      </div>
    </section>
  );
};
