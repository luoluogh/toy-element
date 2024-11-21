import {makeInstaller} from "@toy-element/utils";
import components from "./components.ts";

import '@toy-element/theme/index.css'
const installer = makeInstaller(components);

export * from "@toy-element/components";
export default installer;
