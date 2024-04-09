import { Lora } from "next/font/google";

export const lora = Lora({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"]
})