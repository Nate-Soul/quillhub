import Link from "next/link";

const Socials = () => {

  const socialLinks = [
    {
      url: "https://facebook.com/quillhub",
      icon: "bi-facebook"
    },
    {
      url: "https://youtube.com/quillhub",
      icon: "bi-youtube"
    },
    {
      url: "https://t.me/quillhub",
      icon: "bi-telegram"
    },
    {
      url: "https://api.whatsapp.com/quillhub",
      icon: "bi-whatsapp"
    },
  ];

  return (
    <ul className="flex items-center gap-x-2 text-xl">
    {socialLinks?.map((socialLink, socialLinkIndex) => (
      <li key={socialLinkIndex}>
        <Link href={socialLink.url} className="h-10 w-10 bg-white text-secondary-500 inline-flex justify-center items-center rounded-lg">
          <span className={socialLink.icon}></span>
        </Link>
      </li>
    ))}
    </ul>
  )
}

export default Socials
