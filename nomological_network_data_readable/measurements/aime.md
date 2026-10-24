# AIME
**Type:** Measurement  
**Referenced in:** 20 papers  

## State of the Field

**What it is.** Across papers, AIME is commonly treated as the American Invitational Mathematics Examination, used as a challenging benchmark or dataset for advanced mathematical reasoning and problem solving. Definitions differ on the exact instantiation: some papers use an AIMO validation set with 90 questions from AIME 22, 23, and 24, while others evaluate on AIME 2024 with 15 competition math problems or on AIME 2025, Parts I and II. One description also frames it as exams designed to challenge high school math students in America.

**What it is claimed to measure.** Papers use AIME to measure 3 constructs and 2 behavioral indicators. The prevailing usage is to measure Mathematical reasoning, with a smaller recurring use for Reasoning more generally. A smaller line of work uses it to measure Mathematical problem solving, and isolated papers use it to measure Chain of thought and General ability.

**Space of uses.** Papers frequently include AIME in multi-benchmark evaluations and describe it as challenging, widely used, or standard for math-focused evaluation. It is used alongside MATH500, GPQA, AMC, MATH, and Omni-MATH, and other papers pair it with additional math and reasoning benchmarks. No other measurement instrument is linked to it directly.

## Sources

**[Revisiting the Test-Time Scaling of o1-like Models: Do they Truly Possess Test-Time Scaling Capabilities?](https://aclanthology.org/2025.acl-long.232.pdf)**
> American Invitational Mathematics Examination benchmark used to assess advanced mathematical problem-solving abilities with 90 validation questions from AIME 22, 23, and 24.

## Relationships

### → AIME
- **Mathematical reasoning** (constructs) — *measured_by*
  > recent math specific competition and Olympiad-level benchmarking on Math Odyssey (Fang et al., 2024), OlymiadBench (He et al., 2024), and the American Invitational Mathematics Examination (AIME) & the American Mathematics Competitions (AMC) (Beeching et al., 2024; DeepSeek-AI et al., 2024; Reid et al., 2024) questions show that the state-of-the-art (SOTA), both generalist and specialist, LLMs continue to struggle with advanced math reasoning. (Section 1.1).
  - [SBSC: Step-by-Step Coding for Improving Mathematical Olympiad Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e5f5e4504759e3957e3eef2a44a535e-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We also extend experiments on two more challenging reasoning benchmarks, GPQA (Rein et al., 2024) and AIME (Mathematical Association of America, 2024), further verifying the generality of our findings and methods. (Section 8)
  - [Rethinking the Role of Prompting Strategies in LLM Test-Time Scaling: A Perspective of Probability Theory](https://aclanthology.org/2025.acl-long.1356.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > "Other benchmarks relevant to today’s frontier models include AIME with 15 competition math problems"
  - [Position: Don’t Use the CLT in LLM Evals With Fewer Than a Few Hundred Datapoints](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bowyer25a/bowyer25a.pdf)
- **Chain of thought** (behaviors tasks) — *measured_by*
  > We assess both models on the challenging American Invitational Mathematics Examination (AIME 24) benchmark. (Section 3.3, Chain-of-Thought Reasoning Evaluation).
  - [Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention](https://aclanthology.org/2025.acl-long.1126.pdf)
