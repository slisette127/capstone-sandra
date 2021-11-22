import react from "react";

    
export default function Navbar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

   const handleChange = (event) => {
     setAuth(event.target.checked);
   };

   const handleMenu = (event) => {
     setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
     setAnchorEl(null);
   };
        return (
            <div>
                hello
            </div>
        )
    }
    
