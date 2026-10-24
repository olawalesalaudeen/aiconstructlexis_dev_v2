# Visual7W
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Most commonly, papers treat Visual7W as a visual question answering benchmark or reference dataset. Some descriptions add that it is predominantly designed for VQA but includes a dedicated grounded VQA subset, where models select the correct bounding box for a "which"-type question, while another definition highlights object-level grounding annotations that link answers to specific image regions. One evaluation description also characterizes its samples as multiple-choice questions paired with a related image.

**What it is claimed to measure.** Across the papers, its measurement claims center on one construct and one behavioral indicator rather than many targets. Papers use Visual7W to measure Visual grounding, including one account that places it among the "typical datasets" for tasks that establish referential links between textual mentions and image regions, and they also use it to measure Multimodal question answering through multimodal multiple-choice question-image evaluation.

**Space of uses.** Papers position Visual7W as a reference dataset and evaluation benchmark. Papers do not otherwise link it directly to another measurement instrument, but evaluation setups place it alongside RefCOCO, RefCOCO+, RefCOCOg, and VMCBench; one study says the visual grounding suite includes Visual7W "to ensure completeness" (CogVLM: Visual Expert for Pretrained Language Models).

## Sources

**[R2-T2: Re-Routing in Test-Time for Multimodal Mixture-of-Experts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bc/li25bc.pdf)**
> Visual7W, a visual question answering benchmark used as a reference dataset in the paper.

## Relationships

### → Visual7W
- **Visual grounding** (constructs) — *measured_by*
  > Visual Grounding. Visual grounding involves a set of tasks that establish referential links between textual mentions in a sentence and specific regions in an image. We evaluate our model on the typical datasets, including Visual7w [Zhu et al., 2016], RefCOCO [Liu et al., 2017], RefCOCO+, and RefCOCOg to ensure completeness. (Section 3)
  - [CogVLM: Visual Expert for Pretrained Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/dc06d4d2792265fb5454a6092bfd5c6a-Paper-Conference.pdf)
- **Multimodal question answering** (behaviors tasks) — *measured_by*
  > For evaluation, Visual7W (Zhu et al., 2016) and VMCBench (Zhang et al., 2025b) datasets are employed, which both consist of multimodal samples each containing a multiple-choice question paired with a related image.
  - [A Stronger Mixture of Low-Rank Experts for Fine-Tuning Foundation Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25s/sun25s.pdf)
