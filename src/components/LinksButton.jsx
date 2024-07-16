/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { IconButton, Tooltip } from "@chakra-ui/react";

export default function LinksButton({ label, className, route, icon }) {
  return (
    <Tooltip label={label} placement="bottom">
      <Link>
        <IconButton
          aria-label={label}
          variant="ghost"
          icon={icon}
          border={"1px solid #444c52"}
        />
      </Link>
    </Tooltip>
  );
}
