# Super-NaturalInstructions
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** SuperNI, Super-Natural Instructions, SuperNI Benchmark, Super NI, S-NI  

## State of the Field

**What it is.** Across papers, Super-NaturalInstructions is most commonly described as a large, diverse instruction-following benchmark of NLP tasks with expert-written or human-written instructions, often said to contain over 1600, or specifically 1,616, tasks spanning both classification and generation. Some definitions also emphasize prompt formats, and papers use several short names, including SuperNI, Super NI, and S-NI. A smaller line of work adopts a narrower continual learning framing, describing a 15-task SuperNI Benchmark across dialogue generation, information extraction, question answering, summarization, and sentiment analysis, or using a 53-task subset with 19 multiple-choice and 34 classification tasks.

**What it is claimed to measure.** Papers use it to measure 5 constructs and 3 behavioral indicators. The most common linked behavioral indicators are Instruction following, Text generation, and Text classification, and the most common linked constructs are Task generalization, Continual learning, Generalization, Multi-task ability, and Translation ability. The prevailing usage is instruction-following evaluation, but the linked claims also spread across cross-task generalization, continual learning, multi-task, and translation settings rather than concentrating on a single construct.

**Space of uses.** No measurement instrument is linked to it. Papers mainly position it as an evaluation benchmark, sometimes alongside Long Sequence Benchmark, SuperGLUE, and P3, and sometimes alongside instruction-following datasets such as DollyEval and SelfInst. A smaller line of work uses it more operationally, for example to build continual instruction tuning task sequences, to assess cross-task generation and conflict after fine-tuning, or to test whether a grammar can generate the formatting used in 100+ tasks.

## Sources

**[Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf) (as "SuperNI")**
> A collection of NLP tasks with expert-written instructions used to build continual instruction tuning task sequences and evaluate cross-task generation and conflict.

**[LoRA Done RITE: Robust Invariant Transformation Equilibration for LoRA Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/bcbc0f660d2dde42f9d1d0ecb14a6f9a-Paper-Conference.pdf) (as "Super-Natural Instructions")**
> A large and diverse benchmark dataset containing over 1600 NLP tasks, designed to evaluate the general instruction-following capabilities of language models across both classification and generation formats.

**[Exploiting Presentative Feature Distributions for Parameter-Efficient Continual Learning of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25j/cheng25j.pdf) (as "SuperNI Benchmark")**
> A comprehensive continual learning benchmark consisting of 15 NLP tasks across categories such as dialogue generation, information extraction, question answering, summarization, and sentiment analysis, used to evaluate general CL performance.

**[Seeking Neural Nuggets: Knowledge Transfer in Large Language Models from a Parametric Perspective](https://proceedings.iclr.cc/paper_files/paper/2024/file/6d6dc5c9ad19816d745535d352dc4295-Paper-Conference.pdf) (as "Super NI")**
> Super Natural Instructions, a benchmark consisting of 1,616 diverse NLP tasks with expert-written instructions to evaluate instruction-following capabilities.

**[Quantifying Language Models' Sensitivity to Spurious Features in Prompt Design or: How I learned to start worrying about prompt formatting](https://proceedings.iclr.cc/paper_files/paper/2024/file/6c0e99d736da621403018ca7b32b1a4d-Paper-Conference.pdf)**
> A large benchmark dataset consisting of diverse natural language processing tasks, each with human-written instructions and prompt formats, used here for evaluation.

**[Adversarial Moment-Matching Distillation of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbae8efcc23a0cb6d15a20f245514020-Paper-Conference.pdf) (as "S-NI")**
> An instruction-following evaluation dataset used to assess performance on Super-NaturalInstructions prompts.

## Relationships

### → Super-NaturalInstructions
- **Instruction following** (behaviors tasks) — *measured_by*
  > This set of tasks evaluates a model’s capability in adhering to instructions. ... Our chosen benchmark for this category is the Super Natural Instructions (Super NI) (Wang et al., 2022)... (Section 4.1)
  - [Seeking Neural Nuggets: Knowledge Transfer in Large Language Models from a Parametric Perspective](https://proceedings.iclr.cc/paper_files/paper/2024/file/6d6dc5c9ad19816d745535d352dc4295-Paper-Conference.pdf)
- **Task generalization** (constructs) — *measured_by*
  > We evaluate TAGI on the Super-Natural Instructions (SNI) [37] and P3 [30] datasets. Experimental results demonstrate its ability to effectively generate adapters for unseen tasks, surpassing meta-trained models... (Section 1 Introduction).
  - [From Instance Training to Instruction Learning: Task Adapters Generation from Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/50ea4dbd1cff6bd3daef939eff10c092-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > The Super-Natural instruction dataset (Wang et al., 2022) contains a collection of 1600+ NLP tasks, including both classiﬁcation and generation tasks.
  - [LoRA Done RITE: Robust Invariant Transformation Equilibration for LoRA Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/bcbc0f660d2dde42f9d1d0ecb14a6f9a-Paper-Conference.pdf)
- **Multi-task ability** (constructs) — *measured_by*
  > “we conducted experiments on two publicly available multitasking benchmarks: SuperGLUE (Wang et al., 2019) and Super Natural-Instructions (Super NI) (Wang et al., 2022).”
  - [Customizable Combination of Parameter-Efficient Modules for Multi-Task Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a692a24dbc744fca340b9ba33bc6522-Paper-Conference.pdf)
- **Translation ability** (constructs) — *measured_by*
  > We evaluate Llama3 (8B-Instruct) on English-Spanish and English-French translations from SuperNI.
  - [An Auditing Test to Detect Behavioral Shift in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7af140f516c9f57050f7359bf53bc8f0-Paper-Conference.pdf)
- **Text classification** (behaviors tasks) — *measured_by*
  > The Super-Natural instruction dataset (Wang et al., 2022) contains a collection of 1600+ NLP tasks, including both classiﬁcation and generation tasks.
  - [LoRA Done RITE: Robust Invariant Transformation Equilibration for LoRA Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/bcbc0f660d2dde42f9d1d0ecb14a6f9a-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > "Our instruction tuning data are derived from Super-Natural Instructions (Wang et al., 2022)"
  - [PEARL: Towards Permutation-Resilient LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/fad8e1915f66161581bb127ccf01092e-Paper-Conference.pdf)
- **Continual learning** (constructs) — *measured_by*
  > We conducted experiments on two CL benchmarks, including SuperNI Benchmark (Wang et al., 2022a) and Long Sequence Benchmark (Razdaibiedina et al., 2023). (Section 4.1).
  - [Exploiting Presentative Feature Distributions for Parameter-Efficient Continual Learning of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25j/cheng25j.pdf)
