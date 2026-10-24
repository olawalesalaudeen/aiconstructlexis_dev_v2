# Temporal grounding ability
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Temporal grounding, Video temporal grounding, Temporal localization, Referring  

## State of the Field

**Definition agreement:** Consensus. Most papers define temporal grounding ability as understanding a textual or user query and localizing the corresponding event, timestamps, or segment in a video. One paper instead focuses on identifying and aligning relevant sub-action frames across videos, but this appears to be an outlier, so the overall pattern is that papers are studying the same core temporal localization ability.

**Space of definitions.** Across the surveyed papers, the prevailing usage treats temporal grounding ability as a query-conditioned video localization capability: models are described as associating a textual query, question, or instruction with the specific time segment, timestamp, or part of a video where the relevant event occurs. A closely aligned framing calls this "referring," defined as comprehending time information from user inputs and identifying which part of a video the user is referring to. A smaller line of work uses a narrower temporal localization framing, centered on "finding the sub-action frames where the differences might occur, and aligning those frames between the two videos," which shifts the scope from general event grounding to cross-video sub-action alignment.

**Space of facets.** Papers use several nearby labels for overlapping phenomena, most often "temporal grounding" or "video temporal grounding," and less often "referring" or "temporal localization." The first two are used for the general ability to localize events in time from language, while "referring" is presented as a capability in a task taxonomy and "temporal localization" is used for the more specific case of localizing relevant sub-actions across two videos. One paper also places video temporal grounding as the base of downstream tasks such as moment retrieval, dense video caption, video highlight detection, and video summarization.

**Space of measurement.** Recorded operationalization is sparse. No measurement instrument is linked to this construct, and no constructs are linked to it; papers instead connect it to two behavioral indicators, most often Temporal grounding and also Dense video captioning, but these links are recorded as causal or related rather than as measurements. Where evaluation language is explicit, papers describe assessing "temporal grounding ability on Next-GQA" and report "precise temporal grounding" for specific questions, which matches the dominant definition of locating relevant video time spans from language, while the temporal localization variant targets sub-action frames and cross-video alignment.

**Links.** Only a few links are recorded. One paper claims a causal relationship from Temporal grounding to Temporal grounding ability, citing fine-tuning on dense video captioning and temporal grounding tasks to enhance temporal localization abilities, and the same paper also records a causal relationship in the reverse direction, from Temporal grounding ability to Temporal grounding, in the context of further training to refine capabilities. Another paper reports that Temporal grounding is related to Temporal grounding ability and that Dense video captioning is related to Temporal grounding ability; no correlational links are recorded.

## Sources

**[Streaming Long Video Understanding with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d7ce06e9293c3d8e6cb3f80b4157f875-Paper-Conference.pdf) (as "Temporal grounding")**
> The ability to accurately associate a textual query or question with the specific time segment in a video where the relevant event occurs.

**[TRACE: Temporal Grounding Video LLM  via Causal Event Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/df027cf11469e746ef94d583f9f5537f-Paper-Conference.pdf) (as "Video temporal grounding")**
> The model's ability to precisely identify and localize the timestamps of specific events within a video based on a textual query or instruction.

**[Video Action Differencing](https://proceedings.iclr.cc/paper_files/paper/2025/file/26f62bf3b74cda621831f550c6ee2dce-Paper-Conference.pdf) (as "Temporal localization")**
> The ability to identify the specific sub-action frames where a relevant difference occurs and align those frames across videos.

**[E.T. Bench: Towards Open-Ended Event-Level Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/38ace89a980ead30c6be2b46afc1a5bd-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Referring")**
> The ability to comprehend time information from user inputs and identify which part of a video the user is referring to.

## Relationships

### → Temporal grounding ability
- **Temporal grounding** (behaviors tasks) — *causes*
  > We present a novel training strategy specifically designed to enhance the temporal localization abilities of Vid-LLMs... we fine-tune our Vid-LLM in the second stage on dense video captioning and temporal grounding tasks.
  - [SlowFocus: Enhancing Fine-grained Temporal Understanding in Video LLM](https://proceedings.neurips.cc/paper_files/paper/2024/file/94ef721705ea95d6981632be62bb66e2-Paper-Conference.pdf)

### Associated with
- **Dense video captioning** (behaviors tasks)
  > Video Temporal Grounding (VTG) is an important ability for video understanding models (Lin et al., 2023b), and has becoming the base of a series of downstream tasks like moment retrieval (Fabian Caba Heilbron & Niebles, 2015; Gao et al., 2017; Oncescu et al., 2021), dense video caption (Zhou et al., 2018; Tang et al., 2019), video highlight detection (Lei et al.; Liu et al., 2022), and video summarization (Song et al., 2015; Gygli et al., 2014).
  - [TRACE: Temporal Grounding Video LLM  via Causal Event Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/df027cf11469e746ef94d583f9f5537f-Paper-Conference.pdf)
