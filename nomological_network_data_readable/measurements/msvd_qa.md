# MSVD-QA
**Type:** Measurement  
**Referenced in:** 31 papers  
**Also known as:** MSVDQA, MVSD-QA  

## State of the Field

**What it is.** Across the papers, MSVD-QA is most commonly treated as a video question-answering benchmark, often described as open-ended and frequently used for zero-shot evaluation. Definitions repeatedly tie it to the Microsoft Video Description dataset or the Microsoft Research Video Description Corpus, and the name also appears as MSVDQA and, in one formulation, MVSD-QA. Some descriptions add that it assesses understanding of video content through natural-language answers to video-based questions, sometimes over short video clips, and one paper notes that MSVD-QA is derived from video retrieval datasets.

**What it is claimed to measure.** Papers link MSVD-QA to 1 construct and 2 behavioral indicators. The prevailing usage is to measure Video question answering, with many papers explicitly calling it a video QA, open-ended VideoQA, or zero-shot video question answering benchmark. A smaller line of work reports it as measuring Video understanding by placing it among video understanding benchmarks, and a minority framing uses it for Visual question answering. These claims concentrate most strongly on Video question answering rather than spreading evenly across targets.

**Space of uses.** In practice, papers usually use MSVD-QA as part of broader benchmark suites rather than on its own. It is most often evaluated alongside MSRVTT-QA and ActivityNet-QA, often with TGIF-QA, and less often with NextQA or the Video-ChatGPT test set. Papers commonly position it as a standard or classical benchmark for open-ended or zero-shot video evaluation, including comparisons within comprehensive video understanding suites.

## Sources

**[Aligned Better, Listen Better for Audio-Visual Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0c79d6ed1788653643a1ac67b6ea32a7-Paper-Conference.pdf)**
> A video question-answering benchmark used for zero-shot video understanding evaluation.

**[Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf) (as "MSVDQA")**
> MSVD-QA benchmark used to assess answering questions about video content.

**[Unhackable Temporal Reward for Scalable Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e5b9a51dcd78528795584860797fdb-Paper-Conference.pdf) (as "MVSD-QA")**
> A video question answering benchmark based on the Microsoft Video Description Corpus.

## Relationships

### → MSVD-QA
- **Video question answering** (behaviors tasks) — *measured_by*
  > We evaluate Emu on a broad range of vision-language tasks including ... video question answering (MSRVTTQA (Xu et al., 2017), MSVDQA (Xu et al., 2017), NextQA (Xiao et al., 2021))... (Section 5)
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **Video understanding** (constructs) — *measured_by*
  > By scaling up the LLM to 34B, our model demonstrates a marked improvement in video understanding capabilities, achieving state-of-the-art performance on video evaluation benchmarks with accuracies of 77.4% on MSVD [68], 62.1% on MSR-VTT [70], and 55.8% on ActivityNet [69]. (Section 4.3)
  - [Dense Connector for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/3a10c46572628d58cb44fb705f25cbbf-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > Visual Question Answering (VQA): We evaluate the performance of visual question answering on the following benchmark datasets:... We also use MSVD-QA
  - [Teaching Human Behavior Improves Content Understanding Abilities Of VLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f0d8e47e50fa0ef219c61d6fb9f2a4b3-Paper-Conference.pdf)
