# Chronological ordering
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Ordering, Plot unscrambling, Image ordering, Visual ordering  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is a sequencing task: the model must arrange a set of items into the correct temporal or logical order. The items vary, but the success criterion is usually recovering the original or correct sequence, for example by reordering shuffled synopsis sentences, identifying the correct chronological order of inserted video needles, or arranging retrieved events or states from earliest to latest. Some formulations are explicitly temporal, while others allow logical or visual progression cues.

**Variants.** Papers study this behavior under several names, including plot unscrambling, ordering, image ordering, visual ordering, and chronological ordering. The settings span text, video, and multi-image tasks: shuffled movie plot synopses are reordered into their original logical sequence, multiple inserted needles in a video are put in chronological order, images are arranged into a temporal or logical sequence, and image patches are ordered by visual progression, with one prompt asking for "the correct order of the number indexes based on the given patches."

**Space of elicitation and scores.** Chronological ordering is linked to two measurement instruments, MuirBench and VNBench, both through measured_by relationships. MuirBench uses an ordering task that evaluates whether models can order a series of images based on a textual description, while VNBench includes ordering alongside retrieval and counting and describes it as evaluating chronological ordering in video understanding.

**What it is taken as evidence of.** The recorded relationships connect this behavior to one construct, Natural language understanding. In that usage, chronological ordering appears as something by which natural language understanding is measured, with a movie synopsis unscrambling task grouped under "Language Comprehension"; no other construct link is recorded.

## Sources

**[LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf) (as "Plot unscrambling")**
> Reordering shuffled sentences of a plot synopsis into the original logical sequence.

**[Needle In A Video Haystack: A Scalable  Synthetic Evaluator for Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7b77476d89d5fb58aeb77691d2f40f5-Paper-Conference.pdf) (as "Ordering")**
> Identifying the correct chronological order of multiple inserted needles in a video.

**[MMIU: Multimodal Multi-image Understanding for Evaluating Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5f92032278b1c70946e0b753068de51e-Paper-Conference.pdf) (as "Image ordering")**
> The task of arranging a set of images into a correct temporal or logical sequence.

**[MMIU: Multimodal Multi-image Understanding for Evaluating Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5f92032278b1c70946e0b753068de51e-Paper-Conference.pdf) (as "Visual ordering")**
> Ordering images according to visual progression or sequence cues.

**[Episodic Memories Generation and Evaluation Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7ff013b7e372ba5b790352ccd6908f03-Paper-Conference.pdf)**
> The task of arranging a set of retrieved events or states in the correct temporal sequence, from earliest to latest.

## Relationships

### Chronological ordering →
- **VNBench** (measurements) — *measured_by*
  > Utilizing VideoNIAH, we compile a video benchmark, VNBench, which includes tasks such as retrieval, ordering, and counting to evaluate three key aspects of video understanding: temporal perception, chronological ordering, and spatio-temporal coherence. (ABSTRACT)
  - [Needle In A Video Haystack: A Scalable  Synthetic Evaluator for Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7b77476d89d5fb58aeb77691d2f40f5-Paper-Conference.pdf)

### Associated with
- **Natural language understanding** (constructs)
  > “Language Comprehension: Connections word puzzles, a typo-fixing task, and a movie synopsis unscrambling task”
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
