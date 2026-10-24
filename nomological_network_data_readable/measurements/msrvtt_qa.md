# MSRVTT-QA
**Type:** Measurement  
**Referenced in:** 29 papers  
**Also known as:** MSRVTTQA, MSR-VTT-QA, MSRVT-QA  

## State of the Field

**What it is.** Across papers, the prevailing description is a video question answering benchmark based on or derived from the MSR-VTT dataset, also expanded in some definitions as Microsoft Research Video to Text. Definitions differ mainly in label and emphasis: some call it a benchmark, others a dataset or benchmark dataset, and several specify that it is open-ended, testing comprehension of video content through associated questions or answers about video clips. One description also notes that MSRVTT-QA, together with MSVD-QA, is derived from video retrieval datasets.

**What it is claimed to measure.** Measurement claims are concentrated rather than spread across many targets. Papers link it to 1 behavioral indicator, Video question answering, and this is the dominant usage: relationship evidence describes MSRVTT-QA as a benchmark for open-ended or zero-shot video question answering. Papers also link it to 1 construct, Video understanding, typically when placing it inside broader video understanding benchmark suites.

**Space of uses.** No paper directly links it to another measurement instrument, but papers usually use it alongside other video QA benchmarks, most often MSVD-QA and ActivityNet-QA, and often TGIF-QA; a few also mention NextQA or the Video-ChatGPT test set. The recurring positioning is as one benchmark within a broader evaluation suite, with several snippets describing open-ended or zero-shot VideoQA evaluation and one describing MSRVTT-QA among classical video QA datasets.

## Sources

**[AuroraCap: Efficient, Performant Video Detailed Captioning and a New Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aebc17b683792a17dd4a24fcb038ba6-Paper-Conference.pdf)**
> A video question answering benchmark derived from the MSR-VTT dataset.

**[Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf) (as "MSRVTTQA")**
> Video question answering benchmark based on MSRVTT, testing comprehension of video content with associated questions.

**[$\mathcalVista\mathcalDPO$: Video Hierarchical Spatial-Temporal Direct Preference Optimization for Large Video Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25g/huang25g.pdf) (as "MSR-VTT-QA")**
> Video question answering benchmark based on the MSR-VTT dataset, assessing model performance on diverse video content with open-ended questions.

**[CoreMatching: A Co-adaptive Sparse Inference Framework with Token and Neuron Pruning for Comprehensive Acceleration of Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25eb/wang25eb.pdf) (as "MSRVT-QA")**
> A benchmark for video question answering based on the MSR-VTT (Microsoft Research Video to Text) dataset.

## Relationships

### → MSRVTT-QA
- **Video question answering** (behaviors tasks) — *measured_by*
  > We evaluate Emu on a broad range of vision-language tasks including ... video question answering (MSRVTTQA (Xu et al., 2017), MSVDQA (Xu et al., 2017), NextQA (Xiao et al., 2021))... (Section 5)
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **Video understanding** (constructs) — *measured_by*
  > By scaling up the LLM to 34B, our model demonstrates a marked improvement in video understanding capabilities, achieving state-of-the-art performance on video evaluation benchmarks with accuracies of 77.4% on MSVD [68], 62.1% on MSR-VTT [70], and 55.8% on ActivityNet [69]. (Section 4.3)
  - [Dense Connector for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/3a10c46572628d58cb44fb705f25cbbf-Paper-Conference.pdf)
