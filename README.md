# Astro Theme Kokomi

An Astro theme template designed for knowledge-sharing blogs, featuring a clean, elegant, and serene design to enhance readability and engagement.

## Toolbelt

This project is built using the following tools:

- **Astro**: A modern static site generator that allows you to build fast websites using your favorite frameworks.
- **Bun**: Manage JavaScript packages and run scripts.
- **Prettier**: To format code consistently.
- **ESLint**: To identify and fix problems in JavaScript code.

## Local Development

Use `bun link` to add `packages/astro-kokomi` as local dependency to your project.

```shell
cd packages/astro-kokomi # go into the package directory
bun link                 # creates global link
cd ../../                # go into the root directory.
bun add astro-kokomi     # link-install the package
```

Now, any changes to `packages/astro-kokomi` will be reflected in `<project>/node_modules/astro-kokomi`.
