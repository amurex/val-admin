import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

const Footer = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

  return (
    <Box 
    sx={{
        marginTop: 'calc(10% + 60px)',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }} component="footer" square variant="outline"
    >
        <div className="footer"> Footer</div>
    </Box>
    
  )
}

export default Footer;