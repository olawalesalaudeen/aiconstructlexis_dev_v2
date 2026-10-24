# NExT-QA
**Type:** Measurement  
**Referenced in:** 30 papers  
**Also known as:** Next-QA, NExTQA, NextQA  

## State of the Field

**What it is.** Across the papers, the prevailing usage is as a video question answering benchmark, often described as multiple choice, for evaluating causal and temporal reasoning over video events. Several definitions add that it targets everyday activities, natural videos, or explanations of temporal actions, and some descriptions also mention descriptive question types; one paper additionally names a subset, NExT-GQA, with timestamp annotations to locate the answer moment. Papers describe its video scope somewhat differently: some call it a long-form or minute-long video dataset with thousands of multiple-choice questions, while others describe it as measuring temporal dynamics over short clips or focusing on short videos.

**What it is claimed to measure.** Papers link it to one behavioral indicator, Video question answering, and to seven constructs. The dominant measurement claim is that papers use NExT-QA to measure video question answering, while construct-level uses are spread across long video understanding and video understanding, followed by causal reasoning, compositional reasoning, reasoning, spatiotemporal reasoning, and temporal reasoning. The recorded relationship language is consistent with this use: papers report that it measures these task areas or abilities, with recurring descriptions that it demands both causal and temporal reasoning and, in one account, emphasizes spatio-temporal reasoning over mere visual-fact retrieval.

**Space of uses.** Papers commonly use it as one item in broader benchmark suites, alongside other video question answering or video-understanding instruments such as EgoSchema, Video-MME, STAR, ActivityNet-QA, and MSRVTT-QA, among others. Some studies make it a focal benchmark, for example by reporting dedicated NExT-QA result tables or by saying they "focus on the NExT-QA benchmark" for its human-annotated questions and spatio-temporal emphasis, while another paper reuses it as an evaluation data source for count and reasoning tasks.

## Sources

**[Understanding Long Videos with Multimodal Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f591824a3bd840f74947fcda304c945-Paper-Conference.pdf)**
> NExT-QA is a video question answering benchmark used to evaluate long-video understanding, including causal and temporal reasoning.

**[Direct Preference Optimization of Video Large Multimodal Models from Language Model Reward](https://aclanthology.org/2025.naacl-long.30.pdf) (as "Next-QA")**
> Video question answering benchmark requiring causal and temporal reasoning to answer questions about video events.

**[Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf) (as "NExTQA")**
> Temporal reasoning benchmark for video question answering, requiring models to understand causal and temporal dynamics in videos.

**[Frame-Voyager: Learning to Query Frames for Video Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d18d208fa9c333483e5724ade7beff0f-Paper-Conference.pdf) (as "NextQA")**
> A video question answering benchmark that focuses on short videos and assesses causal and temporal reasoning.

## Relationships

### → NExT-QA
- **Video question answering** (behaviors tasks) — *measured_by*
  > We evaluate Emu on a broad range of vision-language tasks including ... video question answering (MSRVTTQA (Xu et al., 2017), MSVDQA (Xu et al., 2017), NextQA (Xiao et al., 2021))... (Section 5)
  - [Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf)
- **Video understanding** (constructs) — *measured_by*
  > We also evaluate the performance of mPLUG-Owl3 on video and multi-image benchmarks (including NextQA (Xiao et al., 2021), MVBench (Li et al., 2023c) VideoMME (Fu et al., 2024a), LongVideoBench (Wu et al., 2024) and MLVU (Zhou et al., 2024)), as it is capable of processing multiple images with an interleaved format.
  - [mPLUG-Owl3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f50f282a3093d36471008b045bd478af-Paper-Conference.pdf)
- **Long video understanding** (constructs) — *measured_by*
  > We evaluate our model on long video QA datasets... Among them, Next-QA [79], Next-GQA [80] and VideoChatGPT [50] encompass minute-long videos with thousands of frames. (Section 4.1)
  - [Streaming Long Video Understanding with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d7ce06e9293c3d8e6cb3f80b4157f875-Paper-Conference.pdf)
- **Causal reasoning** (constructs) — *measured_by*
  > We conduct experiments on three popular VideoQA datasets: NExT-QA, STAR, and IntentQA (Xiao et al., 2021; Wu et al., 2021; Li et al., 2023a), which demand both causal and temporal reasoning abilities.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **Temporal reasoning** (constructs) — *measured_by*
  > We conduct experiments on three popular VideoQA datasets: NExT-QA, STAR, and IntentQA (Xiao et al., 2021; Wu et al., 2021; Li et al., 2023a), which demand both causal and temporal reasoning abilities.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **Reasoning** (constructs) — *measured_by*
  > "video-SALMONN-o1 is also evaluated on Video-MME ... and NExT-QA ... benchmarks with challenging reasoning questions"
  - [video-SALMONN-o1: Reasoning-enhanced Audio-visual Large Language Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25x/sun25x.pdf)
- **Spatiotemporal reasoning** (constructs) — *measured_by*
  > "We focus on the NExT-QA (Xiao et al., 2021) benchmark for its size, variety of human-annotated questions, and its focus on spatio-temporal reasoning in videos over mere visual-fact retrieval"
  - [Understanding Complexity in VideoQA via Visual Program Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/eyzaguirre25a/eyzaguirre25a.pdf)
- **Compositional reasoning** (constructs) — *measured_by*
  > We evaluate on general video understanding benchmarks: ... NeXTQA (Xiao et al., 2021) (compositional reasoning)
  - [VideoPASTA: 7K Preference Pairs That Matter for Video-LLM Alignment](https://aclanthology.org/2025.emnlp-main.1647.pdf)
