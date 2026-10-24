# MATH-500
**Type:** Measurement  
**Referenced in:** 88 papers  
**Also known as:** MATH500  

## State of the Field

**What it is.** Across definitions, the prevailing usage treats MATH-500 as a subset of the MATH benchmark that serves as a test set for evaluation. Most papers describe it as a representative and challenging selection from the MATH test set, while a smaller set of definitions describes the content more directly, as high school competition problems across subjects such as algebra and number theory with graded difficulty. Some papers also motivate using this subset when full MATH evaluation is computationally expensive.

**What it is claimed to measure.** Papers use it to measure four constructs and two behavioral indicators. The most frequent construct links are Mathematical reasoning and Reasoning, followed by Problem-solving ability; the behavioral-indicator links are Mathematical problem solving and Long chain-of-thought generation, and papers report one additional construct link. Papers therefore report it as evaluating reasoning, mathematical reasoning, or problem-solving ability, depending on the study.

**Space of uses.** In practice, papers usually place MATH-500 in multi-benchmark evaluations rather than using it alone, frequently alongside GSM8K, AIME 2024, GPQA, and MMLU. Several papers position it as a general math or reasoning check, while some use it more narrowly to evaluate PRM supervision performance or to confirm that another training objective does not degrade reasoning ability. Papers link it to one other measurement instrument, MATH, and describe that connection as related because MATH-500 is treated as a subset of the MATH test set.

## Sources

**[HARDMath: A Benchmark Dataset for Challenging Problems in Applied Mathematics](https://proceedings.iclr.cc/paper_files/paper/2025/file/23d64d26abb5a0e9f2014cfcc700f82a-Paper-Conference.pdf)**
> A subset of the MATH benchmark used for evaluating model performance.

**[An Efficient and Precise Training Data Construction Framework for Process-supervised Reward Model in Mathematical Reasoning](https://aclanthology.org/2025.acl-long.216.pdf) (as "MATH500")**
> A test set of 500 representative questions selected from the original 5,000-question MATH test set, used for evaluating PRM supervision performance.

## Relationships

### → MATH-500
- **Mathematical reasoning** (constructs) — *measured_by*
  > We analyze the performance of fine-tuned models of various sizes given different inference FLOPs on mathematical reasoning benchmarks (e.g., GSM8K test set (Cobbe et al., 2021) and MATH500 test set (Hendrycks et al., 2021b; Lightman et al., 2024)).
  - [Inference Scaling Laws: An Empirical Analysis of Compute-Optimal Inference for LLM Problem-Solving](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c3caae2f725c8e2a55ecd600563d172-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We evaluate across 6 reasoning benchmarks used in the original papers of the above prompting strategies, including GSM8K (Cobbe et al., 2021), GSM-Hard (Gao et al., 2023), MATH-500 (Hendrycks et al., 2021b; Lightman et al., 2024), MMLU-high-school-biology, chemistry and physics (Hendrycks et al., 2021a). (Section 2.3)
  - [Rethinking the Role of Prompting Strategies in LLM Test-Time Scaling: A Perspective of Probability Theory](https://aclanthology.org/2025.acl-long.1356.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > This evaluation includes benchmarks in: ... 3) Specific math domain tasks like MATH500 (Lightman et al., 2023). (Section 4.3)
  - [OpenPRM: Building Open-domain Process-based Reward Models with Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/c919a2b5ec1de69f2629f9119676e336-Paper-Conference.pdf)
- **Verification ability** (constructs) — *measured_by*
  > “For example, when verifying solutions sampled from the Llama-3-70B-Instruct model, PQM improves the accuracy from 39.8% to 51.4%, a direct 11.6% improvement on the challenging MATH500 benchmark”
  - [Process Reward Model with Q-value Rankings](https://proceedings.iclr.cc/paper_files/paper/2025/file/26494b66ae1114d314673e25b4967288-Paper-Conference.pdf)

### Associated with
- **MATH** (measurements)
  > For evaluation, we use the MATH500 subset of the test set (Lightman et al., 2023). (Section 2.2)
  - [Warm Up Before You Train: Unlocking General Reasoning in Resource-Constrained Settings](https://aclanthology.org/2025.emnlp-main.727.pdf)
