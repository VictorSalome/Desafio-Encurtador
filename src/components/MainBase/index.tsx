import { Box, TextField } from "@mui/material";

export const MainBase = () => {
  const valorPredefinido = "35.713.571";
  return (
    <main className="bg-lineBackground">
      <div className="flex flex-col items-center p-5">
        <h1 className="font-bold text-vermelho-100 ">HITS</h1>
        <Box maxWidth={100} maxHeight={100}>
          <TextField
            variant="outlined"
            value={valorPredefinido}
            size="small"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            sx={{
              "& .MuiInputBase-input": {
                fontSize: "0.80rem",
              },
            }}
          />
        </Box>
        <p className="font-bold text-textoApoio-100">Clicks em links</p>
      </div>
    </main>
  );
};
