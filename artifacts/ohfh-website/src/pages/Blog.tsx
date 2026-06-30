import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'wouter';
import Hero from '@/components/ui/Hero';

// A subset of posts to demonstrate the layout without making the file massive
const blogPosts = [
  { id: 1, title: "Celebrating Learning: Annual Cultural Events at Slum Education Centers", date: "Oct 18, 2025", category: "Events" },
  { id: 2, title: "Parent-Teacher Workshops: Building Supportive Ecosystems for Learning", date: "Oct 16, 2025", category: "Education" },
  { id: 3, title: "Training Local Women as Community Educators in Noida", date: "Oct 14, 2025", category: "Empowerment" },
  { id: 4, title: "Libraries on Wheels: Mobile Library Initiatives for Underprivileged Children", date: "Oct 11, 2025", category: "Projects" },
  { id: 5, title: "Partnering with Local Schools: Education NGOs as Education Bridges", date: "Oct 07, 2025", category: "Partnerships" },
  { id: 6, title: "Seasonal Programs that Keep Migrant Children Enrolled During Summers", date: "Oct 04, 2025", category: "Education" },
  { id: 7, title: "School Readiness Programs That Help Kids Thrive in Noida Schools", date: "Sep 30, 2025", category: "Education" },
  { id: 8, title: "Measuring Impact: How Education NGOs in Noida Track Student Progress", date: "Sep 27, 2025", category: "Impact" },
  { id: 9, title: "Adapting Curriculum to Migrant Families: Flexible Learning Models That Work", date: "Sep 26, 2025", category: "Education" },
  { id: 10, title: "How Mid-Day Meal Programs Reduce Dropout Rates in Noida's Slums", date: "Sep 23, 2025", category: "Midday Meals" },
  { id: 11, title: "When Education Meets Healthcare: Community Health Drives at Learning Centers", date: "Sep 20, 2025", category: "Healthcare" },
  { id: 12, title: "Tackling Early Childhood Dropout in Noida's Urban Settlements", date: "Sep 18, 2025", category: "Education" },
  { id: 13, title: "Instilling Digital Literacy in Migrant-Kid Communities in NCR", date: "Sep 16, 2025", category: "Skills" },
  { id: 14, title: "From Pens to Paychecks: Journey from Stationery Boxes to Skill-Building", date: "Sep 13, 2025", category: "Empowerment" },
  { id: 15, title: "Volunteer Impact Stories: Life-changing Moments at Noida Learning Centers", date: "Sep 09, 2025", category: "Stories" },
  { id: 16, title: "Empowering Moms: Parent Involvement Programs That Keep Children in School", date: "Sep 06, 2025", category: "Empowerment" },
  { id: 17, title: "Nutrition and School Performance: The Impact of Mid-Day Meals in Noida's Slums", date: "Sep 04, 2025", category: "Midday Meals" },
  { id: 18, title: "Urban Slums and Children's Literacy: How Mobile Classrooms Are Making an Impact", date: "Sep 02, 2025", category: "Education" },
  { id: 19, title: "Why Putting Plates on Tables Means Putting Kids in Classrooms", date: "Aug 26, 2025", category: "Midday Meals" },
  { id: 20, title: "Building Hope: How Educational NGOs Shape Child Development & Community Growth", date: "Aug 19, 2025", category: "Impact" },
];

const Blog = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <Hero 
        title="Our Latest Articles" 
        imageSrc="/images/blog_hero.png" 
        overlayColor="bg-ultra-violet"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} 
      />
      <section className="py-20 px-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-6 text-sm">
                    <span className="text-orioles-orange font-bold uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-gray-500 flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-3 leading-snug hover:text-ultra-violet transition-colors">
                    {post.title}
                  </h2>
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 font-bold text-persian-blue hover:text-ultra-violet transition-colors">
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-white border-2 border-ultra-violet text-ultra-violet px-8 py-3 rounded-full font-bold hover:bg-ultra-violet hover:text-white transition-colors">
              Load More Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
