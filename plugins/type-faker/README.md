# Strapi plugin type-faker

type-faker is a [Strapi](https://strapi.io) plugin that will create fake items, and can insert them, based on the Collections created in the Strapi Content Manager.

type-faker evaluates the shape of the collection/type dynamically, so there's no need to create a factory/builder every time you make a new type.

type-faker is useful for development, to automatically seed your database, and for testing if you want to dynamically generate an item in a Collection.

## Installing type-faker

Coming soon

## Using type-faker

There's two ways to use type-faker:

1. The API endpoint
2. As an internal Strapi service

### The API Endpoint

If you go to the type-faker routes, they should be in your strapi folder under `plugins/type-faker/config/routes.json`, you can see the availible routes and the arguements they accept.

### As an internal Strapi service

When Strapi starts, it attaches plugins(and many other things), to the global `strapi` object.

You can access the type-faker plugin and it's services through the global `strapi` object.

For example:

```javascript

const typeFakerContentService = strapi.plugins["type-faker"].services.contenttypes;

```

The `typeFakerContentService` variable will give you access to all the functions in `plugins/type-faker/services/contentTypes.js.

You can use those functions in other plugins, in your server startup code, in your test suite, etc.

**Note** It's generally a best practice to use dependency injection when using third party libraries/plugins. I would suggest you do so for type-faker (and other plugins) since the underlying services can change.

## Limitations

Currently, type-faker will generate the empty state for fields that aren't supported.

These fields are:

- media
- components
- relations
- dynamic zones.

These types/fields have their own unqiue data structure and would need to actually be created and inserted to create a realistic type entry.

Ex. to create a blog post type with an image carousel component, you'd need to insert the images, then insert a carousel component and map the images to it, then insert the blog post and map the carousel to it. Creating 10 of these would be computationally expensive.

In the future, I'll either update the plugin to:

A. Have an endpoint that will respond with a simulated GET request to a type endpoint, but not do the actual insertion.
B. Have the plugin support complex type insertion, with the understanding that they will be long running operations.
