import { Suspense } from 'react'
import { GradientBackground } from '@/components/common/GradientBackground'
import { Hero } from '@/components/home/Hero'
import { Container } from '@/components/common/Container'
import { FeaturedPostSection, RecentPostsSection } from '@/components/home/AsyncPostSections'
import { FeaturedPostSkeleton, PostListSkeleton } from '@/components/common/Skeleton'

export default function Home() {
    return (
        <main className="min-h-screen">
            <GradientBackground />

            {/* Hero Section - 静态内容，无需 Suspense */}
            <Hero />

            {/* 主要内容区域 */}
            <Container>
                <div className="space-y-16 py-12 sm:py-16 lg:py-20">
                    {/* 特色文章 - 使用 Suspense */}
                    <Suspense fallback={<FeaturedPostSkeleton />}>
                        <FeaturedPostSection />
                    </Suspense>

                    {/* 最新文章列表 - 使用 Suspense */}
                    <Suspense fallback={<PostListSkeleton />}>
                        <RecentPostsSection />
                    </Suspense>
                </div>
            </Container>
        </main>
    )
}
