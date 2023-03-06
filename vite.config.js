/** @type {import('vite').UserConfig} */
// vite.config.js
import rawTextFileLoader, {
  rawTxtLoader,
  rawPs1Loader,
} from "./raw_txt_loader";
export default {
  build: {
    rollupOptions: {
      external:["vscode"]
    },
    outDir: "dist",
    lib: {
      entry: "src/extension.ts",
      name: "MyLibrary",
      fileName: (format) => `extension.js`,
    },
  },
//   plugins:[
//     {
//       name: "ps1",
//       rawPs1Loader 
//     },
//   ],
};
