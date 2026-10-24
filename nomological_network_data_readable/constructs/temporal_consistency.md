# Temporal consistency
**Type:** Construct  
**Referenced in:** 7 papers  
**Also known as:** Temporal coherence  

## State of the Field

**Definition agreement:** Consensus. Most papers define temporal consistency as coherence and stability over time across consecutive video frames, such as smooth progression without flicker and stable subjects, backgrounds, objects, or masks. One paper uses the term for the logical and chronological flow of ideas in text latent representations, but that appears to be an outlier rather than a substantial alternative usage.

**Space of definitions.** Across papers, the prevailing usage treats temporal consistency, often called temporal coherence, as continuity over time in generated video: smooth progression across frames, logical flow of events and objects, and stable subjects or backgrounds without flicker or discontinuities. A smaller line of work defines it more narrowly for video segmentation outputs, as segmentation masks that remain stable and coherent across consecutive frames. One paper uses temporal coherence for text instead, describing article coherence as the logical and chronological flow of ideas across sentences and as temporal structure captured in latent representations.

**Space of facets.** Several papers use temporal consistency and temporal coherence for similar video-level continuity, but they apply the label to different targets. One evaluation framing separates consistency for the main subject and the background, another emphasizes logical progression and continuity across a large time range in time-lapse video, and one video object segmentation paper treats temporal consistency specifically as an output-side requirement, distinct from the input-side need to capture temporal dynamics. The same name is therefore used for whole-video progression, object and event flow, segmentation-mask stability, and, in one paper, document-level coherence.

**Space of measurement.** Operationalization is narrow in the recorded links: papers link this construct to 1 measurement instrument, Human evaluation, and 1 behavioral indicator, Video object segmentation. The linked instrument is a human evaluation setup, with one paper reporting comprehensive manual evaluations across prompt categories. Source snippets also describe score-based operationalizations, including CHScore assessing temporal coherence, Flow-score (FScore) for temporal consistency, and a Consistency dimension for main subject and background; these align with the video-based definitions, while the segmentation-mask and article-coherence uses point to different targets than the recorded measurement link.

**Links.** The only non-measurement relationship recorded is a related link to Video object segmentation: one paper describes temporally consistent segmentation masks across frames as part of that task's output-side requirement. No papers in the recorded relationships claim causal or correlational links for this construct.

## Sources

**[ChronoMagic-Bench: A Benchmark for Metamorphic Evaluation of Text-to-Time-lapse Video Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/25b9960c8a5bd887eb5476c951260403-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Temporal coherence")**
> The extent to which a generated video maintains smooth, logically continuous progression across frames without flicker or discontinuities.

**[One Token to Seg Them All: Language Instructed Reasoning Segmentation in Videos](https://proceedings.neurips.cc/paper_files/paper/2024/file/0cf3e7eefb9d643e93e16ff1d94090a7-Paper-Conference.pdf)**
> The quality of producing segmentation masks for an object that are stable and coherent across consecutive video frames.

## Relationships

### Associated with
- **Video object segmentation** (behaviors tasks)
  > VOS requires models to 1) on the input side, capture and comprehend the temporal dynamics present in the video; and 2) on the output side, predict temporally consistent segmentation masks across frames. (Section 1)
  - [One Token to Seg Them All: Language Instructed Reasoning Segmentation in Videos](https://proceedings.neurips.cc/paper_files/paper/2024/file/0cf3e7eefb9d643e93e16ff1d94090a7-Paper-Conference.pdf)
