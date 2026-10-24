# TempCompass
**Type:** Measurement  
**Referenced in:** 9 papers  

## State of the Field

**What it is.** Across papers, TempCompass is most commonly described as a benchmark for visual temporal reasoning or temporal understanding in video-language models. Definitions consistently place it on videos, often specifically short videos, and describe task formats that include multiple-choice QA, yes/no QA, caption matching, and caption generation; some papers describe its focus through event ordering, duration inference, temporal order information, or temporal aspects such as speed, direction, and attribute changes. One description also specifies that it contains 410 videos and 7,540 instructions, and one paper explicitly uses a Multiple-Choice subset.

**What it is claimed to measure.** Across papers, the most common measurement claim is that TempCompass measures Temporal understanding, followed by Temporal reasoning and Video understanding; papers also link it to one behavioral indicator, Video question answering. These measurement claims are concentrated in three constructs rather than spread across many others, and the evidence describes the benchmark as assessing temporal understanding capabilities across five dimensions, diagnosing multi-facet basic video temporal understanding abilities, and evaluating temporal aspects such as speed, direction, and attribute changes. Some papers frame the same use more broadly as video understanding, while others treat it more specifically as video temporal reasoning or general video question answering.

**Space of uses.** Papers usually use TempCompass as part of a broader benchmark suite alongside VideoMME, MLVU, LongVideoBench, and MVBench. In these comparisons it is positioned as the short-video or fine-grained temporal-understanding benchmark, in contrast to long-video benchmarks, and one paper reports using its Multiple-Choice subset. Papers also cite it when reporting improvements on temporal reasoning or when grouping benchmarks under broader video understanding evaluations.

## Sources

**[TOMATO: Assessing Visual Temporal Reasoning Capabilities in Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/16ba99f25a235f1100a4014d71d34ad8-Paper-Conference.pdf)**
> A benchmark for visual temporal reasoning that expands task types to include multiple-choice QA, yes/no QA, caption matching, and caption generation.

## Relationships

### → TempCompass
- **Temporal understanding** (constructs) — *measured_by*
  > TempCompass [44] specifically assesses the nuanced performance of LVLMs across various temporal aspects, such as speed, direction, and attribute changes. (Section 5.1)
  - [ShareGPT4Video: Improving Video Understanding and Generation with Better Captions](https://proceedings.neurips.cc/paper_files/paper/2024/file/22a7476e4fd36818777c47e666f61a41-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Video understanding** (constructs) — *measured_by*
  > we conduct comprehensive evaluations of the model across three multi-modal video benchmarks. VideoBench [52]... MVBench [36]... TempCompass [44]
  - [ShareGPT4Video: Improving Video Understanding and Generation with Better Captions](https://proceedings.neurips.cc/paper_files/paper/2024/file/22a7476e4fd36818777c47e666f61a41-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Temporal reasoning** (constructs) — *measured_by*
  > To establish a connection between textual temporal reasoning ability and video comprehension, we adopt the fine-grained temporal understanding benchmark, TempCompass (Liu et al., 2024b) (Multiple-Choice subset), diagnosing multi-facet basic video temporal understanding abilities. (Section 4.1)
  - [Temporal Reasoning Transfer from Text to Video](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7eecb72574b043ad0c69ea296212450-Paper-Conference.pdf)
- **Video question answering** (behaviors tasks) — *measured_by*
  > To evaluate Video-STaR’s effect on general video question answering, we evaluated its effect on Video-LLaVA’s performance on TempCompass (Sec. 4.2).
  - [Video-STaR: Self-Training Enables Video Instruction Tuning with Any Supervision](https://proceedings.iclr.cc/paper_files/paper/2025/file/e789cfc9389048df4a0a44d4086e0dc2-Paper-Conference.pdf)
