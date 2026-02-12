# 东城区摄影家协会官方网站

<p align="center">
  <img src="public/photography-equipment-art.jpg" alt="东城区摄影家协会" width="800"/>
</p>

<p align="center">
  <strong>传承摄影艺术，记录美好时光</strong>
</p>

<p align="center">
  <a href="#功能特性">功能特性</a> •
  <a href="#技术栈">技术栈</a> •
  <a href="#快速开始">快速开始</a> •
  <a href="#测试流程">测试流程</a> •
  <a href="#项目结构">项目结构</a>
</p>

---

## 📖 项目介绍

东城区摄影家协会官方网站是一个为摄影家协会打造的现代化内容管理平台。该项目旨在展示协会形象、发布新闻动态、组织摄影活动、展示会员作品，并提供便捷的后台管理系统。

### 核心功能

- **协会展示**: 关于我们、协会宗旨、组织架构、发展历程
- **内容管理**: 新闻发布、活动管理、影展在线
- **会员服务**: 活动报名、作品投稿、交流互动
- **后台管理**: 新闻CRUD、用户管理、数据统计

### 目标用户

- 协会会员（300+）
- 摄影爱好者
- 社会公众

---

## 🚀 功能特性

### 前端功能

| 功能模块 | 描述 | 状态 |
|---------|------|------|
| 🏠 **首页** | Hero展示、新闻轮播、活动预告、精选作品 | ✅ 已完成 |
| 📋 **关于我们** | 协会简介、宗旨、组织架构、发展历程 | ✅ 已完成 |
| 📅 **协会活动** | 活动列表、筛选、详情查看 | ✅ 已完成 |
| 📰 **新闻动态** | 新闻列表、分类筛选、详情页 | ✅ 已完成 |
| 🖼️ **影展在线** | 作品展示、瀑布流布局、分类筛选 | ✅ 已完成 |
| 📞 **联系我们** | 联系方式、办公时间、地图导航 | ✅ 已完成 |
| 🔐 **会员登录** | 管理员登录、身份验证、权限控制 | ✅ 已完成 |

### 后台管理

| 功能模块 | 描述 | 状态 |
|---------|------|------|
| 📊 **控制面板** | 数据统计、概览展示 | ✅ 已完成 |
| 📝 **新闻管理** | 新闻CRUD、发布审核 | ✅ 已完成 |
| 👥 **用户管理** | 管理员管理、权限控制 | ✅ 已完成 |

---

## 🛠️ 技术栈

### 前端
- **框架**: Next.js 16 + React 19
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4
- **组件库**: shadcn/ui + Radix UI
- **表单**: React Hook Form + Zod
- **图标**: Lucide React

### 后端
- **API**: Next.js API Routes
- **数据库**: MongoDB
- **ODM**: Mongoose
- **认证**: bcryptjs + JWT

### 开发工具
- **包管理**: pnpm
- **代码规范**: ESLint + Prettier
- **测试**: Agent Browser + Playwright

---

## 📦 快速开始

### 环境要求

- Node.js 18+
- MongoDB 5.0+
- pnpm

### 安装步骤

1. **克隆项目**
```bash
git clone <repository-url>
cd photography-association
```

2. **安装依赖**
```bash
pnpm install
```

3. **配置环境变量**
创建 `.env.local` 文件：
```env
MONGODB_URI=mongodb://localhost:27017/dcphoto
JWT_SECRET=your-secret-key
```

4. **初始化数据库**
```bash
pnpm seed
```

5. **启动开发服务器**
```bash
pnpm dev
```

访问 http://localhost:3000 查看网站

---

## 🧪 测试流程

本项目使用 **Agent Browser** 进行端到端测试，结合 **多模态AI视觉验证** 确保功能正确性。

### 前置条件

确保开发服务器已启动：
```bash
pnpm dev
```

### 登录功能测试（标准流程）

#### 1. 启动 Agent Browser

```bash
# 打开登录页面
agent-browser open http://localhost:3000/login
```

#### 2. 执行测试用例

**TC001: 正常登录测试**
```bash
# 获取页面元素
agent-browser snapshot -i

# 填写正确的凭据
agent-browser fill @e1 "admin@example.com"
agent-browser fill @e2 "ChangeMe123!"

# 截图记录
agent-browser screenshot --full test-reports/screenshots/TC001_step2_filled.png

# 点击登录并等待跳转
agent-browser click @e3
sleep 5

# 验证跳转结果
agent-browser get url  # 应显示 http://localhost:3000/admin

# 截图记录成功状态
agent-browser screenshot --full test-reports/screenshots/TC001_step3_success.png
```

**TC002: 错误密码测试**
```bash
# 重新打开登录页
agent-browser open http://localhost:3000/login

# 填写错误密码
agent-browser fill @e1 "admin@example.com"
agent-browser fill @e2 "WrongPassword123"
agent-browser click @e3

# 截图记录错误状态
agent-browser screenshot --full test-reports/screenshots/TC002_step3_error.png
```

**TC003-006: 表单验证测试**
```bash
# 无效邮箱格式
agent-browser open http://localhost:3000/login
agent-browser fill @e1 "invalid-email"
agent-browser fill @e2 "ChangeMe123!"
agent-browser click @e3
agent-browser screenshot --full test-reports/screenshots/TC003_step2_validation_error.png

# 密码长度不足
agent-browser open http://localhost:3000/login
agent-browser fill @e1 "admin@example.com"
agent-browser fill @e2 "123"
agent-browser click @e3
agent-browser screenshot --full test-reports/screenshots/TC004_step2_validation_error.png

# 空邮箱
agent-browser open http://localhost:3000/login
agent-browser fill @e2 "ChangeMe123!"
agent-browser click @e3
agent-browser screenshot --full test-reports/screenshots/TC005_step2_validation_error.png

# 空密码
agent-browser open http://localhost:3000/login
agent-browser fill @e1 "admin@example.com"
agent-browser click @e3
agent-browser screenshot --full test-reports/screenshots/TC006_step2_validation_error.png
```

#### 3. 视觉验证（多模态AI分析）

测试完成后，使用大模型进行视觉验证：

1. **读取截图**
   ```bash
   # 截图已保存在 test-reports/screenshots/ 目录
   ls test-reports/screenshots/
   ```

2. **AI视觉检查要点**
   - ✅ **TC001**: 确认跳转至 `/admin`，显示"欢迎回来，Site Admin"
   - ⚠️ **TC002**: 检查 Toast 错误提示是否正确显示（注意：Toast 3秒后消失，需快速截图）
   - ✅ **TC003**: 验证浏览器原生验证提示（橙色警告图标）
   - ✅ **TC004**: 验证 Zod 验证错误（密码框红色高亮，显示"密码至少6位"）
   - ✅ **TC005**: 验证空邮箱错误提示
   - ✅ **TC006**: 验证空密码错误提示（通过长度验证拦截）

#### 4. 生成测试报告

查看生成的 HTML 报告：
```bash
open test-reports/login-test-report.html
```

报告包含：
- 测试用例详情
- 执行步骤
- 截图记录
- 多模态AI视觉分析结果
- 改进建议

### 测试账号

**管理员账号**:
- 邮箱: `admin@example.com`
- 密码: `ChangeMe123!`

### 注意事项

1. **Toast 提示问题**: 错误密码的 Toast 提示会在3秒后自动消失，建议在点击登录后立即截图，或使用 `agent-browser find` 命令等待错误元素
2. **Session 状态**: 测试之间需要重新打开登录页或清除浏览器状态
3. **数据库依赖**: 确保数据库中已创建测试用户

---

## 📁 项目结构

```
photography-association/
├── app/                          # Next.js App Router
│   ├── (routes)/                 # 前端页面路由
│   │   ├── page.tsx             # 首页
│   │   ├── about/               # 关于我们
│   │   ├── activities/          # 协会活动
│   │   ├── news/                # 新闻动态
│   │   ├── exhibitions/         # 影展在线
│   │   ├── contact/             # 联系我们
│   │   └── login/               # 登录页面
│   ├── admin/                   # 后台管理
│   │   ├── page.tsx            # 控制面板
│   │   ├── news/               # 新闻管理
│   │   └── users/              # 用户管理
│   ├── api/                     # API路由
│   │   └── auth/
│   │       └── login/          # 登录API
│   └── layout.tsx              # 根布局
├── components/                  # React组件
│   ├── ui/                     # shadcn/ui组件
│   ├── activities/             # 活动相关组件
│   ├── exhibitions/            # 展览相关组件
│   ├── navigation.tsx          # 导航栏
│   └── footer.tsx              # 页脚
├── modules/                    # 领域模块（DDD架构）
│   ├── domain/                 # 领域层
│   ├── application/            # 应用层
│   └── infrastructure/         # 基础设施层
├── lib/                        # 工具库
│   └── auth/                   # 认证相关
├── data/                       # 数据文件
├── types/                      # TypeScript类型定义
├── test-reports/               # 测试报告
│   ├── login-test-report.html # 登录测试报告
│   └── screenshots/            # 测试截图
├── public/                     # 静态资源
├── scripts/                    # 脚本文件
├── PRD.md                      # 产品需求文档
└── package.json               # 项目配置
```

---

## 📝 开发规范

### 代码规范
- 使用 TypeScript 严格模式
- 组件使用函数式组件 + Hooks
- 样式使用 Tailwind CSS
- 表单使用 React Hook Form + Zod 验证

### Git 提交规范
```
feat: 新功能
fix: 修复问题
docs: 文档更新
style: 代码格式调整
refactor: 重构代码
test: 测试相关
chore: 构建/工具相关
```

---

## 🔒 安全说明

- 密码使用 bcryptjs 加密存储
- JWT Token 用于身份认证
- Session Cookie 设置 httpOnly 和 secure
- API 接口权限控制

---

## 📄 许可证

[MIT License](LICENSE)

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

---

<p align="center">
  <strong>东城区摄影家协会</strong> © 2026
</p>// test
