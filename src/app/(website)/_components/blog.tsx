export default function Blog() {
  return (
    <section id="blog" className="w-full py-16 bg-[#998F761F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[40px] font-bold mb-4">
            Our Blog
          </h2>
          <p className="text-[#6C6C6C] max-w-[640px] mx-auto">
            It is a hub for insightful articles and fresh perspectives on a
            variety of topics, from technology and innovation to lifestyle,
            wellness, and personal growth
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden max-w-[1000px]  mx-auto">
          <video
            className="w-full h-auto rounded-xl shadow-lg"
            controls
            poster="/assets/who-we-are.jpeg" // optional thumbnail
          >
            <source src="/videos/blog-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
