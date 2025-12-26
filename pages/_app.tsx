import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { theme } from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';
import { CacheProvider, EmotionCache  } from '@emotion/react';
import { GoogleAnalytics } from '@next/third-parties/google';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
  }

export default function App({
	Component,
	emotionCache = clientSideEmotionCache,
	pageProps,
}: MyAppProps) {
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
				<GoogleAnalytics gaId="G-RF2DJVEBGT" />
			</ThemeProvider>
		</CacheProvider>
	);
}
