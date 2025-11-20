import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Tag, User, ArrowLeft, Share2, Eye } from "lucide-react"
import Link from "next/link"

// Mock data - 实际项目中应该从数据库或API获取
const newsData: Record<string, any> = {
  "1": {
    id: 1,
    title: "2024年东城区摄影大赛圆满落幕",
    date: "2024-03-15",
    author: "协会秘书处",
    category: "赛事活动",
    views: 1256,
    image: "/sucai/photography-competition-award-ceremony.jpg",
    content: `
      <h2>赛事概况</h2>
      <p>2024年东城区摄影大赛于3月15日在东城区文化中心圆满落幕。本次大赛自启动以来，得到了全区摄影爱好者的热烈响应，共收到来自各行各业摄影爱好者的作品500余幅。</p>
      
      <h2>评审过程</h2>
      <p>大赛组委会邀请了多位国内知名摄影家和专业评委，对所有参赛作品进行了严格、公正的评选。评委们从艺术性、技术性、创新性等多个维度对作品进行综合评价。</p>
      
      <h2>获奖作品</h2>
      <p>经过激烈角逐，最终评出金奖作品5幅、银奖作品10幅、铜奖作品15幅，优秀奖作品20幅。获奖作品涵盖了人文纪实、风光摄影、人像摄影等多个类别，充分展现了东城区摄影艺术的创作水平。</p>
      
      <h2>颁奖典礼</h2>
      <p>颁奖典礼在热烈的氛围中举行，协会领导为获奖者颁发了荣誉证书和奖金。获奖作品将在东城区各大文化场馆进行巡回展出，供市民欣赏。</p>
      
      <h2>展望未来</h2>
      <p>东城区摄影家协会将继续举办各类摄影赛事和活动，为广大摄影爱好者提供更多展示才华的平台，推动东城区摄影艺术事业的蓬勃发展。</p>
    `,
  },
  "2": {
    id: 2,
    title: "春季摄影采风活动成功举办",
    date: "2024-03-10",
    author: "活动部",
    category: "采风活动",
    views: 892,
    image: "/sucai/photographers-taking-pictures-in-traditional-chine.jpg",
    content: `
      <h2>活动背景</h2>
      <p>春回大地，万物复苏。为了让会员们更好地捕捉春日美景，提升摄影技艺，协会于3月10日组织了春季摄影采风活动。</p>
      
      <h2>采风路线</h2>
      <p>本次采风活动选择了故宫、天坛等北京著名景点作为拍摄地点。在专业摄影师的带领下，会员们充分领略了古建筑与春日景色的完美融合。</p>
      
      <h2>创作收获</h2>
      <p>活动中，会员们积极创作，从不同角度记录下了春天的美好。大家在实践中相互交流学习，不仅收获了精彩的摄影作品，更加深了对摄影艺术的理解。</p>
      
      <h2>技术指导</h2>
      <p>随行的专业摄影师为会员们提供了现场指导，从构图、用光、色彩等方面进行了详细讲解，帮助大家提升拍摄技巧。</p>
      
      <h2>后续安排</h2>
      <p>协会将定期组织类似的采风活动，让会员们有更多机会走进大自然，用镜头记录生活之美。</p>
    `,
  },
  "3": {
    id: 3,
    title: "摄影技术交流讲座即将开展",
    date: "2024-03-08",
    author: "培训部",
    category: "技术培训",
    views: 1045,
    image: "/sucai/photography-workshop-with-professional-equipment.jpg",
    content: `
      <h2>讲座预告</h2>
      <p>应广大会员要求，协会将于近期举办人像摄影技术交流讲座。本次讲座邀请了国内知名人像摄影师担任主讲，为大家分享专业的人像摄影技巧。</p>
      
      <h2>讲座内容</h2>
      <p>讲座将围绕人像摄影的核心技术展开，包括：</p>
      <ul>
        <li>自然光与人工光的运用技巧</li>
        <li>人像构图的基本原则与创新方法</li>
        <li>人物神态的捕捉与引导</li>
        <li>后期修图的技巧与禁忌</li>
        <li>不同场景下的拍摄策略</li>
      </ul>
      
      <h2>主讲嘉宾</h2>
      <p>本次讲座特邀摄影师李明老师担任主讲。李老师从事人像摄影创作20余年，作品多次在国内外摄影大赛中获奖，并出版多部摄影专著。</p>
      
      <h2>参与方式</h2>
      <p>讲座对协会会员免费开放，名额有限，需提前报名。非会员也可报名参加，收取少量场地费用。</p>
      
      <h2>报名信息</h2>
      <p>讲座时间：2024年3月20日 下午14:00-17:00<br/>
      讲座地点：东城区文化中心三楼报告厅<br/>
      报名方式：请联系协会秘书处或通过官方微信公众号报名</p>
    `,
  },
};

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const news = newsData[params.id] || newsData["1"]

  // Related news
  const relatedNews = [
    {
      id: 4,
      title: "协会年度会员大会顺利召开",
      date: "2024-03-01",
      image: "/sucai/conference-meeting.png",
    },
    {
      id: 5,
      title: "夏季风光摄影专题讲座报名开启",
      date: "2024-02-25",
      image: "/sucai/vast-mountain-valley.png",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/news">
            <Button variant="ghost" className="mb-6 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回列表
            </Button>
          </Link>

          {/* Title & Meta */}
          <div className="mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Tag className="h-3 w-3 mr-1" />
              {news.category}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {news.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {news.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {news.author}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                {news.views} 次浏览
              </div>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="h-4 w-4 mr-2" />
                分享
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video overflow-hidden rounded-xl mb-12 border-2 border-border">
            <img
              src={news.image || "/placeholder.svg"}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-li:text-foreground/90 prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* Tags & Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">标签：</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-transparent"
                >
                  摄影大赛
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-transparent"
                >
                  活动回顾
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-transparent"
                >
                  协会动态
                </Button>
              </div>
              <Button variant="default" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                分享文章
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related News */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">相关动态</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedNews.map((item) => (
              <Link key={item.id} href={`/news/${item.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="flex gap-4">
                    <div className="w-32 h-24 shrink-0 overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 py-2 pr-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
