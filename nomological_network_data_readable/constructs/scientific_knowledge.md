# Scientific knowledge
**Type:** Construct  
**Referenced in:** 7 papers  
**Also known as:** Science-related abilities, Scientific prior knowledge  

## State of the Field

**Definition agreement:** Consensus. Most papers define scientific knowledge as a model's possession and use of domain-specific scientific knowledge, usually framed as understanding or drawing on that knowledge to answer science questions. A few emphasize specialized encoded facts, breadth of factual knowledge, or use in proposing equations or hypotheses, but these are variations in emphasis and task setting rather than different phenomena.

**Space of definitions.** Across the surveyed work, the prevailing usage treats scientific knowledge as a model capacity or breadth of scientific, domain-specific, or factual knowledge that supports understanding and answering science-oriented questions. Most definitions stay close to this question-answering framing, describing either understanding and applying knowledge from scientific domains, answering questions across scientific domains, or having specialized information needed for expert-level questions in an area such as organismal biology. A smaller line of work uses a narrower framing of scientific prior knowledge, focusing on whether an LLM can draw on domain knowledge when proposing plausible equations or hypotheses.

**Space of facets.** Papers do not present a detailed internal taxonomy, but the naming varies: some use science-related abilities for cross-domain science question answering, while another uses scientific prior knowledge for equation or hypothesis proposal. One paper organizes evaluation by scientific subjects, specifically biology, chemistry, and health, and another narrows the construct to organismal biology. Scientific knowledge is also positioned alongside natural language understanding and reasoning as a separate core capability, and one paper describes it as the foundation for scientific literature understanding.

**Space of measurement.** Operationalization is narrow and explicit: papers link the construct to 3 measurement instruments and 1 behavioral indicator. SciQ is used most often, followed by MMLU-Pro, which is applied to biology, chemistry, and health subjects, and ScienceQA; the linked behavioral indicator is scientific problem solving. All three instruments are used as evaluation tasks for science questions or scientific subjects, so the operationalizations largely follow the dominant question-answering and subject-knowledge definitions.

**Links.** Beyond measurement, only a few direct links are claimed. In SciCode: A Research Coding Benchmark Curated by Scientists, a paper claims a causal relationship from scientific knowledge to scientific problem solving, citing that models improve when background is provided as evidence of lacking knowledge and reasoning capability in natural science fields. In LLM-SR: Scientific Equation Discovery via Programming with Large Language Models, another paper claims a causal relationship from scientific prior knowledge to generalization, stating that better generalizability to unseen data is likely due to integrating that prior knowledge; no correlational or generic related links are reported.

## Sources

**[LLaVA-MoD: Making LLaVA Tiny via MoE-Knowledge Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)**
> The model's capacity to understand and apply knowledge from scientific domains to answer questions.

**[Weak to Strong Generalization for Large Language Models with Multi-capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ebcb8f051d0c178474619bbfb32b340-Paper-Conference.pdf) (as "Science-related abilities")**
> The capability to understand and answer questions related to scientific knowledge across various domains.

**[LLM-SR: Scientific Equation Discovery via Programming with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/28df8e730c054c5331855fd4d5403ba9-Paper-Conference.pdf) (as "Scientific prior knowledge")**
> The extent to which an LLM can draw on domain-specific scientific knowledge when proposing plausible equations or hypotheses.

## Relationships

### Scientific knowledge →
- **SciQ** (measurements) — *measured_by*
  > SciQ (Welbl et al., 2017) for science-related abilities. (Section 3.1)
  - [Weak to Strong Generalization for Large Language Models with Multi-capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ebcb8f051d0c178474619bbfb32b340-Paper-Conference.pdf)
- **Scientific problem solving** (behaviors tasks) — *causes*
  > all models substantially improve performance when background is provided, indicating their lack of knowledge and reasoning capability in these natural science fields. (Section 2.4)
  - [SciCode: A Research Coding Benchmark Curated by Scientists](https://proceedings.neurips.cc/paper_files/paper/2024/file/36850592258c8c41cecdaa3dea5ff7de-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Generalization** (constructs) — *causes*
  > This alignment demonstrates the better generalizability of equations discovered by LLM-SR to unseen data, likely due to the integration of scientific prior knowledge in the equation discovery process.
  - [LLM-SR: Scientific Equation Discovery via Programming with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/28df8e730c054c5331855fd4d5403ba9-Paper-Conference.pdf)
- **MMLU-Pro** (measurements) — *measured_by*
  > To assess their scientific knowledge, which serves as the foundation for scientific literature understanding, we evaluate the base models on scientific subjects – biology, chemistry, and health in MMLU-Pro (Wang et al., 2024) and MaScQA (Zaki et al., 2023) (Section 3.1.1)
  - [SciLitLLM: How to Adapt LLMs for Scientific Literature Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/8cb240de90aa20207db944c6c88a7cc0-Paper-Conference.pdf)
- **ScienceQA** (measurements) — *measured_by*
  > ScienceQA (Lu et al., 2022b) is utilized to measure scientific knowledge. (Section 4.1)
  - [LLaVA-MoD: Making LLaVA Tiny via MoE-Knowledge Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/1a2131ebe25bd55e4fc734126ea583ed-Paper-Conference.pdf)
