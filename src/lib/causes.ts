import education from "@/assets/1 (2).jpeg";
import healthcare from "@/assets/1 (3).jpeg";
import women from "@/assets/1 (4).jpeg";
import child from "@/assets/1 (5).jpeg";
import environment from "@/assets/1 (6).jpeg";
import rural from "@/assets/1 (7).jpeg";
import { Utensils, BookOpen, Sparkles, Briefcase } from "lucide-react";

export const CAUSES = [
  {
    slug: "nutrition",
    title: "Nutrition Support",
    image: healthcare,
    icon: Utensils,
    description:
      "Healthy children learn better. We provide nutritious meals and food support so children stay healthy, attend school, and focus on learning.",
  },
  {
    slug: "education",
    title: "Education Support",
    image: education,
    icon: BookOpen,
    description:
      "School supplies, learning resources, digital education, scholarships and academic mentoring that help children continue and excel in school.",
  },
  {
    slug: "child-development",
    title: "Child Development",
    image: child,
    icon: Sparkles,
    description:
      "Building confidence beyond the classroom — leadership, creativity, life skills, sports, arts and emotional well-being for every child.",
  },
  {
    slug: "career-readiness",
    title: "Career Readiness",
    image: women,
    icon: Briefcase,
    description:
      "Skill development, digital literacy, communication training, mentorship and career guidance that make young adults job-ready and independent.",
  },
] as const;

// kept so existing image bundling stays in sync
export const PROGRAM_GALLERY = [education, healthcare, women, child, environment, rural];

export type Cause = (typeof CAUSES)[number];