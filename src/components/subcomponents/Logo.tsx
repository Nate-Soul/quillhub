import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
        <Image src="/media/images/logos/logo-light.svg" alt="" height={40} width={107} />      
    </Link>
  )
}

export default Logo;
