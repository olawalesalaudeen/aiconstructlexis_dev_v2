# Text continuation
**Type:** Behavior  
**Referenced in:** 15 papers  
**Also known as:** Text completion, Text continuation generation, Open-ended text completion  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is a generative task where a model is given a prefix, prompt, sentence, article, or truncated passage and asked to produce the next text. Most definitions say the continuation should coherently, logically, and contextually follow the input, sometimes as a suffix or the remaining portion of a passage; one paper summarizes it as producing content that "remains consistent with the given one" (Exploring LLMs' Ability to Spontaneously and Conditionally Modify Moral Expressions through Text Manipulation). A smaller line of work narrows the task to specific setups, such as continuation from memory slots after compression, continuation from a five-token prompt, or continuation from truncated inputs used to elicit toxic outputs.

**Variants.** Authors also study several named variants. Alongside the dominant label text continuation, papers use text completion, text continuation generation, open-ended text completion, and transcript continuation; these cover sentence and article completion, continuation without specific task constraints, regeneration of the remaining portion of a truncated passage, and continuation from textual or speech-derived prompts. Smaller lines of work place the task in interactive student trials and teacher demonstrations, ask the model to continue in AAE, or require continuations that follow logical constraints and produce one suggestion for continuation.

**Space of elicitation and scores.** Papers link text continuation to four measurement instruments, all through measured_by relationships: FineWeb, GSM8K, HellaSwag, and WikiText-103. FineWeb is described as a dataset employed during pre-training, GSM8K as a text-completion benchmark, HellaSwag as a text completion task where the model chooses the most appropriate multi-word ending, and WikiText-103 as a standard benchmark for language modeling.

**What it is taken as evidence of.** Papers do not link text continuation to any construct, so they do not explicitly state what construct it evidences.

## Sources

**[Curiosity-driven Red-teaming for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/56ed2bd15b66f709cd81cb1aaa0496b9-Paper-Conference.pdf)**
> Generating subsequent text following the original context based on memory slots, used to evaluate the model's ability to maintain predictive capability after compression.

**[The Impossibility of Fair LLMs](https://aclanthology.org/2025.acl-long.5.pdf) (as "Text completion")**
> The task of generating text to continue a given prompt or sentence.

**[DNA-GPT: Divergent N-Gram Analysis for Training-Free Detection of GPT-Generated Text](https://proceedings.iclr.cc/paper_files/paper/2024/file/d4ce6738e84876aa79f13c8bc8b7c5eb-Paper-Conference.pdf) (as "Text continuation generation")**
> Generating the remaining portion of a passage from a truncated prefix.

**[Verifiable by Design: Aligning Language Models to Quote from Pre-Training Data](https://aclanthology.org/2025.naacl-long.191.pdf) (as "Open-ended text completion")**
> Continuing a given text prompt in a coherent and contextually appropriate manner without specific task constraints, often used to evaluate generative fluency and consistency.

## Relationships

### Text continuation →
- **WikiText-103** (measurements) — *measured_by*
  > WikiText-103 (Merity et al., 2017) is a standard benchmark for language modeling... (Section 4.1, Text completion)
  - [Nearest Neighbor Speculative Decoding for LLM Generation and Attribution](https://proceedings.neurips.cc/paper_files/paper/2024/file/93c099bb4cde51b724eaa6d6d4a4b5e4-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > Choice permutation applies to all benchmarks except GSM8K which is a text-completion benchmark, not a multiple-choice benchmark. (Section 3.1, footnote 7)
  - [metabench - A Sparse Benchmark of Reasoning and Knowledge in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ebc26584810a189ef1e4f173aba4319-Paper-Conference.pdf)
