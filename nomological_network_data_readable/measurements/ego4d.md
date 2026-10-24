# Ego4D
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the surveyed papers, Ego4D is most commonly described as a large-scale egocentric video dataset. Definitions frame it as a source dataset from which other benchmarks are curated or recast: one paper says HourVideo uses videos from Ego4D and notes that "HourVideo consists of 500 videos from the Ego4D dataset, covering 77 daily life scenarios" (HourVideo: 1-Hour Video-Language Understanding), while another describes Ego4D as a large-scale egocentric video dataset for everyday activities with dense annotations that is recast into an offline mistake detection format for Ego4D-PMD.

**What it is claimed to measure.** Papers link Ego4D to no constructs and to one behavioral indicator. The reported use is concentrated on Temporal grounding: one paper states that Temporal grounding is measured by Ego4D, describing Ego4D as offering human-annotated videos and labels for certain egocentric video understanding tasks.

**Space of uses.** The available descriptions position Ego4D mainly as a source dataset rather than a standalone evaluation protocol. Papers use it to curate downstream benchmarks, including HourVideo and Ego4D-PMD, and one description says the latter is built from individual video frames annotated in Ego4D. No measurement instrument is linked to it.

## Sources

**[HourVideo: 1-Hour Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/5f2809607f692d79a01c05c43d702883-Paper-Datasets_and_Benchmarks_Track.pdf)**
> A large-scale dataset of egocentric videos from which the videos for the HourVideo benchmark were curated.

## Relationships

### → Ego4D
- **Egocentric video understanding** (constructs) — *measured_by*
  > While Ego4D (Grauman et al., 2022) offers valuable human-annotated videos and labels for certain egocentric video understanding tasks, particularly episodic memory (which assesses a model’s ability to retain visual details in such videos)... (Section 1)
  - [MMEgo: Towards Building Egocentric Multimodal LLMs for Video QA](https://proceedings.iclr.cc/paper_files/paper/2025/file/b29a95e7d9f1e1a6dfc567b556733744-Paper-Conference.pdf)
