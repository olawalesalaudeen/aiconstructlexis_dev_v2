# Knowledge understanding
**Type:** Construct  
**Referenced in:** 10 papers  
**Also known as:** Knowledge comprehension, Knowledge and understanding  

## State of the Field

**Definition agreement:** Consensus. Most papers define knowledge understanding as a model's latent ability to comprehend, represent, and correctly apply factual, conceptual, world, or domain knowledge when processing inputs and producing outputs. A few papers narrow the setting to text, spoken interactions, or knowledge from training data, but these are scope and context differences rather than different phenomena.

**Space of definitions.** Most definitions treat knowledge understanding as a model ability, often described as a latent ability, to comprehend, represent, and correctly apply factual, conceptual, world, or domain knowledge when answering questions, processing inputs, or generating outputs. Some formulations narrow this to information presented in a question or factual knowledge embedded in text, while others broaden it to acquiring, retaining, and applying general world and domain-specific knowledge from training data; one modality-specific variant frames it in spoken interactions across domains such as STEM, social sciences, and humanities. Across these formulations, the recurring core is using knowledge rather than only following instructions.

**Space of facets.** Papers mostly use near-synonymous labels, including knowledge comprehension and knowledge and understanding, for the same general construct. They usually place it alongside, but not as the same thing as, reasoning, instruction following, problem solving, and general language understanding: one evaluation says it targets knowledge comprehension and reasoning rather than merely instruction following, and another discusses improvements in capturing knowledge alongside logical reasoning, following instructions, and solving problems. One paper also places it at an understanding level with concept tasks, and another scopes it by disciplinary coverage and speech modality.

**Space of measurement.** It is linked to 6 measurement instruments and no behavioral indicators. The most frequently linked instruments are MMLU, MMMLU, Open LLM Leaderboard v2, TruthfulQA, and VoxEval, with 1 other instrument also linked through an evaluation harness over zero-shot benchmarks. Papers operationalize the construct through benchmark evaluations: MMLU is linked to extensive world knowledge and problem-solving ability, MMMLU is used for knowledge comprehension, Open LLM Leaderboard v2 and TruthfulQA are used under "Knowledge & Understanding," and VoxEval assesses it through pure speech interactions.

**Links.** Beyond measurement, one paper claims a causal relationship from Knowledge memorization to Knowledge understanding; in the cited passage, concept tasks in the understanding level are described as relying heavily on knowledge memory. No papers report a correlational or related link.

## Sources

**[xFinder: Large Language Models as Automated Evaluators for Reliable Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/9602d22a8c791f23f8e4d1398e3fb5be-Paper-Conference.pdf) (as "Knowledge comprehension")**
> The ability of a model to understand and correctly apply factual or conceptual information presented in a question.

**[Unified Parameter-Efficient Unlearning for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/8d537430e55a283a97e9b6e682e994a3-Paper-Conference.pdf)**
> The latent ability to represent and use factual or domain knowledge when processing inputs and generating outputs.

**[ATLANTIS: Weak-to-Strong Learning via Importance Sampling](https://aclanthology.org/2025.acl-long.52.pdf) (as "Knowledge and understanding")**
> The latent ability of a model to acquire, retain, and apply general world knowledge and domain-specific information from training data to perform well on diverse cognitive tasks.

## Relationships

### Knowledge understanding →
- **lm-evaluation-harness** (measurements) — *measured_by*
  > We evaluate our models on a total of 9 different zero-shot benchmarks to assess their abilities across various natural language tasks like common sense reasoning, general language understanding and knowledge understanding using the LLM Evaluation Harness [14]. (Section 4.3)
  - [Multi-Head Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab05dc8bf36a9f66edbff6992ec86f56-Paper-Conference.pdf)
- **Open LLM Leaderboard v2** (measurements) — *measured_by*
  > We use Open LLM Leaderboard 2 (Fourrier et al., 2024), and TruthfulQA (Lin et al., 2021) for the evaluation. (Section 3.2, under the heading 'Knowledge & Understanding')
  - [ATLANTIS: Weak-to-Strong Learning via Importance Sampling](https://aclanthology.org/2025.acl-long.52.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > We use Open LLM Leaderboard 2 (Fourrier et al., 2024), and TruthfulQA (Lin et al., 2021) for the evaluation. (Section 3.2, under the heading 'Knowledge & Understanding')
  - [ATLANTIS: Weak-to-Strong Learning via Importance Sampling](https://aclanthology.org/2025.acl-long.52.pdf)
- **VoxEval** (measurements) — *measured_by*
  > To address these limitations, we present VoxEval, a novel SpeechQA benchmark that assesses SLMs’ knowledge understanding through pure speech interactions. (Abstract)
  - [VoxEval: Benchmarking the Knowledge Understanding Capabilities of End-to-End Spoken Language Models](https://aclanthology.org/2025.acl-long.818.pdf)
- **MMMLU** (measurements) — *measured_by*
  > the OpenAI multilingual version of MMLU (MMMLU)1 for knowledge comprehension (Section 2)
  - [P-MMEval: A Parallel Multilingual Multitask Benchmark for Consistent Evaluation of LLMs](https://aclanthology.org/2025.emnlp-main.242.pdf)

### → Knowledge understanding
- **Knowledge memorization** (constructs) — *causes*
  > The knowledge memorization (KM) level shows notable correlations with other levels, especially with the concept tasks in the understanding level ... which indicates that these high-level tasks rely heavily on knowledge memory. (Section 3)
  - [KoLA: Carefully Benchmarking World Knowledge of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c26719edf1e6fba8f1ca7d3938e27785-Paper-Conference.pdf)
