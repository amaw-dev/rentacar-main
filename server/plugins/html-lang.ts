export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    // Reemplazar lang="en" con lang="es" en el tag HTML
    html.htmlAttrs = html.htmlAttrs.map((attr: string) => {
      return attr.replace(/lang="en"/, 'lang="es"')
    })
  })
})
