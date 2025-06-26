import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
  delay?: number;
}

export function SkillBar({ name, level, color = "primary", delay = 0 }: SkillBarProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className={`text-sm font-medium text-${color}`}>{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r from-primary to-secondary rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: isIntersecting ? `${level}%` : 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
