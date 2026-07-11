import clsx from "clsx";
import Image from "next/image";

interface Props {
  size?: "small" | "medium" | "large";
  src: string;
  alt: string;
}

export const Avatar = ({ size = "medium", src, alt }: Props) => {
  let sizeStyle: string = "";

  switch (size) {
    case "small":
      sizeStyle = "w-[35px] h-[35px] ";
      break;
    case "medium":
      sizeStyle = "w-[55px] h-[55px]";
      break;
    case "large":
      sizeStyle = "w-[70px] h-[70px]";
      break;
  }

  return (
    <div className={clsx(sizeStyle, "bg-gray-400 rounded-full relative")}>
      <Image
        fill
        src={src}
        alt={alt}
        className="object-cover object-center rounded-full"
      />
    </div>
  );
};
