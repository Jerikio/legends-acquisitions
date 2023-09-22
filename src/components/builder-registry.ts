import { type RegisteredComponent } from "@builder.io/sdk-qwik";
import button from "./button";
import FacebookIcon from "./icons/facebook";
import linkedin from "./icons/linkedin";

/**
 * This array is used to integrate custom components within Builder.
 * https://www.builder.io/c/docs/custom-components-intro
 *
 * These components will be found the "Custom Components"
 * section of Builder's visual editor.
 * You can also turn on "components only mode" to limit
 * editing to only these components.
 * https://www.builder.io/c/docs/guides/components-only-mode
 */
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    name: "CustomButton",
    component: button,
    inputs: [
      {
        type: "string",
        name: "text",
        defaultValue: "Click me!",
      },
      {
        type: "string",
        name: "color",
        enum: ["default", "primary", "secondary", "black"],
        defaultValue: "default",
      },
      {
        type: "string",
        name: "href",
      },
    ],
  },
  {
    name: "FacebookIcon",
    component: FacebookIcon,
  },
  {
    name: "LinkedInIcon",
    component: linkedin,
  },
];
