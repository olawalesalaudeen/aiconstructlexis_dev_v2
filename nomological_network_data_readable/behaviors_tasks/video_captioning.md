# Video captioning
**Type:** Behavior  
**Referenced in:** 29 papers  
**Also known as:** Video scripting, Clip summarization, Video description generation, Audio description generation, Video narration, Caption generation, Video description  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is free-form generation of natural-language text that describes a video's content or events. Most definitions stay broad, centering on textual descriptions or summaries of videos, while some ask for captions of segments or clips and others stress that the description should be accurate, comprehensive, or close to human-written captions. A smaller line of work frames the output as real-time narration of a stream or as verbal narration of visual elements for accessibility.

**Variants.** A smaller line of work names narrower variants: video scripting, clip summarization, video description generation, audio description generation, and video narration. In Vript: A Video Is Worth Thousands of Words, video scripting is explicitly structured, asking models to "describe: 1) the shot type ... 2) the camera movement ... 3) what is happening ... 4) Summarize the content to title the scene". Other papers move to time-stamped clips, anomalous events, accessibility-oriented narration, real-time streaming, or segment-level settings, and one paper further seeks captions that specify subjects, environment, motion, camera parameters, and style.

**Space of elicitation and scores.** Papers link video captioning to 5 measurement instruments. MSR-VTT is the most commonly linked, while LLM-as-a-judge, MM-ID, VATEX, and YouCook2 appear in smaller pockets of work; the recorded uses include zero-shot captioning on MSR-VTT and VATEX, captioning as one of MM-ID's four competency levels, GPT-4 scoring for caption generation, and evaluation on YouCook2. Across papers, these links mix evaluation resources and model-based scoring.

**What it is taken as evidence of.** Papers do not consistently treat video captioning as evidence of multiple constructs. Temporal reasoning is the only linked construct, and the recorded claim is a related link rather than a measurement claim, with one paper describing added training meant "to specifically enhance the model's temporal reasoning" in work on video captions. No other construct is linked by papers. Separately, one paper claims a causal relationship from video captioning to synthetic recall, arguing that more descriptive training data can improve models' performance.

## Sources

**[Vript: A Video Is Worth Thousands of Words](https://proceedings.neurips.cc/paper_files/paper/2024/file/6903a5aaece71b76623245fc6e32f01b-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The task of generating a textual description of the content of a video.

**[Vript: A Video Is Worth Thousands of Words](https://proceedings.neurips.cc/paper_files/paper/2024/file/6903a5aaece71b76623245fc6e32f01b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Video scripting")**
> Describing a video scene with structured details such as title, content, shot type, and camera movement.

**[ShareGPT4Video: Improving Video Understanding and Generation with Better Captions](https://proceedings.neurips.cc/paper_files/paper/2024/file/22a7476e4fd36818777c47e666f61a41-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Clip summarization")**
> The task of generating a summary caption for a specific time-stamped clip within a longer video, potentially by reusing pre-computed differential captions.

**[HAWK: Learning to Understand Open-World Video Anomalies](https://proceedings.neurips.cc/paper_files/paper/2024/file/fca83589e85cb061631b7ebc5db5d6bd-Paper-Conference.pdf) (as "Video description generation")**
> The task of generating a natural language text that describes the content of a video, with a specific focus on anomalous events.

**[CALVIN: Improved Contextual Video Captioning via Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/a922b7121007768f78f770c404415375-Paper-Conference.pdf) (as "Audio description generation")**
> The task of generating a verbal narration of the key visual elements in a video, intended to make content accessible to visually impaired individuals.

**[VideoLLM-MoD: Efficient Video-Language Streaming with Mixture-of-Depths Vision Computation](https://proceedings.neurips.cc/paper_files/paper/2024/file/c6a79e139ec4f371701ea8cc9e06018e-Paper-Conference.pdf) (as "Video narration")**
> The task of generating real-time, descriptive text that narrates the events occurring in a video stream.

**[Youku Dense Caption: A Large-scale Chinese Video Dense Caption Dataset and Benchmarks](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f3cbee17170c3ffff3e413d2df54f6b-Paper-Conference.pdf) (as "Caption generation")**
> The observable task of producing text descriptions that summarize or detail the content of video segments.

**[Is Your Video Language Model a Reliable Judge?](https://proceedings.iclr.cc/paper_files/paper/2025/file/dc4f891373d19087d1ddda33e81e00e4-Paper-Conference.pdf) (as "Video description")**
> Generating a textual description of the content of a video.

## Relationships

### Video captioning →
- **MSR-VTT** (measurements) — *measured_by*
  > We further perform zero-shot video captioning on MSR-VTT [75] and VATEX [62]. (Section 4.3)
  - [TOPA: Extending Large Language Models for Video Understanding via Text-Only Pre-Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ae94013da7cd459402fd77874e09ee3-Paper-Conference.pdf)
- **VATEX** (measurements) — *measured_by*
  > We further perform zero-shot video captioning on MSR-VTT [75] and VATEX [62]. (Section 4.3)
  - [TOPA: Extending Large Language Models for Video Understanding via Text-Only Pre-Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ae94013da7cd459402fd77874e09ee3-Paper-Conference.pdf)
- **MM-ID** (measurements) — *measured_by*
  > "MM-ID dissects LVLMs’ competency across four progressively complex levels: matching, location, question-answering, and captioning."
  - [IDA-VLM: Towards Movie Understanding via ID-Aware Large Vision-Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/82dcb6da1b408d59d15f68afdebf1489-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > "For question-answering and caption generation tasks... GPT-4 is used to score the results."
  - [IDA-VLM: Towards Movie Understanding via ID-Aware Large Vision-Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/82dcb6da1b408d59d15f68afdebf1489-Paper-Conference.pdf)
- **YouCook2** (measurements) — *measured_by*
  > We evaluate RACCOON on diverse video datasets across tasks, including video captioning (YouCook2 (Zhou et al., 2018a), VPLM)... (Section 4)
  - [RACCooN: Versatile Instructional Video Editing with Auto-Generated Narratives](https://aclanthology.org/2025.emnlp-main.1420.pdf)
