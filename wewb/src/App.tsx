import {
  ArrowUpRight,
  Dumbbell,
  Instagram,
  Mail,
  ShieldCheck,
  Sparkles,
  Twitter,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const HERO_IMAGE_URL =
  "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png";

const marqueeImages = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const decorativeImages = {
  moon:
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
  object:
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
  block:
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
  group:
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
};

const startupImages = [
  [
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
  ],
  [
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
  ],
  [
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
  ],
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Startups", href: "#startups" },
  { label: "Contact", href: "#contact" },
];

const visionItems = [
  {
    name: "AI Products",
    description:
      "Creating AI-powered tools, assistants, and digital experiences that help people work faster, make better decisions, and interact naturally with technology.",
  },
  {
    name: "Safety Platforms",
    description:
      "Building safety-focused products like Family Shield to support emergency awareness, scam detection, report review, and community-based protection.",
  },
  {
    name: "Fitness Technology",
    description:
      "Developing AKRIVO Fitness as a personal trainer-style platform with workout guidance, diet support, posture help, reminders, and accessible fitness planning.",
  },
  {
    name: "Skincare Intelligence",
    description:
      "Building AKRIVO Skin as a skincare-focused app that helps users understand skin concerns, follow routines, track progress, and get practical guidance.",
  },
  {
    name: "Startup MVPs",
    description:
      "Turning ideas into real products quickly through MVPs, user-first workflows, clean design, and practical features that can be tested in the real world.",
  },
  {
    name: "Digital Brand Building",
    description:
      "Growing the AKRIVO ecosystem with consistent branding, useful products, and a long-term vision for technology-driven businesses.",
  },
];

const startups = [
  {
    name: "AKRIVO AI",
    category: "AI Startup",
    description:
      "An AI assistant and digital intelligence platform designed to help users complete tasks, get answers, and use AI in a simple practical way.",
    images: startupImages[0],
  },
  {
    name: "AKRIVO Fitness",
    category: "Fitness Tech",
    description:
      "An AI-powered fitness platform with workout plans, diet guidance, posture support, reminders, and personalized gym or home training.",
    images: startupImages[1],
  },
  {
    name: "AKRIVO Skin",
    category: "Skincare Tech",
    description:
      "A skincare intelligence app designed to help users understand skin concerns, follow routines, track progress, and receive practical skincare guidance.",
    images: startupImages[2],
  },
  {
    name: "Family Shield",
    category: "Safety Platform",
    description:
      "A safety-focused platform for emergency awareness, scam detection, report review, location-based safety insights, and community protection.",
    images: startupImages[0],
  },
  {
    name: "AKRIVO Startup Chain",
    category: "Brand Ecosystem",
    description:
      "The wider AKRIVO ecosystem containing personal startups, AI-first apps, business tools, safety products, fitness tools, skincare technology, and digital products.",
    images: startupImages[1],
  },
  {
    name: "Business Websites",
    category: "Web Design",
    description:
      "Modern websites and digital experiences for local businesses, startups, and personal brands with clean design and responsive layouts.",
    images: startupImages[2],
  },
];

const contactLinks = {
  email: "deepanshu14022010@gmail.com",
  instagram: "https://instagram.com/deepanshu_k22",
  instagramHandle: "@deepanshu_k22",
  x: "https://x.com/deepanshu2226",
  xHandle: "@deepanshu2226",
  brand: "AKRIVO",
};

type FadeInProps = {
  delay?: number;
  duration?: number;
  x?: number | string;
  y?: number | string;
  className?: string;
  children: ReactNode;
};

function FadeIn({
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  children,
  className,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

type MagnetProps = {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
};

function Magnet({
  children,
  padding = 100,
  strength = 4,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({
    transform: "translate3d(0, 0, 0)",
    transition: inactiveTransition,
    willChange: "transform",
  });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const inRange =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding &&
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding;

      if (!inRange) {
        setStyle({
          transform: "translate3d(0, 0, 0)",
          transition: inactiveTransition,
          willChange: "transform",
        });
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const moveX = (event.clientX - centerX) / strength;
      const moveY = (event.clientY - centerY) / strength;

      setStyle({
        transform: `translate3d(${moveX}px, ${moveY}px, 0)`,
        transition: activeTransition,
        willChange: "transform",
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [activeTransition, inactiveTransition, padding, strength]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

function ContactButton() {
  return (
    <a
      href="#contact"
      className="inline-flex rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white outline outline-2 -outline-offset-[3px] outline-white transition duration-200 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
      }}
    >
      Contact Me
    </a>
  );
}

function LiveProjectButton() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      View Project <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

function AnimatedText({ text }: { text: string }) {
  const target = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p
      ref={target}
      className="max-w-[760px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
      aria-label={text}
    >
      {text.split("").map((char, index) => {
        const start = index / text.length;
        const end = Math.min(start + 0.08, 1);

        return (
          <AnimatedCharacter
            key={`${char}-${index}`}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}

function AnimatedCharacter({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const visibleChar = char === " " ? "\u00A0" : char;

  return (
    <span className="relative inline-block">
      <span className="invisible">{visibleChar}</span>
      <motion.span aria-hidden="true" className="absolute inset-0" style={{ opacity }}>
        {visibleChar}
      </motion.span>
    </span>
  );
}

function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col overflow-x-clip bg-[#0C0C0C]"
      aria-label="Hero"
    >
      <FadeIn delay={0} y={-20}>
        <nav className="flex items-center justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition duration-200 hover:opacity-70"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]">
            Hi, i'm Deepanshu
          </h1>
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={HERO_IMAGE_URL}
            alt="Founder-style portrait placeholder for Deepanshu Sharma"
            className="w-full select-none object-contain"
          />
        </Magnet>
      </FadeIn>

      <div className="mt-auto flex items-end justify-between gap-5 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[190px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[270px] md:max-w-[350px]">
            Deepanshu Sharma - building AI-powered startups, safety platforms,
            fitness tools, skincare technology, and digital products for
            real-world problems.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const rowOne = useMemo(() => marqueeImages.slice(0, 11), []);
  const rowTwo = useMemo(() => marqueeImages.slice(11), []);

  useEffect(() => {
    const updateOffset = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.offsetTop;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    updateOffset();
    window.addEventListener("scroll", updateOffset, { passive: true });
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  const renderRow = (images: string[], direction: "right" | "left") => {
    const tripled = [...images, ...images, ...images];
    const translate =
      direction === "right" ? offset - 200 : -(offset - 200);

    return (
      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${translate}px)`,
          willChange: "transform",
        }}
      >
        {tripled.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt="Digital product interface preview"
            loading="lazy"
            className="h-[270px] w-[420px] max-w-none flex-none rounded-2xl object-cover"
          />
        ))}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      aria-label="Startup visual previews"
    >
      <div className="flex flex-col gap-3">
        {renderRow(rowOne, "right")}
        {renderRow(rowTwo, "left")}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
      >
        <img
          src={decorativeImages.moon}
          alt=""
          loading="lazy"
          className="w-full"
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
      >
        <img
          src={decorativeImages.object}
          alt=""
          loading="lazy"
          className="w-full"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
      >
        <img
          src={decorativeImages.block}
          alt=""
          loading="lazy"
          className="w-full"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
      >
        <img
          src={decorativeImages.group}
          alt=""
          loading="lazy"
          className="w-full"
        />
      </FadeIn>

      <div className="relative z-10 flex max-w-5xl flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText text="I am Deepanshu Sharma, a young startup builder focused on creating practical digital products that solve real problems. I am building under the AKRIVO vision, with projects across AI assistants, fitness technology, safety platforms, skincare intelligence, local business websites, and startup experiments. My goal is to build useful products, learn fast from users, and turn strong ideas into real working startups." />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section
      id="vision"
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none sm:mb-20 md:mb-28">
          Vision
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {visionItems.map((item, index) => (
          <FadeIn key={item.name} delay={index * 0.1}>
            <article className="grid gap-6 border-t border-[rgba(12,12,12,0.15)] py-8 last:border-b sm:grid-cols-[0.8fr_2fr] sm:py-10 md:py-12">
              <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col justify-center gap-4">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase">
                  {item.name}
                </h3>
                <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                  {item.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

type StartupCardProps = {
  startup: (typeof startups)[number];
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
};

function StartupCard({
  startup,
  index,
  totalCards,
  progress,
}: StartupCardProps) {
  const start = index / totalCards;
  const end = (index + 1) / totalCards;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [start, end], [1, targetScale]);

  return (
    <div className="h-[85vh]">
      <motion.article
        className="sticky top-24 flex min-h-[72vh] flex-col overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 text-[#D7E2EA] sm:rounded-[50px] sm:p-6 md:top-32 md:rounded-[60px] md:p-8"
        style={{ top: `calc(6rem + ${index * 28}px)`, scale }}
      >
        <div className="grid gap-5 pb-6 md:grid-cols-[0.35fr_0.55fr_1fr_auto] md:items-start md:pb-8">
          <span className="text-[clamp(2.5rem,8vw,120px)] font-black leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-sm font-medium uppercase tracking-widest opacity-70 sm:text-base">
            {startup.category}
          </p>
          <div>
            <h3 className="hero-heading text-[clamp(2.2rem,6vw,86px)] font-black uppercase leading-none tracking-tight">
              {startup.name}
            </h3>
            <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed opacity-75 sm:text-base md:text-lg">
              {startup.description}
            </p>
          </div>
          <div className="md:justify-self-end">
            <LiveProjectButton />
          </div>
        </div>

        <div className="grid flex-1 gap-4 md:grid-cols-[40%_60%]">
          <div className="grid gap-4">
            <img
              src={startup.images[0]}
              alt={`${startup.name} product placeholder preview one`}
              loading="lazy"
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
            <img
              src={startup.images[1]}
              alt={`${startup.name} product placeholder preview two`}
              loading="lazy"
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
          <img
            src={startup.images[2]}
            alt={`${startup.name} product placeholder main preview`}
            loading="lazy"
            className="h-full min-h-[320px] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
          />
        </div>
      </motion.article>
    </div>
  );
}

function StartupsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="startups"
      ref={sectionRef}
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn>
        <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight md:mb-24">
          Startups
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {startups.map((startup, index) => (
          <StartupCard
            key={startup.name}
            startup={startup}
            index={index}
            totalCards={startups.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: contactLinks.email,
      href: `mailto:${contactLinks.email}`,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: contactLinks.instagramHandle,
      href: contactLinks.instagram,
    },
    {
      icon: Twitter,
      label: "X / Twitter",
      value: contactLinks.xHandle,
      href: contactLinks.x,
    },
    {
      icon: Sparkles,
      label: "Brand",
      value: contactLinks.brand,
      href: "#startups",
    },
  ];

  return (
    <section
      id="contact"
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <FadeIn>
          <h2 className="text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none">
            Contact
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-3xl text-center text-[clamp(1rem,2vw,1.5rem)] font-light leading-relaxed opacity-70">
            Want to discuss a startup, website, app, AI product, collaboration,
            or business idea? Reach out to Deepanshu Sharma.
          </p>
        </FadeIn>

        <div className="mt-14 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.label} delay={index * 0.08}>
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                  className="group flex min-h-[180px] flex-col justify-between rounded-[32px] border border-[#0C0C0C]/15 bg-[#0C0C0C] p-6 text-[#D7E2EA] transition duration-200 hover:-translate-y-1 hover:bg-[#171717]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D7E2EA]/30">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium uppercase tracking-widest opacity-60">
                      {card.label}
                    </span>
                    <span className="mt-2 block break-words text-xl font-medium">
                      {card.value}
                    </span>
                  </span>
                </a>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.25}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0C0C0C]/15 px-5 py-3 text-sm font-medium uppercase tracking-wider">
              <ShieldCheck size={18} aria-hidden="true" /> Privacy-first
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0C0C0C]/15 px-5 py-3 text-sm font-medium uppercase tracking-wider">
              <Dumbbell size={18} aria-hidden="true" /> Product-focused
            </span>
          </div>
        </FadeIn>

        <p className="mt-8 max-w-xl text-center text-sm font-light opacity-55">
          Contact details are used only for communication. No unnecessary
          personal data is collected.
        </p>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="bg-[#0C0C0C] px-5 py-8 text-center text-[#D7E2EA]">
      <p className="text-sm font-light sm:text-base">
        © 2026 Deepanshu Sharma. Building AKRIVO and personal startups.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-kanit">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <VisionSection />
      <StartupsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
