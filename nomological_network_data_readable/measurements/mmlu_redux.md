# MMLU-Redux
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** MMLU-redux  

## State of the Field

**What it is.** Most descriptions treat MMLU-Redux as a general knowledge and reasoning evaluation benchmark derived from MMLU, often explicitly as a zero-shot variant. Some papers instead foreground its format and curation, describing a revised or manually re-annotated multiple-choice, closed-form question answering subset spanning a wide range of subjects, from elementary to professional level. Papers do not describe the subset identically: one line says it contains 3,000 manually re-annotated questions across 30 subjects, while another says 5,700 questions across all 57 subjects; elsewhere it is described more broadly as assessing language understanding and knowledge across domains.

**What it is claimed to measure.** Papers use MMLU-Redux to measure 3 constructs and 1 behavioral indicator. The prevailing measurement claim is Reasoning, with papers calling it a logical reasoning benchmark and a reasoning benchmark used to elicit chain-of-thought performance; additional work uses it to measure Robustness, including robustness to order swapping of choices, and Mathematical reasoning by focusing on mathematics subjects. A smaller line of work uses it to measure Error detection, with one paper saying it can serve as a strong benchmark for automatic error detection in NLP datasets, so papers position it across several targets rather than only one.

**Space of uses.** No measurement instrument is linked to it. In usage descriptions, papers place it within broader benchmark suites, for example alongside ARC-Challenge and CommonsenseQA as a multiple-choice question answering test set, or as one of several logical reasoning benchmarks. Prompting setups vary in the descriptions: papers mention zero-shot prompting, zero-shot chain-of-thought, and chain-of-thought elicitation with a prompting framework.

**Concerns raised.** One line of work frames MMLU-Redux around evaluation quality issues in MMLU, describing the benchmark as manually re-annotated to correct errors in ground truth answers and question clarity. The same work relates it to Robustness by exploring how errors in MMLU impact LLM evaluation, and it also presents the benchmark as useful for automatic error detection in NLP datasets.

## Sources

**[As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf) (as "MMLU-redux")**
> A benchmark used to evaluate a model's language understanding and knowledge across a wide range of subjects.

**[Magpie: Alignment Data Synthesis from Scratch by Prompting Aligned LLMs with Nothing](https://proceedings.iclr.cc/paper_files/paper/2025/file/be06e3802e9411381feece79b4d960c1-Paper-Conference.pdf)**
> MMLU-Redux, a zero-shot variant of MMLU used as an evaluation benchmark for general knowledge and reasoning.

## Relationships

### → MMLU-Redux
- **Reasoning** (constructs) — *measured_by*
  > Furthermore, we also evaluate all the models on four logical reasoning benchmarks to verify the impact of these alignment methods on model’s reasoning abilities, including: MMLU-redux (Gema et al., 2024) (Language)...
  - [As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf)
- **Error detection** (behaviors tasks) — *measured_by*
  > "MMLU-Redux can also be used as a strong benchmark for automatic error detection in NLP datasets"
  - [Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf)
- **Robustness** (constructs) — *measured_by*
  > To assess the robustness of QuaSAR as an ICL strategy, we evaluated two different phenomena: (i) the order swapping of choices in MMLU-Redux... (Section 4.4)
  - [Improving Chain-of-Thought Reasoning via Quasi-Symbolic Abstractions](https://aclanthology.org/2025.acl-long.843.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > We select a total of seven datasets, including... MMLU-Redux (Gema et al. 2024); focusing on various mathematics subjects... (Section 3)
  - [CoMAT: Chain of Mathematically Annotated Thought Improves Mathematical Reasoning](https://aclanthology.org/2025.emnlp-main.1024.pdf)
