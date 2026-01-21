"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Navigation as NavigationIcon,
  Users,
  Building
} from "lucide-react"

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // 联系信息数据
  const contactInfo = {
    association: {
      name: "东城区摄影家协会",
      address: "北京市东城区景山前街4号",
      phone: "010-6401-2345",
      email: "contact@dcphoto.org",
      website: "www.dcphoto.org"
    },
    officeHours: [
      { day: "周一至周五", time: "9:00 - 17:00" },
      { day: "周六", time: "9:00 - 12:00" },
      { day: "周日", time: "休息" }
    ],
    departments: [
      {
        name: "秘书处",
        phone: "010-6401-2345",
        email: "secretary@dcphoto.org",
        description: "日常事务处理、会员管理"
      },
      {
        name: "活动部",
        phone: "010-6401-2346",
        email: "activities@dcphoto.org",
        description: "活动策划、组织协调"
      },
      {
        name: "展览部",
        phone: "010-6401-2347",
        email: "exhibition@dcphoto.org",
        description: "作品征集、展览安排"
      },
      {
        name: "培训部",
        phone: "010-6401-2348",
        email: "training@dcphoto.org",
        description: "专业培训、技术指导"
      }
    ]
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟表单提交
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const getDirections = () => {
    // 打开地图应用
    const url = `https://maps.google.com/?q=${encodeURIComponent(contactInfo.association.address)}`
    window.open(url, "_blank")
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* 英雄区域 */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/photography-contact-office.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              <MessageCircle className="h-4 w-4 mr-2" />
              联系我们
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              保持联系
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              欢迎与东城区摄影家协会联系
              <br />
              我们将竭诚为您提供专业服务
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>电话咨询</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>邮件联系</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>实地访问</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主要内容区域 */}
      <section className="py-16 bg-linear-to-b from-background to-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左侧联系信息 */}
            <div className="space-y-8">
              {/* 基本联系信息 */}
              <Card className="shadow-lg border-2 group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-8">
                  <CardTitle className="flex items-center text-2xl">
                    <div className="p-3 bg-primary/10 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    协会信息
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-6">
                  <div className="flex items-start group/item hover:bg-primary/5 p-4 rounded-xl transition-colors">
                    <MapPin className="w-6 h-6 mr-4 text-primary mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <div>
                      <p className="font-bold text-lg mb-1">地址</p>
                      <p className="text-muted-foreground text-lg">{contactInfo.association.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start group/item hover:bg-primary/5 p-4 rounded-xl transition-colors">
                    <Phone className="w-6 h-6 mr-4 text-primary mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <div>
                      <p className="font-bold text-lg mb-1">电话</p>
                      <p className="text-muted-foreground text-lg">{contactInfo.association.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start group/item hover:bg-primary/5 p-4 rounded-xl transition-colors">
                    <Mail className="w-6 h-6 mr-4 text-primary mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <div>
                      <p className="font-bold text-lg mb-1">邮箱</p>
                      <p className="text-muted-foreground text-lg">{contactInfo.association.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 办公时间 */}
              <Card className="shadow-lg border-2">
                <CardHeader className="p-8">
                  <CardTitle className="flex items-center text-2xl">
                    <div className="p-3 bg-secondary/10 rounded-xl mr-4">
                      <Clock className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    办公时间
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4">
                    {contactInfo.officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-background rounded-xl border-2 hover:border-primary/30 transition-colors">
                        <span className="text-foreground font-medium">{schedule.day}</span>
                        <Badge variant={schedule.day === "周日" ? "secondary" : "default"} className="text-base px-4 py-2">
                          {schedule.time}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 部门联系方式 */}
              <Card className="shadow-lg border-2">
                <CardHeader className="p-8">
                  <CardTitle className="flex items-center text-2xl">
                    <div className="p-3 bg-primary/10 rounded-xl mr-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    部门联系
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-4">
                  {contactInfo.departments.map((dept, index) => (
                    <div key={index} className="p-6 bg-background rounded-xl border-2 hover:border-primary/30 transition-all duration-300 group hover:shadow-md">
                      <h4 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">{dept.name}</h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{dept.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center text-foreground">
                          <Phone className="w-4 h-4 mr-2 text-primary" />
                          {dept.phone}
                        </div>
                        <div className="flex items-center text-foreground">
                          <Mail className="w-4 h-4 mr-2 text-primary" />
                          {dept.email}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* 地图导航 */}
              <Card className="shadow-lg border-2">
                <CardHeader className="p-8">
                  <CardTitle className="flex items-center text-2xl">
                    <div className="p-3 bg-primary/10 rounded-xl mr-4">
                      <NavigationIcon className="w-6 h-6 text-primary" />
                    </div>
                    地图导航
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6">
                    {/* 地图占位 */}
                    <div className="w-full h-64 bg-secondary/20 rounded-xl flex items-center justify-center border-2 border-dashed border-border">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                        <p className="text-muted-foreground">地图加载中...</p>
                      </div>
                    </div>
                    <Button 
                      onClick={getDirections}
                      className="w-full text-lg py-3 group hover:scale-105 transition-transform"
                      size="lg"
                    >
                      <NavigationIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      获取路线
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 右侧留言表单 */}
            <div className="space-y-8">
              <Card className="shadow-lg border-2 group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-8">
                  <CardTitle className="flex items-center text-2xl">
                    <div className="p-3 bg-primary/10 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    在线留言
                  </CardTitle>
                  <p className="text-muted-foreground text-lg mt-2">
                    请填写以下表单，我们会尽快回复您的咨询。
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2 text-foreground">姓名 *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="请输入您的姓名"
                          className="text-lg py-3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2 text-foreground">邮箱 *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="请输入您的邮箱"
                          className="text-lg py-3"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold mb-2 text-foreground">电话</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="请输入您的电话号码"
                        className="text-lg py-3"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold mb-2 text-foreground">主题 *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="请输入咨询主题"
                        className="text-lg py-3"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold mb-2 text-foreground">留言内容 *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="请详细描述您的需求或问题..."
                        className="text-lg py-3 resize-none"
                      />
                    </div>

                    {/* 状态消息 */}
                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-700 text-lg">
                        ✓ 留言已成功提交，我们会尽快与您联系！
                      </div>
                    )}
                    
                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-lg">
                        ✗ 提交失败，请稍后重试或直接联系我们。
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full text-lg py-4 group hover:scale-105 transition-transform"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          提交中...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                          提交留言
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* 快速联系方式 */}
              <Card className="bg-linear-to-br from-primary/10 via-primary/5 to-background shadow-xl border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                      <MessageCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      快速联系
                    </h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      选择您偏好的联系方式，我们随时为您服务。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="outline" size="lg" className="group hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        直接致电
                      </Button>
                      <Button variant="outline" size="lg" className="group hover:scale-105 transition-transform">
                        <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        发送邮件
                      </Button>
                      <Button variant="outline" size="lg" className="group hover:scale-105 transition-transform">
                        <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        微信咨询
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}