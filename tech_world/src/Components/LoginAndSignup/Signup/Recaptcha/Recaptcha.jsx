import { Box, Text } from "@chakra-ui/react";
import React from "react";
import capcha from "./Recaptcha.module.css";

const Recaptcha = () => {
  return (
    <div className={capcha.captcha}>
      <div className={capcha.spinner}>
        <label>
          <input type="checkbox" />
          <span className={capcha.checkmark}>
            <span>&nbsp;</span>
          </span>
        </label>
      </div>
      <Box>
        <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.2rem" }}>
          I'm not a robot
        </Text>
      </Box>
      <div className={capcha.captcha_logo}>
        <img
          alt="recaptcha"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/2048px-RecaptchaLogo.svg.png"
        />
        <p>Privacy - Terms</p>
      </div>
    </div>
  );
};

export default Recaptcha;
