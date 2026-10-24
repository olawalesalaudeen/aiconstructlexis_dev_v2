# Knowledge storage
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Information storage, Knowledge storage capacity  

## State of the Field

**Definition agreement:** Consensus. Most papers define knowledge storage as factual information being encoded and retained in a model's parameters or weights, often as a latent internal mechanism or parametric memory. One paper emphasizes measuring how much of that factual information can be stored and later retrieved, but this is a quantification of the same parameter-based storage property rather than a different construct.

**Space of definitions.** Across the papers, the prevailing usage treats knowledge storage as a latent, internal mechanism or property of a model's parameters or weights: it is described as how factual information is encoded and retained within the model, including facts from pre-training stored in its 'parametric' memory. A smaller line of work uses a narrower quantitative framing, knowledge storage capacity, defined as the amount of factual information, measured in bits, that a model can store in its parameters and later retrieve. The main difference across definitions is therefore between a mechanistic account of how information is stored and a capacity account of how much can be stored and retrieved.

**Space of facets.** Papers use closely related names for overlapping ideas: 'information storage' is used for the same general phenomenon and is explicitly equated with a model's 'parametric' memory. One paper uses the name knowledge storage capacity for a quantitative version of the idea, focusing on retrievable factual information in bits rather than the storage mechanism itself. Another paper separates knowledge storage from 'more complicated computations', saying shallow layers likely play a critical role in storing knowledge and retrieving information, while deeper layers are useful for those computations.

**Space of measurement.** Operationalization is sparse: papers link knowledge storage to 1 measurement instrument, MMLU, and to 1 behavioral indicator, Hallucination, with no linked constructs. The only recorded instrument is MMLU, described as a world-knowledge and problem solving benchmark used for question answering evaluations, so the measured_by link operationalizes knowledge storage through benchmark performance. This differs from most definitions, which describe internal storage mechanisms in parameters or weights, and from the quantitative capacity framing in bits.

**Links.** Beyond measurement, one paper relates Hallucination to Knowledge storage, commenting that problems such as hallucinations are exacerbated by the 'enigmatic internal mechanisms of knowledge storage'. No causal or correlational links are recorded.

## Sources

**[Knowledge Circuits in Pretrained Transformers](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6df31b1be98e04be48af8bedb95b499-Paper-Conference.pdf)**
> The internal mechanisms and structures by which a language model encodes and retains information within its parameters.

**[Understanding Information Storage and Transfer in Multi-Modal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0dfe31d6e703e138d46a7d2fced38b7c-Paper-Conference.pdf) (as "Information storage")**
> The latent mechanism by which factual information from a pre-training dataset is encoded and retained within a model's parameters, also referred to as its parametric memory.

**[Physics of Language Models: Part 3.3, Knowledge Capacity Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/26d3c9a66836ded8f34a944f2bfe868e-Paper-Conference.pdf) (as "Knowledge storage capacity")**
> The amount of factual information, measured in bits, that a language model can store in its parameters and later retrieve.

## Relationships

### Associated with
- **Hallucination** (behaviors tasks)
  > They still struggle with issues such as hallucinations [5–7]... and these problems are exacerbated by the enigmatic internal mechanisms of knowledge storage within language models. (Introduction)
  - [Knowledge Circuits in Pretrained Transformers](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6df31b1be98e04be48af8bedb95b499-Paper-Conference.pdf)
