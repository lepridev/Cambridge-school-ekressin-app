import clsx from "clsx";

interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  theme?:
    | "black"
    | "gray"
    | "white"
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning";
  weight?: "regular" | "medium";
  className?: string;
  children: React.ReactNode;
}

export const Typograpy = ({
  variant = "h3",
  component: Component = "div",
  theme = "black",
  weight = "regular",
  className,
  children,
}: Props) => {
  let variantStyle: string = "",
    colorStyles: string = "";

  switch (variant) {
    case "display":
      variantStyle = "text-8xl";
      break;
    case "h1":
      variantStyle = "md:text-7xl text-6xl";
      break;
    case "h2":
      variantStyle = "md:text-6xl text-5xl";
      break;
    case "h3": //Default
      variantStyle = "md:text-5xl text-4xl";
      break;
    case "h4":
      variantStyle = "md:text-4xl text-3xl";
      break;
    case "h5":
      variantStyle = "md:text-3xl text-2xl";
      break;
    case "lead":
      variantStyle = "md:text-2xl text-lg";
      break;
    case "body-lg":
      variantStyle = "md:text-lg text-base";
      break;
    case "body-base":
      variantStyle = "md:text-base text-sm";
      break;
    case "body-sm":
      variantStyle = "text-sm";
      break;
    case "caption1":
      variantStyle = "caption1";
      break;
    case "caption2":
      variantStyle = "caption2";
      break;
    case "caption3":
      variantStyle = "caption3";
      break;
    case "caption4":
      variantStyle = "caption4";
      break;
  }

  switch (theme) {
    case "black":
      colorStyles = "text-gray";
      break;
    case "gray":
      colorStyles = "text-gray-700";
      break;
    case "white":
      colorStyles = "text-white";
      break;
    case "primary":
      colorStyles = "text-primary";
      break;
    case "secondary":
      colorStyles = "text-secondary";
      break;
    case "danger":
      colorStyles = "text-alert-danger";
      break;
    case "success":
      colorStyles = "text-alert-success";
      break;
    case "warning":
      colorStyles = "text-alert-warning";
      break;
  }

  return (
    <Component
      className={clsx(
        variantStyle,
        colorStyles,
        weight === "medium" && "font-medium",
        className
      )}
    >
      {children}
    </Component>
  );
};
