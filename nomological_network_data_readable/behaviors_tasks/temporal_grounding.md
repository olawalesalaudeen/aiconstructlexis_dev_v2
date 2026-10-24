# Temporal grounding
**Type:** Behavior  
**Referenced in:** 11 papers  
**Also known as:** Moment localization, Temporal video grounding, Clue retrieval, Episodic memory, Moment retrieval  

## State of the Field

**Space of definitions.** Most commonly, papers describe temporal grounding as localizing the moment, time span, segment, or timestamps in a video that correspond either to the evidence for a question or to a natural language query. The prevailing success criterion is finding the answer event span or selecting the related clips, and one study says this checks whether a model "accurately grounds its answers to the correct video segments" (ReXTime: A Benchmark Suite for Reasoning-Across-Time in Videos). Some formulations are narrower, requiring start and end timestamps or direct output of clue intervals that can accurately answer the question, while another treats it as finding the visual event needed for an egocentric question.

**Variants.** Papers use several nearby task names, most often temporal video grounding, moment localization, clue retrieval, and moment retrieval. The common setting is video, but the task varies between question answering evidence localization, grounding a textual description or query to a segment, directly outputting clue intervals that answer a question, and localizing the event needed for an egocentric question; one paper states that models should "directly output the intervals of clues" that answer the question (CG-Bench: Clue-grounded Question Answering Benchmark for Long Video Understanding). A smaller line of work uses the same term for temporally evolving tables, where temporal grounding is described as identifying the relevant set of tables needed to answer a question.

**Space of elicitation and scores.** Papers link this behavior to three measurement instruments, most often Charades-STA, then QVHighlights and Ego4D. These are used as evaluation benchmarks or annotated video collections: Charades-STA for start and end timestamp localization, QVHighlights for identifying relevant moments and highlights in response to user queries, and Ego4D for egocentric episodic-memory style localization. Scoring language in the papers includes recall at IoU thresholds, R@N, and IoU-based calculations for grounding tasks.

**What it is taken as evidence of.** Papers link temporal grounding to eight constructs. The most frequent are Temporal grounding ability and Temporal understanding, followed by Fine-grained video understanding, Grounding, and Long video understanding, with three other constructs mentioned more peripherally. Papers do not converge on a single construct it reflects: temporal grounding is reported as related to Temporal grounding ability, and papers also claim causal relationships both from temporal grounding to Temporal grounding ability and from Temporal grounding ability to temporal grounding; temporal grounding is related to Temporal understanding, while one paper claims a causal relationship from Temporal understanding to temporal grounding and another claims a causal relationship from temporal grounding to Long video understanding. Beyond those causal claims, papers describe it as related to Fine-grained video understanding and Grounding.

## Sources

**[ReXTime: A Benchmark Suite for Reasoning-Across-Time in Videos](https://proceedings.neurips.cc/paper_files/paper/2024/file/32683193e1d0e7a5795b073acecb3549-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Moment localization")**
> Predicting the temporal span in a video that corresponds to the answer event or relevant evidence for a question.

**[Streaming Long Video Understanding with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d7ce06e9293c3d8e6cb3f80b4157f875-Paper-Conference.pdf)**
> Identifying the video segments or timestamps that correspond to the evidence needed for a question.

**[ReXTime: A Benchmark Suite for Reasoning-Across-Time in Videos](https://proceedings.neurips.cc/paper_files/paper/2024/file/32683193e1d0e7a5795b073acecb3549-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Temporal video grounding")**
> The task of localizing a specific moment or time span in a video that corresponds to a given natural language text query.

**[CG-Bench: Clue-grounded Question Answering Benchmark for Long Video Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/70fa5df8e3300dc30bf19bee44a56155-Paper-Conference.pdf) (as "Clue retrieval")**
> The observable action of identifying and outputting specific time intervals within a video that support an answer.

**[E.T. Bench: Towards Open-Ended Event-Level Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/38ace89a980ead30c6be2b46afc1a5bd-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Episodic memory")**
> Localizing the video moment that contains the evidence needed to answer an egocentric question.

**[TRACE: Temporal Grounding Video LLM  via Causal Event Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/df027cf11469e746ef94d583f9f5537f-Paper-Conference.pdf) (as "Moment retrieval")**
> The task of identifying the start and end timestamps of a video segment that corresponds to a given natural language query.

## Relationships

### Temporal grounding →
- **Charades-STA** (measurements) — *measured_by*
  > We utilize test set of Charades-STA (Gao et al., 2017) for the moment retrieval task and report the recall at IOU thresholds of 0.5 and 0.7.
  - [TRACE: Temporal Grounding Video LLM  via Causal Event Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/df027cf11469e746ef94d583f9f5537f-Paper-Conference.pdf)
- **QVHighlights** (measurements) — *measured_by*
  > Task [TVG] Temporal Video Grounding Source QVHighlights [44] (Table 4)
  - [E.T. Bench: Towards Open-Ended Event-Level Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/38ace89a980ead30c6be2b46afc1a5bd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Temporal grounding ability** (constructs) — *causes*
  > We present a novel training strategy specifically designed to enhance the temporal localization abilities of Vid-LLMs... we fine-tune our Vid-LLM in the second stage on dense video captioning and temporal grounding tasks.
  - [SlowFocus: Enhancing Fine-grained Temporal Understanding in Video LLM](https://proceedings.neurips.cc/paper_files/paper/2024/file/94ef721705ea95d6981632be62bb66e2-Paper-Conference.pdf)
- **Long video understanding** (constructs) — *causes*
  > We argue long video understanding could be assisted by explicitly performing temporal grounding, as grounding supervision enables MLLM to establish the detailed correspondance between the visual segments and fine-grained semantics.
  - [TimeSuite: Improving MLLMs for Long Video Understanding via Grounded Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e8309c9ca683e11672e3dbcd4b87776-Paper-Conference.pdf)

### Associated with
- **Temporal understanding** (constructs)
  > These limitations are particularly problematic for temporal understanding tasks that rely on maintaining temporal coherence across frames, such as highlight detection and temporal grounding.
  - [Language-Guided Temporal Token Pruning for Efficient VideoLLM Processing](https://aclanthology.org/2025.emnlp-main.451.pdf)
- **Fine-grained video understanding** (constructs)
  > Comprehending videos in fine-grained aspects requires precisely locating and understanding specific events within a video. It is roughly divided by previous works [10] into temporal grounding [2, 7] and dense video captioning [13, 31] tasks.
  - [SlowFocus: Enhancing Fine-grained Temporal Understanding in Video LLM](https://proceedings.neurips.cc/paper_files/paper/2024/file/94ef721705ea95d6981632be62bb66e2-Paper-Conference.pdf)
- **Temporal reasoning** (constructs)
  > Temporal reasoning encompasses several key aspects. Based on recent Video LLM benchmarks (Fu et al., 2024; Wu et al., 2024), we focus on four critical dimensions: ... and (4) Temporal Grounding: identifying the temporal location of specific elements in a video. (Section 2.2)
  - [Temporal Reasoning Transfer from Text to Video](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7eecb72574b043ad0c69ea296212450-Paper-Conference.pdf)
- **Information retrieval** (behaviors tasks)
  > Temporal Grounding. Accurately identify and retrieve/extract the relevant set of tables necessary to answer the question. This can be regarded as retrieval over temporal information.
  - [TRANSIENTTABLES: Evaluating LLMs' Reasoning on Temporally Evolving Semi-structured Tables](https://aclanthology.org/2025.naacl-long.332.pdf)
