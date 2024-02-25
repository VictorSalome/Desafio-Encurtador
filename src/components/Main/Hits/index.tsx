import { TextField } from "@mui/material";
import { Dados } from "../index";

interface TopFiveProps {
  apiInfo: Dados[];
}

export const Hits = ({ apiInfo }: TopFiveProps) => {
  const totalHits = apiInfo.reduce((acc, curr) => acc + parseInt(curr.hits), 0);
  const formattedTotalHits = totalHits.toLocaleString();

  return (
    <section className="bg-lineBackground h-36 md:h-auto">
      <h1 className="font-bold text-vermelho-100 mb-1  flex justify-center md:text-3xl  md:font-medium md:flex ">
        HITS
      </h1>
      <div className="flex flex-col items-center p-2 md:p-20">
        <div className="flex items-center justify-center">
          <TextField
            variant="outlined"
            value={formattedTotalHits}
            size="small"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            sx={{
              width: "6rem",
              "& .MuiInputBase-input": {
                fontSize: "1.5rem",
                color: "red",
              },
              "@media (min-width: 768px)": {
                width: "0.3",
                "& .MuiInputBase-input": {
                  fontSize: "2rem",
                  color: "red",
                },
              },
            }}
          />
        </div>
        <p className="font-bold text-textoApoio-100">Clicks em links.</p>
      </div>
    </section>
  );
};
