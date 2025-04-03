import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-alert": "off", // Desativa a regra no-alert
      "no-console": "off", // Desativa a regra no-console
      "@typescript-eslint/no-explicit-any": "off", // Desativa a regra no-explicit-any
      // Adicione outras regras que você deseja desativar aqui
    },
  },
];

export default eslintConfig;