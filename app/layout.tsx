import Providers from "@/app/providers";
import "@/css/styles.css";
import GlobalModal from "@/components/modals/global-modal";
import Navbar from "@/components/navbar/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          {children}
          <GlobalModal />
        </Providers>
      </body>
    </html>
  );
}
