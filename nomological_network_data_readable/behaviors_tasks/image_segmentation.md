# Image segmentation
**Type:** Behavior  
**Referenced in:** 8 papers  
**Also known as:** Cultural artifact segmentation, Segmentation, Visual segmentation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats image segmentation as partitioning a digital image into multiple segments, sets of pixels, masks, or regions, usually to locate objects or boundaries. A smaller line of work defines success more narrowly through what must be delineated, such as a culturally significant object used to justify reasoning, flowchart components, or biological structures in microscopy images. As Seeing Culture: A Benchmark for Visual Reasoning and Grounding puts it, the objective can be to generate a mask that "delineates the area in I relevant to q," with polygons rather than bounding boxes used to capture intricate details.

**Variants.** Papers use several names for related variants, including cultural artifact segmentation, visual segmentation, and generic segmentation. The settings span instance segmentation, semantic segmentation, object masks for specific objects, and text-query-based mask generation for flowchart components; one tool-use formulation simply asks a model to "Do instance segmentation on the given image." Text4Seg: Reimagining Image Segmentation as Text Generation presents a smaller formulation that casts the task as text generation through a "text-as-mask" paradigm.

**Space of elicitation and scores.** One measurement instrument is linked to image segmentation: ADE20K, which a paper uses as an image segmentation task when comparing model performance. No other measurement instruments are linked.

**What it is taken as evidence of.** No constructs are linked to image segmentation, so the papers do not state what broader construct this behavior is taken to indicate.

## Sources

**[Seeing Culture: A Benchmark for Visual Reasoning and Grounding](https://aclanthology.org/2025.emnlp-main.1131.pdf) (as "Cultural artifact segmentation")**
> Generating a pixel-level mask that identifies the location of a culturally significant object in an image as justification for a reasoning step.

**[Follow the Flow: Fine-grained Flowchart Attribution with Neurosymbolic Agents](https://aclanthology.org/2025.emnlp-main.1144.pdf) (as "Segmentation")**
> Producing masks or regions that delineate flowchart components in an image.

**[LM-Searcher: Cross-domain Neural Architecture Search with LLMs via Unified Numerical Encoding](https://aclanthology.org/2025.emnlp-main.478.pdf)**
> The task of partitioning a digital image into multiple segments or sets of pixels, often to locate objects and boundaries.

**[Multi-modal Agent Tuning: Building a VLM-Driven Agent for Efficient Tool Usage](https://proceedings.iclr.cc/paper_files/paper/2025/file/238747e153a84f50b43fd50fa8504f33-Paper-Conference.pdf) (as "Visual segmentation")**
> The task of partitioning a digital image into multiple segments to simplify its representation or locate specific objects.

## Relationships

### Image segmentation →
- **ADE20K** (measurements) — *measured_by*
  > On top of the classification task, we compare the performance of the Segmenter models using DeiT and DeiT-Twicing backbones on the ADE20K (Zhou et al., 2019) image segmentation task to further validate the advantages of our proposed method (Section 4.1).
  - [Transformer Meets Twicing: Harnessing Unattended Residual Information](https://proceedings.iclr.cc/paper_files/paper/2025/file/90cdfb6ac8d9f96bdf0ce92f5f05c391-Paper-Conference.pdf)
