import * as Contentful from "contentful";
import { isVideo, isAVenture } from "../../utils";
import _ from "lodash";
import AppStore from "../stores";

export const getStore = callback => {
  const cms = Contentful.createClient({
    space: "ti8wha7hesc0",
    accessToken:
      "98d7ec3b817f2060b3f791d692339b9872b4866185bc4a35d98e886d704791a2"
  });

  cms.getEntries().then(async response => {
    console.log(response.items);

    const properties = response.items
      .filter(item => item.sys.contentType.sys.id === "property")
      .map(item => {
        return {
          ...item.fields
        };
      });

    const processes = response.items
      .filter(item => item.sys.contentType.sys.id === "process")
      .map(item => {
        const {
          sys: { id }
        } = item;
        const mutated = {
          ...item.fields,
          id: id
        };

        const propertyImage = properties
          .filter(property => property.isAProcessItem && property.process)
          .find(property => property.process.sys.id === mutated.id);

        mutated.propertyImage = propertyImage
          ? propertyImage.featuredImage.fields.file.url
          : null;
        return mutated;
      });

    const companyContent = response.items
      .filter(item => item.sys.contentType.sys.id === "companyContent")
      .map(item => {
        return item.fields;
      });

    const galleryItems = response.items
      .filter(item => item.sys.contentType.sys.id === "galleryItem")
      .map(item => ({
        property: item.fields.property,
        address: item.fields.address,
        url: item.fields.image.fields.file.url + "?w=500&h=500&fit=thumb",
        media: isVideo(item.fields.image.fields.file.url) ? "video" : "image",
        isAVenture: isAVenture(item.fields.property)
      }));

    const galleryFromProperties = _.sortBy(properties, item => item.order).map(
      item => ({
        property: item.title,
        address: item.address,
        url: item.featuredImage.fields.file.url + "?w=500&h=500&fit=thumb",
        media: isVideo(item.featuredImage.fields.file.url) ? "video" : "image",
        isAVenture: isAVenture(item)
      })
    );

    const fullGallery = galleryItems.concat(galleryFromProperties);

    fullGallery.unshift({
      property: "",
      address: "",
      url:
        "https://player.vimeo.com/external/286249741.sd.mp4?s=0ba1a7ff1be8fe5f7c0bf90006d04f53041c1310&profile_id=165",
      media: "video",
      isAVenture: false
    });

    fullGallery.push({
      property: "Highpoint Property Group",
      address: "",
      url: "/logos/logo-full.svg",
      media: "image",
      isAVenture: true
    });

    AppStore.data.processes = processes;
    AppStore.data.properties = properties;
    AppStore.data.galleryItems = fullGallery;
    AppStore.data.companyContent = companyContent;
    AppStore.data.ready = true;

    // const appCache = {
    //   ...AppStore.data
    // }

    // localStorage.setItem('appCache', JSON.stringify(appCache))
    AppStore.emitChange();
  });
};

export const goToPropertyCard = propertyId => {
  AppStore.data.activePropertyCard = propertyId;
  AppStore.emitChange();
};

export const launchPropertySideBar = propertyId => {
  AppStore.data.activePropertyCard = propertyId;
  AppStore.data.launchPropertySideBar = true;
  AppStore.emitChange();
};
