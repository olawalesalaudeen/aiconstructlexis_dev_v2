# MMMLU
**Type:** Measurement  
**Referenced in:** 14 papers  
**Also known as:** M-MMLU  

## State of the Field

**What it is.** Across the surveyed work, the prevailing usage treats MMMLU, sometimes written M-MMLU or m-MMLU, as a multilingual version of MMLU, often explicitly a human-translated or professionally translated variant. Papers commonly describe it as covering multiple languages and subjects for general language understanding or knowledge comprehension; one description adds multiple difficulty levels, and another frames it as a world-knowledge benchmark.

**What it is claimed to measure.** Papers use MMMLU to measure 3 constructs and 2 behavioral indicators, so the reported measurement claims are spread across several targets rather than centered on one. The construct links are multilingual ability, knowledge understanding, and multilingual reasoning, and the behavioral-indicator links are language mixing and multiple-choice question answering. The surrounding definitions also present it as testing general language understanding and reasoning performance across languages and subjects.

**Space of uses.** No measurement instrument is directly linked to it. Papers nevertheless use it alongside other benchmarks, especially Belebele and m-ARC in multilingual evaluation bundles, and alongside MMLU in a multilingual reasoning track. One reported protocol uses five-shot prompting for multiple-choice QA, another notes that answers are taken from model-generated outputs rather than from probabilities of the correct tokens, and another study creates "easy" and "hard" knowledge-comprehension evaluation sets from existing MMMLU test sets.

## Sources

**[Pangea: A Fully Open Multilingual Multimodal LLM for 39 Languages](https://proceedings.iclr.cc/paper_files/paper/2025/file/770b8cf7ef10b4aa7170d09b36b6bb6f-Paper-Conference.pdf)**
> A human-translated version of the MMLU benchmark, used to test general language understanding across multiple languages and subjects.

**[MPO: Multilingual Safety Alignment via Reward Gap Optimization](https://aclanthology.org/2025.acl-long.1149.pdf) (as "M-MMLU")**
> A multilingual benchmark for evaluating a model's world knowledge across a wide range of subjects and languages.

## Relationships

### → MMMLU
- **Multilingual ability** (constructs) — *measured_by*
  > To evaluate the LLMs’ capability across languages, researchers developed various multilingual benchmarks. Many rely on English translation, including XNLI (Conneau et al., 2018), MMMLU (Hendrycks et al., 2021a)... (Section 2)
  - [NOVA-63: Native Omni-lingual Versatile Assessments of 63 Disciplines](https://aclanthology.org/2025.emnlp-main.364.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > For multiple choice QA, we use Belebele (Bandarkar et al., 2024) and Multilingual MMLU (Hendrycks et al., 2021; Lai et al., 2023, MMMLU) with five shot prompting. (Section 5.4)
  - [Adapters for Altering LLM Vocabularies: What Languages Benefit the Most?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5492f57995409351cbf1a1cdf5f1a4-Paper-Conference.pdf)
- **Language mixing** (behaviors tasks) — *measured_by*
  > To evaluate language mixing across broader domains, we also use the multilingual MMLU (m-MMLU) dataset... (Section 3)
  - [Language Mixing in Reasoning Language Models: Patterns, Impact, and Internal Causes](https://aclanthology.org/2025.emnlp-main.132.pdf)
- **Knowledge understanding** (constructs) — *measured_by*
  > the OpenAI multilingual version of MMLU (MMMLU)1 for knowledge comprehension (Section 2)
  - [P-MMEval: A Parallel Multilingual Multitask Benchmark for Consistent Evaluation of LLMs](https://aclanthology.org/2025.emnlp-main.242.pdf)
- **Multilingual reasoning** (constructs) — *measured_by*
  > Beyond English textual reasoning, we include two additional evaluation tracks: a multilingual experiment using MMLU and its professionally translated variant MMMLU (Hendrycks et al., 2021)...
  - [Sketch-of-Thought: Efficient LLM Reasoning with Adaptive Cognitive-Inspired Sketching](https://aclanthology.org/2025.emnlp-main.1236.pdf)
- **Cross-lingual alignment** (constructs) — *measured_by*
  > To evaluate this alignment, we utilize three benchmarks—Belebele (Bandarkar et al., 2024), m-ARC (Lai et al., 2023), and m-MMLU (Lai et al., 2023)—which collectively encompass a diverse range of high-, medium-, and low-resource languages. (Section 3.4)
  - [From Neurons to Semantics: Evaluating Cross-Linguistic Alignment Capabilities of Large Language Models via Neurons Alignment](https://aclanthology.org/2025.acl-long.1406.pdf)
