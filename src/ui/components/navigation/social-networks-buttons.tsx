import { Sociallinks } from "@/ui/components/navigation/app-links";
import { Button } from "@/ui/design-system/button/button";
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface Props {
  theme?: "accent" | "secondary" | "gray";
  className?: string;
}

const action = () => {
  console.log("Hello world !");
};

export const SocialNetWorksButton = ({
  className,
  theme = "accent",
}: Props) => {
  const icoList = Sociallinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme={theme}
      icon={{
        icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill,
      }}
      baseUrl={socialNetwork.baseUrl}
      linktype={socialNetwork.type}
      action={action}
    />
  ));

  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {icoList}
    </div>
  );
};
