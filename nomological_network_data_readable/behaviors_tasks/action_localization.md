# Action localization
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Temporal action localization, Accident temporal localization  

## State of the Field

**Space of definitions.** Most papers treat this as a temporal video task where a given action must be located by identifying when it occurs, usually through start and end times. The prevailing usage describes detecting and localizing temporal segments that contain the specified action, including formulations such as finding all segments with that action in a long video or marking the part of a video where an action like "flying" occurs. A smaller variant applies the same start and end timestamp criterion to a traffic accident event, emphasizing precise accident duration within a clip.

**Variants.** Papers use several closely related names, most commonly "temporal action localization," alongside "action localization" and the more domain-specific "accident temporal localization." The settings vary across animal-centric videos, longer or untrimmed videos, and traffic accident clips. Examples in the papers include locating animal actions, finding all "golf swing" segments in a long video, and identifying the precise accident interval.

**Space of elicitation and scores.** One measurement instrument is linked to this behavior: MVBench, which one paper lists under "AL Action Localization" with the entry "Charades-STA." No other measurement instrument is linked here, so the recorded operationalization is narrow.

**What it is taken as evidence of.** Only one construct is linked to this behavior: Grounding. The recorded relationship is that action localization is related to Grounding, as reported by one paper; no other construct link appears.

## Sources

**[Animal-Bench: Benchmarking Multimodal Video Models for Animal-centric Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/8fa604a81e5a236e2f38e917109571a3-Paper-Conference.pdf)**
> Identifying when a specified action occurs within a video timeline.

**[E.T. Bench: Towards Open-Ended Event-Level Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/38ace89a980ead30c6be2b46afc1a5bd-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Temporal action localization")**
> The task of detecting and localizing all temporal segments in a video that contain a specific, given action.

**[TAU-106K: A New Dataset for Comprehensive Understanding of Traffic Accident](https://proceedings.iclr.cc/paper_files/paper/2025/file/b33ad9d46ab2a23b6783d954121d26e3-Paper-Conference.pdf) (as "Accident temporal localization")**
> The task of identifying the precise start and end timestamps of a traffic accident event within a video clip.

## Relationships

### Action localization →
- **MVBench** (measurements) — *measured_by*
  > MVBench [29] is a recent video-language understanding benchmark that covers 20 challenging video tasks... TOPA Surprisingly excels in the Action Localization (AL) task
  - [TOPA: Extending Large Language Models for Video Understanding via Text-Only Pre-Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ae94013da7cd459402fd77874e09ee3-Paper-Conference.pdf)
