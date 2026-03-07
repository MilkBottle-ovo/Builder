```cmd
npm init
```
基于monorepo
创建文件夹:apps,packages
```
//pnpm-workspace.yaml
packages:
- 'app/*'
- 'packages/*'
```