import Link from "./Link";
import discord from "@/assets/discord.svg";
import github from "@/assets/github.svg";
import { useState } from "react";

const Footer = () => {
  const [isCreditLinkActive, setIsCreditLinkActive] = useState<boolean>(false);

  return (
    <footer className="bg-purple text-gold text-center py-4">
      <p className="text-sm">
        <Link
          href="https://github.com/drunkenvalley/no-pressure"
          isActive={isCreditLinkActive}
          rel="noreferrer"
          setIsActive={setIsCreditLinkActive}
          target="_blank"
        >
          Made with 🦶 by members of the No Pressure community.
        </Link>
      </p>
      <div className="flex items-center justify-center mt-4">
        <a
          href={import.meta.env.VITE_DISCORD_INVITE_LINK}
          rel="noreferrer"
          target="_blank"
        >
          <img className="w-6 h-6 m-2" src={discord} />
        </a>
        <a
          href="https://github.com/drunkenvalley/no-pressure/graphs/contributors"
          rel="noreferrer"
          target="_blank"
        >
          <img className="w-6 h-6 m-2" src={github} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
