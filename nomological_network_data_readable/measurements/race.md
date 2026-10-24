# RACE
**Type:** Measurement  
**Referenced in:** 48 papers  

## State of the Field

**What it is.** Across papers, the dominant framing treats RACE as a large-scale reading comprehension benchmark or dataset drawn from English examinations for middle and high school students, typically described as passage-based, multiple-choice questions that require reasoning over provided passages. Several definitions explicitly mention the RACE-High and RACE-Middle subsets, and related descriptions expand the name as ReAding Comprehension from Examinations. A smaller set of papers describes it more specifically as assessing reasoning and understanding ability, factual question answering, educational knowledge, or natural language understanding, and one paper calls it a "needle-in-a-haystack" task that demands identifying critical information within lengthy contexts.

**What it is claimed to measure.** Most papers use RACE to measure reading comprehension, especially machine reading comprehension: papers link it to 4 behavioral indicators, namely machine reading comprehension, language understanding task performance, multiple-choice question answering, and zero-shot task performance. They also link it to 7 constructs, with the most often linked being commonsense reasoning, general ability, logical reasoning, long-context understanding, and reading comprehension, plus 2 other constructs. The measurement claims therefore span several constructs, though the prevailing descriptive framing remains reading comprehension.

**Space of uses.** No measurement instrument is linked to it. Papers often use RACE inside larger evaluation suites, for example alongside SQuAD, NarrativeQA, GLUE, PIQA, and OpenBookQA, with other papers placing it in broader collections of reasoning, knowledge, and language benchmarks. In those settings it is positioned as a downstream benchmark for reading comprehension, language understanding, or general capability evaluation, and some papers explicitly separate RACE-High from RACE-Middle.

## Sources

**[In-Context Pretraining: Language Modeling Beyond Document Boundaries](https://proceedings.iclr.cc/paper_files/paper/2024/file/a1fe2365abdb691332537990a6385909-Paper-Conference.pdf)**
> Reading Comprehension dataset collected from English exams for middle and high school students, assessing reasoning and understanding ability through passage-based multiple-choice questions.

## Relationships

### → RACE
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > RACE is a reading comprehension benchmark introduced in Lai et al. (2017) collected from English examinations of middle and high school students. (Section 3)
  - [The Consensus Game: Language Model Generation via Equilibrium Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/17a9bfda8be2301e24f232fb32f1e0fa-Paper-Conference.pdf)
- **Reading comprehension** (constructs) — *measured_by*
  > “we also included the multiple-choice reading comprehension task RACE”
  - [CABS: Conflict-Aware and Balanced Sparsification for Enhancing Model Merging](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25x/yang25x.pdf)
- **World knowledge** (constructs) — *measured_by*
  > we evaluate the models from Figure 3 on five downstream tasks: ARC-easy, lambada, RACE, PIQA, and BoolQ, which collectively test for common sense reasoning, world knowledge, and reading comprehension. (Section 4.3)
  - [Sparse maximal update parameterization: A holistic approach to sparse training dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/3b6aaffec941f98930753fa6d6de7263-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > “The multiple-choice tasks include: ... reading comprehension (RACE; Lai et al. 2017)”
  - [Scaling Stick-Breaking Attention: An Efficient Implementation and In-depth Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b9a261b9aca858b7e6ee44d8b2055be-Paper-Conference.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > "The RACE dataset represents a \"needle-in-a-haystack\" task demanding identification of critical information within lengthy contexts."
  - [SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model](https://aclanthology.org/2025.naacl-long.230.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We also select several reasoning benchmarks, i.e., PIQA (Bisk et al., 2020), ARC (Clark et al., 2018), HellaSwag (Zellers et al., 2019), Winogrande (Sakaguchi et al., 2021), Race (Lai et al., 2017) and LAMBADA (Paperno et al., 2016), using the open-sourced toolkit lm-evaluation-harness (Gao et al., 2023). (Section 4.1)
  - [PTQ1.61: Push the Real Limit of Extremely Low-Bit Post-Training Quantization Methods for Large Language Models](https://aclanthology.org/2025.acl-long.225.pdf)
- **General ability** (constructs) — *measured_by*
  > To evaluate LLMs’ general capabilities, we select several widely used benchmark, i.e., HellaSwag (Zellers et al., 2019), Race (Lai et al., 2017), MMLU (Hendrycks et al., 2021), GPQA (Rein et al., 2024), OpenBookQA (Mihaylov et al., 2018), BoolQ (Clark et al., 2019), AG News (Zhang et al., 2015), IMDB (Maas et al., 2011), and Perplexity (Chen et al., 1998). (Section 4.1)
  - [The Tug of War Within: Mitigating the Fairness-Privacy Conflicts in Large Language Models](https://aclanthology.org/2025.acl-long.590.pdf)
- **Zero-shot task performance** (behaviors tasks) — *measured_by*
  > “Table 1. Comparison of zero-evaluation performance... RACE ↑”
  - [MERIT: Maximum-normalized Element-wise Ratio for Language Model Large-batch Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25u/luo25u.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > Different datasets including... language understanding and knowledge such as... Race-Middle, Race-High [60]... are comprehensively evaluated. (Section 4)
  - [Wings: Learning Multimodal LLMs without Text-only Forgetting](https://proceedings.neurips.cc/paper_files/paper/2024/file/3852f6d247ba7deb46e4e4be9e702601-Paper-Conference.pdf)
