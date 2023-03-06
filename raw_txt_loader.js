import fs from 'fs';

export default function rawTextFileLoader(id) {
  const contents = fs.readFileSync(id, 'utf-8');
  return `export default ${JSON.stringify(contents)};`;
}

export async function rawPs1Loader(id) {
  if (id.endsWith(".ps1")) {
    return rawTextFileLoader(id);
  }
}

export async function rawTxtLoader(id) {
  if (id.endsWith(".txt")) {
    return rawTextFileLoader(id);
  }
}
