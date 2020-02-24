# React Analog Clock

To start developing:

```
npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To run storybook:

```
npm run storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.
