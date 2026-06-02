export const aspectRatios = ["16:9", "1:1", "9:16"] as const;
export type AspectRatio = (typeof aspectRatios)[number];

export const thumbnailStyles = ["Bold & Graphic", "Minimalist & Clean", "Photorealistic", "Illustrated", "Tech/Futuristic"] as const;
export type ThumbnailStyle = (typeof thumbnailStyles)[number];

export const colorSchemes = [
  { id: "emerald", name: "Emerald Core", colors: ["#059669", "#10B981", "#34D399"] },
  { id: "cyber", name: "Cyber Punk", colors: ["#FF00FF", "#00FFFF", "#7000FF"] },
  { id: "sunset", name: "Sunset Vibes", colors: ["#F97316", "#FB923C", "#FDBA74"] },
  { id: "royal", name: "Royal Gold", colors: ["#B45309", "#D97706", "#F59E0B"] },
  { id: "midnight", name: "Midnight Blue", colors: ["#1E3A8A", "#1E40AF", "#3B82F6"] },
  { id: "neon", name: "Neon Acid", colors: ["#BEF264", "#84CC16", "#65A30D"] },
  { id: "monochrome", name: "Ghost White", colors: ["#F8FAFC", "#E2E8F0", "#CBD5E1"] },
  { id: "deep", name: "Deep Obsidian", colors: ["#020617", "#0F172A", "#334155"] },
] as const;

export type ColorScheme = (typeof colorSchemes)[number];
export type ColorSchemeId = ColorScheme["id"];

// --- UPDATED INTERFACES ---
export interface IThumbnail {
  _id: string;
  title: string;
  user_prompt: string;
  image_url: string;
  style: ThumbnailStyle;     // Improved type safety
  aspect_ratio: AspectRatio; // Improved type safety
  color_scheme: ColorSchemeId; // Improved type safety
  createdAt?: string | Date;
}

export interface IUser {
  name: string;
  email: string;
}

export const dummyThumbnails: IThumbnail[] = []; 

// --- UPDATED HTML TEMPLATE ---
export const yt_html = `
    <!DOCTYPE html>
    <html lang="en" class="dark">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>YouTube Preview</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-[#0f0f0f] text-white font-sans antialiased">
            <div class="max-w-[360px] bg-[#0f0f0f] rounded-2xl overflow-hidden border border-neutral-800">
                <img src="%%THUMBNAIL_URL%%" class="w-full aspect-video object-cover" />
                <div class="flex gap-3 mt-3 px-3 pb-4">
                    <div class="h-9 w-9 rounded-full bg-neutral-800 shrink-0"></div>
                    <div>
                        <h3 class="font-semibold text-sm line-clamp-2 leading-tight">%%TITLE%%</h3>
                        <p class="text-xs text-neutral-400 mt-1">AI Studio Generator</p>
                    </div>
                </div>
            </div>
        </body>
    </html>
`;