export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "市场调研与整合推广",
        "tagline": "目标客群｜产品传播｜渠道预算｜AI复盘",
        "items": [
          {
            "name": "搜狐AI资讯产品市场调研与整合推广",
            "meta": "北京搜狐新媒体｜2025.12–2026.02",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "调研策划：价格与需求反馈，形成分层推广计划",
              "产品传播：100+条内容，AI选题文案与渠道物料",
              "推广执行：拉新、科技活动、达人及A/B测试",
              "效果复盘：注册较前周+50%，首次专题创建率相对+15%"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "市场推广与资源协同",
        "tagline": "客户洞察｜产品物料｜高校推广｜外部合作",
        "items": [
          {
            "name": "AI教育产品市场推广与资源协同",
            "meta": "北京领知宏华｜2024.10–2025.05",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "需求调研：100+条反馈，提炼场景与客户关注点",
              "产品物料：从0到1公众号，输出30+篇指南与案例",
              "资源协同：高校活动执行、东南亚合作需求与分工",
              "反馈迭代：10条优化建议，核心功能使用率+30%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "新品推广与渠道联动",
        "tagline": "新品调研｜品牌宣传｜门店传播｜周度复盘",
        "items": [
          {
            "name": "ZUS Coffee新品推广与渠道联动",
            "meta": "Zuspresso｜2023.12–2024.06",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "新品调研：用户偏好与竞品内容，提炼卖点和场景",
              "品牌宣传：协助发布50条Instagram内容",
              "渠道联动：线上首发、FamilyMart物料与发布排期",
              "营销复盘：15+次复盘，账号粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "Market Research & Integrated Promotion",
        "tagline": "Target Users · Product Messages · Channel Budgets · AI Reviews",
        "items": [
          {
            "name": "Sohu AI Information: Research & Integrated Promotion",
            "meta": "Sohu New Media｜Dec 2025–Feb 2026",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "Research: pricing and needs feedback informed segmented outreach",
              "Communication: 100+ posts, AI-assisted copy and channel assets",
              "Execution: acquisition, technology events, creators and A/B tests",
              "Review: registrations +50% versus prior week; first-topic rate +15% relatively"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "Product Promotion & Resource Coordination",
        "tagline": "Customer Insights · Materials · University Events · Cooperation",
        "items": [
          {
            "name": "AI Education: Promotion & Resource Coordination",
            "meta": "Lingzhi Honghua｜Oct 2024–May 2025",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Research: 100+ feedback items revealed scenarios and customer priorities",
              "Materials: a new WeChat account and 30+ guides and use cases",
              "Coordination: university events and Southeast Asia cooperation",
              "Iteration: 10 suggestions; core-feature usage increased 30%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "New-Product Promotion & Channel Coordination",
        "tagline": "New-Product Research · Brand Content · Retail Channels · Reviews",
        "items": [
          {
            "name": "ZUS Coffee: Promotion & Channel Coordination",
            "meta": "Zuspresso｜Dec 2023–Jun 2024",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Research: preferences and competitor content informed messages and occasions",
              "Brand content: supported 50 Instagram posts",
              "Channels: online launches and FamilyMart materials and schedules",
              "Review: 15+ reviews; contributed to 11k+ follower growth"
            ]
          }
        ]
      }
    ]
  }
}

export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
