# SciQ
**Type:** Measurement  
**Referenced in:** 80 papers  
**Also known as:** SCIQ  

## State of the Field

**What it is.** Across papers, the prevailing description is of SciQ as a scientific question-answering benchmark or dataset built from multiple-choice science exam questions. Definitions usually describe about 13,000 questions, and one paper specifies 13,679 crowdsourced items spanning physics, chemistry, biology, earth science, astronomy, and computer science; some authors additionally describe supporting paragraphs or annotated support evidence. A smaller line of work frames SciQ more broadly as a natural language understanding, reading comprehension, or commonsense question answering benchmark, and some papers use a LitCab test split for short, phrase-level, or free-form responses.

**What it is claimed to measure.** Papers link SciQ to seven constructs and four behavioral indicators. The most common claim is that papers use it to measure commonsense reasoning, with additional links to general ability, scientific knowledge, scientific reasoning, generalization, knowledge, and reasoning. On the behavioral side, papers report it as evaluating multiple-choice question answering most often, and also question answering, open-ended question answering, and text classification, so the measurement claims are spread across several targets rather than tied to just one.

**Space of uses.** In use, SciQ is usually one task within larger evaluation suites, often reported in zero-shot accuracy settings and sometimes in 5-shot or 25-shot setups. Papers frequently place it alongside ARC-E, ARC-C, PIQA, HellaSwag, and WinoGrande, and the only linked instrument is lm-evaluation-harness, which papers say is used to evaluate models on SciQ and otherwise relate to the language model evaluation harness. A smaller set of papers uses SciQ for phrase-level or free-form generation, uncertainty estimation, evidence-conditioned question answering with annotated support, or model error analysis.

## Sources

**[LitCab: Lightweight Language Model Calibration over Short- and Long-form Responses](https://proceedings.iclr.cc/paper_files/paper/2024/file/3815d62554efad0878fad6c1c30ffda0-Paper-Conference.pdf)**
> A benchmark for scientific question answering, consisting of multiple-choice questions sourced from science exams.

**[ACC-Collab: An Actor-Critic Approach to Multi-Agent LLM Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/e187897ed7780a579a0d76fd4a35d107-Paper-Conference.pdf) (as "SCIQ")**
> A benchmark dataset with about 13,000 multiple-choice science questions.

## Relationships

### → SciQ
- **Commonsense reasoning** (constructs) — *measured_by*
  > For common sense and reading comprehension tasks, we report 0-shot accuracy results for SciQ [22], PIQA [23], WinoGrande (Wino.) [24], ARC Easy(ARC-E.) [25], and HellaSwag (HellaS.) [26], alongside 25-shot accuracy for ARC Challenge (ARC-C.) [27]. (Section 5.1)
  - [DHA: Learning Decoupled-Head Attention from Transformer Checkpoints via Adaptive Heads Fusion](https://proceedings.neurips.cc/paper_files/paper/2024/file/518a75257f37b32f711082dff33c2ffc-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > The Science Questions (SciQ) dataset [73] consists of 13,679 crowdsourced multiple choice science exam questions ranging across physics, chemistry, biology, earth science, astronomy, and computer science. (Appendix E)
  - [LLM Circuit Analyses Are Consistent Across Training and Scale](https://proceedings.neurips.cc/paper_files/paper/2024/file/47c7edadfee365b394b2a3bd416048da-Paper-Conference.pdf)
- **Scientific reasoning** (constructs) — *measured_by*
  > SciQ measures scientific reasoning, challenging models to apply scientific concepts beyond mere fact recall. (Section 4.2)
  - [Neuron-based Multifractal Analysis of Neuron Interaction Dynamics in Large Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6158e152498f8d8b83d14388a7ec1963-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > Following Tian et al. (2023), we use two question-answering datasets: (1) SciQ (Welbl et al., 2017) contains crowd-sourced science exam questions (Section 4.3).
  - [Calibrating Expressions of Certainty](https://proceedings.iclr.cc/paper_files/paper/2025/file/66b35d2e8d524706f39cc21f5337b002-Paper-Conference.pdf)
- **Scientific knowledge** (constructs) — *measured_by*
  > SciQ (Welbl et al., 2017) for science-related abilities. (Section 3.1)
  - [Weak to Strong Generalization for Large Language Models with Multi-capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ebcb8f051d0c178474619bbfb32b340-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > “These models are trained further and evaluated on downstream tasks: ... SciQ (Welbl et al., 2017)”
  - [STAR: Synthesis of Tailored Architectures](https://proceedings.iclr.cc/paper_files/paper/2025/file/dc300c4d75b94b211b149ae4bcbbf2d2-Paper-Conference.pdf)
- **Language model pre-training** (behaviors tasks) — *measured_by*
  > For LLM pertaining, we report the perplexity on Wikitext 103..., and the accuracy on COPA (Gordon et al., 2012), ARC (Clark et al., 2018), SciQ (Welbl et al., 2017), and HellaSwag (Zellers et al., 2019). (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > To assess generalization beyond the pretraining distribution, we evaluate models on a series of diverse reasoning tasks in a 5-shot setting, including... SciQ... (Section 6.1)
  - [Dynamic Loss-Based Sample Reweighting for Improved Large Language Model Pretraining](https://proceedings.iclr.cc/paper_files/paper/2025/file/ded26b348d55953a4863d41540b7d5c4-Paper-Conference.pdf)
- **Open-ended question answering** (behaviors tasks) — *measured_by*
  > We cover four open-ended quenstion-answering datasets: TriviaQA (Joshi et al., 2017), Sciq (Welbl et al., 2017), WikiQA (Yang et al., 2015), and NQ (Kwiatkowski et al., 2019). (Section 4.1)
  - [Influences on LLM Calibration: A Study of Response Agreement, Loss Functions, and Prompt Styles](https://aclanthology.org/2025.acl-long.188.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > To assess generalization beyond the pretraining distribution, we evaluate models on a series of diverse reasoning tasks in a 5-shot setting, including LogiQA Liu et al. (2020), LogiQA 2 Liu et al. (2023), SciQ Welbl et al. (2017), and PiQA Bisk et al. (2020). (Section 6.1)
  - [Dynamic Loss-Based Sample Reweighting for Improved Large Language Model Pretraining](https://proceedings.iclr.cc/paper_files/paper/2025/file/ded26b348d55953a4863d41540b7d5c4-Paper-Conference.pdf)

### Associated with
- **lm-evaluation-harness** (measurements)
  > zero-shot downstream performance on 6 common-sense reasoning domains from the language model evaluation harness (Gao et al., 2024): HellaSwag (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2019), PIQA (Bisk et al., 2019), ARC-E (Clark et al., 2018), SciQ (Welbl et al., 2017), LogiQA2 (Liu et al., 2023) and LAMBADA (Paperno et al., 2016). (Section 4)
  - [Adaptive Data Optimization: Dynamic Sample Selection with Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/923285deb805c3e14e1aeebc9854d644-Paper-Conference.pdf)
