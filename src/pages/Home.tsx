import { Bunny, Bird, Butterfly, Flower, Mushroom, Ladybug } from "@/components/AnimalStickers";

const projects = [
  {
    id: 1,
    title: "星空漫游指南",
    description: "一个关于探索宇宙奥秘的小网站，带你领略星空的美丽",
    image: "https://trae-api-cn.mchost.guru/api/v1/text_to_image?prompt=peaceful%20night%20sky%20with%20stars%20and%20moon%20illustration&image_size=square_hd"
  },
  {
    id: 2,
    title: "花园物语",
    description: "记录植物生长的点滴，分享园艺的快乐",
    image: "https://trae-api-cn.mchost.guru/api/v1/text_to_image?prompt=cute%20garden%20with%20flowers%20and%20plants%20illustration&image_size=square_hd"
  },
  {
    id: 3,
    title: "咖啡时光",
    description: "记录每一杯咖啡带来的美好时刻",
    image: "https://trae-api-cn.mchost.guru/api/v1/text_to_image?prompt=warm%20coffee%20cup%20illustration%20cozy%20style&image_size=square_hd"
  },
  {
    id: 4,
    title: "音乐盒",
    description: "收集喜欢的音乐，分享听歌的心情",
    image: "https://trae-api-cn.mchost.guru/api/v1/text_to_image?prompt=cute%20music%20notes%20and%20melody%20illustration&image_size=square_hd"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-light-yellow to-cream font-body">
      <div className="relative overflow-hidden">
        <div className="absolute top-10 left-5 w-20 h-24 animate-bounce" style={{ animationDelay: "0s" }}>
          <Bunny />
        </div>
        <div className="absolute top-20 right-10 w-16 h-12 animate-pulse" style={{ animationDelay: "0.5s" }}>
          <Bird />
        </div>
        <div className="absolute bottom-20 left-10 w-14 h-12 animate-pulse" style={{ animationDelay: "1s" }}>
          <Butterfly />
        </div>
        <div className="absolute bottom-10 right-5 w-16 h-16 animate-bounce" style={{ animationDelay: "1.5s" }}>
          <Flower />
        </div>
        <div className="absolute top-1/2 left-2 w-12 h-12 animate-pulse" style={{ animationDelay: "0.8s" }}>
          <Ladybug />
        </div>
        <div className="absolute top-1/3 right-2 w-14 h-14 animate-bounce" style={{ animationDelay: "1.2s" }}>
          <Mushroom />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-handwriting text-meadow-green mb-6 drop-shadow-lg">
              欢迎来到我的小天地 🌸
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              这里分享一些我日常比较感兴趣的且比较有趣的小东西，
              还有一些我灵感突现创作的有趣小网站 ✨
            </p>
          </header>

          <section className="mb-20">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-4 border-soft-mint relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 opacity-70">
                <Flower />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-70">
                <Butterfly />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-handwriting text-meadow-green mb-6 text-center">
                关于这里 💭
              </h2>
              
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
                <p>
                  🌟 生活中有太多值得记录的美好瞬间，无论是发现的有趣事物，
                  还是突然迸发的创意灵感，我都想在这里分享给大家。
                </p>
                <p>
                  🎨 这里会有各种各样的小项目，可能是一个简单的网页游戏，
                  一个实用的小工具，或者仅仅是一个充满想象力的实验。
                </p>
                <p>
                  🌿 希望你在这里能找到一些乐趣，感受到生活的美好！
                  如果你有什么想法，也欢迎和我分享~
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl md:text-5xl font-handwriting text-meadow-green text-center mb-12">
              我的小作品 🎁
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl p-6 shadow-lg border-3 border-soft-mint hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute -top-8 -right-8 w-24 h-24 opacity-30 group-hover:opacity-50 transition-opacity">
                    <Butterfly />
                  </div>
                  
                  <div className="rounded-2xl overflow-hidden mb-6 border-4 border-light-yellow">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-handwriting text-meadow-green mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-meadow-green to-soft-mint text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                    去看看 →
                  </button>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-20 text-center pb-8">
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-12 h-12">
                <Bunny />
              </div>
              <div className="w-10 h-8">
                <Bird />
              </div>
              <div className="w-12 h-12">
                <Flower />
              </div>
              <div className="w-10 h-8">
                <Butterfly />
              </div>
            </div>
            <p className="text-gray-500 text-lg">
              用心记录，开心分享 💕
            </p>
            <p className="text-gray-400 text-sm mt-2">
              © 2024 我的小天地
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}