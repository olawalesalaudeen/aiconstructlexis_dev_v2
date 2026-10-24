# Video detailed captioning
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Video detailed description  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is generating comprehensive and coherent textual descriptions of video content, often as long-form or summary-style outputs. Definitions agree that the description should cover more than primary actions and objects: one paper says it should capture "intricate details, contextual nuances, and temporal dynamics" (AuroraCap: Efficient, Performant Video Detailed Captioning and a New Benchmark), while another describes summaries that capture characters, actions, settings, and narrative elements. Across definitions, the desired output is repeatedly described as comprehensive and coherent.

**Variants.** Papers use both "video detailed captioning" and "video detailed description" for closely matched task formulations. The emphasized content differs across definitions, with some descriptions foregrounding actions, objects, context, and temporal dynamics, and others foregrounding characters, settings, and narrative elements. One example prompt is simply "Describe the video in detail," and the illustrated response begins, "The video begins with a scene featuring two animated characters..." (LongVU: Spatiotemporal Adaptive Compression for Long Video-Language Understanding).

**Space of elicitation and scores.** The papers do not link this behavior to any measurement instrument, so there is no recorded instrument-based elicitation or scoring pattern here. The available descriptions instead present it directly as a generation task that asks for detailed written video descriptions.

**What it is taken as evidence of.** At the construct level, papers link it only to video understanding, and the recorded relation is "related" rather than a measurement, correlation, or causal claim. One paper states that detailed captioning benefits video understanding, so video understanding is the only construct named in the recorded links. One paper also reports that hallucination is related to video detailed captioning, noting that generating all captions in a single conversation round often introduces hallucinations in the detailed captions.

## Sources

**[AuroraCap: Efficient, Performant Video Detailed Captioning and a New Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aebc17b683792a17dd4a24fcb038ba6-Paper-Conference.pdf)**
> The task of generating comprehensive, coherent, and long-form textual descriptions of video content, including actions, objects, context, and temporal dynamics.

**[LongVU: Spatiotemporal Adaptive Compression for Long Video-Language Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25j/shen25j.pdf) (as "Video detailed description")**
> Producing comprehensive, coherent textual summaries of video content, capturing characters, actions, settings, and narrative elements.

## Relationships

### Associated with
- **Video understanding** (constructs)
  > Video detailed captioning is a key task which aims to generate comprehensive and coherent textual descriptions of video content, benefiting both video understanding and generation. (Abstract)
  - [AuroraCap: Efficient, Performant Video Detailed Captioning and a New Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aebc17b683792a17dd4a24fcb038ba6-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks)
  > We observed that generating all captions in a single conversation round often introduces hallucinations in the detailed captions. (Section 3.1.2)
  - [AuroraCap: Efficient, Performant Video Detailed Captioning and a New Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aebc17b683792a17dd4a24fcb038ba6-Paper-Conference.pdf)
