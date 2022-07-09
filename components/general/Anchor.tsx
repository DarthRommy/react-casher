import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";

type AnchorProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "children"> &
  Omit<PropsWithChildren<LinkProps>, "href" | "query"> & {
    pathname: string;
    query?: { [key: string]: string };
  };

const Anchor: FC<AnchorProps> = ({
  pathname,
  query,
  children,
  as,
  passHref,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  ...props
}) => {
  const forLink: LinkProps = {
    href: {
      pathname,
      query,
    },
    as,
    passHref,
    replace,
    scroll,
    shallow,
    prefetch,
    locale,
  };
  return pathname.startsWith("/") ? (
    <Link {...forLink}>
      <a {...props}>{children}</a>
    </Link>
  ) : (
    <a href={pathname} {...props} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default Anchor;
