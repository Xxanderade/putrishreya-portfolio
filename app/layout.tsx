import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Putri — Web3 Builder",
  description:
    "Personal portfolio of Putri — Web3, community, and content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
