# Long-context multimodal understanding
**Type:** Construct  
**Referenced in:** 7 papers  
**Also known as:** Long multimodal document comprehension, Long image-sequence understanding, Long-context visual processing, Long-document understanding, Long-range modeling  

## State of the Field

**Definition agreement:** Complementary. Most papers define this as a model-level ability to comprehend, integrate, and reason over long multimodal contexts, especially videos or long documents with interleaved text, images, tables, or charts. A few papers narrow the scope to extended or numerous visual inputs only, so the definitions look like compatible facets of the same long-context understanding capability rather than exactly the same definition.

**Space of definitions.** Across the surveyed work, the prevailing usage treats this as a model ability, often explicitly a latent ability, to process and comprehend multimodal information over long contexts. Most definitions keep that broad framing but instantiate it with different inputs: interleaved video and subtitles, long documents with text and images or with text, tables, charts, and images, and extended image sequences, sometimes with an added emphasis on reasoning or question answering over those contexts. A smaller framing narrows the scope to long-context visual processing, defined as using information from many visual inputs presented simultaneously, while another paper describes the same area as long-range modeling, emphasizing coherent understanding and performance across extended multimodal sequences.

**Space of facets.** Papers do not present a shared formal taxonomy, but they use several overlapping labels for nearby abilities: long multimodal document comprehension, long image-sequence understanding, long-context visual processing, long-document understanding, and long-range modeling. The main organizing axis is the form of the long context, such as interleaved video-language streams, multi-image or long-video sequences, and multi-page visually rich documents, alongside a difference in emphasis between comprehension and reasoning, question answering, and maintaining performance across long inputs. One paper also says it identifies two capabilities essential for long-context multimodal understanding, though the available evidence does not name them.

**Space of measurement.** Operationalization is concentrated in a small set of instruments: papers link the construct to 3 measurement instruments and no behavioral indicators. The named instruments are LongVideoBench, described as a question-answering benchmark with video-language interleaved inputs up to an hour long, MM-NIAH, described as a benchmark for systematically evaluating comprehension of long multimodal documents, and MMLongBench-Doc, used in a long-document evaluation setting alongside retrieval-accuracy comparisons. These measures align most directly with the video-language and long-document framings, while the vision-centric visual-processing framing is represented only indirectly by the linked instruments.

**Links.** Papers only connect the construct through measurement links: it is measured by LongVideoBench, MM-NIAH, and MMLongBench-Doc. No papers claim a causal relationship from it to another entity, report it as correlating with another entity, or mark it as otherwise related to another construct.

## Sources

**[LongVideoBench: A Benchmark for Long-context Interleaved Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/329ad516cf7a6ac306f29882e9c77558-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The ability of a model to process and comprehend long sequences of interleaved multimodal inputs, such as video frames and text subtitles, to perform complex reasoning tasks.

**[Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Long multimodal document comprehension")**
> The latent ability of a model to understand, integrate, and reason about information from long documents containing interleaved text and images.

**[mPLUG-Owl3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f50f282a3093d36471008b045bd478af-Paper-Conference.pdf) (as "Long image-sequence understanding")**
> The model's latent ability to process and comprehend information from extended sequences of images, such as those found in lengthy videos or multi-image documents.

**[Visual Haystacks: A Vision-Centric Needle-In-A-Haystack Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/a264726ebd222124514a32bf0143b83d-Paper-Conference.pdf) (as "Long-context visual processing")**
> The ability of a model to effectively process and utilize information from a large number of visual inputs presented simultaneously in its context window.

**[SV-RAG: LoRA-Contextualizing Adaptation of  MLLMs for Long Document Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d40c7b4d78bf7f08ba532542818f6c0-Paper-Conference.pdf) (as "Long-document understanding")**
> The latent ability to comprehend and answer questions about lengthy, multi-page documents containing mixed modalities such as text, tables, charts, and images.

**[Design Choices for Extending the Context Length of Visual Language Models](https://aclanthology.org/2025.acl-long.1603.pdf) (as "Long-range modeling")**
> The latent ability of a VLM to maintain coherent understanding and performance across extended sequences of multimodal inputs, particularly over long videos or interleaved images.

## Relationships

### Long-context multimodal understanding →
- **MM-NIAH** (measurements) — *measured_by*
  > In this work, we present Needle In A Multimodal Haystack (MM-NIAH), the first benchmark specifically designed to systematically evaluate the capability of existing MLLMs to comprehend long multimodal documents. (Abstract)
  - [Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf)
- **LongVideoBench** (measurements) — *measured_by*
  > To mitigate this gap, we introduce LONGVIDEOBENCH, a question-answering benchmark that features video-language interleaved inputs up to an hour long. Our benchmark includes 3,763 varying-length web-collected videos with their subtitles across diverse themes, designed to comprehensively evaluate LMMs on long-term multimodal understanding. (Abstract)
  - [LongVideoBench: A Benchmark for Long-context Interleaved Video-Language Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/329ad516cf7a6ac306f29882e9c77558-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MileBench** (measurements) — *measured_by*
  > And MileBench (Song et al., 2024) progressively challenging tasks with 2-109 images. These benchmarks systematically quantify long-context capabilities from both textual token and visual token perspectives. (Section 4.4)
  - [CoMemo: LVLMs Need Image Context with Image Memory](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bn/liu25bn.pdf)
