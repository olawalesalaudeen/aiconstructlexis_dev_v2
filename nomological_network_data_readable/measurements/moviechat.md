# MovieChat
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Moviechat, MovieChat-1K  

## State of the Field

**What it is.** Papers most commonly treat MovieChat, often named MovieChat-1K, as a long video or long-form video understanding benchmark built from movie clips. Definitions vary slightly between calling it a dataset and a benchmark: one describes 1,000 movie clips with an average duration of 9.4 minutes and 14K annotations, while several others describe roughly 10-minute movie clips. A smaller description emphasizes question-answer pairs about movies, and another adds two evaluation modes, a global mode for overall long-term understanding and a breakpoint mode for detailed analysis of specific moments.

**What it is claimed to measure.** Papers use MovieChat to evaluate long-form or long video understanding rather than to measure a named construct. It is described as evaluating long-form video understanding, overall long-term understanding in a global mode, and detailed analysis of specific moments in breakpoint mode. No papers explicitly link it to any construct or behavioral indicator.

**Space of uses.** In use, papers position MovieChat as one of the long video benchmarks for model evaluation, sometimes alongside EgoSchema and MovieNet-QA. One paper reports evaluations on more challenging long video scenarios using MovieChat-1K and EgoSchema, and another reports results separately for the benchmark's global and breakpoint modes.

## Sources

**[InfiniBench: A Benchmark for Large Multi-Modal Models in Long-Form Movies and TV Shows](https://aclanthology.org/2025.emnlp-main.984.pdf) (as "Moviechat")**
> A dataset for long-form video understanding featuring 1,000 movie clips with an average duration of 9.4 minutes and 14K annotations.

**[LongVideoBench: A Benchmark for Long-context Interleaved Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/329ad516cf7a6ac306f29882e9c77558-Paper-Datasets_and_Benchmarks_Track.pdf) (as "MovieChat-1K")**
> A benchmark focused on long video understanding using 10-minute-long movie clips.
