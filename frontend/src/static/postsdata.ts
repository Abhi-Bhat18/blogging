export interface Post {
  imgUrl: string;
  title: string;
  tags: string[];
  description: string;
}

export const posts: Post[] = [
  {
    description: "Unlock the potential of the new AI era by delving into prompt engineering. Discover why everyone should learn this essential skill, empowering individuals to harness the full capabilities of advanced artificial intelligence. Navigate the evolving landscape with confidence, shaping the future through the mastery of prompt engineering in the world of AI.",
    imgUrl: "https://uploads-ssl.webflow.com/6344c9cef89d6f2270a38908/64148ed756708f9b82464c96_image-of-hand-holding-an-ai-face-looking-at-the-words-chatgpt-openai.webp",
    tags: ["Technology", "GenAI"],
    title: "How to harness the power of Chat GPT through right prompts",
  },
  {
    title: "When and where to use no code tools to build the softwares",
    description: "Navigate the software development landscape seamlessly with insights on when and where to leverage no-code tools. Explore the power of building applications without extensive coding, understanding the optimal scenarios and platforms to maximize efficiency. Discover how no-code tools democratize software creation, empowering individuals and businesses to innovate effortlessly in the digital realm.",
    imgUrl: "https://bugfender.com/wp-content/uploads/2022/05/Featured.jpg",
    tags: ["Nocode", "Trend"],
  },
  {
    title: "How to build the impossible in software",
    description: "Chart a course into the realm of the extraordinary with our guide on how to initiate the seemingly impossible in software. Explore the realms of innovation, creativity, and resilience as we unveil practical steps and mindset shifts. Join the revolution of possibility in software development, where challenges become stepping stones, and the inconceivable transforms into the achievable. Start your journey to redefine what's possible in the vast landscape of software creation",
    imgUrl: "https://global.toyota/pages/news/images/2017/10/16/2200/20171016_02_ogp.jpg",
    tags: ["Motivation", "Experience",]
  },
];


