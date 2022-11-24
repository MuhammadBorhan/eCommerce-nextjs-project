import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "gkf4u7hu",
  dataset: "production",
  apiVersion: "2022-11-08",
  useCdn: true,
  token:
    "skxl8NQb9nyRqvLAD8qR53K0iHqHwR2Y57i9ltj7ll6YIWxc3EhxTHyUxr1Mn6d3HtANgQf4z782KVeUFPqiDmuqvVEr3MnPWhX8twQn641m8sjw9ITEN3zf1tDp36BZr3WzQOm0PwEgFE52aOSMrEr6Zd6RXBequXtQMuKYzQDVc8UaZNzC",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
