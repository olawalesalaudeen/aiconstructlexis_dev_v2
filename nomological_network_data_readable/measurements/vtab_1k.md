# VTAB-1k
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** VTAB-1K  

## State of the Field

**What it is.** Most definitions describe VTAB-1k as the Visual Task Adaptation Benchmark, a suite of 19 diverse visual or image classification tasks spanning Natural, Specialized, and Structured domains. Across papers, it is used to evaluate transfer learning or fine-tuning performance in vision models; some descriptions add that each dataset has 1,000 training examples, and some specify structured tasks such as depth and orientation prediction or a split of 7 Natural, 4 Specialized, and 8 Structured datasets.

**What it is claimed to measure.** Papers link VTAB-1k to 2 constructs and 1 behavioral indicator. The prevailing measurement claim centers on image classification, with several papers using VTAB-1k to measure image classification; a smaller line of work reports it as measuring generalization and visual recognition. These reported uses therefore spread across a small set of targets rather than only one construct.

**Space of uses.** No measurement instrument is linked to it. Papers usually use VTAB-1k as a benchmark for evaluating the efficacy or fine-tuning performance of vision models and parameter-efficient transfer learning methods, and one paper describes it as extensively used for parameter-efficient transfer learning algorithms.

## Sources

**[Parameter-Efficient Orthogonal Finetuning via Butterfly Factorization](https://proceedings.iclr.cc/paper_files/paper/2024/file/a63ce8e6867a1bf4b4ca62e5077814d9-Paper-Conference.pdf) (as "VTAB-1K")**
> A diverse vision benchmark consisting of 19 image classification tasks across natural, specialized, and structured domains for evaluating transfer learning methods.

**[Increasing Model Capacity for Free: A Simple Strategy for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/ce3fd6b9dfe458dc258a8164a5e95bd2-Paper-Conference.pdf)**
> The Visual Task Adaptation Benchmark (VTAB-1k) is a suite of 19 diverse visual tasks across Natural, Specialized, and Structured domains, used to evaluate the fine-tuning performance of vision models.

## Relationships

### → VTAB-1k
- **Image classification** (behaviors tasks) — *measured_by*
  > For the CV task, we use ViT-B/16 (Dosovitskiy et al., 2020) as our pre-trained model and evaluate the efficacy of our method on the VTAB-1k (Zhai et al., 2019) benchmark. (Section 4)
  - [Increasing Model Capacity for Free: A Simple Strategy for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/ce3fd6b9dfe458dc258a8164a5e95bd2-Paper-Conference.pdf)
