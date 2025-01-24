"use cleint";

import { useContext } from "react";
import { wixClientContext } from "../_context/WixContext";

export function useWixCleint() {
  return useContext(wixClientContext);
}
