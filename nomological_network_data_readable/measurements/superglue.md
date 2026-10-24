# SuperGLUE
**Type:** Measurement  
**Referenced in:** 46 papers  

## State of the Field

**What it is.** Across papers, the prevailing framing treats SuperGLUE as a benchmark suite of diverse, challenging natural language understanding tasks, usually described as more difficult than GLUE and aimed at reasoning, inference, and comprehension. Some definitions present it as a general-purpose language understanding benchmark spanning question answering, coreference, and logical reasoning, and one definition notes accuracy as the primary metric. Papers differ on scope, describing 6, 7, or 8 tasks, and several use named subsets rather than the whole suite, for example BoolQ, CB, and COPA.

**What it is claimed to measure.** Papers link SuperGLUE to 2 constructs and 4 behavioral indicators. The dominant construct-level use is to measure natural language understanding, while a smaller line of work uses it to measure multi-task ability; at the behavioral level, it is reported as evaluating language understanding task performance, classification, and coreference resolution, with 1 other behavioral indicator also linked. Taken together, the claims are more concentrated on natural language understanding than dispersed across many constructs.

**Space of uses.** Most commonly, papers use SuperGLUE alongside GLUE and treat it as a main benchmark for model evaluation. Smaller strands pair it with SuperNaturalInstructions or place it in broader pools with IMDb, MNLI, and ANLI; across these settings, papers report fine-tuning on the benchmark, in-context results with 2-shot exemplars and greedy decoding, masked language model dev-set evaluation, and continual learning experiments on selected tasks. Some papers also use it as a source of question answering and reasoning tasks for other evaluations.

## Sources

**[A Good Learner can Teach Better: Teacher-Student Collaborative Knowledge Distillation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a781ff9cfb267277937db1818284739f-Paper-Conference.pdf)**
> A more challenging benchmark suite than GLUE, consisting of complex language understanding tasks that test reasoning and comprehension abilities.

## Relationships

### → SuperGLUE
- **Natural language understanding** (constructs) — *measured_by*
  > We assess the effectiveness of MPDistil using two natural language understanding benchmarks, SuperGLUE (Wang et al., 2019) and GLUE (Wang et al., 2018), encompassing 15 NLU tasks. (Section 1)
  - [A Good Learner can Teach Better: Teacher-Student Collaborative Knowledge Distillation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a781ff9cfb267277937db1818284739f-Paper-Conference.pdf)
- **Language understanding task performance** (behaviors tasks) — *measured_by*
  > The first benchmark, SuperGLUE, is a collection of eight challenging language understanding and reasoning tasks.
  - [GaussMark: A Practical Approach for Structural Watermarking of Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/block25a/block25a.pdf)
- **Multi-task ability** (constructs) — *measured_by*
  > “we conducted experiments on two publicly available multitasking benchmarks: SuperGLUE (Wang et al., 2019) and Super Natural-Instructions (Super NI) (Wang et al., 2022).”
  - [Customizable Combination of Parameter-Efficient Modules for Multi-Task Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/0a692a24dbc744fca340b9ba33bc6522-Paper-Conference.pdf)
- **Classification** (behaviors tasks) — *measured_by*
  > examine BAdam's capability in classification tasks by training RoBERTa-large on SuperGLUE benchmarks.
  - [BAdam: A Memory Efficient Full Parameter Optimization Method for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2c570b0f9938c7a58a612e5b00af9cc0-Paper-Conference.pdf)
- **Parameter efficiency** (constructs) — *measured_by*
  > "To further evaluate our approach, we extended our experiments to the more challenging SuperGLUE benchmark"
  - [SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model](https://aclanthology.org/2025.naacl-long.230.pdf)
- **Word sense disambiguation** (behaviors tasks) — *measured_by*
  > The SuperGLUE benchmark comprises advanced language understanding tasks... word sense disambiguation (WiC; (Pilehvar and Camacho-Collados, 2019))... (Section 4.1)
  - [SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model](https://aclanthology.org/2025.naacl-long.230.pdf)
- **Coreference resolution** (behaviors tasks) — *measured_by*
  > The SuperGLUE benchmark comprises advanced language understanding tasks... coreference resolution (WSC; ())... (Section 4.1)
  - [SSMLoRA: Enhancing Low-Rank Adaptation with State Space Model](https://aclanthology.org/2025.naacl-long.230.pdf)

### Associated with
- **BoolQ** (measurements)
  > For question answering tasks, we utilize BoolQ (from SuperGLUE) (Section 4).
  - [PortLLM: Personalizing Evolving Large Language Models with Training-Free and Portable Model Patches](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c444334e6bcf4e796f59f6d0bcae2a-Paper-Conference.pdf)
- **CB** (measurements)
  > “we use six NLU tasks from the SuperGLUE benchmark to evaluate the performance of the language model ... including ... CB”
  - [MEPT: Mixture of Expert Prompt Tuning as a Manifold Mapper](https://aclanthology.org/2025.emnlp-main.823.pdf)
- **COPA** (measurements)
  > “we use six NLU tasks from the SuperGLUE benchmark to evaluate the performance of the language model ... including ... COPA”
  - [MEPT: Mixture of Expert Prompt Tuning as a Manifold Mapper](https://aclanthology.org/2025.emnlp-main.823.pdf)
- **MultiRC** (measurements)
  > “we use six NLU tasks from the SuperGLUE benchmark to evaluate the performance of the language model ... including ... MRC”
  - [MEPT: Mixture of Expert Prompt Tuning as a Manifold Mapper](https://aclanthology.org/2025.emnlp-main.823.pdf)
- **RTE** (measurements)
  > “we use six NLU tasks from the SuperGLUE benchmark to evaluate the performance of the language model ... including ... RTE”
  - [MEPT: Mixture of Expert Prompt Tuning as a Manifold Mapper](https://aclanthology.org/2025.emnlp-main.823.pdf)
- **WiC** (measurements)
  > “we use six NLU tasks from the SuperGLUE benchmark to evaluate the performance of the language model ... including ... WiC”
  - [MEPT: Mixture of Expert Prompt Tuning as a Manifold Mapper](https://aclanthology.org/2025.emnlp-main.823.pdf)
- **WSC** (measurements)
  > “we use six NLU tasks from the SuperGLUE benchmark to evaluate the performance of the language model ... including ... WSC”
  - [MEPT: Mixture of Expert Prompt Tuning as a Manifold Mapper](https://aclanthology.org/2025.emnlp-main.823.pdf)
