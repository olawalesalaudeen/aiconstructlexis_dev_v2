# Visual information retrieval
**Type:** Behavior  
**Referenced in:** 10 papers  
**Also known as:** Object recall, Scene recall, Sequence recall, Start/end position identification, Needle retrieval, Long video retrieval  

## State of the Field

**Space of definitions.** Across the papers, the behavior is used for retrieving or recalling specific visual information from sequences of images or videos. Some authors frame it as long-context retrieval, locating a target object, image, frame, or other inserted information within a long sequence and answering a corresponding question, for example, "For the image with the anchor object, is there a target object?", and one definition explicitly says this requires precise attention and memory over extended inputs. Other authors operationalize it as recall from video observations, where success means identifying the next or previous step in an action sequence, naming an object near a landmark, describing the scene at a particular moment, or determining an agent's start and end positions.

**Variants.** Papers study several named variants, including needle retrieval and long video retrieval. These settings ask for a correct inserted image, target frame, or queried piece of information from deep in a long video, sometimes with varying background lengths or needle depths, and one extension adds distractor frames. Another formulation breaks the task into sequence recall, object recall, scene recall, and start/end position identification in video scenes.

**Space of elicitation and scores.** Papers link this behavior to 2 measurement instruments. The more frequently linked instrument is Needle-in-a-Haystack, followed by V-NIAH; both are presented as retrieval tasks, with Needle-in-a-Haystack inserting needles at various positions in the context and asking the model to retrieve them, and V-NIAH used for long video retrieval, including an extension that introduces distractor frames. One Needle-in-a-Haystack setting says the model should perfectly retrieve at least two inserted needles.

**What it is taken as evidence of.** No construct is linked to this behavior, so the papers do not specify a broader construct that it is taken to indicate.

## Sources

**[UrbanVideo-Bench: Benchmarking Vision-Language Models on Embodied Intelligence with Video Data in Urban Spaces](https://aclanthology.org/2025.acl-long.1558.pdf) (as "Sequence recall")**
> Identifying the next or previous step in a sequence of actions based on visual observations in a video.

**[UrbanVideo-Bench: Benchmarking Vision-Language Models on Embodied Intelligence with Video Data in Urban Spaces](https://aclanthology.org/2025.acl-long.1558.pdf) (as "Object recall")**
> Identifying objects located near a specified landmark or reference point in a video scene.

**[UrbanVideo-Bench: Benchmarking Vision-Language Models on Embodied Intelligence with Video Data in Urban Spaces](https://aclanthology.org/2025.acl-long.1558.pdf) (as "Scene recall")**
> The observable task of describing details of a scene that an agent observes during a specific action or moment in a video.

**[UrbanVideo-Bench: Benchmarking Vision-Language Models on Embodied Intelligence with Video Data in Urban Spaces](https://aclanthology.org/2025.acl-long.1558.pdf) (as "Start/end position identification")**
> Determining the initial and final locations of an agent's movement trajectory from video observations.

**[Design Choices for Extending the Context Length of Visual Language Models](https://aclanthology.org/2025.acl-long.1603.pdf)**
> Locating and identifying specific visual content (e.g., an object) within a long sequence of images, requiring precise attention and memory over extended inputs.

**[LongVILA: Scaling Long-Context Visual Language Models for Long Videos](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e163450c1ae3167832971e6da29f38d-Paper-Conference.pdf) (as "Needle retrieval")**
> Identifying and retrieving the correct inserted image or information from deep within a long video sequence.

**[VideoRoPE: What Makes for Good Video Rotary Position Embedding?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25h/wei25h.pdf) (as "Long video retrieval")**
> The observable task of locating and extracting a specific piece of information from a long video input based on a query.

## Relationships

### Visual information retrieval →
- **V-NIAH** (measurements) — *measured_by*
  > For long video retrieval, we use Vision Needle-in-a-Haystack (V-NIAH) (Zhang et al., 2024d) and our proposed extension, Vision Needle-in-a-Haystack with Distractors (V-NIAH-D), which introduces distractor frames to increase the task difﬁculty. (Section 5.1)
  - [VideoRoPE: What Makes for Good Video Rotary Position Embedding?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25h/wei25h.pdf)
