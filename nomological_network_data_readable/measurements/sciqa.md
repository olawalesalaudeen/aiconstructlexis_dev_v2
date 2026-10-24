# SciQA
**Type:** Measurement  
**Referenced in:** 11 papers  

## State of the Field

**What it is.** Across papers, the prevailing description treats SciQA as a science question-answering dataset or benchmark. Definitions describe it as containing science exam questions with rich domain-specific language and complex reasoning, while some multimodal papers frame it more specifically as a visual question answering dataset with scientific diagrams that require scientific reasoning; other definitions describe it more generally as a science question-answering evaluation.

**What it is claimed to measure.** Papers use SciQA to measure 1 construct and 3 behavioral indicators. Several papers use it to measure Visual understanding, and individual papers also report it as measuring Knowledge-based question answering, Machine reading comprehension, and Visual question answering, so its reported measurement role spans multiple task framings rather than only one.

**Space of uses.** The common usage is as one benchmark within broader evaluation suites. Papers place it alongside ARC-Challenge, ARC-Easy, LAMBADA, LogiQA, and PIQA in downstream task testing, and other papers include it in multimodal or vision benchmark collections, describing it as a commonly used vision understanding benchmark or as one of several VQA datasets.

## Sources

**[DataMan: Data Manager for Pre-training Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1abed6ee581b9ceb4e2ddf37822c7fcb-Paper-Conference.pdf)**
> A question-answering dataset consisting of science exam questions with rich domain-specific language and complex reasoning.

## Relationships

### → SciQA
- **Visual understanding** (constructs) — *measured_by*
  > For vision understanding evaluations, we use the commonly used vision understanding benchmarks to evaluate the performance similar as LLaVA-1.5, such as VQAv2 (Goyal et al., 2017), GQA (Hudson & Manning, 2019), VizWiz (Gurari et al., 2018), SciQA (Lu et al., 2022), TextVQA (Singh et al., 2019), POPE (Li et al., 2023b), MMBench (en) (Liu et al., 2023b), SEED (image) (Li et al., 2023a) and MM-Vet (Yu et al., 2023). (Section 4.1)
  - [Dynamic-LLaVA: Efficient Multimodal Large Language Models via Dynamic Vision-language Context Sparsification](https://proceedings.iclr.cc/paper_files/paper/2025/file/aeafb73dfed3007ec5299be1604d6f99-Paper-Conference.pdf)
- **Knowledge-based question answering** (behaviors tasks) — *measured_by*
  > For knowledge-intensive reasoning, we use datasets that require deep domain understanding. ... and SciQA (Auer et al., 2023) challenges models using the Open Research Knowledge Graph.
  - [OCEAN: Offline Chain-of-thought Evaluation and Alignment in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e9dbfc971b5f8e74f41e335ff3d658-Paper-Conference.pdf)
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > Additionally, the DWM not only enhances the model’s performance on reading comprehension tasks, such as SciQA and BoolQ, but also improves its performance on commonsense reasoning tasks, such as the WinoGrande.
  - [LLM Data Selection and Utilization via Dynamic Bi-level Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25g/yu25g.pdf)
