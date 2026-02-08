import Alpine from 'alpinejs'
import { collapse } from '@alpinejs/collapse';
import { initGSAPAnimations } from './scripts/animation';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

window.Alpine = Alpine;
Alpine.plugin(collapse);

Alpine.data('cornerStoneFaq', () => (
    {
        activeId: 1,
        items: [
            { id: 1, title: 'What is your refund policy?', content: 'We offer a 14-day money-back guarantee on all plans.' },
            { id: 2, title: 'How long does development take?', content: 'Typical delivery time is 7–10 business days.' },
            { id: 3, title: 'Do you support WordPress plugins?', content: 'Yes, we specialize in custom WordPress plugin development.' },
            { id: 4, title: 'Is support included?', content: 'Email and ticket support is included for all paid plans.' },
            { id: 5, title: 'Can I request custom features?', content: 'Absolutely. Custom features can be scoped and quoted.' },
            { id: 6, title: 'What payment methods do you accept?', content: 'We accept all major credit cards and PayPal.' },
            { id: 7, title: 'Do you offer discounts for non-profits?', content: 'Yes, we provide special pricing for non-profit organizations.' },
            { id: 8, title: 'How secure is my data?', content: 'We use industry-standard security measures to protect your data.' },
            { id: 9, title: 'Can I upgrade or downgrade my plan?', content: 'Yes, you can change your plan at any time from your account settings.' },
            { id: 10, title: 'Is there a free trial available?', content: 'Yes, we offer a 14-day free trial for the Pro plan.' }
        ],
        toggle(id) { this.activeId = this.activeId === id ? null : id },
        isOpen(id) { return this.activeId === id }
    }
));

Alpine.data('cornerStoneHomepageAboutProduct', () => (
    {
        activeTab: 'tab1',
        tabs: [
            {
                id: 'tab1',
                label: 'AI That Understands You',
                title: 'AI That Gets It Right',
                desc: 'Tap into AI-powered suggestions tailored to your team’s habits. Whether it’s writing, organizing, or prioritizing — it just knows what to do next.',
                img: './images/tabs/tab01.webp'
            },
            {
                id: 'tab2',
                label: 'Effortless Automation',
                title: 'Effortless Automation',
                desc: 'Automate your workflows with zero effort. Let AI handle the repetitive tasks while you focus on creativity.',
                img: './images/tabs/tab01.webp'
            },
            {
                id: 'tab3',
                label: 'Teamwork That Clicks',
                title: 'Teamwork That Clicks',
                desc: 'Collaborate in real-time with tools designed for speed and clarity.',
                img: './images/tabs/tab01.webp'
            },
            {
                id: 'tab4',
                label: 'Search, Simplified',
                title: 'Search, Simplified',
                desc: 'Find anything across your entire workspace in seconds with semantic search.',
                img: './images/tabs/tab01.webp'
            }
        ]
    }
));

Alpine.data('cornerFeatureWhyChooseUs', () => (
    {
        activeTab: 'ai',
        content: {
            ai: {
                heroTitle: 'AI That Gets It Right',
                heroDesc: 'Tap into AI-powered suggestions tailored to your team\'s habits. Whether it\'s writing, organizing, or prioritizing — it just knows what to do next.',
                heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
                card1Title: 'Smart Contextual Learning',
                card1Desc: 'Our AI learns your unique terminology and project structures to provide suggestions that actually make sense.',
                card1Img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
                card2Title: 'Generative First Drafts',
                card2Desc: 'Go from a blank page to a complete project brief in seconds. Refine with your voice and hit the ground running.',
                card2Img: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=600'
            },
            automation: {
                heroTitle: 'Workflows That Run Themselves',
                heroDesc: 'Connect your favorite tools and let our automation engine handle the hand-offs. Scale your output without increasing your effort.',
                heroImg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
                card1Title: 'Visual Builder',
                card1Desc: 'Drag, drop, and deploy. No coding required to build complex logic that handles your repetitive daily tasks.',
                card1Img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
                card2Title: 'Conditional Logic',
                card2Desc: 'Create branching paths for your projects. If X happens, notify Y—ensuring nothing ever slips through the cracks.',
                card2Img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600'
            },
            teamwork: {
                heroTitle: 'Collaboration Without Friction',
                heroDesc: 'Real-time syncing and intuitive role management mean everyone is always on the same page, regardless of timezone or department.',
                heroImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
                card1Title: 'Global Presence',
                card1Desc: 'See who is working on what in real-time. Avoid duplicate work and conflicts with instant visual feedback.',
                card1Img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
                card2Title: 'Granular Permissions',
                card2Desc: 'Control exactly who sees what. From external contractors to internal leadership, keep sensitive data secure.',
                card2Img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600'
            },
            search: {
                heroTitle: 'Find Anything in Seconds',
                heroDesc: 'Our unified search engine indexes everything—docs, tasks, comments, and files. If it exists in your workspace, you can find it.',
                heroImg: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000',
                card1Title: 'Natural Language Search',
                card1Desc: 'Search the way you talk. Queries like the PDF Manuel sent last Tuesday yield instant, accurate results.',
                card1Img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600',
                card2Title: 'Deep Content Indexing',
                card2Desc: 'We don\'t just search titles. We search the text inside your images and PDFs so your knowledge base is truly unlocked.',
                card2Img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600'
            }
        }
    }
));

Alpine.data('cornerFeatureCompareBreakdown', () => (
    {
        activeTab: 'ai',
        breakdown: {
            ai: {
                title: 'What makes us Different?',
                bullets: ['Intelligent habit-based task sorting', 'Predictive typing for faster documentation', 'Context-aware project management'],
                img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
            },
            automation: {
                title: 'Visual Workflow Builder',
                bullets: ['Drag-and-drop node logic', 'Zero-code integration mapping', 'Automated QA and testing steps'],
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
            },
            teamwork: {
                title: 'Unified Communication',
                bullets: ['Real-time presence tracking', 'Collaborative canvas editing', 'Enterprise-grade role permissions'],
                img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200'
            },
            search: {
                title: 'Neural Search Engine',
                bullets: ['Cross-platform indexing across 50+ apps', 'Natural language query processing', 'Deep file content extraction'],
                img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200'
            }
        }
    }
));

Alpine.data('cornerFeatureUseCases', () => (
    {
        activeTeam: 'product',
        activeFeature: 'ai',
        useCases: {
            product: {
                label: 'For Product Teams',
                icon: './images/icons/features-usecases/product.png',
                features: {
                    ai: {
                        title: 'AI That Understands You',
                        desc: 'Instantly find tasks, notes, or people — even from past projects.',
                        img: './images/features/dashboard.png'
                    },
                    automation: {
                        title: 'Effortless Automation',
                        desc: 'Automate roadmap updates and sprint handoffs without lifting a finger.',
                        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
                    },
                    teamwork: {
                        title: 'Teamwork That Clicks',
                        desc: 'Keep every stakeholder aligned with live canvases and shared goals.',
                        img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200'
                    },
                    search: {
                        title: 'Search, Simplified',
                        desc: 'Deep indexing for PRDs, specs, and historical decisions.',
                        img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200'
                    }
                }
            },
            sales: { label: 'For Sales Teams', icon: './images/icons/features-usecases/sales.png', features: { ai: { title: 'Lead Intelligence', desc: 'Predictive lead scoring to focus on high-intent deals.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' } } },
            engineering: { label: 'For Engineering', icon: './images/icons/features-usecases/engineering.png', features: { ai: { title: 'Code Intelligence', desc: 'AI-driven task prioritization for dev cycles.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200' } } },
            design: { label: 'For Designers', icon: './images/icons/features-usecases/design.png', features: { ai: { title: 'Asset Management', desc: 'Find any component or draft with visual search.', img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80&w=1200' } } },
            marketing: { label: 'For Marketing', icon: './images/icons/features-usecases/marketing.png', features: { ai: { title: 'Content Sorting', desc: 'Keep campaigns organized across every channel.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' } } },
            hr: { label: 'For HR Teams', icon: './images/icons/features-usecases/hr.png', features: { ai: { title: 'People Logic', desc: 'Streamline onboarding and team directories.', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200' } } }
        }
    }
));


Alpine.data('cornerBlogPageListPosts', () => (
    {
        activeCat: 'Getting Started',
        currentPage: 1,
        perPage: 2,
        posts: [
            { id: 1, cat: 'Getting Started', date: 'MAY 26, 2025', title: 'What\'s included in the free plan?', desc: 'Get full access to core features, up to 3 projects, and AI-assisted notes.', img: './images/blog/blog-1.png' },
            { id: 2, cat: 'Getting Started', date: 'JUNE 02, 2025', title: 'How to invite your team', desc: 'Collaboration is key. Learn how to set up your workspace for success.', img: './images/blog/blog-2.png' },
            { id: 3, cat: 'Features', date: 'JUNE 10, 2025', title: 'Deep dive into AI Notes', desc: 'Our AI doesn\'t just transcribe; it understands context and action items.', img: './images/blog/blog-1.png' },
            { id: 4, cat: 'Sales', date: 'JULY 15, 2025', title: 'Scaling your revenue with CornerStone', desc: 'How top-tier sales teams use our CRM to close deals 40% faster.', img: './images/blog/blog-2.png' },
            { id: 5, cat: 'Getting Started', date: 'AUG 01, 2025', title: 'Setting up your first Dashboard', desc: 'Visualize your data in minutes with our drag-and-drop builder.', img: './images/blog/blog-1.png' },
            { id: 6, cat: 'Billing', date: 'AUG 20, 2025', title: 'Understanding your invoice', desc: 'A breakdown of charges and how to manage your subscription effectively.', img: './images/blog/blog-2.png' },
            { id: 7, cat: 'Features', date: 'SEP 05, 2025', title: 'New Feature: Neural Search', desc: 'Find anything in your workspace instantly with our new deep indexing feature.', img: './images/blog/blog-1.png' },
            { id: 8, cat: 'Sales', date: 'SEP 18, 2025', title: 'Integrating CornerStone with your sales stack', desc: 'Seamlessly connect with popular tools like Salesforce, HubSpot, and more.', img: './images/blog/blog-2.png' },
            { id: 9, cat: 'Billing', date: 'OCT 02, 2025', title: 'How to apply discounts and promo codes', desc: 'Maximize savings with our flexible billing options.', img: './images/blog/blog-1.png' },
            { id: 10, cat: 'Getting Started', date: 'OCT 15, 2025', title: 'Customizing your user profile', desc: 'Make CornerStone truly yours with personalized settings and preferences.', img: './images/blog/blog-2.png' },
            { id: 11, cat: 'Getting Started', date: 'NOV 01, 2025', title: 'Tips for onboarding new team members', desc: 'Ensure a smooth transition with our step-by-step onboarding guide.', img: './images/blog/blog-1.png' },
            { id: 12, cat: 'Getting Started', date: 'NOV 20, 2025', title: 'Maximizing productivity with AI-powered tasks', desc: 'Let our AI handle your to-do list and reminders.', img: './images/blog/blog-2.png' }
        ],
        get filteredPosts() {
            return this.posts.filter(p => p.cat === this.activeCat);
        },
        get paginatedPosts() {
            let start = (this.currentPage - 1) * this.perPage;
            return this.filteredPosts.slice(start, start + this.perPage);
        },
        get totalPages() {
            return Math.ceil(this.filteredPosts.length / this.perPage);
        }
    }
));


Alpine.data('cornerPricingFeatureFlags', () => (
    {
        categories: [
            {
                title: 'Feature flags',
                features: [
                    { name: 'Type-safety', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Toolbar', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'CLI', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Company page', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Company segments', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Advanced targeting rules', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Environments', free: '3 environments', pro: 'Unlimited', ent: 'Unlimited' },
                    { name: 'Gradual rollout', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Remote config', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Kill switch', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Stored attributes', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Flag history', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Local evaluation', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'OpenFeature', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Global network', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Add in bulk', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'AI flag cleanup', free: 'Coming soon', pro: 'Coming soon', ent: 'Coming soon' },
                    { name: 'User permissions', free: 'Coming soon', pro: 'Coming soon', ent: 'Coming soon' }
                ]
            },
            {
                title: 'Beta release workflow',
                features: [
                    { name: 'Release stages', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Feedback volume', free: '50/mo feedback', pro: 'Unlimited', ent: 'Unlimited' },
                    { name: 'Static feedback button', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'In-app surveys', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Customizable styling', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Adoption metrics', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Adoption strategies', free: 'tick', pro: 'tick', ent: 'tick' }
                ]
            },
            {
                title: 'Integrations',
                features: [
                    { name: 'Slack', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Microsoft Teams', free: 'tick', pro: 'tick', ent: 'tick' },
                    { name: 'Discord', free: 'Coming soon', pro: 'tick', ent: 'tick' },
                    { name: 'Jira', free: 'Coming soon', pro: 'tick', ent: 'tick' },
                    { name: 'GitHub Actions', free: 'Coming soon', pro: 'tick', ent: 'tick' },
                    { name: 'Webhooks', free: 'Coming soon', pro: 'Coming soon', ent: 'tick' }
                ]
            }
        ]
    }
));

Alpine.data('cornerPricingCompareTabs', () => (
    {
        activeTab: 0,
        tabs: [
            { name: 'Notion', icon: './images/price/01.png', altLogo: './images/price/notionh.png' },
            { name: 'Asana', icon: './images/price/icon-02.png', altLogo: './images/price/icon-02.png' },
            { name: 'ClickUp', icon: './images/price/clickup.png', altLogo: './images/price/clickup.png' },
            { name: 'Caution', icon: './images/price/01.png', altLogo: './images/price/notionh.png' },
            { name: 'Jira', icon: './images/price/icon-02.png', altLogo: './images/price/icon-02.png' },
            { name: 'ClickUpp', icon: './images/price/clickup.png', altLogo: './images/price/clickup.png' }
        ],
        points: [
            { title: 'Dedicated solution, built for SaaS', desc: 'Not for every use case, just yours: Feature flagging for SaaS' },
            { title: 'Advanced Targeting', desc: 'Detailed rule-based segments for precise rollouts' },
            { title: 'Enterprise Security', desc: 'RBAC and audit logs built into the core platform' },
            { title: 'Scalable Performance', desc: '99.99% uptime SLA with global CDN and redundancy' },
            { title: 'Seamless Integrations', desc: 'Connect with popular tools like Slack, Jira, and more' },
            { title: 'Outstanding Support', desc: '24/7 dedicated support and customer success management' }
        ],
        featureGroups: [
            {
                title: 'Usage Limitation',
                features: [
                    { name: 'MTUs/User', col1: 'tick', col2: 'tick' },
                    { name: 'Accounts', col1: 'minus', col2: 'tick' },
                    { name: 'Devices', col1: 'minus', col2: 'tick' },
                    { name: 'Other identifiers', col1: 'minus', col2: 'tick' }
                ]
            },
            {
                title: 'Flagging Essentials',
                features: [
                    { name: 'Targeting Rules', col1: 'tick', col2: 'tick' },
                    { name: 'Segments', col1: 'minus', col2: 'tick' },
                    { name: 'Environments', col1: 'minus', col2: 'tick' },
                    { name: 'Percentage Rollouts', col1: 'tick', col2: 'tick' },
                    { name: 'Release Kill Switch', col1: 'tick', col2: 'tick' }
                ]
            }
        ]
    }
));

Alpine.data('cornerTeamMembers', () => (
    {
        team: [
            { name: 'Abdullah Noman', role: 'Founder & CEO', img: './images/team/image.png', linkedin: '#', twitter: '#', instagram: '#' },
            { name: 'Ferdaus Kabir Emon', role: 'Founder & CEO', img: './images/team/image-02.png', linkedin: '#', twitter: '#', instagram: '#' },
            { name: 'Abdullah Noman', role: 'Founder & CEO', img: './images/team/image-03.png', linkedin: '#', twitter: '#', instagram: '#' },
            { name: 'Abdullah Noman', role: 'Founder & CEO', img: './images/team/image-04.png', linkedin: '#', twitter: '#', instagram: '#' },
            { name: 'Ferdaus Kabir Emon', role: 'Founder & CEO', img: './images/team/image-05.png', linkedin: '#', twitter: '#', instagram: '#' },
            { name: 'Abdullah Noman', role: 'Founder & CEO', img: './images/team/image-06.png', linkedin: '#', twitter: '#', instagram: '#' }
        ]
    }
));

Alpine.data('cornerTeamPageGalleryAndJobs', () => (
    {
        gallery: [
            { src: './images/team/gallery-1.png', span: 'sm:col-span-4', height: 'h-64 md:h-full' },
            { src: './images/team/gallery-2.png', span: 'sm:col-span-4', height: 'h-64 md:h-full' },
            { src: './images/team/gallery-3.png', span: 'sm:col-span-4', height: 'h-64 md:h-full' },
            { src: './images/team/gallery-4.png', span: 'sm:col-span-3', height: 'h-48 md:h-64' },
            { src: './images/team/gallery-5.png', span: 'sm:col-span-3', height: 'h-48 md:h-64' },
            { src: './images/team/gallery-6.png', span: 'sm:col-span-3', height: 'h-48 md:h-64' },
            { src: './images/team/gallery-7.png', span: 'sm:col-span-3', height: 'h-48 md:h-64' }
        ],
        jobs: [
            { title: 'Customer Success Manager', location: 'Remote', salary: '$65k–$75k' },
            { title: 'SaaS Growth Marketer', location: 'Remote', salary: '$75k–$85k' },
            { title: 'Customer Success Manager', location: 'Remote', salary: '$65k–$75k' },
            { title: 'SaaS Growth Marketer', location: 'Remote', salary: '$75k–$85k' }
        ]
    }
));

Alpine.data('cornerInvestors', () => (
    {
        investors: [
            { name: 'Justin Gallagher', company: 'Trello' },
            { name: 'Kenneth Auchenberg', company: 'Stripe' },
            { name: 'Phill Chambers', company: 'Workday' },
            { name: 'Gregor Beicec', company: 'Synthesia' },
            { name: 'Simon Wilnauer', company: 'Elastic' },
            { name: 'Manuel Weib', company: 'thisisgoodmarketing' },
            { name: 'Deani Hansen', company: 'Productboard' },
            { name: 'Jakob Marovt', company: 'Synthesia' }
        ]
    }
));

Alpine.start();



document.addEventListener("DOMContentLoaded", () => {
    initGSAPAnimations();

    new Swiper('.tools-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    new Swiper('.corner-logo-slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });


    new Swiper('.tools-swiper-reverse', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });
});

window.onload = function () {
    // Hide the preloader when the page has fully loaded
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    preloader.style.display = 'none';
};