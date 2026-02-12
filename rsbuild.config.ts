import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

const { publicVars, rawPublicVars } = loadEnv({ prefixes: ["REACT_APP_"] });

export default defineConfig({
  html: {
    template: "./public/index.html",
  },
  plugins: [
    pluginReact({
      swcReactOptions: {
        runtime: "automatic", // Fixed nesting
      },
    }),
    pluginTypeCheck(),
  ],
  output: {
    distPath: {
      root: "build",
    },
  },
  source: {
    define: {
      ...publicVars,
      "process.env": JSON.stringify(rawPublicVars),
    },
  },
  tools: {
    rspack: {
      module: {
        rules: [
          {
            test: /\.png$/,
            type: "asset/resource",
            generator: {
              filename: "static/media/[name].[hash][ext]",
            },
          },
        ],
      },
    },
  },
});
