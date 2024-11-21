// 创建 第一个 utils 文件 install.ts 用于 vue plugin 安装的一系列操作

import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;

// 将组件循环注册，c就是withInstall返回的对象
export function makeInstaller(components: Plugin[]) {
  const install = (app: App) =>
    each(components, (c) => {
      app.use(c);
    });

  return install;
}

// 返回一个带有install的对象，install会被app.use自动执行，让后注册组件
export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any)?.name || "UnnamedComponent";
    app.component(name, component as SFCWithInstall<T>);
  };
  return component as SFCWithInstall<T>;
};
