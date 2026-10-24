# MovieLens
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Papers most commonly treat MovieLens as a benchmark dataset for recommendation systems research, centered on user movie ratings and often described as including movie metadata. Across the definitions, it is used in movie recommendation settings and, in some papers, also includes user demographics and covers; one paper specifies that the dataset includes 86K movies, 0.3M users, and 3.3M ratings.

**What it is claimed to measure.** Across these papers, MovieLens is used as an evaluation dataset for recommendation tasks, including sequential recommendation, query modification in LLM-based recommenders, dynamic recommender simulation, and personalized cover generation. Papers do not explicitly link it to any constructs or behavioral indicators, so they present it as a task benchmark rather than as measuring a named construct.

**Space of uses.** Papers usually position MovieLens as one dataset in a broader evaluation suite. It is used alongside LastFM and Steam in sequential recommendation experiments, alongside LastFM for LLM4Rec evaluation, alongside Google Local and AmazonBook in simulation-platform experiments, and as one of two public datasets for short-video and movie recommendation scenarios in personalized cover generation.

## Sources

**[Customizing Language Models with Instance-wise LoRA for Sequential Recommendation](https://proceedings.neurips.cc/paper_files/paper/2024/file/cd476d01692c508ddf1cb43c6279a704-Paper-Conference.pdf)**
> A widely used benchmark dataset in recommendation systems research, containing user ratings and metadata for movies.

## Relationships

### → MovieLens
- **Generalization** (constructs) — *measured_by*
  > “To validate the generalization ability of iLoRA, we conducted extensive experiments on three datasets derived from real-world recommendation scenarios: LastFM, MovieLens, and Steam”
  - [Customizing Language Models with Instance-wise LoRA for Sequential Recommendation](https://proceedings.neurips.cc/paper_files/paper/2024/file/cd476d01692c508ddf1cb43c6279a704-Paper-Conference.pdf)
