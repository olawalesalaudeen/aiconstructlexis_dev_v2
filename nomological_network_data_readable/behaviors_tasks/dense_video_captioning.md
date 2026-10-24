# Dense video captioning
**Type:** Behavior  
**Referenced in:** 5 papers  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats dense video captioning as generating multiple temporally aligned descriptions within a single video, rather than a single overall caption. Papers consistently require time localization: one formulation asks models to "output the start and end timestamp for each event, and describe each event with sentences," while another describes "multiple, time-localized textual descriptions" for a sequence of events. A narrower formulation further stresses fine-grained coverage of chronologically evolving events and visual elements such as camera states, scenes, actions, and object attributes.

**Variants.** Papers mostly study this behavior as describing several events that unfold over time in one video. One formulation broadens the target content beyond events alone to include evolving visual elements, including camera states, scenes, actions, and object attributes. Papers also use the abbreviation DVC, and one paper relates it to the broader label "dense captioning."

**Space of elicitation and scores.** Papers link dense video captioning to 2 measurement instruments, ActivityNet Captions and YouCook2, and both are described as evaluation datasets. These are the only linked instruments recorded. One evaluation report says performance on YouCook2 is reported with the CIDEr metric, while another states that both ActivityNet Captions and YouCook2 are used as evaluation datasets for the task.

**What it is taken as evidence of.** Papers connect dense video captioning to 1 construct, Temporal grounding ability. The recorded link is a related relationship rather than a direct measurement claim: one paper presents dense video captioning as a downstream task associated with video temporal grounding. No other construct is linked to it.

## Sources

**[E.T. Bench: Towards Open-Ended Event-Level Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/38ace89a980ead30c6be2b46afc1a5bd-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Producing timestamped descriptions for multiple events throughout a video.

## Relationships

### Dense video captioning →
- **YouCook2** (measurements) — *measured_by*
  > we report the performance of models using the CIDEr metric for the dense video captioning task on the Youcook2 dataset
  - [TRACE: Temporal Grounding Video LLM  via Causal Event Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/df027cf11469e746ef94d583f9f5537f-Paper-Conference.pdf)
- **ActivityNet Captions** (measurements) — *measured_by*
  > We use Youcook2 (Zhou et al., 2018) and ActivityNet Captions (Fabian Caba Heilbron & Niebles, 2015) datasets as the evaluation datasets.
  - [TRACE: Temporal Grounding Video LLM  via Causal Event Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/df027cf11469e746ef94d583f9f5537f-Paper-Conference.pdf)

### Associated with
- **Dense captioning** (behaviors tasks)
  > We define two dense captioning tasks according to different goals: 1) [DVC] Dense Video Captioning: Comprehensively describe all the events happened in the video. (Section 2.1)
  - [E.T. Bench: Towards Open-Ended Event-Level Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/38ace89a980ead30c6be2b46afc1a5bd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Temporal grounding ability** (constructs)
  > Video Temporal Grounding (VTG) is an important ability for video understanding models (Lin et al., 2023b), and has becoming the base of a series of downstream tasks like moment retrieval (Fabian Caba Heilbron & Niebles, 2015; Gao et al., 2017; Oncescu et al., 2021), dense video caption (Zhou et al., 2018; Tang et al., 2019), video highlight detection (Lei et al.; Liu et al., 2022), and video summarization (Song et al., 2015; Gygli et al., 2014).
  - [TRACE: Temporal Grounding Video LLM  via Causal Event Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/df027cf11469e746ef94d583f9f5537f-Paper-Conference.pdf)
