# WMT
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Most descriptions treat WMT as a machine translation benchmark or shared task, often specifically the English-German or EN→DE task, used to evaluate translation performance. Some papers refer to collections of the yearly WMT task, and one paper frames WMT more broadly as a series of shared tasks and benchmarks for translation quality. A smaller line of work describes WMT as a human-preference dataset used to construct contrastive instruction-response pairs for machine translation.

**What it is claimed to measure.** Across the surveyed work, the links concentrate on one construct and one behavioral indicator rather than many targets. Papers use WMT to measure Translation quality and report Machine translation as measured by WMT, and one paper also records one linked measurement instrument, QuALITY, as measured by WMT, with quality measured in terms of BLEU for WMT.

**Space of uses.** Papers use WMT alongside other task datasets: examples pair WMT EnDe with CNN/DM, and in one supervised fine-tuning setup with XSum as well. Other papers position WMT alongside MLQE-PE and FLORES as an evaluation benchmark for translation quality, and one paper measures translation quality from English with XComet-XL on collections of the yearly WMT task.

## Sources

**[DistillSpec: Improving Speculative Decoding via Knowledge Distillation](https://proceedings.iclr.cc/paper_files/paper/2024/file/8766fbc68e1ed1cdef712ce273e0a363-Paper-Conference.pdf)**
> The Workshop on Machine Translation (WMT) benchmark, specifically the English-German (EnDe) task, is used to evaluate machine translation performance.

## Relationships

### → WMT
- **Machine translation** (behaviors tasks) — *measured_by*
  > "WMT for machine translation"
  - [The Trickle-down Impact of Reward Inconsistency on RLHF](https://proceedings.iclr.cc/paper_files/paper/2024/file/8c976a95df6a229551cd28c76627edc9-Paper-Conference.pdf)
- **Translation quality** (constructs) — *measured_by*
  > Benchmarks like WMT (Freitag et al., 2021b), MLQE-PE (Fomicheva et al., 2020), and FLORES (Team et al., 2022) have become central to evaluating translation quality. (Section 2)
  - [Evaluating Language Translation Models by Playing Telephone](https://aclanthology.org/2025.emnlp-main.524.pdf)
- **Text generation quality** (constructs) — *measured_by*
  > "Quality is measured in terms of BLEU for WMT"
  - [Faster Cascades via Speculative Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/6f43166f50f26e8d8f3edc5545b0749f-Paper-Conference.pdf)
