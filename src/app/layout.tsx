import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ProgressBar from "@/components/progressBar/progressBar";
import DictionaryProvider from '@/locales/DictionaryProvider'
import { getDictionary } from '@/locales/dictionary'
import getTheme from '@/themes/theme'

const inter = Inter({ subsets: ["latin"] });
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  	const dictionary = await getDictionary()
  	return (
		<html lang="en" data-bs-theme={getTheme()}>
			<body>
				<DictionaryProvider dictionary={dictionary}>
				{children}
				</DictionaryProvider>
			</body>
		</html>
	);
}
