import { Button, Box, styled, ButtonGroup } from "@mui/material";
import React from "react";

const Buttonqunatity = () => {
  return (
    <ButtonGroup style={{ marginTop: 30 }}>
      <Button>-</Button>
      <Button disabled style={{ border: "transparent", margin: "0 5" }}>
        1
      </Button>
      <Button>+</Button>
    </ButtonGroup>
  );
};

export default Buttonqunatity;
