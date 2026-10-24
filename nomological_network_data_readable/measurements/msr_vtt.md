# MSR-VTT
**Type:** Measurement  
**Referenced in:** 11 papers  
**Also known as:** MSRVTT  

## State of the Field

**What it is.** Papers most commonly describe MSR-VTT as a large video description or video captioning benchmark for video-language evaluation. Several definitions frame it as an English, open-domain collection of videos paired with natural language descriptions, while one paper more specifically treats it as a text-to-video retrieval benchmark and another as a short-video understanding benchmark. Across these descriptions, the prevailing framing is a benchmark that bridges video and language, though papers differ on whether they foreground captioning, retrieval, or understanding.

**What it is claimed to measure.** Papers link MSR-VTT to three behavioral indicators and two constructs. The most common claim is that it measures Video captioning, with additional uses for Video generation and Cross-modal retrieval; papers also report it as measuring Video understanding and, in one benchmark comparison, Fidelity. Overall, the reported measurement claims are spread across several tasks and constructs rather than concentrated on a single target, although video captioning is the prevailing use.

**Space of uses.** Papers often use MSR-VTT alongside MSVD, and also place it with VATEX, LSMDC, DiDeMo, and UCF-101 in multi-benchmark evaluations. Authors position it as a benchmark for zero-shot captioning, captioning ability, text-to-video retrieval, text-to-video generation, and short-video understanding, and one active learning setup treats MSR-VTT as the large unannotated dataset against a small annotated MSVD.

**Concerns raised.** One comparison of text-to-video benchmarks that includes MSR-VTT states that most existing benchmarks "only assess two dimensions: visual quality and text relevance."

## Sources

**[Youku Dense Caption: A Large-scale Chinese Video Dense Caption Dataset and Benchmarks](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f3cbee17170c3ffff3e413d2df54f6b-Paper-Conference.pdf)**
> An English video captioning dataset referenced as a prior benchmark for video-language evaluation.

**[World Model on Million-Length Video And Language With Blockwise RingAttention](https://proceedings.iclr.cc/paper_files/paper/2025/file/71859ac75d53879d9bbd2f4b77b59929-Paper-Conference.pdf) (as "MSRVTT")**
> A video understanding benchmark used here to assess short video comprehension.

## Relationships

### → MSR-VTT
- **Video captioning** (behaviors tasks) — *measured_by*
  > We further perform zero-shot video captioning on MSR-VTT [75] and VATEX [62]. (Section 4.3)
  - [TOPA: Extending Large Language Models for Video Understanding via Text-Only Pre-Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ae94013da7cd459402fd77874e09ee3-Paper-Conference.pdf)
- **Video generation** (behaviors tasks) — *measured_by*
  > "We also evaluate LVD on common datasets such as UCF-101 (Soomro et al., 2012) and MSR-VTT (Xu et al., 2016)"
  - [LLM-grounded Video Diffusion Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d9f8b5abc8e0926539ecbb492af7b2f1-Paper-Conference.pdf)
- **Cross-modal retrieval** (behaviors tasks) — *measured_by*
  > We evaluate X-CoT on four benchmarks: MSR-VTT (Xu et al., 2016), MSVD (Chen and Dolan, 2011), LSMDC (Rohrbach et al., 2015), and DiDeMo (Anne Hendricks et al., 2017).
  - [X-CoT: Explainable Text-to-Video Retrieval via LLM-based Chain-of-Thought Reasoning](https://aclanthology.org/2025.emnlp-main.1588.pdf)
