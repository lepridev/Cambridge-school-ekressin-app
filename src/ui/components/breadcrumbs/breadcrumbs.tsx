import { Typograpy } from "@/ui/design-system/typograpy/typography";
import clsx from "clsx";
import { useRouter } from "next/router";
import { RiHome3Fill } from "react-icons/ri";
import { v4 } from "uuid";
import { Container } from "../container/container";
import Link from "next/link";

export const Breadcrumb = () => {
  const router = useRouter();

  const asPath = router.asPath;
  const segments = asPath.split("/");
  const lastSegment = segments[segments.length - 1];
  segments[0] = "accueil";

  const view = segments.map((path, index) => (
    <div key={v4()}>
      <Link
        href={index > 0 ? `/${segments.slice(1, index + 1).join("/")}` : "/"}
      >
        <Typograpy
          variant="caption3"
          component="span"
          className={clsx(
            path !== lastSegment ? "text-gray-600" : "text-gray",
            "capitalize hover:text-gray animate"
          )}
        >
          {path !== "accueil" ? (
            path.replace(/-/g, " ")
          ) : (
            <RiHome3Fill size={18} className="inline -mt-1.5" />
          )}
        </Typograpy>
        {path !== lastSegment && (
          <Typograpy
            variant="caption2"
            component="span"
            className="ml-2 text-gray-600"
          >
            /
          </Typograpy>
        )}
      </Link>
    </div>
  ));

  return (
    <Container className="flex items-center gap-2 py-7 mt-24">{view}</Container>
  );
};
