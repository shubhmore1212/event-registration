import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const FooterContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Made with `}
        <Box component="span" sx={{ color: "red" }}>
          ❤️
        </Box>
        {` by `}
        <Link target="_blank" href="#">
          Event EXPO
        </Link>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          "& :not(:last-child)": { mr: 4 },
        }}
      >
        <Link target="_blank" href="#">
          EventEXPO
        </Link>
        <Link target="_blank" href="#">
          Contact
        </Link>
        <Link target="_blank" href="#">
          Support
        </Link>
      </Box>
    </Box>
  );
};

export default React.memo(FooterContent);
