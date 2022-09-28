import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#1976D2',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    },
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})

