"use client";

import React, { useState } from "react";
import { Box, Modal, Button, Typography } from "@mui/material";

interface IProps {
  isSignIn?: boolean;
}

const LoginModal = ({ isSignIn = true }: IProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (
    signInNode: React.ReactNode,
    signUpNode: React.ReactNode
  ) => {
    return isSignIn ? signInNode : signUpNode;
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className={
          isSignIn
            ? "bg-blue-400 text-white border p-1 px-4 rounded mr-3"
            : "border p-1 px-4 rounded"
        }
      >
        {renderContent("Sign in", "Sign up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            width: 400,
            boxShadow: 24,
            p: 4,
          }}
        >
          {renderContent("Sign in", "Sign up")}
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
