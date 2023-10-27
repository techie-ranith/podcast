import { main, favorites } from "@/data/metadata";

export const metadata = {
  title: `${favorites.title} | ${main.title}`,
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
