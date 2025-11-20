import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  Users,
  Award,
  Target,
  History,
  Heart,
  Building2,
  Trophy,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/photography-equipment-art.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              <Camera className="h-4 w-4 mr-2" />
              关于我们
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              东城区摄影家协会
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              传承摄影艺术，记录美好时光
              <br />
              汇聚摄影精英，展现东城风采
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <span>成立于1985年</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>300+会员</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>专业艺术团体</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-linear-to-b from-background to-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 协会简介 */}
          <Card className="mb-16 shadow-lg border-2 hover:border-primary/20 transition-colors">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-linear-to-br from-primary to-primary/60 rounded-xl shadow-md">
                  <Camera className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    协会简介
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    About Our Association
                  </p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none leading-relaxed space-y-6">
                <p className="text-foreground/90 text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                  东城区摄影家协会成立于1985年，是东城区文学艺术界联合会下属的专业艺术团体，也是北京市摄影家协会的团体会员单位。协会以"传承摄影艺术，记录美好时光，汇聚摄影精英，展现东城风采"为宗旨，致力于推动东城区摄影艺术事业的繁荣发展。
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  多年来，协会始终坚持以人民为中心的创作导向，组织会员深入生活、扎根人民，用镜头记录时代变迁，展现东城区的历史文化底蕴和现代化建设成就。协会现有会员300余人，其中包括多位中国摄影家协会会员、北京市摄影家协会会员，以及众多在各自领域有突出成就的摄影艺术家和摄影爱好者。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 协会宗旨 */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-4 text-base px-4 py-2">
                <Target className="h-4 w-4 mr-2" />
                协会宗旨
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                我们的使命
              </h2>
              <p className="text-muted-foreground">Our Mission & Vision</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    艺术传承
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    传承和发扬摄影艺术，提高会员的摄影创作水平和艺术修养，推动摄影艺术的创新与发展。
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                    <History className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    文化记录
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    用镜头记录东城区的历史变迁、文化传承和社会发展，为时代留下珍贵的影像资料。
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    交流合作
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    加强会员之间的交流与合作，组织各类摄影活动和展览，促进摄影艺术的普及与推广。
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    服务社会
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    服务社会、服务人民，通过摄影艺术丰富群众文化生活，提升城区文化软实力。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-16" />

          {/* 组织架构 */}
          <Card className="mb-16 shadow-lg border-2">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-linear-to-br from-primary to-primary/60 rounded-xl shadow-md">
                  <Building2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    组织架构
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Organizational Structure
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                协会设有主席团、秘书处等组织机构，下设创作委员会、展览委员会、教育培训委员会、对外交流委员会等专业委员会。各委员会分工明确，协同配合，共同推动协会各项工作的开展。
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "主席团",
                    desc: "负责协会重大事项决策和整体工作指导",
                    icon: Trophy,
                  },
                  {
                    title: "秘书处",
                    desc: "负责协会日常事务管理和会员服务",
                    icon: Building2,
                  },
                  {
                    title: "创作委员会",
                    desc: "组织创作采风和艺术创作指导",
                    icon: Camera,
                  },
                  {
                    title: "展览委员会",
                    desc: "策划组织各类摄影展览活动",
                    icon: Award,
                  },
                  {
                    title: "教育培训委员会",
                    desc: "开展摄影技术培训和理论研讨",
                    icon: Sparkles,
                  },
                  {
                    title: "对外交流委员会",
                    desc: "负责对外交流与合作事宜",
                    icon: Users,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group p-5 border-2 border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-md"
                  >
                    <item.icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-foreground mb-2 text-lg">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 发展历程 */}
          <Card className="mb-16 shadow-lg border-2 overflow-hidden">
            <div className="bg-linear-to-r from-primary/10 via-primary/5 to-transparent p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-linear-to-br from-primary to-primary/60 rounded-xl shadow-md">
                  <History className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    发展历程
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Our Journey
                  </p>
                </div>
              </div>
              <div className="space-y-8 relative">
                <div className="absolute left-15 top-8 bottom-8 w-0.5 bg-linear-to-b from-primary via-primary/50 to-transparent hidden md:block" />

                {[
                  {
                    year: "1985年",
                    title: "协会成立",
                    desc: "东城区摄影家协会正式成立，成为东城区文艺界的重要组成部分。",
                  },
                  {
                    year: "1990年代",
                    title: "快速发展",
                    desc: "会员队伍不断壮大，组织多次大型摄影展览和采风活动，在北京市摄影界产生重要影响。",
                  },
                  {
                    year: "2000年代",
                    title: "创新突破",
                    desc: "积极拥抱数字摄影技术，开展多元化摄影活动，推动传统摄影向现代摄影艺术转型。",
                  },
                  {
                    year: "2010年代",
                    title: "全面提升",
                    desc: "加强对外交流合作，举办国际摄影文化交流活动，提升协会的影响力和知名度。",
                  },
                  {
                    year: "2020年代",
                    title: "数字化转型",
                    desc: "建立线上展览平台，开展网络摄影教学，推动协会工作向数字化、网络化方向发展。",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 relative group">
                    <div className="shrink-0">
                      <Badge className="text-base px-4 py-2 bg-primary text-primary-foreground shadow-md group-hover:scale-110 transition-transform">
                        {item.year}
                      </Badge>
                    </div>
                    <div className="flex-1 pb-2">
                      <h4 className="font-bold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* 会员服务 */}
          <Card className="mb-16 shadow-lg border-2 bg-linear-to-br from-background to-secondary/20">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-linear-to-br from-primary to-primary/60 rounded-xl shadow-md">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    会员服务
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Member Services
                  </p>
                </div>
              </div>
              <p className="text-foreground text-lg mb-6 font-medium">
                协会始终坚持以会员为中心，为会员提供全方位、多层次的服务：
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    title: "创作支持",
                    desc: "定期组织采风活动，提供创作交流平台，帮助会员提升创作水平",
                  },
                  {
                    title: "展览机会",
                    desc: "举办各类摄影展览，为会员作品提供展示平台和推广渠道",
                  },
                  {
                    title: "教育培训",
                    desc: "开展摄影技术培训、理论研讨和专题讲座，提升会员专业素养",
                  },
                  {
                    title: "评奖推优",
                    desc: "组织各类摄影比赛，推荐优秀会员和作品参加上级评选",
                  },
                  {
                    title: "交流合作",
                    desc: "搭建会员交流平台，促进会员之间的学习互鉴和合作共赢",
                  },
                  {
                    title: "权益维护",
                    desc: "维护会员合法权益，为会员提供必要的法律咨询和帮助",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 bg-background rounded-xl border-2 border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
                  >
                    <Award className="h-6 w-6 text-primary mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-bold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-br from-primary/10 via-primary/5 to-background shadow-xl border-2 border-primary/20">
            <CardContent className="p-10 md:p-14">
              <div className="text-center">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  加入我们
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  如果您热爱摄影艺术，愿意为东城区摄影事业的发展贡献力量，欢迎加入东城区摄影家协会。
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-background rounded-lg border-2 border-border">
                    <span className="font-bold text-primary">联系电话：</span>
                    <span className="text-foreground">010-12345678</span>
                  </div>
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-background rounded-lg border-2 border-border">
                    <span className="font-bold text-primary">电子邮箱：</span>
                    <span className="text-foreground">dcphoto@example.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
