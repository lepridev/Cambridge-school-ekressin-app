import clsx from "clsx";
import { type } from "os";
import { ReactNode } from "react";
import { Spinner } from "../spinner/spinner";

import { IconProps } from "@/types/icon-props";
import { LinkType, LinkTypes } from "@/lib/link-type";
import Link from "next/link";

interface Props {
  variant?:
    | "accent"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "outline"
    | "disabled"
    | "ico";
  size?: "small" | "medium" | "large";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray" | "alert";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
  baseUrl?: string;
  linktype?: LinkType;
  action?: Function;
  type?: "button" | "submit";
  fullwidth?: boolean;
  className?: string;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
  baseUrl,
  linktype = "interne",
  action = () => {},
  type = "button",
  fullwidth = false,
  className,
}: Props) => {
  let variantStyle: string = "",
    sizeStyle: string = "",
    icoSize: number = 0;

  switch (variant) {
    case "accent": //Default
      variantStyle = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyle =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "success":
      variantStyle =
        "bg-alert-success hover:bg-alerte-success/75 text-white rounded";
      break;
    case "warning":
      variantStyle =
        "bg-alert-warning hover:bg-alerte-warning/75 text-white rounded";
      break;
    case "danger":
      variantStyle =
        "bg-alert-danger hover:bg-alerte-danger/75 text-white rounded";
      break;
    case "outline":
      variantStyle =
        "bg-white hover:bg-gray-400/50 border border-gray-900 rounded";
      break;
    case "disabled":
      variantStyle =
        "bg-gray-400 border border-gray-500 rounded cursor-not-allowed";
      break;
    case "ico":
      if (iconTheme === "accent") {
        variantStyle =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyle =
          "bg-primary-200 hover:bg-primary-300 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyle = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
      }
      if (iconTheme === "alert") {
        variantStyle =
          "bg-alert-danger hover:bg-alerte-danger/75 text-white rounded-full";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyle = `text-caption3 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      } `;
      icoSize = 18;
      break;
    case "medium": //Default
      sizeStyle = `text-caption2 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      } `;
      icoSize = 20;
      break;
    case "large":
      sizeStyle = `text-caption1 font-medium  ${
        variant === "ico"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      } `;
      icoSize = 24;
      break;
  }

  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center">
          {variant === "accent" || variant === "ico" ? (
            <Spinner variant="white" />
          ) : (
            <Spinner variant="primary" />
          )}
        </div>
      )}
      <div className={clsx(isLoading && "invisible")}>
        {icon && variant === "ico" ? (
          <icon.icon size={icoSize} />
        ) : (
          <div
            className={clsx(icon && "flex items-center justify-center gap-2 ")}
          >
            {icon && iconPosition === "left" && <icon.icon size={icoSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={icoSize} />}
          </div>
        )}
      </div>
    </>
  );

  const handleClick = () => {
    if (action) {
      action();
    }
  };

  const buttonElement = (
    <button
      type={type}
      className={clsx(
        variantStyle,
        sizeStyle,
        icoSize,
        isLoading && "cursor-wait",
        fullwidth && "w-full",
        "relative",
        "animate",
        className
      )}
      onClick={handleClick}
      disabled={disabled || isLoading ? true : false}
    >
      {buttonContent}
    </button>
  );

  if (baseUrl) {
    if (linktype === LinkTypes.EXTERNE) {
      return (
        <a href={baseUrl} target="_blank">
          {buttonElement}
        </a>
      );
    } else {
      return <Link href={baseUrl}>{buttonElement}</Link>;
    }
  }

  // Si baseUrl n'est pas passé alors on joue le button normalement

  return buttonElement;
};
