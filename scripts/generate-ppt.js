const PptxGenJS = require('pptxgenjs');

// 创建新的 PPT
const ppt = new PptxGenJS();

// 设置 PPT 元数据
ppt.author = '东城区摄影家协会';
ppt.title = '摄影协会官网项目需求文档';
ppt.subject = '项目功能与板块说明';

// 定义颜色方案 - 使用摄影主题色
const colors = {
    primary: '1E2761',      // 深蓝
    secondary: 'CADCFC',    // 冰蓝
    accent: 'FFFFFF',       // 白色
    dark: '1a1a2e',         // 深色
    text: '333333',         // 正文
    lightText: '666666'     // 次要文字
};

// 定义布局
const layouts = {
    title: {
        x: 0.5, y: 1.5, w: 9, h: 1.5,
        fontSize: 44, bold: true, color: colors.primary,
        align: 'center', fontFace: 'Microsoft YaHei'
    },
    subtitle: {
        x: 0.5, y: 3.2, w: 9, h: 0.8,
        fontSize: 20, color: colors.lightText,
        align: 'center', fontFace: 'Microsoft YaHei'
    },
    sectionTitle: {
        x: 0.5, y: 0.5, w: 9, h: 0.8,
        fontSize: 36, bold: true, color: colors.primary,
        fontFace: 'Microsoft YaHei'
    },
    bodyText: {
        fontSize: 16, color: colors.text,
        fontFace: 'Microsoft YaHei'
    }
};

// ========== 第1页: 封面 ==========
const slide1 = ppt.addSlide();
// 背景
slide1.addShape('rect', { x: 0, y: 0, w: 10, h: 5.625, fill: colors.dark });
// 装饰线条
slide1.addShape('line', { 
    x: 1, y: 2.5, w: 8, h: 0, 
    line: { color: colors.secondary, width: 2 } 
});
// 标题
slide1.addText('东城区摄影家协会', {
    x: 0.5, y: 1.5, w: 9, h: 1,
    fontSize: 48, bold: true, color: colors.accent,
    align: 'center', fontFace: 'Microsoft YaHei'
});
slide1.addText('官方网站项目需求文档', {
    x: 0.5, y: 2.6, w: 9, h: 0.8,
    fontSize: 28, color: colors.secondary,
    align: 'center', fontFace: 'Microsoft YaHei'
});
// 副标题
slide1.addText('传承摄影艺术 · 记录美好时光', {
    x: 0.5, y: 3.8, w: 9, h: 0.6,
    fontSize: 18, color: 'CCCCCC',
    align: 'center', fontFace: 'Microsoft YaHei'
});
slide1.addText('2026年2月', {
    x: 0.5, y: 4.8, w: 9, h: 0.4,
    fontSize: 14, color: '999999',
    align: 'center', fontFace: 'Microsoft YaHei'
});

// ========== 第2页: 项目概述 ==========
const slide2 = ppt.addSlide();
slide2.addText('项目概述', layouts.sectionTitle);
slide2.addText('Project Overview', {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, color: colors.lightText,
    fontFace: 'Microsoft YaHei'
});

// 左列 - 基本信息
slide2.addText('基本信息', {
    x: 0.5, y: 2, w: 4, h: 0.5,
    fontSize: 20, bold: true, color: colors.primary,
    fontFace: 'Microsoft YaHei'
});
slide2.addText([
    { text: '项目名称：', options: { bold: true } },
    { text: '东城区摄影家协会官方网站\n\n' },
    { text: '项目定位：', options: { bold: true } },
    { text: '协会对外展示窗口、会员服务平台\n\n' },
    { text: '目标用户：', options: { bold: true } },
    { text: '协会会员、摄影爱好者、社会公众' }
], {
    x: 0.5, y: 2.6, w: 4, h: 3,
    fontSize: 14, color: colors.text,
    fontFace: 'Microsoft YaHei', lineSpacing: 24
});

// 右列 - 核心数据
slide2.addText('协会概况', {
    x: 5, y: 2, w: 4.5, h: 0.5,
    fontSize: 20, bold: true, color: colors.primary,
    fontFace: 'Microsoft YaHei'
});
// 数据卡片
const stats = [
    { label: '成立年份', value: '1985年', y: 2.6 },
    { label: '会员数量', value: '300+', y: 3.4 },
    { label: '性质', value: '专业艺术团体', y: 4.2 }
];
stats.forEach(stat => {
    slide2.addShape('rect', {
        x: 5, y: stat.y, w: 4.5, h: 0.7,
        fill: colors.secondary, rectRadius: 0.1
    });
    slide2.addText(stat.label, {
        x: 5.2, y: stat.y + 0.15, w: 2, h: 0.4,
        fontSize: 12, color: colors.lightText,
        fontFace: 'Microsoft YaHei'
    });
    slide2.addText(stat.value, {
        x: 7, y: stat.y + 0.1, w: 2, h: 0.5,
        fontSize: 18, bold: true, color: colors.primary,
        fontFace: 'Microsoft YaHei'
    });
});

// ========== 第3页: 技术架构 ==========
const slide3 = ppt.addSlide();
slide3.addText('技术架构', layouts.sectionTitle);
slide3.addText('Technology Stack', {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, color: colors.lightText,
    fontFace: 'Microsoft YaHei'
});

// 前端技术
slide3.addText('前端技术栈', {
    x: 0.5, y: 2, w: 4.2, h: 0.5,
    fontSize: 20, bold: true, color: colors.primary,
    fontFace: 'Microsoft YaHei'
});
const frontendTech = [
    'Next.js 16 - React 框架',
    'React 19 - UI 库',
    'TypeScript 5 - 类型安全',
    'Tailwind CSS 4 - 样式系统',
    'shadcn/ui - 组件库'
];
frontendTech.forEach((tech, i) => {
    slide3.addText(`● ${tech}`, {
        x: 0.5, y: 2.6 + (i * 0.45), w: 4.2, h: 0.4,
        fontSize: 14, color: colors.text,
        fontFace: 'Microsoft YaHei'
    });
});

// 后端技术
slide3.addText('后端技术栈', {
    x: 5, y: 2, w: 4.5, h: 0.5,
    fontSize: 20, bold: true, color: colors.primary,
    fontFace: 'Microsoft YaHei'
});
const backendTech = [
    'Next.js API Routes - API',
    'MongoDB - 数据库',
    'Mongoose - ODM',
    'bcryptjs + JWT - 认证'
];
backendTech.forEach((tech, i) => {
    slide3.addText(`● ${tech}`, {
        x: 5, y: 2.6 + (i * 0.45), w: 4.5, h: 0.4,
        fontSize: 14, color: colors.text,
        fontFace: 'Microsoft YaHei'
    });
});

// ========== 第4页: 前端功能模块 ==========
const slide4 = ppt.addSlide();
slide4.addText('前端功能模块', layouts.sectionTitle);
slide4.addText('Frontend Modules', {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, color: colors.lightText,
    fontFace: 'Microsoft YaHei'
});

const modules = [
    { name: '首页', icon: '🏠', desc: 'Hero展示、新闻、活动、展览轮播', y: 2 },
    { name: '关于我们', icon: '📋', desc: '协会简介、宗旨、组织架构、发展历程', y: 2.8 },
    { name: '协会活动', icon: '📅', desc: '活动列表、筛选、详情查看', y: 3.6 },
    { name: '新闻动态', icon: '📰', desc: '新闻列表、分类筛选、详情页', y: 4.4 },
    { name: '影展在线', icon: '🖼️', desc: '作品展示、瀑布流、分类筛选', y: 5.2 }
];

modules.forEach(mod => {
    // 模块背景
    slide4.addShape('rect', {
        x: 0.5, y: mod.y, w: 9, h: 0.7,
        fill: colors.secondary, rectRadius: 0.1
    });
    slide4.addText(mod.icon, {
        x: 0.7, y: mod.y + 0.15, w: 0.5, h: 0.4,
        fontSize: 24, align: 'center'
    });
    slide4.addText(mod.name, {
        x: 1.3, y: mod.y + 0.15, w: 1.5, h: 0.4,
        fontSize: 16, bold: true, color: colors.primary,
        fontFace: 'Microsoft YaHei'
    });
    slide4.addText(mod.desc, {
        x: 3, y: mod.y + 0.2, w: 6, h: 0.35,
        fontSize: 13, color: colors.text,
        fontFace: 'Microsoft YaHei'
    });
});

// ========== 第5页: 前端功能模块(续) ==========
const slide5 = ppt.addSlide();
slide5.addText('前端功能模块（续）', layouts.sectionTitle);
slide5.addText('Additional Frontend Modules', {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, color: colors.lightText,
    fontFace: 'Microsoft YaHei'
});

const modules2 = [
    { name: '活动须知', icon: '📖', desc: '活动规则、参与指南、注意事项', y: 2 },
    { name: '联系我们', icon: '📞', desc: '联系方式、办公时间、地图导航', y: 2.9 },
    { name: '会员登录', icon: '🔐', desc: '管理员登录、身份验证', y: 3.8 }
];

modules2.forEach(mod => {
    slide5.addShape('rect', {
        x: 0.5, y: mod.y, w: 9, h: 0.8,
        fill: colors.secondary, rectRadius: 0.1
    });
    slide5.addText(mod.icon, {
        x: 0.7, y: mod.y + 0.2, w: 0.5, h: 0.4,
        fontSize: 28, align: 'center'
    });
    slide5.addText(mod.name, {
        x: 1.4, y: mod.y + 0.2, w: 1.5, h: 0.4,
        fontSize: 18, bold: true, color: colors.primary,
        fontFace: 'Microsoft YaHei'
    });
    slide5.addText(mod.desc, {
        x: 3.2, y: mod.y + 0.25, w: 6, h: 0.35,
        fontSize: 14, color: colors.text,
        fontFace: 'Microsoft YaHei'
    });
});

// 通用组件说明
slide5.addText('通用组件', {
    x: 0.5, y: 5, w: 9, h: 0.5,
    fontSize: 18, bold: true, color: colors.primary,
    fontFace: 'Microsoft YaHei'
});
slide5.addText('导航栏 (Navigation) | 页脚 (Footer) | Hero区域 | 轮播组件 | 卡片组件', {
    x: 0.5, y: 5.5, w: 9, h: 0.4,
    fontSize: 13, color: colors.text,
    fontFace: 'Microsoft YaHei'
});

// ========== 第6页: 管理后台 ==========
const slide6 = ppt.addSlide();
slide6.addText('管理后台系统', layouts.sectionTitle);
slide6.addText('Admin Dashboard', {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, color: colors.lightText,
    fontFace: 'Microsoft YaHei'
});

// 后台功能模块
const adminModules = [
    { title: '控制面板', desc: '数据统计、概览展示', icon: '📊' },
    { title: '新闻管理', desc: '新闻CRUD、发布审核', icon: '📝' },
    { title: '用户管理', desc: '管理员管理、权限控制', icon: '👥' }
];

adminModules.forEach((mod, i) => {
    const x = 0.5 + (i * 3.2);
    // 卡片背景
    slide6.addShape('rect', {
        x: x, y: 2.2, w: 2.8, h: 3,
        fill: colors.secondary, rectRadius: 0.1
    });
    slide6.addText(mod.icon, {
        x: x + 0.9, y: 2.5, w: 1, h: 0.8,
        fontSize: 48, align: 'center'
    });
    slide6.addText(mod.title, {
        x: x, y: 3.5, w: 2.8, h: 0.5,
        fontSize: 18, bold: true, color: colors.primary,
        align: 'center', fontFace: 'Microsoft YaHei'
    });
    slide6.addText(mod.desc, {
        x: x + 0.2, y: 4.1, w: 2.4, h: 0.8,
        fontSize: 13, color: colors.text,
        align: 'center', fontFace: 'Microsoft YaHei'
    });
});

// 安全特性
slide6.addText('安全特性', {
    x: 0.5, y: 5.5, w: 9, h: 0.4,
    fontSize: 16, bold: true, color: colors.primary,
    fontFace: 'Microsoft YaHei'
});
slide6.addText('JWT 身份认证 | Session 管理 | 权限控制 | 登录拦截', {
    x: 0.5, y: 5.9, w: 9, h: 0.4,
    fontSize: 13, color: colors.text,
    fontFace: 'Microsoft YaHei'
});

// ========== 第7页: 数据库设计 ==========
const slide7 = ppt.addSlide();
slide7.addText('数据库设计', layouts.sectionTitle);
slide7.addText('Database Schema', {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, color: colors.lightText,
    fontFace: 'Microsoft YaHei'
});

// 实体关系图文字版
slide7.addText('数据实体', {
    x: 0.5, y: 2, w: 4.5, h: 0.5,
    fontSize: 20, bold: true, color: colors.primary,
    fontFace: 'Microsoft YaHei'
});

const entities = [
    { name: 'News（新闻）', fields: 'title, content, excerpt, category, status, coverImage...' },
    { name: 'User（用户）', fields: 'name, email, role, passwordHash...' },
    { name: 'Activity（活动）', fields: 'title, description, date, location, status...' },
    { name: 'Exhibition（展览）', fields: 'title, image, photographer, category, featured...' }
];

entities.forEach((entity, i) => {
    slide7.addShape('rect', {
        x: 0.5, y: 2.6 + (i * 0.9), w: 4.5, h: 0.75,
        fill: colors.secondary, rectRadius: 0.05
    });
    slide7.addText(entity.name, {
        x: 0.7, y: 2.65 + (i * 0.9), w: 4, h: 0.35,
        fontSize: 14, bold: true, color: colors.primary,
        fontFace: 'Microsoft YaHei'
    });
    slide7.addText(entity.fields, {
        x: 0.7, y: 3 + (i * 0.9), w: 4, h: 0.3,
        fontSize: 10, color: colors.lightText,
        fontFace: 'Microsoft YaHei'
    });
});

// 架构说明
slide7.addText('架构特点', {
    x: 5.5, y: 2, w: 4, h: 0.5,
    fontSize: 20, bold: true, color: colors.primary,
    fontFace: 'Microsoft YaHei'
});
slide7.addText([
    { text: '领域驱动设计 (DDD)\n', options: { bold: true } },
    { text: '采用模块化架构，将业务逻辑划分为独立的领域模块\n\n' },
    { text: '分层架构\n', options: { bold: true } },
    { text: 'Domain (领域层) → Application (应用层) → Infrastructure (基础设施层)\n\n' },
    { text: '依赖注入\n', options: { bold: true } },
    { text: '使用容器管理依赖，提高代码可测试性和可维护性' }
], {
    x: 5.5, y: 2.6, w: 4, h: 3.5,
    fontSize: 13, color: colors.text,
    fontFace: 'Microsoft YaHei', lineSpacing: 20
});

// ========== 第8页: API 接口 ==========
const slide8 = ppt.addSlide();
slide8.addText('API 接口设计', layouts.sectionTitle);
slide8.addText('RESTful API Endpoints', {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, color: colors.lightText,
    fontFace: 'Microsoft YaHei'
});

const apis = [
    { method: 'GET', path: '/api/news', desc: '获取新闻列表' },
    { method: 'POST', path: '/api/news', desc: '创建新闻' },
    { method: 'GET', path: '/api/news/[id]', desc: '获取新闻详情' },
    { method: 'PUT', path: '/api/news/[id]', desc: '更新新闻' },
    { method: 'DELETE', path: '/api/news/[id]', desc: '删除新闻' },
    { method: 'GET', path: '/api/users', desc: '获取用户列表' },
    { method: 'POST', path: '/api/auth/login', desc: '用户登录' },
    { method: 'POST', path: '/api/auth/logout', desc: '用户登出' }
];

apis.forEach((api, i) => {
    const y = 2 + (i * 0.55);
    // 方法标签
    const methodColors = { GET: '10B981', POST: '3B82F6', PUT: 'F59E0B', DELETE: 'EF4444' };
    slide8.addShape('rect', {
        x: 0.5, y: y, w: 0.9, h: 0.4,
        fill: methodColors[api.method] || '666666', rectRadius: 0.05
    });
    slide8.addText(api.method, {
        x: 0.5, y: y + 0.05, w: 0.9, h: 0.3,
        fontSize: 11, bold: true, color: 'FFFFFF',
        align: 'center', fontFace: 'Arial'
    });
    // 路径
    slide8.addText(api.path, {
        x: 1.6, y: y + 0.05, w: 3, h: 0.3,
        fontSize: 13, color: colors.primary,
        fontFace: 'Consolas'
    });
    // 描述
    slide8.addText(api.desc, {
        x: 5, y: y + 0.05, w: 4.5, h: 0.3,
        fontSize: 13, color: colors.text,
        fontFace: 'Microsoft YaHei'
    });
});

// ========== 第9页: 项目特色 ==========
const slide9 = ppt.addSlide();
slide9.addText('项目特色与亮点', layouts.sectionTitle);
slide9.addText('Key Features & Highlights', {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, color: colors.lightText,
    fontFace: 'Microsoft YaHei'
});

const features = [
    { title: '🎨 现代化设计', desc: '采用 Tailwind CSS + shadcn/ui，响应式布局，支持移动端' },
    { title: '⚡ 高性能', desc: 'Next.js App Router，服务端组件，图片优化，SEO友好' },
    { title: '🔒 安全可靠', desc: 'JWT 认证，密码加密，权限控制，Session 管理' },
    { title: '📱 内容管理', desc: '完整的新闻、活动、展览 CMS 系统，支持富媒体' },
    { title: '🖼️ 作品展示', desc: '瀑布流布局，图片懒加载，分类筛选，大图预览' },
    { title: '🔍 智能筛选', desc: '多维度筛选功能，实时搜索，状态过滤' }
];

features.forEach((feature, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + (col * 4.8);
    const y = 2 + (row * 1.2);
    
    slide9.addShape('rect', {
        x: x, y: y, w: 4.5, h: 1,
        fill: colors.secondary, rectRadius: 0.1
    });
    slide9.addText(feature.title, {
        x: x + 0.2, y: y + 0.15, w: 4.1, h: 0.4,
        fontSize: 15, bold: true, color: colors.primary,
        fontFace: 'Microsoft YaHei'
    });
    slide9.addText(feature.desc, {
        x: x + 0.2, y: y + 0.55, w: 4.1, h: 0.4,
        fontSize: 12, color: colors.text,
        fontFace: 'Microsoft YaHei'
    });
});

// ========== 第10页: 开发计划 ==========
const slide10 = ppt.addSlide();
slide10.addText('开发计划', layouts.sectionTitle);
slide10.addText('Development Roadmap', {
    x: 0.5, y: 1.2, w: 9, h: 0.4,
    fontSize: 14, color: colors.lightText,
    fontFace: 'Microsoft YaHei'
});

// 时间线
const phases = [
    { phase: '第一阶段', time: '已完成', tasks: '基础架构搭建、首页、关于我们、活动须知', status: 'done' },
    { phase: '第二阶段', time: '已完成', tasks: '新闻系统、活动管理、影展在线、联系我们', status: 'done' },
    { phase: '第三阶段', time: '已完成', tasks: '管理后台、用户认证、API 接口', status: 'done' },
    { phase: '第四阶段', time: '进行中', tasks: 'UI 优化、性能调优、内容填充', status: 'doing' }
];

phases.forEach((phase, i) => {
    const y = 2 + (i * 0.9);
    const color = phase.status === 'done' ? '10B981' : 'F59E0B';
    
    // 状态点
    slide10.addShape('ellipse', {
        x: 0.7, y: y + 0.15, w: 0.3, h: 0.3,
        fill: color
    });
    // 线
    if (i < phases.length - 1) {
        slide10.addShape('line', {
            x: 0.85, y: y + 0.45, w: 0, h: 0.6,
            line: { color: 'CCCCCC', width: 2 }
        });
    }
    // 阶段
    slide10.addText(phase.phase, {
        x: 1.3, y: y + 0.05, w: 1.5, h: 0.4,
        fontSize: 16, bold: true, color: colors.primary,
        fontFace: 'Microsoft YaHei'
    });
    slide10.addText(phase.time, {
        x: 3, y: y + 0.1, w: 1.5, h: 0.3,
        fontSize: 12, color: colors.lightText,
        fontFace: 'Microsoft YaHei'
    });
    slide10.addText(phase.tasks, {
        x: 1.3, y: y + 0.45, w: 8, h: 0.35,
        fontSize: 13, color: colors.text,
        fontFace: 'Microsoft YaHei'
    });
});

// ========== 第11页: 总结 ==========
const slide11 = ppt.addSlide();
slide11.addShape('rect', { x: 0, y: 0, w: 10, h: 5.625, fill: colors.dark });
slide11.addText('项目总结', {
    x: 0.5, y: 1, w: 9, h: 0.8,
    fontSize: 36, bold: true, color: colors.accent,
    align: 'center', fontFace: 'Microsoft YaHei'
});
slide11.addText('Summary', {
    x: 0.5, y: 1.8, w: 9, h: 0.4,
    fontSize: 16, color: colors.secondary,
    align: 'center', fontFace: 'Microsoft YaHei'
});

slide11.addText([
    { text: '✓ ', options: { color: '10B981' } },
    { text: '完整的协会官网解决方案\n' },
    { text: '✓ ', options: { color: '10B981' } },
    { text: '现代化的技术架构\n' },
    { text: '✓ ', options: { color: '10B981' } },
    { text: '内容管理系统\n' },
    { text: '✓ ', options: { color: '10B981' } },
    { text: '响应式设计支持多端' }
], {
    x: 0.5, y: 2.8, w: 9, h: 2,
    fontSize: 18, color: colors.accent,
    align: 'center', fontFace: 'Microsoft YaHei', lineSpacing: 32
});

slide11.addText('感谢观看', {
    x: 0.5, y: 4.8, w: 9, h: 0.5,
    fontSize: 24, bold: true, color: colors.secondary,
    align: 'center', fontFace: 'Microsoft YaHei'
});

// 保存 PPT
const outputPath = process.argv[2] || './东城区摄影家协会官网项目需求.pptx';
ppt.writeFile({ fileName: outputPath })
    .then(() => {
        console.log('PPT 生成成功:', outputPath);
    })
    .catch(err => {
        console.error('生成失败:', err);
        process.exit(1);
    });
