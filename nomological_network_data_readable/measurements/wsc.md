# WSC
**Type:** Measurement  
**Referenced in:** 32 papers  
**Also known as:** Winograd  

## State of the Field

**What it is.** Across papers, WSC is most commonly described as the Winograd Schema Challenge, a benchmark, task, or dataset for coreference resolution and pronoun disambiguation, usually framed as requiring commonsense reasoning and sometimes linguistic reasoning. A smaller line of descriptions refers to it more generally as a reasoning benchmark or as Winograd-style tasks, and one paper says Winograd is a language-modeling formulation of the WSC task from SuperGLUE. A few definitions add format detail, describing WSC as multiple-choice questions, and one paper uses a direct-question version plus a one-shot variant, WSC-1sh.

**What it is claimed to measure.** Papers use WSC to measure 3 constructs and 4 behavioral indicators. The prevailing construct claim is commonsense reasoning, with several papers placing Winograd or WSC among commonsense reasoning datasets, while smaller strands use it to measure general ability or in-context learning. On behavioral indicators, it is reported most often as measuring coreference resolution, and individual papers also use it for downstream task performance, language understanding task performance, and zero-shot task performance, so the measurement claims center on coreference and commonsense but extend beyond them.

**Space of uses.** In use, papers commonly include WSC in broader evaluation suites rather than on its own. It appears alongside benchmarks such as PIQA, Winogrande, ARC-Challenge, ARC-Easy, and WiC, with many other tasks also listed, and one paper explicitly positions it as one of the SuperGLUE NLU tasks, the only other linked instrument. Another paper compares a standard WSC setup with a direct-question WSC format and a one-shot WSC-1sh setting.

## Sources

**[Addax: Utilizing Zeroth-Order Gradients to Improve Memory Efficiency and Performance of SGD for Fine-Tuning Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/03560f68b1238221e7c07ad01c4b47aa-Paper-Conference.pdf)**
> A coreference resolution benchmark requiring pronoun disambiguation.

**[Grounding Multimodal Large Language Models to the World](https://proceedings.iclr.cc/paper_files/paper/2024/file/e112a4671e8779aa9f640a0e3f81bd26-Paper-Conference.pdf) (as "Winograd")**
> Coreference resolution task involving pronoun disambiguation with linguistic and commonsense reasoning.

## Relationships

### → WSC
- **Commonsense reasoning** (constructs) — *measured_by*
  > For the text modality, we compare the zero-shot performance on some common sense reasoning tasks: PIQA (Bisk et al., 2020), ARC-Challenge, ARC-Easy (Clark et al., 2018), StoryCloze (Mostafazadeh et al., 2016), Winograd, and Winogrande (Sakaguchi et al., 2021). (Table 1)
  - [Jointly Training Large Autoregressive Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d564edd2bf015ac07c8031ab3f9839b0-Paper-Conference.pdf)
- **Coreference resolution** (behaviors tasks) — *measured_by*
  > “the Winograd Schema Challenge evaluates coreference resolution capabilities (WSC; Levesque et al., 2012)”
  - [BERTs are Generative In-Context Learners](https://proceedings.neurips.cc/paper_files/paper/2024/file/04ea184dfb5f1babb78c093e850a83f9-Paper-Conference.pdf)
- **Language understanding task performance** (behaviors tasks) — *measured_by*
  > Language Understanding (LU): Lambada-OpenAI [44], Hellaswag-0-shot [65], Winograd-3-shots [30], and WinoGrande-5-shots [54].
  - [Dataset Decomposition: Faster LLM Training with Variable Sequence Length Curriculum](https://proceedings.neurips.cc/paper_files/paper/2024/file/3f9bf45ea04c98ad7cb857f951f499e2-Paper-Conference.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > We evaluate the downstream task accuracy of models derived from the methodology outlined in §2.3 using the following datasets: ARC-Easy (Clark et al., 2018), ARC-Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), COPA (Roemmele et al., 2011), HellaSwag (Zellers et al., 2019), LAMBADA (Paperno et al., 2016), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2021), MMLU (Hendrycks et al., 2020), Jeopardy (Jeo, 2022), and Winograd (Levesque et al., 2012). (Section 3.1)
  - [Scaling Inference-Efficient Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bian25b/bian25b.pdf)

### Associated with
- **SuperGLUE** (measurements)
  > “we use six NLU tasks from the SuperGLUE benchmark to evaluate the performance of the language model ... including ... WSC”
  - [MEPT: Mixture of Expert Prompt Tuning as a Manifold Mapper](https://aclanthology.org/2025.emnlp-main.823.pdf)
