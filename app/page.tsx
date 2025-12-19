import { ProfilePager } from "@/components/ProfilePager";

export default function Page() {
  const profile = {
    handle: "ko4lax",
    displayName: "Koala",
    status: "Do you wonder where she is this afternoon?",
    about:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    likes: ["Late-night Discord calls", "Minimalist UI", "Lo-fi playlists"],
    dislikes: ["Spam pings", "Crowded servers", "Clunky interfaces"],
    favoriteGame: "Minecraft",
    games: ["Minecraft", "Valorant", "Dead by Daylight", "Roblox"],
    connectedAccounts: {
      valorantId: "Koala#Moon",
      robloxProfile: "https://www.roblox.com/users/4458264566/profile",
      minecraftName: "Ko4lax",
      epicId: "Ko4lax.",
      steamProfile: "https://steamcommunity.com/id/Dreamvalian/",
      spotifyProfile: "https://open.spotify.com/user/yrov2tazzzb149l3yn72dplhv",
      spotifyPlaylist:
        "https://open.spotify.com/playlist/5ECJnDi2T1ZjzCENB6mjaq?si=07201cd86c4f4b88",
    },
    links: [
      {
        label: "Discord",
        value: "baejuhyun",
        subtle: false,
      },
      {
        label: "Twitter",
        value: "@ko4lax",
        href: "https://twitter.com/ko4lax",
      },
      {
        label: "GitHub",
        value: "dreamvalian",
        href: "https://github.com/dreamvalian",
      },
      {
        label: "Personal",
        value: "koala.is-a.dev",
        href: "https://koala.is-a-dev",
      },
    ],
    highlights: [
      {
        title: "Discord bots for small servers",
        description:
          "Lightweight utilities for moderation, role management, and status pings. Focused on being invisible until you need them.",
      },
      {
        title: "Thread: small UI patterns",
        description:
          "A short Twitter/X thread collecting quiet UI details I like across the web — micro-layouts, typography, and whitespace choices.",
      },
      {
        title: "Nightly notes",
        description:
          "A tiny personal log I update a few times a week: small experiments, what I’m learning, and things worth revisiting.",
      },
    ],
  };

  return (
    <main className='min-h-screen flex items-center justify-center px-3 py-2 sm:px-8 sm:py-6'>
      <div className='w-full max-w-4xl'>
        <ProfilePager profile={profile} />
      </div>
    </main>
  );
}
