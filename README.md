# Astro + TailwindCSS + TypeScript Starter for GitHub Pages

This is a starter project configured with:

*   **Astro**: The web framework for building fast, content-focused websites.
*   **TailwindCSS**: A utility-first CSS framework for rapid UI development.
*   **TypeScript**: Superset of JavaScript for type safety.
*   **GitHub Pages Deployment**: Automated deployment via GitHub Actions.
*   **Devcontainer**: Ready-to-use development environment with VS Code Dev Containers.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/.
├── .devcontainer/       # Devcontainer configuration
│   ├── Dockerfile
│   └── devcontainer.json
├── .github/             # GitHub Actions workflows
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .gitignore
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`        |
| `npm run preview`      | Preview your build locally before deploying      |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro check`  | Run diagnostics to check for issues in your code |

## ✅ Getting Started

1.  **Open in Devcontainer**: If using VS Code, open the command palette (Ctrl+Shift+P or Cmd+Shift+P) and select "Dev Containers: Reopen in Container". This will build and start the development environment defined in `.devcontainer/`.
2.  **Install Dependencies**: The `postCreateCommand` in `devcontainer.json` should automatically run `npm install`. If not, run it manually in the container's terminal.
3.  **Start Developing**: Run `npm run dev` to start the local development server.

## GitHub Pages Configuration

*   The `astro.config.mjs` file is pre-configured with `site` and `base` options assuming your repository will be at `https://<username>.github.io/<reponame>/`. **Remember to update `<username>` and `<reponame>` in `astro.config.mjs`** to match your GitHub username and repository name.
*   The GitHub Actions workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site to the `gh-pages` branch upon pushing to `main`.
*   You need to **enable GitHub Pages** in your repository settings, choosing the `gh-pages` branch as the source.
