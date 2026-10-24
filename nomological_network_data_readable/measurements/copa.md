# COPA
**Type:** Measurement  
**Referenced in:** 38 papers  

## State of the Field

**What it is.** Across papers, COPA is most commonly described as The Choice of Plausible Alternatives, a benchmark or dataset for commonsense causal reasoning, usually framed as choosing the more plausible cause or effect for a given premise or situation. Definitions vary slightly in task format: some call it a multiple-choice task, while others describe a sentence completion setup with a premise event, a causal query, and two choices; one paper says the dataset includes 1000 causal questions. Papers also place it within SuperGLUE, mention a zero-shot form, and in one multimodal adaptation convert it into multi-image cause-and-effect questions.

**What it is claimed to measure.** Papers link COPA to 3 constructs and 5 behavioral indicators. The prevailing use is to measure causal reasoning, often described more specifically as commonsense or commonsense causal reasoning, while a smaller line of work uses it to measure general ability. Claims about behavioral indicators are more dispersed: papers report using COPA to measure causal discovery, downstream task performance, multiple-choice question answering, sentence completion, and zero-shot task performance.

**Space of uses.** Papers link COPA to 2 other instruments, SuperGLUE and lm-evaluation-harness. One paper places it within SuperGLUE as one of six NLU tasks, and another reports using lm-evaluation-harness for standardized performance evaluation. More broadly, papers usually use COPA as one task inside larger NLU or commonsense benchmark bundles, as a downstream, validation, or zero-shot evaluation, while a few use it as a reference format for new causal datasets or adapt it to multimodal cause-and-effect questions.

**Concerns raised.** One paper notes that COPA was released prior to 2011 and is likely part of LLM training data.

## Sources

**[Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)**
> The Choice of Plausible Alternatives, a benchmark for commonsense causal reasoning presented as a multiple-choice task.

## Relationships

### → COPA
- **Commonsense reasoning** (constructs) — *measured_by*
  > Specifically, we consider commonsense reasoning: BoolQ (Clark et al., 2019), COPA (Roemmele et al., 2011); (Section 5.1)
  - [Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)
- **Causal reasoning** (constructs) — *measured_by*
  > The Choice of Plausible Alternatives (COPA) dataset is specifically designed to evaluate causal reasoning abilities in natural language processing models.
  - [Enhancing In-Context Learning Performance with just SVD-Based Weight Pruning: A Theoretical Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/448444518637da106d978ae7409d9789-Paper-Conference.pdf)
- **Sentence completion** (behaviors tasks) — *measured_by*
  > COPA (Gordon et al., 2012) for sentence completion (Section 4.1).
  - [Merge, Then Compress: Demystify Efficient SMoE with Hints from Its Routing Policy](https://proceedings.iclr.cc/paper_files/paper/2024/file/3d09a88c3372cdb79401fde592ca4db8-Paper-Conference.pdf)
- **Language model pre-training** (behaviors tasks) — *measured_by*
  > For LLM pertaining, we report the perplexity on Wikitext 103..., and the accuracy on COPA (Gordon et al., 2012), ARC (Clark et al., 2018), SciQ (Welbl et al., 2017), and HellaSwag (Zellers et al., 2019). (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > For the multiple-choice tasks, we use datasets: COPA (Gordon et al., 2012), StoryCloze (Mostafazadeh et al., 2016), NLI (Bowman et al., 2015), MMLU (Hendrycks et al., 2021), SST2 (Socher et al., 2013), SST5 (Socher et al., 2013), BoolQ (Clark et al., 2019), and Winogrande (Sakaguchi et al., 2020)... (Section 4.1)
  - [Semantics-Adaptive Activation Intervention for LLMs via Dynamic Steering Vectors](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4d26a95fd83f8e590f81c54ae670b5d-Paper-Conference.pdf)
- **Causal discovery** (behaviors tasks) — *measured_by*
  > Specifically, we use COPA (Roemmele et al., 2011), NPDS (Tu et al., 2019), e-CARE (Du et al., 2022), and Corr2Cause (Jin et al., 2023b) for causal discovery... (Section 4.1)
  - [CausalEval: Towards Better Causal Reasoning in Language Models](https://aclanthology.org/2025.naacl-long.622.pdf)
- **Zero-shot task performance** (behaviors tasks) — *measured_by*
  > “Table 1. Comparison of zero-evaluation performance... COPA ↑”
  - [MERIT: Maximum-normalized Element-wise Ratio for Language Model Large-batch Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25u/luo25u.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > We evaluate the downstream task accuracy of models derived from the methodology outlined in §2.3 using the following datasets: ARC-Easy (Clark et al., 2018), ARC-Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), COPA (Roemmele et al., 2011), HellaSwag (Zellers et al., 2019), LAMBADA (Paperno et al., 2016), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2021), MMLU (Hendrycks et al., 2020), Jeopardy (Jeo, 2022), and Winograd (Levesque et al., 2012). (Section 3.1)
  - [Scaling Inference-Efficient Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bian25b/bian25b.pdf)

### Associated with
- **SuperGLUE** (measurements)
  > “we use six NLU tasks from the SuperGLUE benchmark to evaluate the performance of the language model ... including ... COPA”
  - [MEPT: Mixture of Expert Prompt Tuning as a Manifold Mapper](https://aclanthology.org/2025.emnlp-main.823.pdf)
