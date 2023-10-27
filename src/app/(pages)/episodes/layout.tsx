import { main, episodes } from "@/data/metadata";

export const metadata = {
  title: `${episodes.title} | ${main.title}`,
  description: main.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
