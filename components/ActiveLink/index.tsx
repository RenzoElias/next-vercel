import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

interface Props {
  text: string;
  href: string;
}

export const ActiveLink : FC<Props> = ({href, text}) => {

  // const router = useRouter();
  // console.log(router);
  const {asPath} = useRouter();
  console.log(asPath);

  return (
      <Link href={href}>
        <a style={ asPath === href ? style : undefined }>{text}</a>
      </Link>
  )
}
