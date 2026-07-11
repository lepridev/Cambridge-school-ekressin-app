import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

const ActiveLink = ({ href, children }: Props) => {
  const router = useRouter();

  const isActive = useMemo(() => {
    return router.pathname === href;
  }, [router.pathname, href]);

  return (
    <Link
      href={href}
      className={clsx(isActive && "text-primary font-medium animate")}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
