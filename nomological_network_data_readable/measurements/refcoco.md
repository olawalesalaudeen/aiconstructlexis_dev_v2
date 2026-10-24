# RefCOCO
**Type:** Measurement  
**Referenced in:** 36 papers  
**Also known as:** refcoco, refCOCO  

## State of the Field

**What it is.** Across the surveyed work, the prevailing description is a benchmark or dataset for visual grounding and referring expression comprehension: models must locate the object named by a natural-language referring expression in an image, often by predicting a bounding box from image-text input. Several definitions call it a visual grounding dataset or a referring expression comprehension benchmark, and one paper describes it as assessing localization together with fine-grained spatial and semantic relationships. A smaller group of papers instead treats RefCOCO as a referring expression segmentation benchmark, evaluating localization at the pixel level, and papers often mention it together with RefCOCO+ and RefCOCOg.

**What it is claimed to measure.** Across papers, RefCOCO is linked to two constructs and three behavioral indicators. The most common measurement claims are visual grounding and referring expression understanding; papers also use it for referring expression segmentation, and only isolated papers use it for object localization or spatial reasoning. Across these uses, the recurring task is locating a referred object or region from language in an image.

**Space of uses.** Most papers position RefCOCO as a standard or well-established benchmark, usually in the RefCOCO series with RefCOCO+ and RefCOCOg. Depending on the task framing, papers report accuracy for referring expression comprehension, IoU-based metrics for grounding, and cIoU for referring expression segmentation. Some papers also evaluate it alongside other datasets such as RefCLEF, Visual7w, or GQA.

## Sources

**[Ferret: Refer and Ground Anything Anywhere at Any Granularity](https://proceedings.iclr.cc/paper_files/paper/2024/file/fd6613131889a4b656206c50a8bd7790-Paper-Conference.pdf)**
> Visual grounding dataset evaluating a model's ability to localize objects based on referring expressions in images.

**[LG-VQ: Language-Guided Codebook Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf) (as "refcoco")**
> A referring-expression grounding dataset used here to evaluate prediction of object bounding boxes from image-text inputs.

**[OMG-LLaVA: Bridging Image-level, Object-level, Pixel-level Reasoning and Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/83eb86be3e2f9fd66c44d9073c51ba4d-Paper-Conference.pdf) (as "refCOCO")**
> A referring expression segmentation benchmark that evaluates whether a model can localize the object described by a natural-language expression in an image.

## Relationships

### → RefCOCO
- **Visual grounding** (constructs) — *measured_by*
  > Visual Grounding. Visual grounding involves a set of tasks that establish referential links between textual mentions in a sentence and specific regions in an image. We evaluate our model on the typical datasets, including Visual7w [Zhu et al., 2016], RefCOCO [Liu et al., 2017], RefCOCO+, and RefCOCOg to ensure completeness. (Section 3)
  - [CogVLM: Visual Expert for Pretrained Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/dc06d4d2792265fb5454a6092bfd5c6a-Paper-Conference.pdf)
- **Referring expression understanding** (behaviors tasks) — *measured_by*
  > Initially, we demonstrate our models’ effectiveness in learning neural modules on two established benchmarks: GQA (Hudson & Manning, 2019), focusing on compositional visual question answering, and RefCOCO (Kazemzadeh et al., 2014), which assesses referring expression comprehension. (Section 4)
  - [GENOME: Generative Neuro-Symbolic Visual Reasoning by Growing and Reusing Modules](https://proceedings.iclr.cc/paper_files/paper/2024/file/088d99765bc121c6df215da7d45bc4e9-Paper-Conference.pdf)
- **Referring expression segmentation** (behaviors tasks) — *measured_by*
  > Table 2 presents the results of referring image segmentation on three datasets: RefCOCO [40], RefCOCO+ [123] and RefCOCOg [68].
  - [Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf)
- **Spatial reasoning** (constructs) — *measured_by*
  > Task Name: RefCOCO, Domain(s): Spatial (Table 1)
  - [ReMI: A Dataset for Reasoning with Multiple Images](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ea56c0baacac9f7764257a43a93c90a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Object localization** (behaviors tasks) — *measured_by*
  > Benchmarks that involve spatial understanding and fine-grained features include object localization (RefCOCO, OCID-Ref; Kazemzadeh et al. 2014; Wang et al. 2021)... (Section 5)
  - [Locality Alignment Improves Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce6326ac4794bb04d5eb16f597446baf-Paper-Conference.pdf)
