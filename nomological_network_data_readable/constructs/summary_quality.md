# Summary quality
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Summarization quality  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Papers split between two framings. One treats the construct as an overall judgment of how good a generated summary is, including informativeness and quality. Another uses an agent-centered framing: the ability to compress retrieved content into summaries that preserve salient, valid, and information-dense entities. The difference is mainly between overall summary quality and a more specific summarization ability tied to retrieved content.

**Space of facets.** These papers offer little shared internal taxonomy. One framing bundles informativeness into overall summary quality, while the other emphasizes preserving salient, valid, and information-dense entities when summarizing retrieved content. The labels "Summary quality" and "Summarization quality" are used for these differently scoped framings, and papers do not link the construct to other constructs as equivalent, broader, or contrasting concepts.

**Space of measurement.** Operationalization is narrow: papers link the construct to 1 measurement instrument and no behavioral indicators. The only linked instrument is Reddit TL;DR, used for a summarization quality task through Reddit posts from the TL;DR dataset, so the construct is operationalized with a dataset-based benchmark. No other instrument is linked, and the agent-centered framing is discussed without a separate linked measurement.

## Sources

**[Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)**
> The degree to which a generated summary is good overall as a summary, including its informativeness and quality.

**[RoleAgent: Building, Interacting, and Benchmarking High-quality Role-Playing Agents from Scripts](https://proceedings.neurips.cc/paper_files/paper/2024/file/5875aca1ef70285a35940afbbce0f9fb-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Summarization quality")**
> The degree to which an agent can compress retrieved content into summaries that preserve salient, valid, and information-dense entities.

## Relationships

### Summary quality →
- **Reddit TL;DR** (measurements) — *measured_by*
  > for the summarization quality task, we use Reddit posts from TL;DR dataset (Stiennon et al., 2020) and train uncalibrated and calibrated reward models on the train split. (Section 5.1)
  - [InfAlign: Inference-aware language model alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/balashankar25a/balashankar25a.pdf)
