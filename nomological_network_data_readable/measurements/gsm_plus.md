# GSM-Plus
**Type:** Measurement  
**Referenced in:** 9 papers  
**Also known as:** GSM-PLUS, GSMplus  

## State of the Field

**What it is.** Across papers, the prevailing usage is a grade-school math benchmark framed as an adversarial version of GSM8k. Definitions also describe it as an extension of GSM8K and, in one paper, as a held-out test suite of grade-level math problems; across these formulations, it is presented as a more challenging benchmark for mathematical reasoning and as a benchmark for evaluating robustness in mathematical problem solving.

**What it is claimed to measure.** Papers use GSM-Plus to measure 3 constructs and 2 behavioral indicators. Among constructs, it is most often linked to mathematical reasoning, followed by robustness and verification ability; among behavioral indicators, the listed links are mathematical problem solving and instruction following. The measurement claims are spread across several targets, although the recurring framing stays centered on math-related evaluation.

**Space of uses.** Papers typically use GSM-Plus inside broader math evaluation suites rather than on its own. It appears alongside MATH, SVAMP, ASDiv, GSM8k, and TheoremQA, is sometimes treated specifically as a robustness benchmark using original evaluation scripts with GPT-4o, is used in one case as a held-out set, and is also used to build a solution corpus for verification work with another math dataset.

## Sources

**[Forewarned is Forearmed:  Harnessing LLMs for Data Synthesis via Failure-induced Exploration](https://proceedings.iclr.cc/paper_files/paper/2025/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf)**
> An adversarial version of the GSM8k benchmark, designed to be more challenging and test the robustness of a model's mathematical reasoning.

**[Weak-to-Strong Preference Optimization: Stealing Reward from Weak Aligned Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/5beb3a846137dd6524f2da17c97d9426-Paper-Conference.pdf) (as "GSM-PLUS")**
> The GSM-PLUS benchmark, an extension of GSM8K, used to evaluate mathematical reasoning on grade-school math problems.

**[Speculative Knowledge Distillation: Bridging the Teacher-Student Gap Through Interleaved Sampling](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2747a3844ca1e4667fbff3f558eb39b-Paper-Conference.pdf) (as "GSMplus")**
> A test suite of grade-level math problems used as a held-out set for evaluating mathematical reasoning.

## Relationships

### → GSM-Plus
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > ...GSM-Plus [18], MATH, TheoremQA [6], SVAMP [28], and ASDiv [22] for math. (Section 5.2)
  - [Noise Contrastive Alignment of Language Models with Explicit Rewards](https://proceedings.neurips.cc/paper_files/paper/2024/file/d5a58d198afa370a3dff0e1ca4fe1802-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > The model’s performance is evaluated on two grade school math benchmarks: GSM8k (Cobbe et al., 2021) and GSM-Plus (Li et al., 2024), which is an adversarial version of GSM8k. (Section 4.4)
  - [Forewarned is Forearmed:  Harnessing LLMs for Data Synthesis via Failure-induced Exploration](https://proceedings.iclr.cc/paper_files/paper/2025/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf)
- **Robustness** (constructs) — *measured_by*
  > GSM-Plus, which tests model robustness. (Section 4.4)
  - [Forewarned is Forearmed:  Harnessing LLMs for Data Synthesis via Failure-induced Exploration](https://proceedings.iclr.cc/paper_files/paper/2025/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf)
- **Verification ability** (constructs) — *measured_by*
  > “The test corpus includes 128 solutions for each question from GSM-Plus (Li et al., 2024) and MATH500 (Hendrycks et al., 2021) datasets.”
  - [Process Reward Model with Q-value Rankings](https://proceedings.iclr.cc/paper_files/paper/2025/file/26494b66ae1114d314673e25b4967288-Paper-Conference.pdf)
