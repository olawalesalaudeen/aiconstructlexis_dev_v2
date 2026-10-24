# NLVR2
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across the papers, the prevailing description treats NLVR2 as an extension of the NLVR dataset built from pairs of real-world photographs and natural language statements, used to test visual reasoning. A compatible framing presents it as a benchmark for evaluating reasoning over paired visual inputs and related language statements, and some papers refer to it simply as a dataset for visual reasoning.

**What it is claimed to measure.** Papers use NLVR2 to measure three constructs: Multi-image reasoning, Visual reasoning, and Visual understanding, and no behavioral indicators are linked to it. These claims are spread across those constructs rather than concentrated on one: some papers place NLVR2 among multi-image benchmarks, another uses it for visual reasoning, and another reports it as measuring visual understanding.

**Space of uses.** Across the papers, NLVR2 is commonly positioned as one item in a broader evaluation suite rather than as a standalone protocol. As one study notes, "we select five multi-image benchmarks" including NLVR2, while another uses it within a broader set of image-text tasks; papers do not link it to any other measurement instrument.

## Sources

**[HEMM: Holistic Evaluation of Multimodal Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b6e5dae3acb4cfdfe5928a6eff174ee-Paper-Datasets_and_Benchmarks_Track.pdf)**
> An extension of the NLVR dataset that uses pairs of real-world photographs and natural language statements to test visual reasoning.

## Relationships

### → NLVR2
- **Multi-image reasoning** (constructs) — *measured_by*
  > “Table 4 presents the the evaluation results on multi-image understanding benchmarks. The evaluation benchmarks consist of NLVR2 ...”
  - [mPLUG-Owl3: Towards Long Image-Sequence Understanding in Multi-Modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f50f282a3093d36471008b045bd478af-Paper-Conference.pdf)
- **Visual understanding** (constructs) — *measured_by*
  > We evaluate on the widely used vision-language understanding and generation benchmarks... accuracy for NLVR2... Above results show that X-MoE exhibits enhanced visual information comprehension
  - [Multi-Head Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab05dc8bf36a9f66edbff6992ec86f56-Paper-Conference.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > The experiments were conducted on four image-text tasks: VQAv2 (Goyal et al., 2017b), GQA (Hudson & Manning, 2019) for vision question-answering, NLVR2 (Suhr et al., 2019) for visual reasoning, MSCOCO (Chen et al., 2015) for image captioning
  - [RepLoRA: Reparameterizing Low-rank Adaptation via the Perspective of Mixture of Experts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/truong25a/truong25a.pdf)
