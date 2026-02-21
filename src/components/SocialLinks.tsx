import { profile } from "@/data/profile";

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
};

export function SocialLinks({ className, linkClassName }: SocialLinksProps) {
  return (
    <div className={className}>
      {profile.socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          className={linkClassName}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}