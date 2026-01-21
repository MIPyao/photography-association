"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  AlertTriangle, 
  HelpCircle,
  Users,
  Calendar,
  Camera,
  MapPin
} from "lucide-react"

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface RuleSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
  rules: string[];
}

export default function GuidelinesPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string[]>([])
  const [activeSection, setActiveSection] = useState<string>("participation")

  // 参与规则数据
  const ruleSections: RuleSection[] = [
    {
      id: "participation",
      title: "参与规则",
      icon: <Users className="w-5 h-5" />,
      content: "为确保协会活动的顺利进行和所有参与者的良好体验，请仔细阅读并遵守以下参与规则。",
      rules: [
        "会员资格：参加协会活动需为东城区摄影家协会正式会员，或经会员邀请的嘉宾。",
        "报名流程：通过协会官网或指定渠道进行活动报名，填写完整信息并等待确认。",
        "准时参加：请按活动规定时间到达集合地点，迟到超过15分钟者视为自动放弃参与。",
        "装备要求：根据活动类型携带相应的摄影设备，建议备用电池和存储卡。",
        "服从安排：活动期间请服从组织者的统一安排和调度，不得擅自离队行动。",
        "作品分享：参与活动的优秀作品将有机会在协会平台展示，作者保留版权。"
      ]
    },
    {
      id: "precautions",
      title: "注意事项",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: "摄影活动安全第一，请务必注意以下事项，确保活动安全有序进行。",
      rules: [
        "人身安全：在拍摄过程中注意自身安全，避免进入危险区域或进行危险动作。",
        "设备安全：妥善保管个人摄影设备，协会不承担个人设备损坏或丢失的责任。",
        "公共秩序：遵守公共场所规定，不影响他人正常活动，维护良好形象。",
        "环境保护：拍摄过程中注意保护环境，不破坏自然景观和公共设施。",
        "尊重隐私：拍摄他人时需征得同意，尊重肖像权，避免侵权纠纷。",
        "天气变化：户外活动请关注天气预报，做好相应防护准备。",
        "紧急联系：活动期间保持手机畅通，记下紧急联系人电话。"
      ]
    },
    {
      id: "activity-flow",
      title: "活动流程",
      icon: <Calendar className="w-5 h-5" />,
      content: "了解标准活动流程，帮助您更好地参与协会组织的各类摄影活动。",
      rules: [
        "活动发布：协会提前2-4周发布活动通知，包含时间、地点、内容等详细信息。",
        "报名阶段：会员在规定时间内完成报名，组织者审核确认参与名单。",
        "前期准备：组织者发布活动须知，参与者准备相应设备和物品。",
        "集合签到：活动当天按指定时间地点集合，签到并领取活动物资。",
        "活动进行：按计划开展拍摄活动，组织者提供技术指导和建议。",
        "作品整理：活动结束后参与者提交作品，协会组织分享和点评。",
        "总结反馈：活动结束后发布总结报告，收集参与者反馈意见。"
      ]
    }
  ]

  // 常见问题数据
  const faqData: FAQItem[] = [
    {
      id: "faq1",
      question: "如何成为东城区摄影家协会会员？",
      answer: "申请人需填写入会申请表，提交个人摄影作品集，经协会理事会审核通过后即可成为正式会员。具体要求请参考协会章程或联系秘书处。",
      category: "membership"
    },
    {
      id: "faq2",
      question: "非会员可以参加协会活动吗？",
      answer: "部分活动对非会员开放，但需会员推荐并支付相应费用。专业培训和外拍采风活动通常优先考虑正式会员。",
      category: "participation"
    },
    {
      id: "faq3",
      question: "活动费用如何收取？",
      answer: "协会日常活动免费，特殊活动如外出采风、专业培训等可能收取交通、住宿、讲师等成本费用。费用明细会在活动通知中明确说明。",
      category: "fees"
    },
    {
      id: "faq4",
      question: "活动取消或改期如何通知？",
      answer: "如遇特殊情况需要取消或改期，协会会提前24小时通过官网、微信群、短信等方式通知所有报名人员。请保持联系方式畅通。",
      category: "schedule"
    },
    {
      id: "faq5",
      question: "参与活动需要什么级别的摄影技术？",
      answer: "协会活动面向不同技术水平的会员，从入门到进阶都有相应安排。活动通知中会注明技术要求，请根据自身情况选择参加。",
      category: "technical"
    },
    {
      id: "faq6",
      question: "活动中拍摄的作品版权归属？",
      answer: "参与者拍摄的作品版权归作者所有。协会有权在宣传、展示等非商业用途中使用，使用时会注明作者姓名。",
      category: "copyright"
    },
    {
      id: "faq7",
      question: "如何获得摄影技术指导？",
      answer: "协会定期组织技术培训、经验分享会，活动中也有资深摄影师提供现场指导。会员可在活动中向组织者请教技术问题。",
      category: "learning"
    },
    {
      id: "faq8",
      question: "活动期间的安全保障措施？",
      answer: "协会为所有参与者购买意外保险，配备急救药品，安排安全员。户外活动会提前勘察路线，制定安全预案。",
      category: "safety"
    }
  ]

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* 英雄区域 */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/photography-guidelines-rules.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              <BookOpen className="h-4 w-4 mr-2" />
              活动须知
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              参与指南
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              了解协会活动规则、注意事项和常见问题
              <br />
              确保您的参与体验
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>{ruleSections.length} 个规则章节</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                <span>{faqData.length} 个常见问题</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>全面参与指南</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主要内容区域 */}
      <section className="py-16 bg-linear-to-b from-background to-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 页面导航 */}
          <Card className="mb-16 shadow-lg border-2">
            <CardContent className="p-8">
              <nav className="flex flex-wrap gap-4 justify-center">
                {ruleSections.map((section) => (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => scrollToSection(section.id)}
                    className="flex items-center group hover:scale-105 transition-transform"
                  >
                    {section.icon}
                    <span className="ml-2">{section.title}</span>
                  </Button>
                ))}
                <Button
                  variant={activeSection === "faq" ? "default" : "outline"}
                  size="sm"
                  onClick={() => scrollToSection("faq")}
                  className="flex items-center group hover:scale-105 transition-transform"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  常见问题
                </Button>
              </nav>
            </CardContent>
          </Card>

          {/* 规则章节 */}
          <div className="space-y-12 mb-16">
            {ruleSections.map((section) => (
              <Card key={section.id} id={section.id} className="scroll-mt-8 shadow-lg border-2 group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-8 md:p-10">
                  <CardTitle className="flex items-center text-2xl md:text-3xl">
                    <div className="p-4 bg-primary/10 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                      <div className="text-primary">
                        {section.icon}
                      </div>
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 md:p-10 pt-0">
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{section.content}</p>
                  <div className="space-y-6">
                    {section.rules.map((rule, index) => (
                      <div key={index} className="flex items-start group/item hover:bg-primary/5 p-4 rounded-xl transition-colors">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5 group-hover/item:scale-110 transition-transform">
                          {index + 1}
                        </div>
                        <p className="text-foreground leading-relaxed text-lg">{rule}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 常见问题 */}
          <Card id="faq" className="scroll-mt-8 shadow-lg border-2">
            <CardHeader className="p-8 md:p-10">
              <CardTitle className="flex items-center text-2xl md:text-3xl">
                <div className="p-4 bg-green-500/10 rounded-xl mr-4">
                  <HelpCircle className="w-6 h-6 text-green-500" />
                </div>
                常见问题
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 md:p-10 pt-0">
              <div className="space-y-4">
                {faqData.map((faq) => (
                  <Card key={faq.id} className="border-2 hover:border-primary/30 transition-colors">
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-6 h-auto hover:bg-primary/5 rounded-xl"
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <span className="font-medium text-left text-lg">{faq.question}</span>
                      {expandedFAQ.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </Button>
                    {expandedFAQ.includes(faq.id) && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed text-lg mb-4">{faq.answer}</p>
                        <div className="mt-2">
                          <Badge variant="secondary" className="text-xs px-3 py-1">
                            {faq.category === 'membership' && '会员相关'}
                            {faq.category === 'participation' && '参与相关'}
                            {faq.category === 'fees' && '费用相关'}
                            {faq.category === 'schedule' && '时间安排'}
                            {faq.category === 'technical' && '技术相关'}
                            {faq.category === 'copyright' && '版权相关'}
                            {faq.category === 'learning' && '学习指导'}
                            {faq.category === 'safety' && '安全保障'}
                          </Badge>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 联系信息 */}
          <Card className="mt-16 bg-linear-to-br from-primary/10 via-primary/5 to-background shadow-xl border-2 border-primary/20">
            <CardContent className="p-10 md:p-14">
              <div className="text-center">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                  <HelpCircle className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  仍有疑问？
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  如有其他问题，请联系协会秘书处获取帮助。
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button variant="outline" size="lg" className="group hover:scale-105 transition-transform">
                    <Camera className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    联系秘书处
                  </Button>
                  <Button size="lg" className="group hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    访问协会
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}