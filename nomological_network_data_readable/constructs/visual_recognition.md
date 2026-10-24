# Visual recognition
**Type:** Construct  
**Referenced in:** 11 papers  
**Also known as:** Novel concept recognition, Object existence determination  

## State of the Field

**Definition agreement:** Consensus. Most papers define visual recognition as the model's ability to identify visual objects, elements, or concepts in an image. A few papers narrow this to particular settings such as landmarks, presence or absence of a specified object, or previously unseen concepts, and one adds relationships among elements, but these are still treated as variants of the same underlying recognition ability rather than different phenomena.

**Space of definitions.** Across papers, the prevailing usage describes visual recognition as a model capability for identifying or classifying objects, text, landmarks, and other visual elements in an image, and some definitions add describing those elements and their relationships. Several papers present it as a latent or general capability used before solving a task or tie it to simple descriptions of visual elements. The main disagreement is about scope: most papers use this broad recognition framing, while smaller lines of work narrow it to recognizing novel concepts not seen in pre-training or to determining whether a specified object is present or absent.

**Space of facets.** Papers use the term both broadly and as a bounded component. One paper gives visual grounding as an example of recognition and treats visual recognition as one function alongside visual understanding, while another contrasts it with visual perception, saying perception extends beyond recognition by interpreting and contextualizing scene elements. Narrower labels also appear within this space, especially novel concept recognition and object existence determination, and one paper additionally uses visual recognition as a category of common failures.

**Space of measurement.** Papers link visual recognition to 3 measurement instruments and 2 behavioral indicators. The named instruments are AMBER, FGVC, and VTAB-1k, all presented as benchmarks, and the related behavioral indicators are object detection and referring expression segmentation. These operationalizations mostly match the prevailing definition by testing whether models recognize or classify visual elements, and some papers make this explicit through recognition accuracy on cards or landmarks, while narrower uses focus on novel concepts or on object presence versus absence.

**Links.** Papers report related and causal links. One paper says visual recognition is related to visual grounding, object detection, and referring expression segmentation, and another relates it to visual perception, which it describes as extending beyond recognition. One paper also claims a causal relationship from visual recognition to visual understanding, stating that recognition can benefit understanding tasks; no correlational links are reported.

## Sources

**[WildVision: Evaluating Vision-Language Models in the Wild with Human Preferences](https://proceedings.neurips.cc/paper_files/paper/2024/file/563991b5c8b45fe75bea42db738223b2-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The general ability to identify and classify objects, text, and other elements within an image.

**[Contrastive Visual Data Augmentation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25h/zhou25h.pdf) (as "Novel concept recognition")**
> The ability of a model to correctly identify and understand visual concepts it has not encountered during its pre-training.

**[Evaluating and Mitigating Object Hallucination in Large Vision-Language Models: Can They Still See Removed Objects?](https://aclanthology.org/2025.naacl-long.349.pdf) (as "Object existence determination")**
> The model's latent capability to correctly identify whether a specified object is present or absent in a given image.

## Relationships

### Visual recognition →
- **Visual understanding** (constructs) — *causes*
  > visual recognition is potential to benefit all understanding tasks as recognition results are important compositions for understanding. (Section 1)
  - [Octopus: A Multi-modal LLM with Parallel Recognition and Sequential Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a3eadeebbc9eecd621086f6978865a85-Paper-Conference.pdf)
- **AMBER** (measurements) — *measured_by*
  > The models are tested across seven benchmarks: AMBER (visual recognition)... (Section 3)
  - [Visual Description Grounding Reduces Hallucinations and Boosts Reasoning in LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6805b5564bd8d813a81c4b5a97e5ca6-Paper-Conference.pdf)
- **FGVC** (measurements) — *measured_by*
  > We evaluate WeGeFT on the VTAB-1k benchmark (Zhai et al., 2019) and the fine-grained visual classification (FGVC) benchmark...
  - [WeGeFT: Weight-Generative Fine-Tuning for Multi-Faceted Efficient Adaptation of Large Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/savadikar25a/savadikar25a.pdf)

### Associated with
- **Visual grounding** (constructs)
  > A mainstream of Multi-modal Large Language Models (MLLMs) have two essential functions, i.e., visual recognition (e.g., grounding) and understanding (e.g., visual question answering). (Abstract)
  - [Octopus: A Multi-modal LLM with Parallel Recognition and Sequential Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a3eadeebbc9eecd621086f6978865a85-Paper-Conference.pdf)
- **Object detection** (behaviors tasks)
  > Prior MLLMs [1, 2, 21] solve traditional visual recognition tasks (e.g., object detection, instance segmentation) in a sequential generation paradigm. (Section 3.1)
  - [Octopus: A Multi-modal LLM with Parallel Recognition and Sequential Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a3eadeebbc9eecd621086f6978865a85-Paper-Conference.pdf)
- **Referring expression segmentation** (behaviors tasks)
  > In addition to detection, Octopus is potential to acquire a broader range of recognition abilities, taking advantage of the versatility of the DETR mechanism. Hereby, we endow Octopus with the referring segmentation ability by modifying its object queries into “mask” queries... (Appendix B)
  - [Octopus: A Multi-modal LLM with Parallel Recognition and Sequential Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a3eadeebbc9eecd621086f6978865a85-Paper-Conference.pdf)
- **Visual perception** (constructs)
  > Visual Perception (VP) extends beyond VR by interpreting and contextualizing these elements within the broader scene (Fu et al., 2024), essential for tasks requiring more than basic recognition. (Section 3)
  - [Visual Description Grounding Reduces Hallucinations and Boosts Reasoning in LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6805b5564bd8d813a81c4b5a97e5ca6-Paper-Conference.pdf)
