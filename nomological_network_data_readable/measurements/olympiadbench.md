# OlympiadBench
**Type:** Measurement  
**Referenced in:** 38 papers  
**Also known as:** Olympiad Bench, Olympiad  

## State of the Field

**What it is.** Definitions split between two recurring descriptions: one line portrays it as an Olympiad-level benchmark for challenging mathematics problems, spanning high-school, college-level, and competition material, while another describes a bilingual multimodal version with 8,476 problems from Olympic-level mathematics and physics competitions. Across both descriptions, papers say it assesses advanced mathematical reasoning, and the multimodal framing adds high-level visual and logical reasoning. One paper also shortens the name to Olympiad and describes a challenging mathematical problem-solving dataset aimed at advanced reasoning and proof-like capabilities.

**What it is claimed to measure.** Papers link it to 3 constructs and 2 behavioral indicators. The most common use is to measure Mathematical reasoning, while smaller strands use it to measure Reasoning and Generalization; papers also report it as measuring Mathematical problem solving and Scientific problem solving. Overall, the reported targets spread across several reasoning-related abilities, but they most often center on mathematical reasoning.

**Space of uses.** Across evaluations, it is commonly used alongside MATH or MATH500, GSM8K, AIME 2024, AMC 2023, and College Math. Most papers position it as a harder benchmark within broader math suites, describing it as an advanced task, a more challenging dataset, or part of benchmarks of increasing difficulty. Some papers explicitly use it to test out-of-distribution performance or generalizability, and multimodal work reports results on the bilingual multimodal form.

## Sources

**[Improving Chain-of-Thought Reasoning via Quasi-Symbolic Abstractions](https://aclanthology.org/2025.acl-long.843.pdf) (as "Olympiad Bench")**
> Benchmark containing high-school and college-level mathematics problems from olympiad competitions, assessing advanced mathematical reasoning.

**[Fixing Distribution Shifts of LLM Self-Critique via On-Policy Self-Play Training](https://aclanthology.org/2025.acl-long.865.pdf) (as "Olympiad")**
> Challenging mathematical problem-solving dataset designed to assess advanced reasoning and proof-like capabilities.

**[Mitigating Visual Forgetting via Take-along Visual Conditioning for Multi-modal Long CoT Reasoning](https://aclanthology.org/2025.acl-long.257.pdf)**
> Bilingual multimodal benchmark featuring 8,476 problems tailored to Olympic-level mathematics and physics competitions, assessing high-level visual and logical reasoning.

## Relationships

### → OlympiadBench
- **Mathematical reasoning** (constructs) — *measured_by*
  > recent math specific competition and Olympiad-level benchmarking on Math Odyssey (Fang et al., 2024), OlymiadBench (He et al., 2024), and the American Invitational Mathematics Examination (AIME) & the American Mathematics Competitions (AMC) (Beeching et al., 2024; DeepSeek-AI et al., 2024; Reid et al., 2024) questions show that the state-of-the-art (SOTA), both generalist and specialist, LLMs continue to struggle with advanced math reasoning. (Section 1.1).
  - [SBSC: Step-by-Step Coding for Improving Mathematical Olympiad Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e5f5e4504759e3957e3eef2a44a535e-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > To assess generalizability of our models to out-of-distribution problems, we evaluate on two additional benchmarks: MMLU-Pro Math (Wang et al., 2024b) and Olympiad Bench (He et al., 2024). (Section 4.1).
  - [Reinforce LLM Reasoning through Multi-Agent Reflection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yuan25l/yuan25l.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We evaluate our method on a diverse set of reasoning tasks, including GSM8K (Cobbe et al., 2021b), MATH500 (Hendrycks et al., 2021), MMLU STEM (Hendrycks et al., 2020), OlympiadBench (He et al., 2024), GaoKao-2023-En (Liao et al., 2024), GPQA (Rein et al., 2023), and Minerva Math (Lewkowycz et al., 2022). (Section 3)
  - [Reward-Guided Speculative Decoding for Efficient LLM Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liao25f/liao25f.pdf)
- **Scientific problem solving** (behaviors tasks) — *measured_by*
  > scientific problems, including OlympiadBench (Olympiad) (He et al., 2024). (Section 4.1)
  - [AlphaOne: Reasoning Models Thinking Slow and Fast at Test Time](https://aclanthology.org/2025.emnlp-main.570.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > Performance is evaluated on MATH500 (Lightman et al., 2023), Minerva Math (Lewkowycz et al., 2022), OlympiadBench (He et al., 2024), College Math (Tang et al., 2024) 3, AIME24, and AMC23 (Section 4.1).
  - [R-PRM: Reasoning-Driven Process Reward Modeling](https://aclanthology.org/2025.emnlp-main.679.pdf)
