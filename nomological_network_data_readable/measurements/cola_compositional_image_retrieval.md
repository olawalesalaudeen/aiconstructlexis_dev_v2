# Cola (compositional image retrieval)
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** Cola, COLA  

## State of the Field

**What it is.** Across the definitions, Cola is most commonly described as a compositional text-to-image retrieval benchmark: papers say it assesses compositional ability or compositional reasoning by retrieving the correct image for captions about relations between entities, or for specific configurations of attributes and objects, from candidates that include distractors. One paper makes the procedure explicit by saying it computes a perplexity score between a caption and all candidate images and predicts the image with lower perplexity. A minority usage applies the name COLA to the Corpus of Linguistic Acceptability, a dataset for judging whether English sentences are grammatically acceptable.

**What it is claimed to measure.** Although the definitions mostly frame it as compositional retrieval, papers link it to 3 constructs and 2 behavioral indicators, so the reported measurement claims span several targets rather than converging on one. The most common construct link is Natural language understanding, while papers also use it to measure Compositional reasoning and, less often, General ability; among behavioral indicators, Grammatical acceptability judgment is the most common link, with Text classification appearing as another use. In the compositional framing, papers describe it as evaluating caption-image matching for relations between entities or retrieval of images with the correct attribute-object configuration.

**Space of uses.** The only linked instrument is GLUE: one paper says Cola is related to GLUE by listing CoLA among six GLUE datasets, and another records GLUE as measured by it. In compositional-evaluation papers, it is used alongside Valse and Winoground, described in one snippet as older composition benchmarks. Another paper operationalizes the task by scoring candidate images against a caption with perplexity and selecting the lower-perplexity image.

## Sources

**[CoVLM: Composing Visual Entities and Relationships in Large Language Models Via Communicative Decoding](https://proceedings.iclr.cc/paper_files/paper/2024/file/47561f5e1dc53c7d119185e217b523d0-Paper-Conference.pdf) (as "Cola")**
> Text-to-image retrieval benchmark that assesses compositional ability by matching captions describing relations between entities to correct images.

**[ConMe: Rethinking Evaluation of Compositional Reasoning for Modern VLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/28aad3b3b315d86910d7f4ee2867dfa4-Paper-Datasets_and_Benchmarks_Track.pdf) (as "COLA")**
> A benchmark that evaluates compositional reasoning by tasking a VLM with retrieving correct images based on specific configurations of attributes and objects from a database containing distractor images.

## Relationships

### → Cola (compositional image retrieval)
- **Compositional reasoning** (constructs) — *measured_by*
  > We first evaluate our CoVLM on compositional reasoning tasks, including... matching the correct captions describing the relation between two images with similar entities (Cola, (Ray et al., 2023))... (Section 4.1)
  - [CoVLM: Composing Visual Entities and Relationships in Large Language Models Via Communicative Decoding](https://proceedings.iclr.cc/paper_files/paper/2024/file/47561f5e1dc53c7d119185e217b523d0-Paper-Conference.pdf)
