import backgroundMain from "../../../assets/background-home.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CopyToClipboard from "react-copy-to-clipboard";

export const Hero = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShortenUrl = async () => {
    try {
      const response = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          long_url: longUrl,
        },
        {
          headers: {
            Authorization: "Bearer 6f29e4486332feb54a1af46dbd68c85a77515981",
            "Content-Type": "application/json",
          },
        }
      );
      setShortUrl(response.data.link);
      toast.success("Link encurtado com sucesso!");
    } catch (error) {
      console.error("Erro ao encurtar link:", error);
      toast.error("Erro ao encurtar o link. Por favor, tente novamente.");
    }
  };

  const handleReset = () => {
    setShortUrl("");
    setLongUrl("");
  };

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

        {shortUrl ? (
          <div className="mt-4">
            <p className="text-sm text-center text-white">URL Encurtada:</p>
            <div className="flex items-center justify-center">
              <TextField
                id="short-url-input"
                variant="standard"
                label="URL:"
                size="small"
                fullWidth
                value={shortUrl}
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  sx: { color: "white" }, // Estilo da label
                }}
                sx={{
                  width: "100%", // Expandindo para a largura total
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    border: "none",
                    backgroundColor: "transparent",
                  },
                }}
              />
              <CopyToClipboard
                text={shortUrl}
                onCopy={() => toast.success("URL copiada!")}
              >
                <Button
                  variant="contained"
                  size="small"
                  color="warning"
                  sx={{
                    height: "30px",
                    fontSize: "0.75rem",
                    padding: "0",
                    marginTop: "0.85rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  Copiar
                </Button>
              </CopyToClipboard>
              <Button
                variant="contained"
                size="small"
                color="warning"
                onClick={handleReset}
                sx={{
                  height: "30px",
                  fontSize: "0.65rem",
                  padding: "0",
                  marginTop: "0.85rem",
                  marginLeft: "0.5rem",
                }}
              >
                Encurtar outra URL
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-row p-2 justify-center items-center md: gap-2">
            <TextField
              id="standard-basic"
              label="Cole o seu link aqui"
              variant="standard"
              size="small"
              fullWidth
              color="warning"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              sx={{
                "& label.Mui-focused": {
                  color: "#FF6C00",
                },
                "& label": {
                  color: "#FF6C00",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
            <Button
              variant="contained"
              size="small"
              color="warning"
              onClick={handleShortenUrl}
              sx={{
                height: "30px",
                fontSize: "0.75rem",
                padding: "0",
                marginTop: "0.85rem",
              }}
            >
              ENCURTAR
            </Button>
          </div>
        )}
        <ToastContainer />
      </div>
    </section>
  );
};
