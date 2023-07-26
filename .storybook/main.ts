/** @type { import('@storybook/vue3-vite').StorybookConfig } */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const AutoImport = require('unplugin-auto-import/vite')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const AutoImportComponents = require('unplugin-vue-components/vite')

const config = {
  stories: ['../components/**/*.stories.@(js|ts)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: (config) => {
    if (config.plugins !== undefined) {
      config.plugins.push(
        AutoImport({
          imports: ['vue'],
          dts: '.storybook/auto-imports.d.ts',
        })
      )
      config.plugins.push(
        AutoImportComponents({
          dirs: ['components'],
          directoryAsNamespace: true, // ディレクトリ名をコンポーネント名に含むか
          dts: '.storybook/components.d.ts',
        })
      )
    }
    return {
      ...config,
      define: {
        ...config.define,
        global: 'window',
      },
    }
  },
}
export default config
