import * as Contentful from 'contentful'
import _ from 'lodash'
import AppStore from '../stores'


export const getStore = (callback) => {
  const cms = Contentful.createClient({
    space: 'ti8wha7hesc0',
    accessToken: '98d7ec3b817f2060b3f791d692339b9872b4866185bc4a35d98e886d704791a2'
  })

  cms.getEntries().then( async (response) => {
    console.log(response.items)

    const properties = response.items.filter((item) => item.sys.contentType.sys.id === 'property').map((item) => {
      return {
        ...item.fields
      }
    })

    const processes = response.items.filter((item) => item.sys.contentType.sys.id === 'process').map((item) => {
      return {
        ...item.fields
      }
    })

    const galleryItems = await cms.getAssets().then((res) => res.items.map(item => {
      return {
        ...item.fields
      }
    }))

    AppStore.data.processes = processes
    AppStore.data.properties = properties
    AppStore.data.galleryItems = galleryItems
    AppStore.data.ready = true

    const appCache = {
      ...AppStore.data
    }
    localStorage.setItem('appCache', JSON.stringify(appCache))
    
    AppStore.emitChange()
  })
}
