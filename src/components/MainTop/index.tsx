import backgroundMain from "../../assets/background-home.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const MainTop = () => {
  return (
    <main
      className="bg-center bg-cover text-white h-auto"
      style={{ backgroundImage: `url(${backgroundMain})` }}
    >
      <div className="flex flex-col w-full items-center p-9 h-56 ">
        <h1 className="font-bold text-lg  ">Encurte seus links.</h1>
        <p className="text-xs  text-center ">
          Links são longos. Encurte os links que você deseja compartilhar, e
          acompanhe enquanto viajam através da internet
        </p>
        <div className="flex flex-row p-2 justify-between">
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
    </main>
  );
};
