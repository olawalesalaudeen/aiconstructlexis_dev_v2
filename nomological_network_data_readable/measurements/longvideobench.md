# LongVideoBench
**Type:** Measurement  
**Referenced in:** 18 papers  
**Also known as:** LongVideo-Bench  

## State of the Field

**What it is.** Across papers, LongVideoBench is most commonly described as a benchmark or dataset for long video or long-context video-language understanding, usually framed as video question answering on very long inputs, sometimes explicitly hour-long. The most specific description presents it as a question-answering benchmark with interleaved video-language inputs up to an hour long, containing 3,763 web-collected videos with subtitles and 6,678 human-annotated multiple-choice questions in 17 fine-grained categories. A smaller group of papers characterizes it more narrowly as a referred reasoning benchmark, and one paper uses the variant name "LongVideo-Bench".

**What it is claimed to measure.** Papers use LongVideoBench to measure 5 constructs and 2 behavioral indicators, so the reported use spreads across several closely related targets rather than a single one. The most common construct link is video understanding, followed by long video understanding, long-context multimodal understanding, long-context understanding, and multimodal understanding. Papers also use it to measure video question answering and visual question answering, and some descriptions make this more specific by calling it a benchmark for referring reasoning questions that depend on long frame inputs.

**Space of uses.** In use, papers usually place LongVideoBench inside broader video benchmark suites rather than as a standalone check, often alongside MLVU, VideoMME, EgoSchema, MVBench, and TempCompass. Several papers position it specifically as their long-form or long video evaluation, and report results on it as accuracy or gains, including 60.0% accuracy, 61.2% accuracy, relative improvements, and percentage-point gains.

## Sources

**[Understanding Long Videos with Multimodal Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f591824a3bd840f74947fcda304c945-Paper-Conference.pdf)**
> A dataset containing very long videos used to evaluate video question answering models.

**[Exploring the Design Space of Visual Context Representation in Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/24e2320097bdf179e2b2719c6df2f448-Paper-Conference.pdf) (as "LongVideo-Bench")**
> A benchmark dataset used to evaluate model performance on long video understanding tasks.

## Relationships

### → LongVideoBench
- **Long video understanding** (constructs) — *measured_by*
  > For long video understanding, we use LongVideoBench (Wu et al., 2024a) (8 seconds to 1 hour), MLVU (Zhou et al., 2024) (3 minutes to 2 hours), and Video-MME (Fu et al., 2024) (11 seconds to 60 minutes). (Section 5.1)
  - [VideoRoPE: What Makes for Good Video Rotary Position Embedding?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25h/wei25h.pdf)
- **Video understanding** (constructs) — *measured_by*
  > We also evaluate the performance of mPLUG-Owl3 on video and multi-image benchmarks (including NextQA (Xiao et al., 2021), MVBench (Li et al., 2023c) VideoMME (Fu et al., 2024a), LongVideoBench (Wu et al., 2024) and MLVU (Zhou et al., 2024)), as it is capable of processing multiple images with an interleaved format.
  - [mPLUG-Owl3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f50f282a3093d36471008b045bd478af-Paper-Conference.pdf)
- **Long-context multimodal understanding** (constructs) — *measured_by*
  > To mitigate this gap, we introduce LONGVIDEOBENCH, a question-answering benchmark that features video-language interleaved inputs up to an hour long. Our benchmark includes 3,763 varying-length web-collected videos with their subtitles across diverse themes, designed to comprehensively evaluate LMMs on long-term multimodal understanding. (Abstract)
  - [LongVideoBench: A Benchmark for Long-context Interleaved Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/329ad516cf7a6ac306f29882e9c77558-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Video question answering** (behaviors tasks) — *measured_by*
  > We also evaluate MVU on the LongVideoBench dataset which contains even longer videos (Section 5.1)
  - [Understanding Long Videos with Multimodal Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f591824a3bd840f74947fcda304c945-Paper-Conference.pdf)
