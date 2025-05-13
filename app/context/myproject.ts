
export interface ProjectData {
    id : string
    title : string
    url : string
    description : string
    primaryImg : string
    secoundaryImg : string[]
    overview : string
    techStack : string[]
    keyfeatures : string[]
    valuedeliverables : string[]
}
const projectDataContext: ProjectData[] = [
    {
        id : 'pr-01',
        title : 'Food Menu Online',
        url : '/pages/project-info/pr-01',
        description : 'Designed and developed a modern digital food menu system enabling customers to view and order directly via a QR code scan — no app download required.',
        primaryImg : '/images/project/mobile-menu-online/Summary.webp',
        secoundaryImg : [
            '/images/project/mobile-menu-online/choose language.webp',
            '/images/project/mobile-menu-online/food detail.webp',
            '/images/project/mobile-menu-online/food list.webp',
        ],
        overview : 'Designed and developed a modern digital food menu system enabling customers to view and order directly via a QR code scan — no app download required.',
        techStack : ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap','Figma'],
        keyfeatures : [
            'QR Code Scan: Instantly opens the menu in any browser',
            'Responsive UI: Optimized for mobile and tablet views',
            'Visual-Rich Interface: High-quality images and detailed descriptions to enhance customer decisions',
            'Multi-language Support (Optional)',
            'Contactless & Hygienic: Ideal for restaurants post-COVID era',
        ],
        valuedeliverables : [
            'Reduced menu printing costs',
            'Improved ordering speed and accuracy',
            'Enhanced customer experience through mobile-first design',
        ]

    },
    {
        id : 'pr-02',
        title : 'Coffee & Restaurant Management ',
        url:"/pages/project-info/pr-02",
        description : 'Manage order and inventory for a coffee shop and restaurant.',
        primaryImg : '/images/project/coffee-restaurant/summary.webp',
        secoundaryImg : [
            '/images/project/coffee-restaurant/summary.webp',
            '/images/project/coffee-restaurant/Login.webp',
            '/images/project/coffee-restaurant/Food.webp',
            '/images/project/coffee-restaurant/Kitchen.webp',
            '/images/project/coffee-restaurant/Table.webp',
            '/images/project/coffee-restaurant/Reservation.webp',

        ],
        overview : 'This is my third project',
        techStack : ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap','PHP','Figma'],
        keyfeatures : [
            'Menu Management: Easily update food and beverage items, categories, images, and availability.',
            'Table & Order Management: Assign orders to tables, manage order status, split bills, and handle dine-in/takeaway workflows.',
            'Customer Insights: Track customer orders, history.',
            'Multi-Role Access: Role-based login for admin, cashier, waiter, chef, and manager.'
        ],
        valuedeliverables : [
            'Real-Time Order & Table Management',
            'Full-stack Web Application with intuitive UI/UX design',
            'Role-Based Access Control System',
            'POS-Integrated Checkout Flow',
            'Customer Order History Tracking',
        ]
      
    },
    {
        id : 'pr-03',
        title : 'Financial Management',
        url:"/pages/project-info/1",
        description : 'Manage your financial transactions and budgeting.',
        primaryImg : '/images/backgrounds/finance-1024.png',
        secoundaryImg : [
            '/images/projects/6.png',
            '/images/projects/7.png',
            '/images/projects/8.png',
        ],
        overview : 'This is my second project',
        techStack : ['NextJs', 'React', 'TailwindCSS'],
        keyfeatures : [
            'Feature 1',
            'Feature 2',
            'Feature 3',
        ],
        valuedeliverables : [
            'Deliverable 1',
            'Deliverable 2',
            'Deliverable 3',
        ]
    },
    {
        id : 'pr-04',
        title : 'Sports Result',
        url:"/pages/project-info/1",
        description : 'Real-time sports results and statistics.',
        primaryImg : '/images/backgrounds/sports-1024.png',
        secoundaryImg : [
            '/images/projects/14.png',
            '/images/projects/15.png',
            '/images/projects/16.png',
        ],
        overview : 'Real-time sports results and statistics.',
        techStack : ['NextJs', 'React', 'TailwindCSS'],
        keyfeatures : [
            'Feature 1',
            'Feature 2',
            'Feature 3',
        ],
        valuedeliverables : [
            'Deliverable 1',
            'Deliverable 2',
            'Deliverable 3',
        ]
    },



]

export default projectDataContext