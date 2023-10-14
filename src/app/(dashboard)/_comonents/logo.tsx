import Image from "next/image";

export const Logo = () => {
    return (
        <Image 
            width={160}
            height={160}
            alt="logo"
            src='/logo.svg'
        />
    );
}