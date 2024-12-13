import { sentryVitePlugin } from '@sentry/vite-plugin'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import { VitePluginRadar } from 'vite-plugin-radar'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        TanStackRouterVite(),
        sentryVitePlugin({
            org: 'sp3rzo',
            project: 'arthur-portfolio',
        }),
        VitePluginRadar({
            // Google Analytics tag injection
            analytics: [
                {
                    /**
                     * Measurement id
                     */
                    id: 'G-PP0YRSWYBY',

                    /**
                     * disable tracking for this measurement
                     *   window['ga-disable-MEASUREMENT_ID'] = true
                     * @see https://developers.google.com/analytics/devguides/collection/ga4/disable-analytics
                     */
                    disable: true,

                    /**
                     * You can configure all settings provided by analytics here
                     * @see https://developers.google.com/analytics/devguides/collection/ga4/cookies-user-id
                     * @see https://developers.google.com/analytics/devguides/collection/ga4/disable-page-view
                     * @see https://developers.google.com/analytics/devguides/collection/ga4/display-features
                     */
                    config: {
                        cookie_domain: 'auto',
                        cookie_expires: 63072000,
                        cookie_prefix: 'none',
                        cookie_update: true,
                        cookie_flags: '',
                        send_page_view: true,
                        allow_google_signals: true,
                        allow_ad_personalization_signals: true,
                    },

                    /**
                     * Set default values for "consent mode"
                     * @see https://developers.google.com/tag-platform/devguides/consent
                     * @see https://support.google.com/analytics/answer/9976101
                     */
                    consentDefaults: {
                        analytics_storage: 'granted',
                        ad_storage: 'denied',
                        wait_for_update: 500,
                    },

                    /**
                     * You set persitent values
                     * @see https://developers.google.com/analytics/devguides/collection/ga4/persistent-values
                     */
                    persistentValues: {
                        currency: 'USD',
                    },
                },
            ],
        }),
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },

    build: {
        sourcemap: true,
    },
})
