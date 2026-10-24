# RTE
**Type:** Measurement  
**Referenced in:** 78 papers  

## State of the Field

**What it is.** Across papers, the prevailing usage treats RTE as a textual entailment or natural language inference benchmark: models judge whether a hypothesis can be inferred from, follows from, or is entailed by a premise or text. Several definitions describe it as premise-hypothesis pairs, and some make the labels explicit as binary, such as entailment versus not entailment or "True" versus "False"; one paper instead describes entailment, contradiction, and neutrality and mentions negation-modified versions. A smaller line of work refers to "RTE datasets" as a collection or series of textual entailment challenges, and papers variously place it within GLUE or SuperGLUE benchmark suites.

**What it is claimed to measure.** Papers link RTE to 4 constructs and 4 behavioral indicators. The dominant claim is that papers use it to measure natural language inference, often phrased as textual entailment, while smaller uses treat it as measuring binary classification, fact checking, or zero-shot task performance. At the construct level, papers most often use it to measure general ability, followed by natural language understanding, with additional uses for in-context learning and language modeling ability, so the broader construct claims are spread across several targets even though the behavioral framing centers on inference.

**Space of uses.** The only linked instruments are GLUE, to which papers relate RTE, and SuperGLUE, which one paper records as measuring RTE. Across the literature, RTE is usually one task inside larger evaluation suites: papers use it in fine-tuning tables, zero-shot benchmark collections, in-context learning evaluations, calibration studies, and prompt robustness analyses. The papers typically present it as part of multi-task evaluation bundles.

**Concerns raised.** Some papers use RTE in robustness-oriented checks, including sensitivity to prompt engineering design choices, consistency under prompt variation, and negation-modified versions.

## Sources

**[An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)**
> A textual entailment benchmark used to evaluate whether one sentence entails another.

## Relationships

### → RTE
- **Natural language inference** (behaviors tasks) — *measured_by*
  > “Natural Language Inference (MNLI, RTE, QNLI)”
  - [An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > we perform General Capability Tests using six natural language tasks... Specifically, the evaluation tasks include: ... 4. RTE (Recognizing Textual Entailment) (Section 4.3).
  - [AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > In the realm of NLU, we utilized the CoLA (Warstadt et al., 2019), RTE (Poliak, 2020), MNLI (Williams et al., 2018), MRPC (Dolan & Brockett, 2005) datasets from GLUE benchmark (Wang et al., 2018) to evaluate the performance of UniCoTT (Section 4.1).
  - [UniCoTT: A Unified Framework for Structural Chain-of-Thought Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca642f8e1174012d67c05c1c9f969644-Paper-Conference.pdf)
- **Binary classification** (behaviors tasks) — *measured_by*
  > Output comparison of pretrained and fine-tuned mT5 models vs. fine-tuned with ProMoT on the RTE binary classification NLI dataset (Table 1).
  - [Two-stage LLM Fine-tuning with Less Specialization and More Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/597254dc45be8c166d3ccf0ba2d56325-Paper-Conference.pdf)
- **Fact checking** (behaviors tasks) — *measured_by*
  > "the RTE dataset [49], a classification task where the model is tasked to verify the correctness of statements"
  - [QuanTA: Efficient High-Rank Fine-Tuning of LLMs with Quantum-Informed Tensor Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/a7c17115db36193f6b83b71b0fe1d416-Paper-Conference.pdf)
- **Language modeling ability** (constructs) — *measured_by*
  > In addition, experiments on short-context language modeling tasks, like the RTE (Dagan et al., 2005)... show that our method does not affect the basic language modeling ability of Mamba. (Section 1)
  - [Recall with Reasoning: Chain-of-Thought Distillation for Mamba's Long-Context Memory and Extrapolation](https://aclanthology.org/2025.emnlp-main.235.pdf)

### Associated with
- **GLUE** (measurements)
  > six Natural Language Understanding (NLU) tasks from the GLUE benchmark [34]—namely, SST-2 [31], MNLI [37], MRPC [3], QNLI [29], QQP, and RTE [5] (Section 4.1).
  - [Prompt Tuning Strikes Back: Customizing Foundation Models with Low-Rank Prompt Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/548551c07a68c8f0a87d67c6167cedb1-Paper-Conference.pdf)
- **SuperGLUE** (measurements)
  > “we use six NLU tasks from the SuperGLUE benchmark to evaluate the performance of the language model ... including ... RTE”
  - [MEPT: Mixture of Expert Prompt Tuning as a Manifold Mapper](https://aclanthology.org/2025.emnlp-main.823.pdf)
