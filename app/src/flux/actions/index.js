import * as Contentful from "contentful";
import { isVideo, isAVenture } from "../../utils";
import _ from "lodash";
import AppStore from "../stores";

export const getStore = callback => {
  const cms = Contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  });

  cms.getEntries().then(async response => {
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

    const videos = response.items
      .filter(item => item.sys.contentType.sys.id === "video")
      .map(item => {
        return item.fields;
      });

    const galleryItems = response.items
      .filter(item => item.sys.contentType.sys.id === "galleryItem")
      .map(item => ({
        property: item.fields.property,
        address: item.fields.address,
        url: item.fields.image.fields.file.url + "?w=2000&h=1000",
        thumb: item.fields.image.fields.file.url + "?w=500&h=500&fit=thumb",
        media: isVideo(item.fields.image.fields.file.url) ? "video" : "image",
        isAVenture: isAVenture(item.fields.property)
      }));

    const galleryFromProperties = _.sortBy(properties, item => item.order).map(
      item => ({
        property: item.title,
        address: item.address,
        url: item.featuredImage.fields.file.url + "?w=2000&h=1000",
        thumb: item.featuredImage.fields.file.url + "?w=500&h=500&fit=thumb",
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
      url: "/logos/HPPG-black.png",
      media: "image",
      isAVenture: true
    });

    AppStore.data.processes = processes;
    AppStore.data.properties = properties;
    AppStore.data.galleryItems = fullGallery;
    AppStore.data.companyContent = companyContent;
    AppStore.data.videos = videos;
    AppStore.data.ready = true;

    AppStore.emitChange();
  });
};

export const goToPropertyCard = propertyId => {
  AppStore.data.activePropertyCard = propertyId;
  AppStore.emitChange();
};

export const setActiveMenuItem = menuItemIndex => {
  AppStore.data.activeMenuItem = menuItemIndex;
  AppStore.emitChange();
};

export const launchPropertySideBar = propertyId => {
  AppStore.data.activePropertyCard = propertyId;
  AppStore.data.launchPropertySideBar = true;
  AppStore.emitChange();
};

export const redrawSideBarLines = () => {
  AppStore.data.redrawLines = true;
  AppStore.emitChange();

  setTimeout(() => {
    AppStore.data.redrawLines = false;
    AppStore.emitChange();
  }, 2000);
};
