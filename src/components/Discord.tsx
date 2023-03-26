import Link from "./Link";
import logo from "@/assets/inv_pet_frostwolfpup.jpg";
import { useState } from "react";

const Discord = () => {
  const wowMadeEasy = "https://www.wowmadeeasy.com/";
  const discordInviteLink = import.meta.env.VITE_DISCORD_INVITE_LINK;
  const discordWidgetId = import.meta.env.VITE_DISCORD_WIDGET_ID;

  const [isWowMadeEasyLinkActive, setIsWowMadeEasyLinkActive] =
    useState<boolean>(false);

  return (
    <div
      className="center justify-center w-full py-16 scroll-mt-[136px] flex gap-y-8 gap-x-6"
      id="join-us"
    >
      <div className="basis-2/4 w-px border border-blue rounded p-16 flex flex-col gap-y-8">
        <p className="text-yellow-400">
          <strong className="font-bold text-center text-yellow-400">
            No Pressure
          </strong>{" "}
          started as a European counterpart to{" "}
          <Link
            href={wowMadeEasy}
            isActive={isWowMadeEasyLinkActive}
            setIsActive={setIsWowMadeEasyLinkActive}
          >
            WoW Made Easy
          </Link>{" "}
          - a community built on enjoying Dragonflight together, with no
          pressure
        </p>
        <div className="my-4 p-8 border-blue border rounded-xl flex items-center justify-evenly gap-6">
          <img className="rounded-full" src={logo} />
          <div className="flex flex-col align-center">
            <h3 className="text-xl mb-4">No Pressure Community</h3>
            <a
              className="hover:bg-green ease-in-out duration-300 bg-blue rounded p-3 join-us cursor-pointer"
              href={discordInviteLink}
              rel="noreferrer"
              target="_blank"
            >
              Join us
            </a>
          </div>
        </div>
      </div>
      <div className="w-px basis-2/4">
        <iframe
          height="500"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          src={`https://discord.com/widget?id=${discordWidgetId}&theme=dark`}
          width="500"
        />
      </div>
    </div>
  );
};

export default Discord;
