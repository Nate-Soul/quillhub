import Link from "next/link";
import Logo from "./subcomponents/Logo";
import Socials from "./subcomponents/Socials";
import EmailSub from "./subcomponents/EmailSub";


const MainFooter = () => {

    const quickLinks = [
        {
            text: "Home",
            url: "/"
        },
        {
            text: "About Us",
            url: "/#aboutUs"
        },
        {
            text: "Profile",
            url: "/dashboard"
        },
        {
            text: "Community",
            url: "/community"
        },
        {
            text: "Contact Us",
            url: "/contact"
        },
    ];

    const companyLinks = [
        {
            text: "Privacy policy",
            url: "#"
        },
        {
            text: "FAQs",
            url: "#"
        },
        {
            text: "Support",
            url: "#"
        },
        {
            text: "Terms & Conditions",
            url: "#"
        },
    ];

  return (
    <>
    <EmailSub/>
    <footer className="bg-[url(/media/images/gallery/smiling-woman-working-on-laptop.jpg)] bg-no-repeat bg-center bg-cover py-16 relative text-white">
    <div className="absolute bottom-0 top-0 left-0 right-0 bg-black bg-opacity-60"></div>
      <div className="container relative grid grid-cols-4 gap-8">
        <div className="flex flex-col gap-y-4">
            <Logo/>
            <p>
                QuillHub is a web and mobile app designed to help you build and maintain a consistent writing habit through goal setting, progress tracking, and a motivational reward system.
            </p>
            <Socials/>
        </div>
        <div className="flex flex-col gap-y-4">
            <h6 className="font-bold text-2xl capitalize">Contact Us</h6>
            <ul className="flex flex-col gap-y-3">
                <li>
                    <Link href="tel:+234000000000" className="hover:text-primary-500">+234 000 657 000</Link>
                </li>
                <li>
                    <Link href="mailto:natesoul.dev@gmail.com" className="hover:text-primary-500">Quillhub985@gmail.com</Link>
                </li>
            </ul>
            <address>
                Port Harcourt, Nigeria
            </address>
        </div>
        <div className="flex flex-col gap-y-4">
            <h6 className="font-bold text-2xl capitalize">Quick Links</h6>
            <ul className="flex flex-col gap-y-3">
            {quickLinks?.map((quickLink, quickLinkIndex) => (
                <li key={quickLinkIndex} className="hover:text-primary-500">
                    <Link href={quickLink.url}>{quickLink.text}</Link>
                </li>
            ))}
            </ul>
        </div>
        <div className="flex flex-col gap-y-4">
            <h6 className="font-bold text-2xl capitalize">Company</h6>
            <ul className="flex flex-col gap-y-3">
            {companyLinks?.map((companyLink, companyLinkIndex) => (
                <li key={companyLinkIndex} className="hover:text-primary-500">
                    <Link href={companyLink.url}>{companyLink.text}</Link>
                </li>
            ))}
            </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default MainFooter
