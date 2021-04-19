# Front-end Intro
The front-end framework used in this repository is [Vue.js](vuejs.org). It
~simply~ works and has a lot of power. There are other front-end frameworks,
each has its own feel/steps to use.

TODO: Consider adding steps for installing Node Package Manager (npm).

We are using one additional tool, [Vite](vitejs.dev/guide/#overview). The
following command will create a project with some "initial scaffolding":

    npm init @vitejs/app

For in-browser/localhost/url access:

    npm run dev

    === OUTPUT ===
    > v@0.0.0 dev <path_to_project>
    > vite

    vite v2.0.3 dev server running at:

    > Local:    http://localhost:3000/
    > Network:  http://10.0.0.8:3000/

    ready in 191ms.
    === END ===


# The need to create forms.

A basic requirement for the application is that the user has the ability to
submit input. With this, my mind immediately thinks that forms are an easy way
to meet this particular requirement. We will be using
[FormVueLate](formvuelate.js.org/#getting-started).




# ---- Anything underneath this point was from the "initial scaffolding" ----

# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette 5. Search and run "Select TypeScript version" -> "Use workspace version"
