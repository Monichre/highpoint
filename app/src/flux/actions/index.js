import * as Contentful from 'contentful'
import _ from 'lodash'
import AppStore from '../stores'

export const getStore = callback => {
  const cms = Contentful.createClient({
    space: 'ti8wha7hesc0',
    accessToken: '98d7ec3b817f2060b3f791d692339b9872b4866185bc4a35d98e886d704791a2'
  })

  cms.getEntries().then(async response => {
    console.log(response.items)

    const properties = response.items.filter(item => item.sys.contentType.sys.id === 'property').map(item => {
      return {
        ...item.fields
      }
    })

    const processes = response.items.filter(item => item.sys.contentType.sys.id === 'process').map(item => {
      const {
        sys: { id }
      } = item
      const mutated = {
        ...item.fields,
        id: id
      }
      const propertyImage = properties
        .filter(property => property.isAProcessItem && property.process)
        .find(property => property.process.sys.id === mutated.id)

      mutated.propertyImage = propertyImage ? propertyImage.featuredImage.fields.file.url : null
      return mutated
    })

    const companyContent = response.items.filter(item => item.sys.contentType.sys.id === 'companyContent').map(item => {
      return item.fields
    })

    const galleryItems = response.items.filter(item => item.sys.contentType.sys.id === 'galleryItem').map(item => ({
      property: item.fields.title,
      address: item.fields.address,
      image: item.fields.image.fields.file.url + '?w=500&h=500&fit=thumb'
    }))

    const filteredGallery = properties.map(item => ({
      property: item.title,
      address: item.address,
      image: item.featuredImage.fields.file.url + '?w=500&h=500&fit=thumb'
    }))

    const fullGallery = galleryItems.concat(filteredGallery)
    console.log(fullGallery)

    AppStore.data.processes = processes
    AppStore.data.properties = properties
    AppStore.data.galleryItems = fullGallery
    AppStore.data.companyContent = companyContent
    AppStore.data.ready = true

    const appCache = {
      ...AppStore.data
    }

    localStorage.setItem('appCache', JSON.stringify(appCache))
    AppStore.emitChange()
  })
}
