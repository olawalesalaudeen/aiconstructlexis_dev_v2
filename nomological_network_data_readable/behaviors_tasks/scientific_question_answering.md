# Scientific question answering
**Type:** Behavior  
**Referenced in:** 24 papers  
**Also known as:** Science question answering, STEM question answering, Scientific reasoning  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this behavior as answering science-domain questions, most commonly as multiple-choice items over a wide range of topics and often with reasoning over provided context or external knowledge. A smaller set of definitions broadens it to multimodal scientific questions that require understanding diagrams, charts, or other visual aids, while some papers narrow the scope to school-curriculum, elementary-school, graduate-level, or expert-level questions that call for domain-specific knowledge and logical inference.

**Variants.** Papers use several labels for closely related versions, including science question answering, scientific question answering, STEM question answering, and, in one case, scientific reasoning. The studied settings range from subject-specific questions from school curricula and climate science to simple, complex, open-book, and multi-step scientific questions; multimodal versions are a recurring variant, described as requiring figure-based or visual understanding and, in some formulations, extracting external knowledge.

**Space of elicitation and scores.** Papers link this behavior to 7 measurement instruments, all through measured_by claims. The most frequently listed are ARC-Challenge, ARC-Easy, ARC, MT-Bench, and OpenBookQA; these cover challenging and simple science questions, standardized natural science tests, multi-turn dialogues that include STEM, and open-book science questions, while the remaining instruments cover multiple-choice zero-shot generalization and complex, multi-step scientific questions.

**What it is taken as evidence of.** Rather than being linked to a single construct, papers connect it to 4 constructs, all with related claims: Causal reasoning, Domain knowledge, Long-context understanding, and Numerical ability. In that framing, scientific question answering is described as a task that "must demonstrate" these abilities, so the linked work presents it as related to several capacities at once.

## Sources

**[Decompose, Analyze and Rethink: Solving Intricate Problems with Human-like Reasoning Cycle](https://proceedings.neurips.cc/paper_files/paper/2024/file/01025a4e79355bb37a10ba39605944b5-Paper-Conference.pdf) (as "Science question answering")**
> The task of answering multiple-choice questions about a wide range of scientific topics, often requiring reasoning over provided context or external knowledge.

**[Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)**
> The task of answering questions related to scientific domains, often requiring understanding of diagrams, charts, or other visual aids in addition to text.

**[FuseChat: Knowledge Fusion of Chat Models](https://aclanthology.org/2025.emnlp-main.1096.pdf) (as "STEM question answering")**
> Answering questions related to science, technology, engineering, and mathematics.

**[KVTuner: Sensitivity-Aware Layer-Wise Mixed-Precision KV Cache Quantization for Efficient and Nearly Lossless LLM Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dd/li25dd.pdf) (as "Scientific reasoning")**
> Answering expert-level scientific questions requiring domain-specific knowledge and logical inference.

## Relationships

### Scientific question answering →
- **ARC-Challenge** (measurements) — *measured_by*
  > Comprehensive Examination: ... ARC-C (0-shot) (Clark et al., 2018), collected from standardized natural science tests (Section 5.1).
  - [Determine-Then-Ensemble: Necessity of Top-k Union for Large Language Model Ensembling](https://proceedings.iclr.cc/paper_files/paper/2025/file/fbb10d319d44f8c3b4720873e4177c65-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > ARC Easy (Clark et al., 2018) Simple science questions. (Table 2)
  - [Demystifying Small Language Models for Edge Deployment](https://aclanthology.org/2025.acl-long.718.pdf)
- **ScienceQA** (measurements) — *measured_by*
  > ScienceQA with multiple choice are used to evaluate the zero-shot generalization on scientific question answering. (Section 4.1)
  - [Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf)
- **ARC** (measurements) — *measured_by*
  > ARC (AI2 Reasoning Challenge, Clark et al., 2018) was designed to test the reasoning abilities of AI through a series of challenging science questions. (Section 1.1)
  - [metabench - A Sparse Benchmark of Reasoning and Knowledge in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ebc26584810a189ef1e4f173aba4319-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > OpenBookQA (Mihaylov et al., 2018) Open-book science questions. (Table 2)
  - [Demystifying Small Language Models for Edge Deployment](https://aclanthology.org/2025.acl-long.718.pdf)
- **SciBench** (measurements) — *measured_by*
  > SciBench (Wang et al., 2024a) is a benchmark suite of scientific reasoning tasks, where the objective is to answer complex, multi-step scientific questions that require integrating knowledge, reasoning over evidence, and applying scientific principles. (Section 4.4. SciBench)
  - [Fleet of Agents: Coordinated Problem Solving with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/klein25a/klein25a.pdf)

### Associated with
- **Domain knowledge** (constructs)
  > Task 1: ScienceQ&A Generation (LLMgen) Generates a synthesized summary response A to a research question Q using abstracts from the top N relevant papers. It must demonstrate (1) domain knowledge, (2) numerical proficiency, (3) long-range context understanding, and (4) cause-and-effect reasoning (Wadden et al., 2020). (Section 2)
  - [YESciEval: Robust LLM-as-a-Judge for Scientific Question Answering](https://aclanthology.org/2025.acl-long.675.pdf)
- **Numerical ability** (constructs)
  > Task 1: ScienceQ&A Generation (LLMgen) Generates a synthesized summary response A to a research question Q using abstracts from the top N relevant papers. It must demonstrate (1) domain knowledge, (2) numerical proficiency, (3) long-range context understanding, and (4) cause-and-effect reasoning (Wadden et al., 2020). (Section 2)
  - [YESciEval: Robust LLM-as-a-Judge for Scientific Question Answering](https://aclanthology.org/2025.acl-long.675.pdf)
- **Long-context understanding** (constructs)
  > Task 1: ScienceQ&A Generation (LLMgen) Generates a synthesized summary response A to a research question Q using abstracts from the top N relevant papers. It must demonstrate (1) domain knowledge, (2) numerical proficiency, (3) long-range context understanding, and (4) cause-and-effect reasoning (Wadden et al., 2020). (Section 2)
  - [YESciEval: Robust LLM-as-a-Judge for Scientific Question Answering](https://aclanthology.org/2025.acl-long.675.pdf)
- **Causal reasoning** (constructs)
  > Task 1: ScienceQ&A Generation (LLMgen) Generates a synthesized summary response A to a research question Q using abstracts from the top N relevant papers. It must demonstrate (1) domain knowledge, (2) numerical proficiency, (3) long-range context understanding, and (4) cause-and-effect reasoning (Wadden et al., 2020). (Section 2)
  - [YESciEval: Robust LLM-as-a-Judge for Scientific Question Answering](https://aclanthology.org/2025.acl-long.675.pdf)
