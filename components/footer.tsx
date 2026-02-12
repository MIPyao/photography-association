import Link from "next/link"
import { Camera, Mail, Phone, MapPin } from "lucide-react"
// test
export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground theme-flat:bg-accent theme-business:bg-foreground theme-modern:bg-primary/90 theme-modern:backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8" />
              <span className="text-xl font-bold theme-flat:font-semibold theme-business:font-bold theme-business:uppercase theme-business:tracking-wide theme-modern:metallic-text">
                东城区摄影家协会
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md theme-business:text-sm theme-business:font-medium">
              致力于推广摄影艺术，提升摄影技艺，为摄影爱好者提供交流学习的平台，
              记录东城区的美好时光，传承摄影文化。
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 theme-flat:font-medium theme-business:font-bold theme-business:text-base theme-business:uppercase theme-business:tracking-wide theme-modern:metallic-text">
              快速导航
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors theme-business:text-sm theme-business:font-medium"
                >
                  协会概况
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors theme-business:text-sm theme-business:font-medium"
                >
                  协会动态
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors theme-business:text-sm theme-business:font-medium"
                >
                  协会活动
                </Link>
              </li>
              <li>
                <Link
                  href="/exhibitions"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors theme-business:text-sm theme-business:font-medium"
                >
                  影展在线
                </Link>
              </li>
              <li>
                <Link
                  href="/guidelines"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors theme-business:text-sm theme-business:font-medium"
                >
                  活动须知
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 theme-flat:font-medium theme-business:font-bold theme-business:text-base theme-business:uppercase theme-business:tracking-wide theme-modern:metallic-text">
              联系我们
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 shrink-0" />
                <span className="text-primary-foreground/80 text-sm theme-business:text-xs theme-business:font-medium">
                  北京市东城区文化馆
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 shrink-0" />
                <span className="text-primary-foreground/80 text-sm theme-business:text-xs theme-business:font-medium">
                  010-12345678
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 shrink-0" />
                <span className="text-primary-foreground/80 text-sm theme-business:text-xs theme-business:font-medium">
                  info@dcphoto.org
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm theme-business:text-xs theme-business:font-medium">
            © 2024 东城区摄影家协会. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
}
